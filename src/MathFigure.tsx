/**
 * MathFigure.tsx — Component hiển thị đồ thị và bảng biến thiên tự động
 * Phân tích context/text câu hỏi → chọn hình minh họa phù hợp
 */

import React from 'react';
import {
  cubicLeftMaxSVG, cubicNegSVG, cubicGraphSVG,
  quarticGraphSVG, rationalGraphSVG,
  expGraphSVG, expComparisonSVG, logGraphSVG,
  sinGraphSVG, parabolaSVG,
  bbtCubicSVG, bbtRationalSVG, bbtQuarticSVG,
  pyramidSVG, prismSVG, coneSVG, cylinderSVG, sphereSVG, trapezoidSVG
} from './svgShapes';

// ─── Danh sách các từ khoá → hình minh hoạ ───────────────────────────────────
interface FigureRule {
  keywords: RegExp;
  figure: () => { src: string; caption: string; isBBT?: boolean };
}

const FIGURE_RULES: FigureRule[] = [
  // BBT hàm bậc 3
  {
    keywords: /bảng biến thiên.*(bậc 3|bậc ba|x\^3|x³)|đơn điệu.*(bậc 3|bậc ba|x\^3)|cực trị.*(bậc 3|bậc ba|x\^3|x³)/i,
    figure: () => ({ src: bbtCubicSVG(), caption: 'Bảng biến thiên hàm bậc 3', isBBT: true })
  },
  // BBT hàm phân thức
  {
    keywords: /bảng biến thiên.*phân thức|đơn điệu.*\bphân thức\b|tiệm cận.*(đứng|ngang).*bảng/i,
    figure: () => ({ src: bbtRationalSVG(), caption: 'Bảng biến thiên hàm phân thức', isBBT: true })
  },
  // BBT hàm bậc 4
  {
    keywords: /bảng biến thiên.*(bậc 4|bậc bốn|x\^4|x⁴)|đơn điệu.*(bậc 4|trùng phương)/i,
    figure: () => ({ src: bbtQuarticSVG(), caption: 'Bảng biến thiên hàm bậc 4', isBBT: true })
  },
  // Đồ thị hàm bậc 3 âm (cực đại dương, cực tiểu âm theo chiều ngược)
  {
    keywords: /hàm số.*-x\^3|-x³|đồ thị.*bậc 3.*cực đại.*dương|f\(x\).*-x\^3/i,
    figure: () => ({ src: cubicNegSVG(), caption: 'Đồ thị hàm bậc 3 (hệ số âm)' })
  },
  // Đồ thị hàm bậc 3 (tổng quát)
  {
    keywords: /đồ thị.*(bậc 3|bậc ba|x\^3|x³)|hàm số.*(bậc 3|bậc ba).*đồ thị|cực trị.*(x\^3|bậc 3)|đồng biến.*(x\^3|bậc 3)/i,
    figure: () => ({ src: cubicLeftMaxSVG(), caption: 'Đồ thị hàm số bậc 3' })
  },
  // Đồ thị hàm phân thức + tiệm cận
  {
    keywords: /tiệm cận|phân thức|\\dfrac\{x|\\frac\{x|\bx-1\b.*\bx\+|asymptote/i,
    figure: () => ({ src: rationalGraphSVG(), caption: 'Đồ thị hàm phân thức (tiệm cận)' })
  },
  // Hàm bậc 4 / trùng phương
  {
    keywords: /bậc 4|bậc bốn|x\^4|x⁴|trùng phương/i,
    figure: () => ({ src: quarticGraphSVG(), caption: 'Đồ thị hàm bậc 4 trùng phương' })
  },
  // So sánh hàm mũ tăng/giảm
  {
    keywords: /cơ số.*0.*<.*a.*<.*1|so sánh.*hàm.*mũ|hàm.*mũ.*đồng biến.*nghịch biến|2\^x.*\(1\/2\)\^x/i,
    figure: () => ({ src: expComparisonSVG(), caption: 'So sánh hàm mũ y=2ˣ và y=(½)ˣ' })
  },
  // Hàm mũ giảm
  {
    keywords: /hàm.*mũ.*0.*<.*a.*<.*1|hàm.*mũ.*nghịch biến|\(0[,.]5\)\^x|\(1\/2\)\^x|\(\\frac\{1\}\{2\}\)\^x/i,
    figure: () => ({ src: expGraphSVG(false), caption: 'Đồ thị hàm mũ y=aˣ (0<a<1)' })
  },
  // Hàm mũ tăng (chỉ khi nói về ĐỒ THỊ hoặc TÍNH CHẤT hàm mũ)
  {
    keywords: /đồ thị.*hàm.*mũ|hàm số.*mũ.*đồ thị|hàm.*mũ.*đơn điệu|đồ thị.*e\^x|đồ thị.*2\^x|đồ thị.*a\^x|y = a\^x.*a > 1|hàm.*mũ.*tập xác định/i,
    figure: () => ({ src: expGraphSVG(true), caption: 'Đồ thị hàm mũ y=aˣ (a>1)' })
  },
  // Hàm logarit (chỉ khi nói về ĐỒ THỊ hoặc TÍNH CHẤT hàm logarit)
  {
    keywords: /đồ thị.*logarit|hàm.*logarit.*đồ thị|hàm số.*logarit|đơn điệu.*logarit|đồ thị.*\\\\log|hàm log|tập xác định.*logarit|logarit.*tập giá trị/i,
    figure: () => ({ src: logGraphSVG(), caption: 'Đồ thị hàm logarit y=logₐx' })
  },
  // Hàm sin/lượng giác
  {
    keywords: /\\sin|\\cos|lượng giác|sin x|cos x|dao động/i,
    figure: () => ({ src: sinGraphSVG(), caption: 'Đồ thị hàm sin y=sin(x)' })
  },
  // Parabol lồng (a < 0)
  {
    keywords: /parabol.*lồi|đỉnh.*tối đa|f\(x\).*=.*-x\^2|-x\^2|hàm số.*ax\^2.*a.*<.*0/i,
    figure: () => ({ src: parabolaSVG('down'), caption: 'Đồ thị parabol lồi (a<0)' })
  },
  // Parabol lõm (a > 0)
  {
    keywords: /parabol|ax\^2|\\dfrac\{\\pi\}|GTNN|giá trị nhỏ nhất.*x\^2|hàm.*bậc 2/i,
    figure: () => ({ src: parabolaSVG('up'), caption: 'Đồ thị parabol (a>0)' })
  },
  // Hình học không gian — khối cầu
  {
    keywords: /khối cầu|mặt cầu|bán kính.*cầu|thể tích.*cầu/i,
    figure: () => ({ src: sphereSVG(), caption: 'Khối cầu bán kính R' })
  },
  // Hình trụ
  {
    keywords: /hình trụ|khối trụ|diện tích.*trụ|thể tích.*trụ/i,
    figure: () => ({ src: cylinderSVG(), caption: 'Hình trụ bán kính r, chiều cao h' })
  },
  // Hình nón
  {
    keywords: /hình nón|khối nón|đường sinh|nón lá|diện tích.*nón/i,
    figure: () => ({ src: coneSVG(), caption: 'Hình nón đường sinh l, chiều cao h' })
  },
  // Khối chóp
  {
    keywords: /khối chóp|hình chóp|S\.ABCD|S\.ABC|chóp tứ giác/i,
    figure: () => ({ src: pyramidSVG(), caption: 'Khối chóp tứ giác đều S.ABCD' })
  },
  // Lăng trụ
  {
    keywords: /lăng trụ|ABC\.A'B'C'|khối lăng/i,
    figure: () => ({ src: prismSVG(), caption: 'Lăng trụ tam giác ABC.A\'B\'C\'' })
  },
  // Hình thang
  {
    keywords: /hình thang|diện tích.*thang/i,
    figure: () => ({ src: trapezoidSVG(), caption: 'Hình thang ABCD' })
  },
];

/**
 * Phân tích text câu hỏi → trả về hình phù hợp hoặc null
 */
export function detectFigure(text: string): { src: string; caption: string; isBBT?: boolean } | null {
  if (!text) return null;
  for (const rule of FIGURE_RULES) {
    if (rule.keywords.test(text)) {
      return rule.figure();
    }
  }
  return null;
}

// ─── Component hiển thị hình minh họa ────────────────────────────────────────

interface MathFigureProps {
  /** Toàn bộ text câu hỏi để phân tích */
  text: string;
  /** Ghi đè hình từ data nếu có */
  imageOverride?: string;
  className?: string;
}

export const MathFigure: React.FC<MathFigureProps> = ({ text, imageOverride, className = '' }) => {
  // Nếu câu hỏi đã có image field (từ questionBank), ưu tiên dùng
  if (imageOverride) {
    return (
      <div className={`my-3 flex justify-center ${className}`}>
        <img
          src={imageOverride}
          alt="Hình minh họa"
          className="max-w-[280px] rounded border border-slate-100 shadow-sm"
        />
      </div>
    );
  }

  const fig = detectFigure(text);
  if (!fig) return null;

  return (
    <div className={`my-3 flex flex-col items-center gap-1 ${className}`}>
      <img
        src={fig.src}
        alt={fig.caption}
        className={`rounded border border-slate-100 shadow-sm ${fig.isBBT ? 'max-w-[380px]' : 'max-w-[240px]'}`}
        style={{ imageRendering: 'crisp-edges' }}
      />
      <p className="text-[9px] text-slate-400 italic text-center">{fig.caption}</p>
    </div>
  );
};

export default MathFigure;
