/**
 * latexToOmml.ts — Chuyển đổi LaTeX → OMML (Office Math Markup Language)
 * Word hiển thị OMML như MathType: native, chỉnh sửa được, in chuẩn.
 */

// ── Escape XML ──
const X = (s: string) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

// ── OMML text run ──
const R  = (t: string) => `<m:r><m:t>${X(t)}</m:t></m:r>`;
const Ri = (t: string) => `<m:r><m:rPr><m:sty m:val="i"/></m:rPr><m:t>${X(t)}</m:t></m:r>`;
const Rp = (t: string) => `<m:r><m:rPr><m:sty m:val="p"/></m:rPr><m:t>${X(t)}</m:t></m:r>`;

// ── Ký hiệu LaTeX → Unicode ──
const SYM: Record<string,string> = {
  leq:'≤',le:'≤',geq:'≥',ge:'≥',neq:'≠',ne:'≠',approx:'≈',equiv:'≡',sim:'∼',
  pm:'±',mp:'∓',times:'×',cdot:'⋅',div:'÷',ast:'∗',circ:'∘',
  'in':'∈',notin:'∉',subset:'⊂',supset:'⊃',subseteq:'⊆',supseteq:'⊇',
  cup:'∪',cap:'∩',emptyset:'∅',varnothing:'∅',setminus:'∖',
  forall:'∀',exists:'∃',neg:'¬',land:'∧',lor:'∨',
  Rightarrow:'⇒',Leftarrow:'⇐',Leftrightarrow:'⇔',
  rightarrow:'→',leftarrow:'←',leftrightarrow:'↔',to:'→',mapsto:'↦',
  infty:'∞',partial:'∂',nabla:'∇',triangle:'△',angle:'∠',
  alpha:'α',beta:'β',gamma:'γ',delta:'δ',epsilon:'ε',varepsilon:'ε',
  zeta:'ζ',eta:'η',theta:'θ',vartheta:'ϑ',iota:'ι',kappa:'κ',
  lambda:'λ',mu:'μ',nu:'ν',xi:'ξ',pi:'π',rho:'ρ',sigma:'σ',
  tau:'τ',upsilon:'υ',phi:'φ',varphi:'ϕ',chi:'χ',psi:'ψ',omega:'ω',
  Gamma:'Γ',Delta:'Δ',Theta:'Θ',Lambda:'Λ',Xi:'Ξ',Pi:'Π',
  Sigma:'Σ',Phi:'Φ',Psi:'Ψ',Omega:'Ω',
  ldots:'…',cdots:'⋯',vdots:'⋮',ddots:'⋱',
  ell:'ℓ',hbar:'ℏ',Re:'ℜ',Im:'ℑ',wp:'℘',aleph:'ℵ',
};

const BB: Record<string,string> = {R:'ℝ',N:'ℕ',Z:'ℤ',Q:'ℚ',C:'ℂ',P:'ℙ'};
const FUNCS = new Set('sin,cos,tan,cot,sec,csc,arcsin,arccos,arctan,log,ln,lg,exp,lim,max,min,sup,inf,det,gcd,dim,ker,Pr'.split(','));

// ── Parser ──
class P {
  s: string; i: number;
  constructor(s: string) { this.s = s; this.i = 0; }

  ch() { return this.i < this.s.length ? this.s[this.i] : ''; }
  skip() { while (this.i < this.s.length && ' \t\n\r'.includes(this.s[this.i])) this.i++; }

  expr(stop = ''): string {
    let o = '';
    while (this.i < this.s.length) {
      if (stop && this.ch() === stop) { this.i++; return o; }
      if (this.ch() === '}') return o;
      o += this.atomSub();
    }
    return o;
  }

  atomSub(): string {
    let base = this.atom();
    this.skip();
    let sup = '', sub = '', hs = false, hb = false;
    while (this.ch() === '^' || this.ch() === '_') {
      if (this.ch() === '^') { this.i++; hs = true; sup = this.aog(); }
      else { this.i++; hb = true; sub = this.aog(); }
      this.skip();
    }
    if (hs && hb) return `<m:sSubSup><m:sSubSupPr><m:ctrlPr/></m:sSubSupPr><m:e>${base}</m:e><m:sub>${sub}</m:sub><m:sup>${sup}</m:sup></m:sSubSup>`;
    if (hs) return `<m:sSup><m:sSupPr><m:ctrlPr/></m:sSupPr><m:e>${base}</m:e><m:sup>${sup}</m:sup></m:sSup>`;
    if (hb) return `<m:sSub><m:sSubPr><m:ctrlPr/></m:sSubPr><m:e>${base}</m:e><m:sub>${sub}</m:sub></m:sSub>`;
    return base;
  }

  /** Atom hoặc group */
  aog(): string { this.skip(); return this.ch() === '{' ? this.grp() : this.atom(); }

  /** Group {...} */
  grp(): string { this.i++; return this.expr('}'); }

  /** Đọc nội dung brace → string */
  braceStr(): string {
    this.skip();
    if (this.ch() !== '{') return '';
    this.i++;
    let d = 1, start = this.i;
    while (this.i < this.s.length && d > 0) { if (this.s[this.i]==='{') d++; if (this.s[this.i]==='}') d--; this.i++; }
    return this.s.substring(start, this.i - 1);
  }

  atom(): string {
    this.skip();
    if (this.i >= this.s.length) return '';
    const c = this.ch();

    // Group
    if (c === '{') return this.grp();

    // Command
    if (c === '\\') return this.cmd();

    // Number sequence
    if (/\d/.test(c)) {
      let n = '';
      while (this.i < this.s.length && /[\d{,}.]/.test(this.s[this.i])) {
        if (this.s[this.i] === '{' || this.s[this.i] === '}') { this.i++; continue; }
        n += this.s[this.i++];
      }
      return R(n);
    }

    // Letter → italic variable
    if (/[a-zA-Z]/.test(c)) { this.i++; return Ri(c); }

    // Operators
    this.i++;
    return R(c);
  }

  cmd(): string {
    this.i++; // skip '\'
    // Single non-alpha char commands: \{, \}, \,, \;, \!, \\
    if (this.i < this.s.length && !/[a-zA-Z]/.test(this.s[this.i])) {
      const c = this.s[this.i++];
      if (c === '{') return R('{');
      if (c === '}') return R('}');
      if (c === '\\') return R(' '); // line break → space
      if (c === ',') return R(' ');  // thin space
      if (c === ';') return R(' ');
      if (c === '!') return '';
      if (c === ' ') return R(' ');
      return R(c);
    }

    // Read command name
    let nm = '';
    while (this.i < this.s.length && /[a-zA-Z]/.test(this.s[this.i])) nm += this.s[this.i++];

    // ── Fraction ──
    if (nm === 'frac' || nm === 'dfrac' || nm === 'tfrac' || nm === 'cfrac') {
      const num = this.aog(), den = this.aog();
      return `<m:f><m:fPr><m:ctrlPr/></m:fPr><m:num>${num}</m:num><m:den>${den}</m:den></m:f>`;
    }

    // ── Square root ──
    if (nm === 'sqrt') {
      this.skip();
      if (this.ch() === '[') {
        this.i++;
        const deg = this.expr(']'), body = this.aog();
        return `<m:rad><m:radPr><m:ctrlPr/></m:radPr><m:deg>${deg}</m:deg><m:e>${body}</m:e></m:rad>`;
      }
      const body = this.aog();
      return `<m:rad><m:radPr><m:degHide m:val="1"/><m:ctrlPr/></m:radPr><m:deg/><m:e>${body}</m:e></m:rad>`;
    }

    // ── Accents ──
    if (nm === 'vec') { const b = this.aog(); return `<m:acc><m:accPr><m:chr m:val="⃗"/><m:ctrlPr/></m:accPr><m:e>${b}</m:e></m:acc>`; }
    if (nm === 'overline' || nm === 'bar') { const b = this.aog(); return `<m:acc><m:accPr><m:chr m:val="̅"/><m:ctrlPr/></m:accPr><m:e>${b}</m:e></m:acc>`; }
    if (nm === 'hat') { const b = this.aog(); return `<m:acc><m:accPr><m:chr m:val="̂"/><m:ctrlPr/></m:accPr><m:e>${b}</m:e></m:acc>`; }
    if (nm === 'tilde') { const b = this.aog(); return `<m:acc><m:accPr><m:chr m:val="̃"/><m:ctrlPr/></m:accPr><m:e>${b}</m:e></m:acc>`; }
    if (nm === 'dot') { const b = this.aog(); return `<m:acc><m:accPr><m:chr m:val="̇"/><m:ctrlPr/></m:accPr><m:e>${b}</m:e></m:acc>`; }
    if (nm === 'ddot') { const b = this.aog(); return `<m:acc><m:accPr><m:chr m:val="̈"/><m:ctrlPr/></m:accPr><m:e>${b}</m:e></m:acc>`; }

    // ── N-ary (integral, sum, prod) ──
    if (nm === 'int' || nm === 'oint' || nm === 'iint' || nm === 'iiint') {
      const chr = nm === 'oint' ? '∮' : nm === 'iint' ? '∬' : nm === 'iiint' ? '∭' : '∫';
      return this.nary(chr, 'subSup');
    }
    if (nm === 'sum') return this.nary('∑', 'undOvr');
    if (nm === 'prod') return this.nary('∏', 'undOvr');
    if (nm === 'lim') {
      // \lim_{x \to a}
      this.skip();
      let sub = '';
      if (this.ch() === '_') { this.i++; sub = this.aog(); }
      return `<m:func><m:funcPr><m:ctrlPr/></m:funcPr><m:fName><m:limLow><m:limLowPr><m:ctrlPr/></m:limLowPr><m:e>${Rp('lim')}</m:e><m:lim>${sub}</m:lim></m:limLow></m:fName><m:e>${R('')}</m:e></m:func>`;
    }

    // ── Delimiters ──
    if (nm === 'left') return this.leftRight();

    // ── Cases ──
    if (nm === 'begin') {
      const env = this.braceStr();
      if (env === 'cases') return this.cases();
      if (env === 'pmatrix' || env === 'bmatrix' || env === 'vmatrix') return this.matrix(env);
      return '';
    }
    if (nm === 'end') { this.braceStr(); return ''; }

    // ── Text modes ──
    if (nm === 'text' || nm === 'textrm' || nm === 'textit' || nm === 'mbox') {
      const t = this.braceStr();
      return Rp(t);
    }
    if (nm === 'mathrm' || nm === 'operatorname') {
      const t = this.braceStr();
      return Rp(t);
    }
    if (nm === 'mathbb') {
      const t = this.braceStr();
      return R(BB[t] || t);
    }
    if (nm === 'mathbf' || nm === 'boldsymbol') {
      const inner = this.braceStr();
      return `<m:r><m:rPr><m:sty m:val="bi"/></m:rPr><m:t>${X(inner)}</m:t></m:r>`;
    }

    // ── Function names ──
    if (FUNCS.has(nm)) return Rp(nm);

    // ── Symbols ──
    if (SYM[nm]) return R(SYM[nm]);

    // ── Unknown → plain text ──
    return Rp(nm);
  }

  /** Parse \left...\right */
  leftRight(): string {
    let open = this.readDelim();
    let inner = '';
    while (this.i < this.s.length) {
      if (this.s[this.i] === '\\') {
        const ahead = this.s.substring(this.i + 1, this.i + 6);
        if (ahead.startsWith('right')) {
          this.i += 6;
          const close = this.readDelim();
          return `<m:d><m:dPr><m:begChr m:val="${X(open)}"/><m:endChr m:val="${X(close)}"/><m:ctrlPr/></m:dPr><m:e>${inner}</m:e></m:d>`;
        }
      }
      inner += this.atomSub();
    }
    return `<m:d><m:dPr><m:begChr m:val="${X(open)}"/><m:ctrlPr/></m:dPr><m:e>${inner}</m:e></m:d>`;
  }

  readDelim(): string {
    this.skip();
    if (this.ch() === '\\') {
      this.i++;
      const c = this.s[this.i++] || '';
      if (c === '{') return '{';
      if (c === '}') return '}';
      if (c === '|') return '‖';
      if (c === '.') return '';
      return c;
    }
    const c = this.s[this.i++] || '';
    if (c === '.') return '';
    return c;
  }

  /** N-ary operator */
  nary(chr: string, limLoc: string): string {
    this.skip();
    let sub = '', sup = '';
    while (this.i < this.s.length && (this.ch() === '_' || this.ch() === '^' || this.ch() === ' ')) {
      if (this.ch() === ' ') { this.i++; continue; }
      if (this.ch() === '_') { this.i++; sub = this.aog(); }
      else if (this.ch() === '^') { this.i++; sup = this.aog(); }
    }
    return `<m:nary><m:naryPr><m:chr m:val="${chr}"/><m:limLoc m:val="${limLoc}"/><m:ctrlPr/></m:naryPr><m:sub>${sub}</m:sub><m:sup>${sup}</m:sup><m:e>${R('')}</m:e></m:nary>`;
  }

  /** Parse \begin{cases}...\end{cases} */
  cases(): string {
    const rows: string[] = [];
    let currentRow = '';
    while (this.i < this.s.length) {
      if (this.s[this.i] === '\\' && this.s.substring(this.i + 1, this.i + 4) === 'end') break;
      if (this.s[this.i] === '\\' && this.s[this.i + 1] === '\\') {
        this.i += 2;
        rows.push(currentRow);
        currentRow = '';
        continue;
      }
      currentRow += this.atomSub();
    }
    if (currentRow) rows.push(currentRow);
    // Skip \end{cases}
    if (this.s.substring(this.i, this.i + 4) === '\\end') { this.i += 4; this.braceStr(); }
    const eqs = rows.map(r => `<m:e>${r}</m:e>`).join('');
    return `<m:d><m:dPr><m:begChr m:val="{"/><m:endChr m:val=""/><m:ctrlPr/></m:dPr>${eqs}</m:d>`;
  }

  /** Parse matrix environments */
  matrix(env: string): string {
    const open = env === 'pmatrix' ? '(' : env === 'bmatrix' ? '[' : '|';
    const close = env === 'pmatrix' ? ')' : env === 'bmatrix' ? ']' : '|';
    const rows: string[][] = [];
    let cells: string[] = [];
    let cell = '';
    while (this.i < this.s.length) {
      if (this.s[this.i] === '\\' && this.s.substring(this.i + 1, this.i + 4) === 'end') break;
      if (this.s[this.i] === '&') { cells.push(cell); cell = ''; this.i++; continue; }
      if (this.s[this.i] === '\\' && this.s[this.i + 1] === '\\') {
        cells.push(cell); rows.push(cells); cells = []; cell = ''; this.i += 2; continue;
      }
      cell += this.atomSub();
    }
    if (cell) cells.push(cell);
    if (cells.length) rows.push(cells);
    if (this.s.substring(this.i, this.i + 4) === '\\end') { this.i += 4; this.braceStr(); }
    const mRows = rows.map(r => `<m:mr>${r.map(c => `<m:e>${c}</m:e>`).join('')}</m:mr>`).join('');
    const mat = `<m:m><m:mPr><m:mcs><m:mc><m:mcPr><m:count m:val="${rows[0]?.length || 1}"/><m:mcJc m:val="center"/></m:mcPr></m:mc></m:mcs><m:ctrlPr/></m:mPr>${mRows}</m:m>`;
    return `<m:d><m:dPr><m:begChr m:val="${open}"/><m:endChr m:val="${close}"/><m:ctrlPr/></m:dPr><m:e>${mat}</m:e></m:d>`;
  }
}

// ── Exported function ──
export function latexToOmml(latex: string): string {
  try {
    const p = new P(latex.trim());
    const inner = p.expr();
    return `<m:oMath>${inner}</m:oMath>`;
  } catch {
    return `<m:oMath>${R(latex)}</m:oMath>`;
  }
}
