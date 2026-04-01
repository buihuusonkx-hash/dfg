/**
 * svgShapes.ts — Hình minh họa SVG inline cho câu hỏi Toán
 * Trả về chuỗi SVG có thể nhúng trực tiếp vào <img src="data:image/svg+xml,..."/>
 * Bao gồm: đồ thị hàm số, bảng biến thiên, hình học không gian
 */

export function toDataUri(svg: string): string {
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// ─────────────────────────────────────────────────────────
// BẢNG BIẾN THIÊN SVG
// ─────────────────────────────────────────────────────────

/** Bảng biến thiên hàm bậc 3: y = x³ − 3x (cực đại x=−1, cực tiểu x=1) */
export function bbtCubicSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="340" height="130" viewBox="0 0 340 130">
  <style>text{font-family:'Times New Roman',serif;font-size:13px;fill:#111} .arrow{fill:#111}</style>
  <!-- Khung ngoài -->
  <rect x="5" y="5" width="330" height="120" fill="#fafafa" stroke="#333" stroke-width="1.2" rx="3"/>
  <!-- Dòng 1: x -->
  <line x1="5" y1="30" x2="335" y2="30" stroke="#333" stroke-width="1"/>
  <line x1="60" y1="5" x2="60" y2="125" stroke="#333" stroke-width="1"/>
  <text x="20" y="22" font-weight="bold">x</text>
  <text x="70" y="22">−∞</text>
  <text x="135" y="22">−1</text>
  <text x="218" y="22">1</text>
  <text x="295" y="22">+∞</text>
  <!-- Dòng 2: y' -->
  <line x1="5" y1="60" x2="335" y2="60" stroke="#333" stroke-width="1"/>
  <text x="20" y="52" font-weight="bold">y'</text>
  <text x="90" y="52" fill="#16a34a">+</text>
  <text x="140" y="52">0</text>
  <text x="183" y="52" fill="#dc2626">−</text>
  <text x="222" y="52">0</text>
  <text x="263" y="52" fill="#16a34a">+</text>
  <!-- Dòng 3: y (mũi tên biến thiên) -->
  <text x="20" y="100" font-weight="bold">y</text>
  <!-- Tăng từ -∞ → cực đại (2) -->
  <line x1="75" y1="115" x2="148" y2="68" stroke="#1a73e8" stroke-width="1.8"/>
  <polygon points="148,65 151,73 144,71" fill="#1a73e8"/>
  <!-- Giá trị cực đại y=2 -->
  <text x="148" y="66" fill="#dc2626" font-size="11">2</text>
  <!-- Giảm từ cực đại → cực tiểu (−2) -->
  <line x1="152" y1="68" x2="218" y2="112" stroke="#1a73e8" stroke-width="1.8"/>
  <polygon points="218,115 215,107 222,109" fill="#1a73e8"/>
  <!-- Giá trị cực tiểu y=−2 -->
  <text x="218" y="125" fill="#dc2626" font-size="11">−2</text>
  <!-- Tăng từ cực tiểu → +∞ -->
  <line x1="222" y1="112" x2="305" y2="70" stroke="#1a73e8" stroke-width="1.8"/>
  <polygon points="305,67 308,75 301,73" fill="#1a73e8"/>
</svg>`;
  return toDataUri(svg);
}

/** Bảng biến thiên hàm phân thức y = (x+1)/(x−2) */
export function bbtRationalSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="130" viewBox="0 0 320 130">
  <style>text{font-family:'Times New Roman',serif;font-size:13px;fill:#111}</style>
  <rect x="5" y="5" width="310" height="120" fill="#fafafa" stroke="#333" stroke-width="1.2" rx="3"/>
  <line x1="5" y1="30" x2="315" y2="30" stroke="#333" stroke-width="1"/>
  <line x1="55" y1="5" x2="55" y2="125" stroke="#333" stroke-width="1"/>
  <line x1="180" y1="5" x2="180" y2="125" stroke="#333" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="12" y="22" font-weight="bold">x</text>
  <text x="62" y="22">−∞</text>
  <text x="168" y="22">2</text>
  <text x="255" y="22">+∞</text>
  <!-- y' -->
  <line x1="5" y1="60" x2="315" y2="60" stroke="#333" stroke-width="1"/>
  <text x="12" y="52" font-weight="bold">y'</text>
  <text x="112" y="52" fill="#dc2626">−</text>
  <text x="240" y="52" fill="#dc2626">−</text>
  <!-- y -->
  <text x="12" y="100" font-weight="bold">y</text>
  <!-- Giảm từ 1 → −∞ trước x=2 -->
  <text x="63" y="75" fill="#dc2626" font-size="11">1</text>
  <line x1="75" y1="72" x2="165" y2="115" stroke="#1a73e8" stroke-width="1.8"/>
  <polygon points="165,118 162,110 169,111" fill="#1a73e8"/>
  <text x="159" y="125" fill="#555" font-size="11">−∞</text>
  <!-- Tiệm cận -->
  <text x="184" y="20" fill="#888" font-size="9">TCĐ x=2</text>
  <!-- Giảm từ +∞ → 1 sau x=2 -->
  <text x="185" y="75" fill="#555" font-size="11">+∞</text>
  <line x1="192" y1="72" x2="290" y2="108" stroke="#1a73e8" stroke-width="1.8"/>
  <polygon points="290,111 287,103 294,104" fill="#1a73e8"/>
  <text x="270" y="120" fill="#dc2626" font-size="11">1</text>
</svg>`;
  return toDataUri(svg);
}

/** Bảng biến thiên hàm bậc 4 trùng phương y = x⁴ − 2x² + 3 */
export function bbtQuarticSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="130" viewBox="0 0 360 130">
  <style>text{font-family:'Times New Roman',serif;font-size:13px;fill:#111}</style>
  <rect x="5" y="5" width="350" height="120" fill="#fafafa" stroke="#333" stroke-width="1.2" rx="3"/>
  <line x1="5" y1="30" x2="355" y2="30" stroke="#333" stroke-width="1"/>
  <line x1="55" y1="5" x2="55" y2="125" stroke="#333" stroke-width="1"/>
  <text x="12" y="22" font-weight="bold">x</text>
  <text x="62" y="22">−∞</text>
  <text x="130" y="22">−1</text>
  <text x="200" y="22">0</text>
  <text x="268" y="22">1</text>
  <text x="310" y="22">+∞</text>
  <line x1="5" y1="60" x2="355" y2="60" stroke="#333" stroke-width="1"/>
  <text x="12" y="52" font-weight="bold">y'</text>
  <text x="90" y="52" fill="#dc2626">−</text>
  <text x="138" y="52">0</text>
  <text x="173" y="52" fill="#16a34a">+</text>
  <text x="208" y="52">0</text>
  <text x="237" y="52" fill="#dc2626">−</text>
  <text x="276" y="52">0</text>
  <text x="310" y="52" fill="#16a34a">+</text>
  <text x="12" y="100" font-weight="bold">y</text>
  <!-- Giảm → cực tiểu (2) tại x=−1 -->
  <line x1="65" y1="68" x2="138" y2="112" stroke="#1a73e8" stroke-width="1.8"/>
  <polygon points="138,115 135,107 142,108" fill="#1a73e8"/>
  <text x="130" y="124" fill="#dc2626" font-size="11">2</text>
  <!-- Tăng → cực đại (3) tại x=0 -->
  <line x1="142" y1="112" x2="208" y2="75" stroke="#1a73e8" stroke-width="1.8"/>
  <polygon points="208,72 211,80 204,78" fill="#1a73e8"/>
  <text x="210" y="73" fill="#dc2626" font-size="11">3</text>
  <!-- Giảm → cực tiểu (2) tại x=1 -->
  <line x1="212" y1="75" x2="275" y2="112" stroke="#1a73e8" stroke-width="1.8"/>
  <polygon points="275,115 272,107 279,108" fill="#1a73e8"/>
  <text x="271" y="124" fill="#dc2626" font-size="11">2</text>
  <!-- Tăng → +∞ -->
  <line x1="279" y1="112" x2="335" y2="72" stroke="#1a73e8" stroke-width="1.8"/>
  <polygon points="335,69 338,77 331,75" fill="#1a73e8"/>
</svg>`;
  return toDataUri(svg);
}

// ─────────────────────────────────────────────────────────
// ĐỒ THỊ HÀM SỐ SVG
// ─────────────────────────────────────────────────────────

/** Đồ thị hàm số bậc 3 cực đại bên trái y = x³−3x+2 */
export function cubicLeftMaxSVG(): string {
  // Tính điểm: cực đại tại x=−1 (y=4), cực tiểu tại x=1 (y=0)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="200" viewBox="-110 -110 220 200">
  <style>text{font-family:'Times New Roman',serif;font-size:11px;fill:#111}</style>
  <!-- Trục tọa độ -->
  <line x1="-100" y1="0" x2="105" y2="0" stroke="#333" stroke-width="1.2"/>
  <line x1="0" y1="90" x2="0" y2="-100" stroke="#333" stroke-width="1.2"/>
  <polygon points="105,-3 112,0 105,3" fill="#333"/>
  <polygon points="-3,-100 0,-107 3,-100" fill="#333"/>
  <text x="108" y="4">x</text>
  <text x="4" y="-101">y</text>
  <text x="3" y="12" font-size="10">O</text>
  <!-- Đồ thị y = x³−3x+2 (pixels: scale x×25, y×−18) -->
  <!-- Điểm cực đại: x=−1→px=−25, y=4→py=−72 -->
  <!-- Điểm cực tiểu: x=1→px=25, y=0→py=0 -->
  <path d="M -90,75 C -70,40 -55,-60 -25,-72 C 0,-80 15,-20 25,0 C 40,25 65,65 90,-60"
        fill="none" stroke="#1a73e8" stroke-width="2"/>
  <!-- Điểm cực trị -->
  <circle cx="-25" cy="-72" r="3" fill="#e53935"/>
  <text x="-50" y="-75" fill="#e53935" font-size="10">CĐ(−1;4)</text>
  <circle cx="25" cy="0" r="3" fill="#e53935"/>
  <text x="28" y="14" fill="#e53935" font-size="10">CT(1;0)</text>
  <!-- Nhãn trục -->
  <text x="-28" y="12" font-size="9">−1</text>
  <text x="22" y="12" font-size="9">1</text>
  <text x="-10" y="-70" font-size="9">4</text>
</svg>`;
  return toDataUri(svg);
}

/** Đồ thị hàm số bậc 3 có cực đại âm/cực tiểu âm hơn */
export function cubicNegSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="200" viewBox="-110 -110 220 200">
  <style>text{font-family:'Times New Roman',serif;font-size:11px;fill:#111}</style>
  <line x1="-100" y1="0" x2="105" y2="0" stroke="#333" stroke-width="1.2"/>
  <line x1="0" y1="90" x2="0" y2="-100" stroke="#333" stroke-width="1.2"/>
  <polygon points="105,-3 112,0 105,3" fill="#333"/>
  <polygon points="-3,-100 0,-107 3,-100" fill="#333"/>
  <text x="108" y="4">x</text>
  <text x="4" y="-101">y</text>
  <text x="3" y="12" font-size="10">O</text>
  <!-- y = −x³+3x (cực đại x=1 y=2, cực tiểu x=−1 y=−2) -->
  <path d="M -90,-65 C -70,-30 -40,35 -25,36 C -10,36 10,-35 25,-36 C 40,-37 70,30 90,65"
        fill="none" stroke="#1a73e8" stroke-width="2"/>
  <circle cx="-25" cy="36" r="3" fill="#e53935"/>
  <text x="-55" y="44" fill="#e53935" font-size="10">CT(−1;−2)</text>
  <circle cx="25" cy="-36" r="3" fill="#e53935"/>
  <text x="28" y="-30" fill="#e53935" font-size="10">CĐ(1;2)</text>
  <text x="-28" y="12" font-size="9">−1</text>
  <text x="22" y="12" font-size="9">1</text>
</svg>`;
  return toDataUri(svg);
}

/** Đồ thị hàm phân thức y = (x−1)/(x+2) — hyperbol */
export function rationalGraphSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="200" viewBox="-110 -110 220 200">
  <style>text{font-family:'Times New Roman',serif;font-size:11px;fill:#111}</style>
  <line x1="-100" y1="0" x2="105" y2="0" stroke="#333" stroke-width="1.2"/>
  <line x1="0" y1="90" x2="0" y2="-100" stroke="#333" stroke-width="1.2"/>
  <polygon points="105,-3 112,0 105,3" fill="#333"/>
  <polygon points="-3,-100 0,-107 3,-100" fill="#333"/>
  <text x="108" y="4">x</text>
  <text x="4" y="-101">y</text>
  <text x="3" y="12" font-size="10">O</text>
  <!-- Tiệm cận đứng x=−2 -->
  <line x1="-50" y1="90" x2="-50" y2="-100" stroke="#f97316" stroke-width="1" stroke-dasharray="5,3"/>
  <text x="-48" y="-95" fill="#f97316" font-size="9">x=−2</text>
  <!-- Tiệm cận ngang y=1 -->
  <line x1="-100" y1="-20" x2="105" y2="-20" stroke="#f97316" stroke-width="1" stroke-dasharray="5,3"/>
  <text x="68" y="-22" fill="#f97316" font-size="9">y=1</text>
  <!-- Nhánh trái (x < −2): từ y=1⁺ giảm về −∞ -->
  <path d="M -100,-22 C -90,-24 -75,-30 -65,-55 C -60,-80 -57,-95 -55,-100"
        fill="none" stroke="#1a73e8" stroke-width="2"/>
  <!-- Nhánh phải (x > −2): từ +∞ giảm về y=1 -->
  <path d="M -45,90 C -43,60 -38,30 -20,5 C 0,-12 40,-18 100,-20"
        fill="none" stroke="#1a73e8" stroke-width="2"/>
  <!-- Giao Ox khi y=0: (x−1)/(x+2)=0 → x=1 -->
  <circle cx="25" cy="0" r="3" fill="#1a73e8"/>
  <text x="28" y="-5" font-size="9">1</text>
  <!-- Giao Oy khi x=0: y=−1/2 -->
  <circle cx="0" cy="10" r="3" fill="#1a73e8"/>
  <text x="4" y="22" font-size="9">−½</text>
</svg>`;
  return toDataUri(svg);
}

/** Đồ thị hàm mũ y = aˣ (a > 1 tăng, a < 1 giảm) */
export function expGraphSVG(increasing = true): string {
  const pathD = increasing
    ? `M -90,85 C -60,75 -30,50 0,0 C 20,-35 50,-70 90,-95`
    : `M -90,-95 C -60,-70 -30,-35 0,0 C 20,35 50,75 90,85`;
  const label = increasing ? 'y = aˣ (a>1)' : 'y = aˣ (0<a<1)';
  const pointY = increasing ? 0 : 0; // cả hai đều qua (0,1)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="200" viewBox="-110 -110 220 200">
  <style>text{font-family:'Times New Roman',serif;font-size:11px;fill:#111}</style>
  <line x1="-100" y1="0" x2="105" y2="0" stroke="#333" stroke-width="1.2"/>
  <line x1="0" y1="90" x2="0" y2="-100" stroke="#333" stroke-width="1.2"/>
  <polygon points="105,-3 112,0 105,3" fill="#333"/>
  <polygon points="-3,-100 0,-107 3,-100" fill="#333"/>
  <text x="108" y="4">x</text><text x="4" y="-101">y</text>
  <text x="3" y="12" font-size="10">O</text>
  <!-- Tiệm cận ngang y=0 đã là Ox -->
  <path d="${pathD}" fill="none" stroke="#1a73e8" stroke-width="2"/>
  <!-- Điểm (0,1): y=1 tương ứng py=−20 -->
  <circle cx="0" cy="-20" r="3" fill="#e53935"/>
  <text x="4" y="-22" fill="#e53935" font-size="10">1</text>
  <text x="-100" y="-95" fill="#555" font-size="10">${label}</text>
</svg>`;
  return toDataUri(svg);
}

/** Đồ thị hàm logarit y = logₐx */
export function logGraphSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="200" viewBox="-110 -110 220 200">
  <style>text{font-family:'Times New Roman',serif;font-size:11px;fill:#111}</style>
  <line x1="-100" y1="0" x2="105" y2="0" stroke="#333" stroke-width="1.2"/>
  <line x1="0" y1="90" x2="0" y2="-100" stroke="#333" stroke-width="1.2"/>
  <polygon points="105,-3 112,0 105,3" fill="#333"/>
  <polygon points="-3,-100 0,-107 3,-100" fill="#333"/>
  <text x="108" y="4">x</text><text x="4" y="-101">y</text>
  <text x="3" y="12" font-size="10">O</text>
  <!-- Tiệm cận đứng x=0 (trục Oy) -->
  <!-- Đường cong log (a>1, tăng): qua (1,0) và (e,1) -->
  <path d="M 5,90 C 8,60 12,20 20,0 C 30,-20 55,-50 90,-85"
        fill="none" stroke="#1a73e8" stroke-width="2"/>
  <!-- Điểm (1, 0) -->
  <circle cx="20" cy="0" r="3" fill="#e53935"/>
  <text x="22" y="-4" fill="#e53935" font-size="10">1</text>
  <text x="-100" y="-95" fill="#555" font-size="10">y = logₐx (a&gt;1)</text>
</svg>`;
  return toDataUri(svg);
}

/** Đồ thị hàm sin trên [0, 2π] */
export function sinGraphSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="160" viewBox="0 0 260 160">
  <style>text{font-family:'Times New Roman',serif;font-size:11px;fill:#111}</style>
  <!-- Trục -->
  <line x1="15" y1="80" x2="250" y2="80" stroke="#333" stroke-width="1.2"/>
  <line x1="20" y1="15" x2="20" y2="145" stroke="#333" stroke-width="1.2"/>
  <polygon points="250,77 257,80 250,83" fill="#333"/>
  <polygon points="17,15 20,8 23,15" fill="#333"/>
  <text x="252" y="84">x</text>
  <text x="23" y="12">y</text>
  <text x="22" y="92" font-size="9">O</text>
  <!-- Nhãn trục x: π/2, π, 3π/2, 2π -->
  <text x="72" y="92" font-size="9">π/2</text>
  <text x="126" y="92" font-size="9">π</text>
  <text x="170" y="92" font-size="9">3π/2</text>
  <text x="214" y="92" font-size="9">2π</text>
  <!-- Nhãn trục y -->
  <text x="5" y="38" font-size="9">1</text>
  <text x="2" y="125" font-size="9">−1</text>
  <!-- Đường ngang y=1 và y=−1 mờ -->
  <line x1="20" y1="35" x2="250" y2="35" stroke="#ccc" stroke-width="0.8" stroke-dasharray="4,3"/>
  <line x1="20" y1="125" x2="250" y2="125" stroke="#ccc" stroke-width="0.8" stroke-dasharray="4,3"/>
  <!-- Đồ thị sin: một chu kỳ đầy đủ -->
  <path d="M 20,80 C 40,80 55,35 80,35 C 105,35 120,80 130,80 C 140,80 155,125 180,125 C 205,125 220,80 240,80"
        fill="none" stroke="#1a73e8" stroke-width="2"/>
  <!-- Điểm đặc biệt -->
  <circle cx="80" cy="35" r="3" fill="#e53935"/>
  <circle cx="180" cy="125" r="3" fill="#e53935"/>
</svg>`;
  return toDataUri(svg);
}

/** Đồ thị parabol lõm y = ax²+bx+c (a>0, có đỉnh) */
export function parabolaSVG(opening: 'up' | 'down' = 'up'): string {
  const pathD = opening === 'up'
    ? `M -80,85 C -50,30 -20,-35 0,-55 C 20,-35 50,30 80,85`
    : `M -80,-85 C -50,-30 -20,35 0,55 C 20,35 50,-30 80,-85`;
  const vx = 0, vy = opening === 'up' ? -55 : 55;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="190" viewBox="-100 -100 200 190">
  <style>text{font-family:'Times New Roman',serif;font-size:11px;fill:#111}</style>
  <line x1="-95" y1="0" x2="98" y2="0" stroke="#333" stroke-width="1.2"/>
  <line x1="0" y1="85" x2="0" y2="-95" stroke="#333" stroke-width="1.2"/>
  <polygon points="98,-3 105,0 98,3" fill="#333"/>
  <polygon points="-3,-95 0,-102 3,-95" fill="#333"/>
  <text x="100" y="4">x</text><text x="4" y="-96">y</text>
  <text x="3" y="12" font-size="10">O</text>
  <path d="${pathD}" fill="none" stroke="#1a73e8" stroke-width="2"/>
  <!-- Đỉnh -->
  <circle cx="${vx}" cy="${vy}" r="3" fill="#e53935"/>
  <line x1="0" y1="0" x2="${vx}" cy="${vy}" stroke="#ccc" stroke-width="0.6" stroke-dasharray="3,2"/>
  <text x="${vx + 4}" y="${vy - 4}" fill="#e53935" font-size="10">Đỉnh</text>
  <text x="-95" y="-88" fill="#555" font-size="10">${opening === 'up' ? 'y = ax²+bx+c (a>0)' : 'y = ax²+bx+c (a<0)'}</text>
</svg>`;
  return toDataUri(svg);
}

/** Đồ thị hàm mũ tăng + giảm (2 nhánh trên cùng hình) */
export function expComparisonSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="200" viewBox="-110 -100 220 200">
  <style>text{font-family:'Times New Roman',serif;font-size:11px;fill:#111}</style>
  <line x1="-100" y1="0" x2="105" y2="0" stroke="#333" stroke-width="1.2"/>
  <line x1="0" y1="90" x2="0" y2="-95" stroke="#333" stroke-width="1.2"/>
  <polygon points="105,-3 112,0 105,3" fill="#333"/>
  <polygon points="-3,-95 0,-102 3,-95" fill="#333"/>
  <text x="108" y="4">x</text><text x="4" y="-97">y</text>
  <text x="3" y="12" font-size="10">O</text>
  <!-- y = 2^x (tăng) -->
  <path d="M -90,85 C -60,75 -30,45 0,-20 C 20,-50 50,-75 90,-92"
        fill="none" stroke="#1a73e8" stroke-width="2"/>
  <text x="55" y="-85" fill="#1a73e8" font-size="10">y=2ˣ</text>
  <!-- y = (1/2)^x (giảm) -->
  <path d="M -90,-92 C -60,-75 -30,-50 0,-20 C 20,10 50,60 90,85"
        fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="55" y="78" fill="#dc2626" font-size="10">y=(½)ˣ</text>
  <!-- Điểm chung (0,1): py = −20 -->
  <circle cx="0" cy="-20" r="3" fill="#16a34a"/>
  <text x="4" y="-22" fill="#16a34a" font-size="10">(0,1)</text>
</svg>`;
  return toDataUri(svg);
}

/** Khối chóp tứ giác đều S.ABCD */
export function pyramidSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="180" viewBox="0 0 200 180">
  <style>line{stroke:#222;stroke-width:1.5} text{font-family:Times New Roman;font-size:13px;fill:#111}</style>
  <!-- Đáy ABCD (hình thoi perspective) -->
  <polygon points="100,140 160,110 100,80 40,110" fill="none" stroke="#222" stroke-width="1.5"/>
  <!-- Cạnh bên SA, SB, SC, SD -->
  <line x1="100" y1="20" x2="160" y2="110"/>
  <line x1="100" y1="20" x2="100" y2="80"/>
  <line x1="100" y1="20" x2="40" y2="110"/>
  <line x1="100" y1="20" x2="100" y2="140" stroke-dasharray="5,3"/>
  <!-- Đường chéo ẩn -->
  <line x1="40" y1="110" x2="160" y2="110" stroke-dasharray="4,3" stroke="#888"/>
  <!-- Nhãn -->
  <text x="95" y="14">S</text>
  <text x="163" y="114">B</text>
  <text x="95" y="76">C</text>
  <text x="26" y="114">D</text>
  <text x="95" y="156">A</text>
</svg>`;
  return toDataUri(svg);
}

/** Hình lăng trụ tam giác đều ABC.A'B'C' */
export function prismSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="180" viewBox="0 0 200 180">
  <style>line{stroke:#222;stroke-width:1.5} text{font-family:Times New Roman;font-size:13px;fill:#111}</style>
  <!-- Đáy dưới ABC -->
  <polygon points="60,150 140,150 100,120" fill="none" stroke="#222" stroke-width="1.5"/>
  <!-- Đáy trên A'B'C' -->
  <polygon points="60,50 140,50 100,20" fill="none" stroke="#222" stroke-width="1.5"/>
  <!-- Cạnh bên -->
  <line x1="60" y1="150" x2="60" y2="50"/>
  <line x1="140" y1="150" x2="140" y2="50"/>
  <line x1="100" y1="120" x2="100" y2="20"/>
  <!-- Ẩn -->
  <line x1="60" y1="150" x2="100" y2="120" stroke-dasharray="4,3" stroke="#888"/>
  <!-- Nhãn -->
  <text x="44" y="165">A</text><text x="143" y="165">B</text><text x="97" y="118">C</text>
  <text x="44" y="46">A'</text><text x="143" y="46">B'</text><text x="97" y="16">C'</text>
</svg>`;
  return toDataUri(svg);
}

/** Hình nón */
export function coneSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="170" viewBox="0 0 180 170">
  <style>text{font-family:Times New Roman;font-size:12px;fill:#111}</style>
  <!-- Đáy ellipse -->
  <ellipse cx="90" cy="140" rx="60" ry="15" fill="none" stroke="#222" stroke-width="1.5"/>
  <!-- Hai đường sinh -->
  <line x1="90" y1="25" x2="30" y2="140" stroke="#222" stroke-width="1.5"/>
  <line x1="90" y1="25" x2="150" y2="140" stroke="#222" stroke-width="1.5"/>
  <!-- Đường cao (ẩn) -->
  <line x1="90" y1="25" x2="90" y2="140" stroke="#555" stroke-width="1" stroke-dasharray="5,3"/>
  <!-- Bán kính -->
  <line x1="90" y1="140" x2="150" y2="140" stroke="#555" stroke-width="1"/>
  <!-- Nhãn -->
  <text x="86" y="20">S</text>
  <text x="84" y="162">O</text>
  <text x="152" y="144">r</text>
  <text x="92" y="85">h</text>
</svg>`;
  return toDataUri(svg);
}

/** Hình trụ */
export function cylinderSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <style>text{font-family:Times New Roman;font-size:12px;fill:#111}</style>
  <!-- Đáy trên -->
  <ellipse cx="90" cy="35" rx="55" ry="14" fill="none" stroke="#222" stroke-width="1.5"/>
  <!-- Đáy dưới -->
  <ellipse cx="90" cy="145" rx="55" ry="14" fill="none" stroke="#222" stroke-width="1.5"/>
  <!-- Đường bên -->
  <line x1="35" y1="35" x2="35" y2="145" stroke="#222" stroke-width="1.5"/>
  <line x1="145" y1="35" x2="145" y2="145" stroke="#222" stroke-width="1.5"/>
  <!-- Trục và chú thích -->
  <line x1="90" y1="35" x2="90" y2="145" stroke="#888" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="90" y1="145" x2="145" y2="145" stroke="#555" stroke-width="1"/>
  <text x="110" y="162">r</text>
  <text x="93" y="95">h</text>
</svg>`;
  return toDataUri(svg);
}

/** Đồ thị hàm số bậc 3 đơn giản (có cực trị cực đại trái, cực tiểu phải) — giữ lại tương thích */
export function cubicGraphSVG(): string {
  return cubicLeftMaxSVG();
}

/** Đồ thị hàm bậc 4 trùng phương */
export function quarticGraphSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="180" viewBox="0 0 200 180">
  <style>text{font-family:Times New Roman;font-size:11px;fill:#111}</style>
  <line x1="20" y1="90" x2="185" y2="90" stroke="#333" stroke-width="1.2"/>
  <line x1="100" y1="10" x2="100" y2="170" stroke="#333" stroke-width="1.2"/>
  <polygon points="185,87 192,90 185,93" fill="#333"/>
  <polygon points="97,10 100,3 103,10" fill="#333"/>
  <!-- y = x^4-2x^2 (W-shape) -->
  <path d="M 30,160 C 50,50 70,130 100,140 C 130,130 150,50 170,160"
        fill="none" stroke="#1a73e8" stroke-width="2"/>
  <circle cx="100" cy="140" r="3" fill="#e53935"/>
  <text x="188" y="94">x</text>
  <text x="104" y="8">y</text>
  <text x="104" y="94">O</text>
</svg>`;
  return toDataUri(svg);
}

/** Khối cầu */
export function sphereSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
  <style>text{font-family:Times New Roman;font-size:12px;fill:#111}</style>
  <circle cx="80" cy="80" r="60" fill="none" stroke="#222" stroke-width="1.5"/>
  <ellipse cx="80" cy="80" rx="60" ry="18" fill="none" stroke="#888" stroke-width="1" stroke-dasharray="5,3"/>
  <line x1="80" y1="20" x2="80" y2="140" stroke="#888" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="80" y1="80" x2="140" y2="80" stroke="#555" stroke-width="1"/>
  <text x="108" y="76">R</text>
  <text x="76" y="76">O</text>
</svg>`;
  return toDataUri(svg);
}

/** Hình thang (bài toán diện tích) */
export function trapezoidSVG(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="130" viewBox="0 0 200 130">
  <style>text{font-family:Times New Roman;font-size:12px;fill:#111}</style>
  <polygon points="40,110 160,110 130,20 70,20" fill="none" stroke="#222" stroke-width="1.5"/>
  <line x1="70" y1="20" x2="70" y2="110" stroke="#888" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="10" y="115">A</text><text x="162" y="115">B</text>
  <text x="132" y="18">C</text><text x="52" y="18">D</text>
  <text x="72" y="68">h</text>
</svg>`;
  return toDataUri(svg);
}
