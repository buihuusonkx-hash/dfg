/**
 * Ngân hàng câu hỏi Math Matrix Pro - Phiên bản 2026
 * Gồm: NLC (Trắc nghiệm nhiều lựa chọn), DS (Đúng/Sai), TLN (Trả lời ngắn)
 */

// ============================================================
// KIỂU DỮ LIỆU
// ============================================================
export interface DSQuestion {
  context: string; // Mệnh đề/bài toán dẫn
  image?: string;  // Đường dẫn hình minh họa (tùy chọn)
  statements: { text: string; answer: 'Đúng' | 'Sai' }[];
}

export interface TLNQuestion {
  text: string;
  answer: string;
  image?: string;  // Đường dẫn hình minh họa (tùy chọn)
}

export interface NLCQuestion {
  text: string;
  options: [string, string, string, string];
  answer: 'A' | 'B' | 'C' | 'D';
  image?: string;
}

export interface TopicBank {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nlc?: { [level: string]: (NLCQuestion | string)[] };
  ds?: DSQuestion[];
  tln?: { [level: string]: TLNQuestion[] };
}

export type QuestionBank = { [topic: string]: TopicBank };

// Helper shuffle
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Chuyển string cũ sang NLCQuestion
function toNLC(item: NLCQuestion | string): NLCQuestion {
  if (typeof item === 'string') {
    return { text: item, options: ['(Xem đề thi)', '(Xem đề thi)', '(Xem đề thi)', '(Xem đề thi)'], answer: 'A' };
  }
  return item;
}

// ============================================================
// NGÂN HÀNG CÂU HỎI
// ============================================================
export const QUESTION_BANK: QuestionBank = {

  // ──────────────────────────────────────────────────────────
  // HÀM SỐ - TÍNH ĐƠN ĐIỆU, CỰC TRỊ, GIÁ TRỊ LỚN NHẤT NHỎ NHẤT
  // ──────────────────────────────────────────────────────────
  "Hàm số": {
    nlc: {
      "Nhận biết": [
        { text: "Hàm số $y = -x^3 - 3x^2 + 9x - 1$ đồng biến trên khoảng nào?", options: ["$(-\\infty; -3)$", "$(-3; 1)$", "$(-3; +\\infty)$", "$(1; +\\infty)$"], answer: 'B' },
        { text: "Hàm số $y = 5x - 10$ có bao nhiêu cực trị?", options: ["0", "1", "2", "3"], answer: 'A' },
        { text: "Hàm số $y = \\frac{x}{x^2 + 1}$ đồng biến trên khoảng nào?", options: ["$(-1; 1)$", "$(0; +\\infty)$", "$(-\\infty; -1)$", "$(1; +\\infty)$"], answer: 'A' },
        { text: "Đường tiệm cận đứng của đồ thị $y = \\frac{2x-1}{x+1}$ là:", options: ["$x = -1$", "$x = 1$", "$y = 2$", "$y = -2$"], answer: 'A' },
        { text: "Đường tiệm cận ngang của đồ thị $y = \\frac{3x+2}{x-1}$ là:", options: ["$y = 3$", "$y = 1$", "$x = 1$", "$x = -1$"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Giá trị lớn nhất của $f(x) = x^3 - 3x$ trên $[-2; 2]$ là:", options: ["2", "-2", "4", "0"], answer: 'A' },
        { text: "GTNN của $y = x + \\frac{4}{x}$ trên $(0; +\\infty)$ bằng:", options: ["4", "2", "8", "1"], answer: 'A' },
        { text: "Số đường tiệm cận của đồ thị $y = \\frac{\\sqrt{x^2+1}}{x}$ là:", options: ["3", "2", "1", "0"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "Tìm $m$ để $y = x^3 - 3mx^2 + 3(m^2-1)x + 1$ đồng biến trên $\\mathbb{R}$:", options: ["$m \\in [-1; 1]$", "$m > 1$", "$m < -1$", "$m = 0$"], answer: 'A' },
        { text: "Tìm $m$ để đồ thị $y = \\frac{x-1}{x^2-mx+1}$ không có tiệm cận đứng:", options: ["$-2 < m < 2$", "$m \\ge 2$", "$m \\le -2$", "$m = \\pm 2$"], answer: 'A' }
      ]
    },

    ds: [
      {
        context: "Một ô tô sau khi xuất phát, di chuyển với vận tốc $v(t) = 2{,}01t - 0{,}025t^2$ (m/s, $0 \\le t \\le 10$). Xét các mệnh đề sau:",
        statements: [
          { text: "Gia tốc của xe là $a(t) = v'(t) = 2{,}01 - 0{,}05t$ (m/s²), đây là hàm bậc nhất giảm dần.", answer: "Đúng" },
          { text: "Vận tốc đạt cực đại khi $v'(t) = 0$, tức $t = \\dfrac{2{,}01}{0{,}05} = 40{,}2$ giây, vượt ngoài khoảng $[0;10]$ nên $v$ đồng biến trên $[0;10]$.", answer: "Đúng" },
          { text: "Quãng đường đi trong $3$ giây đầu là $s = \\int_0^3 (2{,}01t - 0{,}025t^2)\\,dt \\approx 8{,}3$ m.", answer: "Sai" },
          { text: "Vận tốc lớn nhất trong khoảng $[0;10]$ đạt được tại $t = 10$ giây và bằng $v(10) = 17{,}85$ m/s.", answer: "Đúng" }
        ]
      },
      {
        context: "Lợi nhuận của một công ty (triệu đồng/tháng) được mô hình hóa bởi hàm số $P(x) = -x^3 + 9x^2 - 15x + 7$, trong đó $x$ là số tháng kể từ đầu năm ($1 \\le x \\le 8$). Xét các mệnh đề sau:",
        statements: [
          { text: "$P'(x) = -3x^2 + 18x - 15 = -3(x-1)(x-5)$.", answer: "Đúng" },
          { text: "Lợi nhuận đạt cực đại tại tháng $x = 5$ với $P(5) = 32$ triệu đồng.", answer: "Đúng" },
          { text: "Lợi nhuận đạt cực tiểu tại $x = 1$ với $P(1) = 0$ triệu đồng tức hòa vốn.", answer: "Đúng" },
          { text: "Lợi nhuận luôn dương trong cả $8$ tháng.", answer: "Sai" }
        ]
      },
      {
        context: "Nồng độ thuốc trong máu bệnh nhân (mg/lít) theo thời gian $t$ giờ sau khi tiêm là $C(t) = \\dfrac{4t}{t^2 + 1}$. Xét các mệnh đề sau:",
        statements: [
          { text: "Nồng độ thuốc tại $t = 0$ bằng $0$ mg/lít.", answer: "Đúng" },
          { text: "$C'(t) = \\dfrac{4(1 - t^2)}{(t^2 + 1)^2}$, nên nồng độ đạt cực đại tại $t = 1$ giờ.", answer: "Đúng" },
          { text: "Nồng độ thuốc cực đại là $C(1) = 2$ mg/lít.", answer: "Đúng" },
          { text: "Sau $3$ giờ, nồng độ thuốc còn $C(3) = 1{,}2$ mg/lít, vẫn cao hơn $C(1)$.", answer: "Sai" }
        ]
      },
      {
        context: "Ông An thiết kế hộp đựng hàng hình hộp chữ nhật không nắp từ tấm bìa vuông cạnh $12$ cm, cắt $4$ góc vuông cạnh $x$ cm ($0 < x < 6$). Thể tích hộp $V(x) = x(12-2x)^2$. Xét các mệnh đề:",
        statements: [
          { text: "$V'(x) = (12-2x)^2 - 4x(12-2x) = (12-2x)(12-6x)$.", answer: "Đúng" },
          { text: "$V'(x) = 0$ khi $x = 2$ hoặc $x = 6$ (loại $x = 6$). Điểm cực đại tại $x = 2$.", answer: "Đúng" },
          { text: "Thể tích lớn nhất $V_{max} = 2 \\cdot (12-4)^2 = 128$ cm³.", answer: "Đúng" },
          { text: "Nếu cắt góc cạnh $x = 3$ cm, thể tích hộp bằng $108$ cm³, nhỏ hơn thể tích tối ưu.", answer: "Đúng" }
        ]
      },
      {
        context: "Hàm số $y = \\dfrac{2x - 3}{x - 1}$ biểu diễn tỉ lệ hiệu suất (%) theo thời gian $x$ giờ làm việc $(x > 1)$. Xét các mệnh đề sau:",
        statements: [
          { text: "Đạo hàm $y' = \\dfrac{2(x-1) - (2x-3)}{(x-1)^2} = \\dfrac{1}{(x-1)^2} > 0$, tức hàm đồng biến trên $(1; +\\infty)$.", answer: "Đúng" },
          { text: "Đồ thị có tiệm cận đứng $x = 1$ và tiệm cận ngang $y = 2$.", answer: "Đúng" },
          { text: "Khi $x \\to +\\infty$, hiệu suất tiến đến $100\\%$.", answer: "Sai" },
          { text: "Hàm số không có cực trị.", answer: "Đúng" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Một ô tô chuyển động với vận tốc $v(t) = -t^2 + 6t + 16$ (km/h, $t \\ge 0$). Tìm vận tốc lớn nhất mà ô tô đạt được.", answer: "$25$ km/h tại $t = 3$ giờ" },
        { text: "Tìm số điểm cực trị của hàm số $y = x^4 - 8x^2 + 3$.", answer: "3" },
        { text: "Hàm số $y = \\dfrac{1}{3}x^3 - x^2 - 3x + 2$ đạt cực tiểu tại $x = a$. Tính $a$.", answer: "3" },
        { text: "Lợi nhuận bán hàng theo số lượng $x$ (trăm sản phẩm): $P(x) = -x^2 + 10x - 16$. Tìm số lượng bán để lợi nhuận đạt tối đa.", answer: "$x = 5$ (tức 500 sản phẩm), $P_{max} = 9$ đơn vị" }
      ],
      "Vận dụng": [
        { text: "Chi phí sản xuất $x$ áo sơ mi là $C(x) = 0{,}01x^2 - 2x + 500$ (nghìn đồng). Tìm số áo để chi phí trung bình nhỏ nhất.", answer: "$x = 100\\sqrt{5} \\approx 224$ áo" },
        { text: "Một cửa hàng bán vé xem phim. Khi giá vé $p$ (nghìn đồng), số lượng vé bán được là $q(p) = 600 - 2p$. Tìm giá vé để doanh thu tối đa.", answer: "$p = 150$ nghìn đồng, doanh thu $= 45000$ nghìn đồng" },
        { text: "Nhiệt độ môi trường trong ngày biến thiên theo hàm $T(t) = -0{,}5t^2 + 6t + 20$ (°C, $0 \\le t \\le 12$, $t$ là số giờ từ 6h sáng). Tìm nhiệt độ cao nhất và thời điểm đó.", answer: "$T_{max} = 38$°C lúc $t = 6$ (tức 12h trưa)" },
        { text: "Tìm tất cả giá trị nguyên của $m \\in [-5;5]$ để hàm số $y = x^3 - 3x^2 + m$ có cực đại dương và cực tiểu âm.", answer: "3 giá trị" }
      ],
      "Vận dụng cao": [
        { text: "Công ty sản xuất $x$ tấn hàng/ngày, doanh thu $R(x) = -x^2 + 20x$, chi phí $C(x) = 2x + 10$ (triệu đồng). Tìm $x$ nguyên để lợi nhuận $P = R - C$ tối đa và tính lợi nhuận đó.", answer: "$x = 9$ tấn, lợi nhuận $= 53$ triệu đồng" },
        { text: "Có bao nhiêu giá trị nguyên của $m \\in [-10; 10]$ để phương trình $x^3 - 3x = m$ có 3 nghiệm phân biệt?", answer: "3 giá trị ($m \\in \\{-1; 0; 1\\}$)" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // NGUYÊN HÀM - TÍCH PHÂN
  // ──────────────────────────────────────────────────────────
  "Nguyên hàm - Tích phân": {
    nlc: {
      "Nhận biết": [
        { text: "Họ nguyên hàm của $f(x) = 2x + \\cos x$ là:", options: ["$x^2 + \\sin x + C$", "$x^2 - \\sin x + C$", "$2 - \\sin x + C$", "$x^2 + \\cos x + C$"], answer: 'A' },
        { text: "Tích phân $\\int_0^1 (3x^2 + 2x)\\,dx$ bằng:", options: ["$2$", "$3$", "$4$", "$1$"], answer: 'A' },
        { text: "$\\int e^x\\,dx$ bằng:", options: ["$e^x + C$", "$xe^x + C$", "$e^{x+1} + C$", "$\\dfrac{e^x}{x} + C$"], answer: 'A' },
        { text: "Mệnh đề nào sau đây sai?", options: ["$\\int kf(x)dx = k\\int f(x)dx$", "$\\int [f+g]dx = \\int f\\,dx + \\int g\\,dx$", "$\\int_a^b f(x)dx = -\\int_b^a f(x)dx$", "$\\int_a^a f(x)dx = 1$"], answer: 'D' },
        { text: "$\\int \\dfrac{1}{x}\\,dx$ (x > 0) bằng:", options: ["$\\ln x + C$", "$\\ln|x| + C$", "$\\dfrac{1}{x^2} + C$", "$-\\dfrac{1}{x^2} + C$"], answer: 'A' },
        { text: "$\\int_0^{\\pi} \\sin x\\,dx$ bằng:", options: ["$0$", "$1$", "$2$", "$-2$"], answer: 'C' }
      ],
      "Thông hiểu": [
        { text: "Diện tích hình phẳng giới hạn bởi $y = x^2 - 4$ và trục hoành là:", options: ["$\\dfrac{32}{3}$", "$8$", "$16$", "$\\dfrac{16}{3}$"], answer: 'A' },
        { text: "$\\int_0^{\\pi/2} \\sin^2 x\\,dx$ bằng:", options: ["$\\dfrac{\\pi}{4}$", "$\\dfrac{\\pi}{2}$", "$1$", "$\\dfrac{1}{2}$"], answer: 'A' },
        { text: "Nguyên hàm $F(x)$ của $f(x)=e^{2x}$ thỏa $F(0)=1$ là:", options: ["$\\dfrac{e^{2x}}{2} + \\dfrac{1}{2}$", "$\\dfrac{e^{2x}}{2}$", "$e^{2x} + 1$", "$2e^{2x} - 1$"], answer: 'A' },
        { text: "$\\int_1^e \\dfrac{\\ln x}{x}\\,dx$ bằng:", options: ["$\\dfrac{1}{2}$", "$1$", "$e$", "$\\dfrac{e}{2}$"], answer: 'A' },
        { text: "Nguyên hàm của $f(x) = \\dfrac{1}{2x+1}$ là:", options: ["$\\dfrac{1}{2}\\ln|2x+1|+C$", "$\\ln|2x+1|+C$", "$2\\ln|2x+1|+C$", "$\\dfrac{1}{(2x+1)^2}+C$"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "Thể tích khối tròn xoay khi quay hình phẳng giới hạn $y=\\sqrt{x}$, $y=x$ quanh $Ox$ là:", options: ["$\\dfrac{\\pi}{6}$", "$\\dfrac{\\pi}{3}$", "$\\dfrac{\\pi}{2}$", "$\\dfrac{\\pi}{10}$"], answer: 'A' },
        { text: "Vật chuyển động $v(t)=3t^2-2t+1$. Quãng đường trong 2 giây đầu là:", options: ["$6$ m", "$8$ m", "$10$ m", "$4$ m"], answer: 'A' },
        { text: "Diện tích hình phẳng giới hạn $y=\\sin x$ và trục hoành trên $[0;\\pi]$ là:", options: ["$2$", "$1$", "$\\pi$", "$0$"], answer: 'A' },
        { text: "$\\int_0^1 x\\sqrt{1+x^2}\\,dx$ bằng:", options: ["$\\dfrac{\\sqrt{2}-1}{1}$", "$\\dfrac{2\\sqrt{2}-2}{3}$", "$\\dfrac{\\sqrt{2}}{2}$", "$1$"], answer: 'B' }
      ],
      "Vận dụng cao": [
        { text: "Diện tích hình phẳng giới hạn $y=x^3-3x$ và $y=x$ là:", options: ["$8$", "$4$", "$\\dfrac{11}{2}$", "$\\dfrac{11}{4}$"], answer: 'A' },
        { text: "Tích phân $I=\\int_0^1(\\sqrt{x}-x)^2\\,dx$ bằng:", options: ["$\\dfrac{1}{6}$", "$\\dfrac{1}{3}$", "$\\dfrac{1}{12}$", "$\\dfrac{1}{4}$"], answer: 'A' }
      ]
    },

    ds: [
      {
        context: "Một ô tô đang chạy $16$ m/s thì hãm phanh, vận tốc giảm theo $v(t) = 16 - 4t$ (m/s, $t \\ge 0$). Xét các mệnh đề sau:",
        statements: [
          { text: "Xe dừng hẳn tại $t = 4$ giây (khi $v(4) = 0$).", answer: "Đúng" },
          { text: "Quãng đường hãm phanh là $S = \\int_0^4 (16-4t)\\,dt$.", answer: "Đúng" },
          { text: "$S = [16t - 2t^2]_0^4 = 64 - 32 = 32$ mét.", answer: "Đúng" },
          { text: "Nếu vận tốc ban đầu tăng gấp đôi ($32$ m/s), quãng đường hãm phanh cũng tăng gấp đôi.", answer: "Sai" }
        ]
      },
      {
        context: "Nước chảy vào bể với tốc độ $Q(t) = 6t - t^2$ (lít/phút, $0 \\le t \\le 6$). Xét các mệnh đề sau:",
        statements: [
          { text: "Tốc độ nước chảy lớn nhất tại $t = 3$ phút với $Q(3) = 9$ lít/phút.", answer: "Đúng" },
          { text: "Tổng lượng nước trong $6$ phút: $S = \\int_0^6 (6t-t^2)\\,dt = \\left[3t^2 - \\dfrac{t^3}{3}\\right]_0^6 = 108 - 72 = 36$ lít.", answer: "Đúng" },
          { text: "Lượng nước trong $3$ phút đầu: $\\int_0^3 (6t-t^2)\\,dt = 18$ lít, bằng đúng nửa tổng $6$ phút.", answer: "Đúng" },
          { text: "Lượng nước trong $3$ phút cuối nhiều hơn $3$ phút đầu.", answer: "Sai" }
        ]
      },
      {
        context: "Thuốc kháng sinh được truyền tnh mạch với tốc độ $R(t) = 50e^{-0{,}1t}$ (mg/giờ, $t \\ge 0$). Xét các mệnh đề sau:",
        statements: [
          { text: "Lượng thuốc đưa vào trong $[0; t]$ giờ là $A(t) = \\int_0^t 50e^{-0{,}1s}\\,ds = 500(1 - e^{-0{,}1t})$.", answer: "Đúng" },
          { text: "Khi $t \\to +\\infty$, lượng thuốc tối đa có thể đưa vào cơ thể (theo mô hình) là $500$ mg.", answer: "Đúng" },
          { text: "Lượng thuốc sau $10$ giờ $\\approx 500(1 - e^{-1}) \\approx 316$ mg.", answer: "Đúng" },
          { text: "Tốc độ truyền thuốc không thay đổi theo thời gian.", answer: "Sai" }
        ]
      },
      {
        context: "Công ty A bán hàng với doanh thu biên $R'(x) = 100 - 0{,}4x$ (đồng/sản phẩm), chi phí biên $C'(x) = 20 + 0{,}2x$ (đồng/sản phẩm). Xét các mệnh đề:",
        statements: [
          { text: "Lợi nhuận biên $P'(x) = R'(x) - C'(x) = 80 - 0{,}6x$.", answer: "Đúng" },
          { text: "Lợi nhuận tối đa khi $P'(x) = 0$, tức $x = \\dfrac{80}{0{,}6} \\approx 133$ sản phẩm.", answer: "Đúng" },
          { text: "Tổng lợi nhuận khi sản xuất $100$ sản phẩm: $P(100) = \\int_0^{100} (80-0{,}6x)\\,dx = 5000$ đồng.", answer: "Đúng" },
          { text: "Sản xuất càng nhiều hàng, lợi nhuận căng tăng.", answer: "Sai" }
        ]
      },
      {
        context: "Một ô tô tăng tốc từ trạng thái nghỉ với gia tốc $a(t) = 4 - 0{,}5t$ (m/s², $0 \\le t \\le 8$). Xét các mệnh đề:",
        statements: [
          { text: "Vận tốc tại $t$: $v(t) = \\int_0^t a(s)\\,ds = 4t - 0{,}25t^2$.", answer: "Đúng" },
          { text: "Vận tốc lớn nhất đạt tại $t = 8$ giây và bằng $v(8) = 16$ m/s.", answer: "Đúng" },
          { text: "Quãng đường đi được trong $8$ giây: $S = \\int_0^8 (4t - 0{,}25t^2)\\,dt = \\dfrac{256}{3} \\approx 85{,}3$ mét.", answer: "Đúng" },
          { text: "Quãng đường trong $4$ giây đầu bằng đúng nửa quãng đường $8$ giây.", answer: "Sai" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Tính $\\int_0^1 (2x^3 + 3x^2 - 1) dx$.", answer: "$\\frac{3}{2}$" },
        { text: "Diện tích hình phẳng giới hạn bởi $y = x^2$ và $y = 2x$ bằng bao nhiêu?", answer: "$\\frac{4}{3}$" },
        { text: "Tính $F(x)$ biết $F'(x) = e^x - 1$ và $F(0) = 2$.", answer: "$e^x - x + 1$" },
        { text: "Một hồ bơi hình chữ nhật dài $25$m, rộng $10$m, sâu tuyến tính từ $1$m đến $3$m. Tính thể tích nước khi đầy (dùng tích phân).", answer: "$500$ m³" }
      ],
      "Vận dụng": [
        { text: "Một vật chuyển động với gia tốc $a(t) = 6t - 2$ (m/s²). Biết $v(0) = 3$ m/s. Vận tốc của vật lúc $t = 2$ giây là bao nhiêu?", answer: "11 m/s" },
        { text: "Tính thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y = x^2$, trục hoành và đường $x = 2$ xung quanh trục $Ox$.", answer: "$\\frac{32\\pi}{5}$" },
        { text: "Tính $\\int_0^{\\pi} x\\sin x\\, dx$.", answer: "$\\pi$" },
        { text: "Lũ lụt chảy qua đập với lưu lượng $Q(t) = 200t\\,e^{-0{,}5t}$ (m³/phút). Tổng lượng nước trong $10$ phút đầu xấp xỉ bao nhiêu m³?", answer: "$\\approx 786$ m³" }
      ],
      "Vận dụng cao": [
        { text: "Cho hàm $f(x)$ liên tục và $f(x) + f(1-x) = 1$. Tính $I = \\int_0^1 f(x)dx$.", answer: "$\\frac{1}{2}$" },
        { text: "Vi khuẩn sinh sôi theo quy luật $N(t) = 1000 e^{0{,}2t}$. Sau 10 giờ số vi khuẩn là bao nhiêu (làm tròn đến hàng đơn vị)?", answer: "$7389$" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // SỐ PHỨC
  // ──────────────────────────────────────────────────────────
  "Số phức": {
    nlc: {
      "Nhận biết": [
        { text: "Số phức liên hợp của $z = 3 - 2i$ là:", options: ["$3 + 2i$", "$-3 - 2i$", "$-3 + 2i$", "$3 - 2i$"], answer: 'A' },
        { text: "Mô-đun của số phức $z = 1 + i\\sqrt{3}$ bằng:", options: ["$1$", "$2$", "$4$", "$\\sqrt{2}$"], answer: 'B' },
        { text: "Phần thực và phần ảo của số phức $z = -5 + 3i$ lần lượt là:", options: ["$-5$ và $3$", "$5$ và $3$", "$-5$ và $3i$", "$5$ và $3i$"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Tính $z = (2 + 3i)(1 - i)$:", options: ["$5 + i$", "$5 - i$", "$-1 + i$", "$1 + 5i$"], answer: 'A' },
        { text: "Tìm $z$ biết $z + 2\\bar{z} = 6 + 3i$:", options: ["$z = 2 + 1i$", "$z = 2 - 3i$", "$-2 + 3i$", "$-2 - 3i$"], answer: 'B' },
        { text: "Tính $z = \\dfrac{1 + i}{1 - i}$:", options: ["$i$", "$-i$", "$1$", "$-1$"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "Tìm tất cả số phức $z$ thỏa mãn $z^2 + z + 1 = 0$:", options: ["$z = \\dfrac{-1 \\pm i\\sqrt{3}}{2}$", "$z = \\dfrac{1 \\pm i\\sqrt{3}}{2}$", "$z = \\pm i\\sqrt{3}$", "$z = -1 \\pm i\\sqrt{3}$"], answer: 'A' },
        { text: "Cho $z_1 = 1 + 2i$, $z_2 = 3 - i$. Tính $|z_1 + z_2|$:", options: ["$\\sqrt{17}$", "$5$", "$\\sqrt{5}$", "$\\sqrt{10}$"], answer: 'A' },
        { text: "Tìm số phức $z$ thỏa mãn $|z| = 2$ và $z^2$ là số thực dương:", options: ["$z = \\pm 2$", "$z = \\pm 2i$", "$z = 2+2i$", "$z = 1+i$"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Cho số phức $z = 2 + 3i$. Xét các mệnh đề sau:",
        statements: [
          { text: "Phần thực của $z$ là $2$.", answer: "Đúng" },
          { text: "Mô-đun của $z$ là $\\sqrt{13}$.", answer: "Đúng" },
          { text: "Số phức liên hợp $\\bar{z} = 2 - 3i$.", answer: "Đúng" },
          { text: "$z \\cdot \\bar{z} = 9$.", answer: "Sai" }
        ]
      },
      {
        context: "Trong kỹ thuật điện xoay chiều, tổng trở 2 linh kiện mắc nối tiếp là $Z = Z_1 + Z_2$ với $Z_1 = 4 + 3i$ ($\\Omega$) và $Z_2 = 2 - i$ ($\\Omega$). Xét các mệnh đề:",
        statements: [
          { text: "Tổng trở $Z = 6 + 2i$ ($\\Omega$).", answer: "Đúng" },
          { text: "Phần thực $6$ ($\\Omega$) là điện trở thuần tổng cộng.", answer: "Đúng" },
          { text: "Mô-đun tổng trở $|Z| = \\sqrt{36 + 4} = 2\\sqrt{10}$ ($\\Omega$).", answer: "Đúng" },
          { text: "Dòng điện qua mạch sớm pha hơn điện áp.", answer: "Sai" }
        ]
      },
      {
        context: "Tín hiệu sóng vô tuyến được biểu diễn dưới dạng số phức $S = 5e^{i\\pi/3}$. Xét các mệnh đề:",
        statements: [
          { text: "Biên độ tín hiệu là $|S| = 5$.", answer: "Đúng" },
          { text: "Pha ban đầu của tín hiệu là $\\dfrac{\\pi}{3}$ radian $= 60°$.", answer: "Đúng" },
          { text: "Dạng đại số: $S = 5\\cos\\dfrac{\\pi}{3} + 5i\\sin\\dfrac{\\pi}{3} = \\dfrac{5}{2} + \\dfrac{5\\sqrt{3}}{2}i$.", answer: "Đúng" },
          { text: "Nếu nhân $S$ với $e^{i\\pi/6}$, biên độ tín hiệu tăng gấp đôi.", answer: "Sai" }
        ]
      },
      {
        context: "Cho hai số phức $z_1 = 1 + i$ và $z_2 = 1 - i$. Xét các mệnh đề sau:",
        statements: [
          { text: "$z_1 + z_2 = 2$ (là số thực).", answer: "Đúng" },
          { text: "$z_1 \\cdot z_2 = 2$ (là số thực).", answer: "Đúng" },
          { text: "$|z_1| = |z_2| = \\sqrt{2}$.", answer: "Đúng" },
          { text: "$z_1^2 = 2i$.", answer: "Đúng" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Tính mô-đun của số phức $z = (1 + i)^4$.", answer: "4" },
        { text: "Tìm phần thực của số phức $z = \\dfrac{3 + 4i}{2 - i}$.", answer: "$\\frac{2}{5}$" },
        { text: "Số phức $z = a + bi$ thỏa mãn $z + \\bar{z} = 4$ và $z \\cdot \\bar{z} = 13$. Tính $|b|$.", answer: "3" },
        { text: "Trong kỹ thuật điện, điện trở phức $Z = 3 + 4i$ ($\\Omega$). Tính tổng trở $|Z|$.", answer: "$5$ $\\Omega$" },
        { text: "Máy đo dao động ký hiển thị tín hiệu $S = 10e^{i\\pi/4}$. Tính biên độ tín hiệu.", answer: "$10$" }
      ],
      "Vận dụng": [
        { text: "Cho $z = \\cos\\theta + i\\sin\\theta$. Tính $|z^n|$ với mọi $n \\in \\mathbb{N}^*$.", answer: "1" },
        { text: "Tìm tổng tất cả các giá trị thực của $m$ để $z = \\dfrac{m+1}{m-2} + (m^2-4)i$ là số thực.", answer: "2" },
        { text: "Mạch điện xoay chiều có $Z_1 = 5 + 2i$ và $Z_2 = 3 - i$ mắc nối tiếp. Tính tổng trở $|Z_1 + Z_2|$.", answer: "$\\sqrt{65}$ $\\Omega$" },
        { text: "Hai ăng-ten phát tín hiệu $S_1 = 3 + 4i$ và $S_2 = -1 + 2i$. Tín hiệu tổng hợp $S = S_1 + S_2$. Tính biên độ tín hiệu tổng hợp $|S|$.", answer: "$2\\sqrt{10}$" }
      ],
      "Vận dụng cao": [
        { text: "Giải phương trình $z^2 - (3+i)z + (2+3i) = 0$ trong tập số phức. Tính tổng mô-đun hai nghiệm.", answer: "$\\sqrt{5} + \\sqrt{5} = 2\\sqrt{5}$" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // MŨ - LOGARIT
  // ──────────────────────────────────────────────────────────
  "Hàm số mũ - Hàm số Logarit": {
    nlc: {
      "Nhận biết": [
        { text: "Cho $\\log_2 3 = a$. Tính $\\log_2 12$ theo $a$:", options: ["$a + 2$", "$a + 1$", "$2a$", "$a^2$"], answer: 'A' },
        { text: "Giải phương trình $4^x = 8$:", options: ["$x = \\dfrac{3}{2}$", "$x = 2$", "$x = 3$", "$x = \\dfrac{2}{3}$"], answer: 'A' },
        { text: "Rút gọn biểu thức $\\log_3 81 - \\log_3 9$:", options: ["$2$", "$3$", "$1$", "$4$"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Giải phương trình $2^{x+1} + 2^x = 3$:", options: ["$x = 0$", "$x = 1$", "$x = -1$", "$x = 2$"], answer: 'A' },
        { text: "Giải bất phương trình $\\log_{0{,}5}(x-1) > -2$:", options: ["$1 < x < 5$", "$x < 5$", "$x > 1$", "$1 < x < 3$"], answer: 'A' },
        { text: "Tính $P = 5^{\\log_5 3} + \\log_2 4 - \\ln e^2$:", options: ["$3$", "$5$", "$2$", "$1$"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "Giải phương trình $\\log_2(x^2 - 5x + 6) = 1$:", options: ["$x=1$ hoặc $x=4$", "$x=2$ hoặc $x=3$", "$x=0$ hoặc $x=5$", "$Vô nghiệm$"], answer: 'A' },
        { text: "Tìm tập nghiệm của $9^x - 4 \\cdot 3^x + 3 \\le 0$:", options: ["$[0; 1]$", "$(0; 1)$", "$[1; 3]$", "$\\mathbb{R}$"], answer: 'A' },
        { text: "Cho $a = \\log 2$, $b = \\log 3$. Tính $\\log_{15} 12$ theo $a, b$:", options: ["$\\dfrac{2a+b}{1-a+b}$", "$\\dfrac{a+2b}{1-a+b}$", "$\\dfrac{2a+b}{a+b}$", "$\\dfrac{a+b}{1-a}$"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Xét hàm số $f(x) = \\log_2(x^2 - 4x + 3)$. Xét các mệnh đề sau:",
        statements: [
          { text: "Điều kiện xác định: $x < 1$ hoặc $x > 3$.", answer: "Đúng" },
          { text: "$f(0) = 0$.", answer: "Sai" },
          { text: "Hàm số nghịch biến trên khoảng $(-\\infty; 1)$.", answer: "Đúng" },
          { text: "$f(5) = \\log_2 8 = 3$.", answer: "Đúng" }
        ]
      },
      {
        context: "Một loại vi khuẩn sinh đôi sau mỗi giờ. Ban đầu có $N_0 = 100$ con. Xét các mệnh đề sau:",
        statements: [
          { text: "Sau $t$ giờ, số vi khuẩn là $N(t) = 100 \\cdot 2^t$.", answer: "Đúng" },
          { text: "Sau 3 giờ, có $800$ con vi khuẩn.", answer: "Đúng" },
          { text: "Để có $3200$ con, cần $4$ giờ.", answer: "Sai" },
          { text: "Thời gian để có $6400$ con là $\\log_2 64 = 6$ giờ.", answer: "Đúng" }
        ]
      },
      {
        context: "Người mua căn hộ trị giá $2$ tỷ đồng, phải trả góp hằng năm với lãi suất không đổi $8\\%$/năm. Sau khi trả khoản đầu tiên, số tiền còn nợ biến thiên theo mô hình mũ $D(n) = 2{,}16 \\cdot (1{,}08)^n - C$ (tỷ đồng). Xét các mệnh đề:",
        statements: [
          { text: "Mô hình $D(n)$ dựa trên cấp số nhân với công bội $q = 1{,}08 > 1$.", answer: "Đúng" },
          { text: "Nếu không trả thêm, khoản nợ tăng $8\\%$ mỗi năm.", answer: "Đúng" },
          { text: "Sau $9$ năm (biết $\\log_{1{,}08} 2 \\approx 9$), nếu không trả, khoản nợ gốc tăng gấp khoảng $2$ lần.", answer: "Đúng" },
          { text: "Lãi năm đầu tiên trên khoản nợ $2$ tỷ là $100$ triệu đồng.", answer: "Sai" }
        ]
      },
      {
        context: "Dịch cúm lây lan trong cộng đồng $P(t) = \\dfrac{5000}{1 + 999 \\cdot e^{-0{,}5t}}$ người nhiễm sau $t$ ngày. Xét các mệnh đề:",
        statements: [
          { text: "$P(0) = \\dfrac{5000}{1 + 999} = 5$ người nhiễm ban đầu.", answer: "Đúng" },
          { text: "$\\lim_{t \\to +\\infty} P(t) = 5000$: dịch bão hòa $5000$ người.", answer: "Đúng" },
          { text: "Mô hình logistic này tăng nhanh nhất khi $P = 2500$ người.", answer: "Đúng" },
          { text: "Sau $20$ ngày, dịch đã lây lan với tốc độ nhanh như ngày đầu tiên.", answer: "Sai" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Tính $A = \\log_2 4 + \\log_4 16 - \\log_8 64$.", answer: "$1$" },
        { text: "Giải phương trình $3^{x-1} = 27$. Tìm $x$.", answer: "4" },
        { text: "Vi khuẩn nhân đôi mỗi $3$ giờ. Ban đầu có $200$ con. Sau $12$ giờ có bao nhiêu con?", answer: "$3200$ con" }
      ],
      "Vận dụng": [
        { text: "Đầu tư 50 triệu đồng với lãi suất $8\\%$/năm (lãi kép). Sau bao nhiêu năm (nguyên) thì số tiền vượt 100 triệu? (Biết $\\log_{1{,}08} 2 \\approx 9$)", answer: "9 năm" },
        { text: "Chất phóng xạ giảm theo $A(t) = A_0 \\cdot e^{-0{,}02t}$. Sau bao lâu còn $50\\%$ ban đầu? ($\\ln 2 \\approx 0{,}693$)", answer: "$\\approx 34{,}7$ năm" }
      ],
      "Vận dụng cao": [
        { text: "Tìm số nguyên dương $n$ nhỏ nhất để $(1{,}05)^n > 2$. (Biết $\\log 1{,}05 \\approx 0{,}02119$)", answer: "15" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // HÌNH HỌC KHÔNG GIAN - KHỐI ĐA DIỆN
  // ──────────────────────────────────────────────────────────
  "Khối đa diện": {
    nlc: {
      "Nhận biết": [
        { text: "Khối lăng trụ tứ giác đều có tất cả bao nhiêu cạnh?", options: ["8", "10", "12", "16"], answer: 'C' },
        { text: "Công thức tính thể tích khối chóp là ($S$: diện tích đáy, $h$: chiều cao):", options: ["$V = Sh$", "$V = \\dfrac{1}{3} Sh$", "$V = \\dfrac{1}{2} Sh$", "$V = 3Sh$"], answer: 'B' },
        { text: "Lăng trụ đứng đáy là tam giác vuông (cạnh $3, 4$), chiều cao $5$. Thể tích là:", options: ["30", "60", "20", "15"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Khối hộp chữ nhật có ba kích thước $2, 3, 4$. Thể tích là:", options: ["24", "9", "26", "52$ (S_{tp})$"], answer: 'A' },
        { text: "Tứ diện đều cạnh $a$ có thể tích bằng:", options: ["$\\dfrac{a^3\\sqrt{2}}{12}$", "$\\dfrac{a^3\\sqrt{3}}{12}$", "$\\dfrac{a^3\\sqrt{2}}{4}$", "$\\dfrac{a^3}{3}$"], answer: 'A' },
        { text: "Mặt phẳng qua cạnh đáy lăng trụ và đỉnh đối diện chia lăng trụ thành:", options: ["Một khối chóp tam giác và một khối chóp tứ giác", "Hai khối chóp tam giác", "Hai khối lăng trụ tam giác", "Ba khối chóp tam giác"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Cho khối chóp $S.ABCD$ với $ABCD$ là hình vuông cạnh $2a$, $SA \\perp (ABCD)$ và $SA = 2a$. Xét các mệnh đề sau:",
        statements: [
          { text: "Thể tích khối chóp là $V = \\dfrac{8a^3}{3}$.", answer: "Đúng" },
          { text: "$SC = \\sqrt{SA^2 + AC^2} = 2a\\sqrt{3}$.", answer: "Đúng" },
          { text: "Đường cao $SH$ từ $S$ đến $(ABCD)$ có độ dài $2a$.", answer: "Đúng" },
          { text: "Tam giác $SAB$ vuông cân.", answer: "Đúng" }
        ]
      },
      {
        context: "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều cạnh $2$ và chiều cao $AA' = 3$. Xét các mệnh đề sau:",
        statements: [
          { text: "Diện tích đáy tam giác đều cạnh $2$ là $\\sqrt{3}$.", answer: "Đúng" },
          { text: "Thể tích lăng trụ là $3\\sqrt{3}$.", answer: "Đúng" },
          { text: "Độ dài $AC' = \\sqrt{AC^2 + CC'^2} = \\sqrt{4+9} = \\sqrt{13}$.", answer: "Đúng" },
          { text: "Diện tích xung quanh lăng trụ là $18$.", answer: "Đúng" }
        ]
      },
      {
        context: "Một nhà kho dạng lăng trụ đứng, đáy là tam giác vuông có hai cạnh góc vuông $6$m và $8$m, chiều cao nhà kho $4$m. Xét các mệnh đề:",
        statements: [
          { text: "Diện tích đáy nhà kho là $\\dfrac{1}{2} \\cdot 6 \\cdot 8 = 24$ m².", answer: "Đúng" },
          { text: "Thể tích nhà kho là $V = 24 \\times 4 = 96$ m³.", answer: "Đúng" },
          { text: "Cạnh huyền của đáy là $\\sqrt{36 + 64} = 10$ m.", answer: "Đúng" },
          { text: "Diện tích toàn phần nhà kho (gồm 2 đáy + 3 mặt bên) là $48 + 96 = 144$ m².", answer: "Sai" }
        ]
      },
      {
        context: "Một đống cát hình chóp tứ giác đều có cạnh đáy $4$m, chiều cao $3$m. Xét các mệnh đề:",
        statements: [
          { text: "Diện tích đáy $S = 4^2 = 16$ m².", answer: "Đúng" },
          { text: "Thể tích đống cát là $V = \\dfrac{1}{3} \\cdot 16 \\cdot 3 = 16$ m³.", answer: "Đúng" },
          { text: "Nếu khối lượng riêng cát là $1{,}5$ tấn/m³, đống cát nặng $24$ tấn.", answer: "Đúng" },
          { text: "Nếu tăng chiều cao gấp đôi (giữ nguyên đáy), thể tích tăng gấp $4$ lần.", answer: "Sai" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Cho khối hộp chữ nhật có thể tích $60$ cm³ và diện tích đáy $12$ cm². Tính chiều cao.", answer: "5 cm" },
        { text: "Khối lăng trụ tam giác đều có cạnh đáy $a = 4$ và chiều cao $h = 6$. Tính thể tích.", answer: "$24\\sqrt{3}$" },
        { text: "Tứ diện đều $ABCD$ có cạnh $a$. Thể tích bằng $\\dfrac{a^3}{6\\sqrt{2}}$. Với $a = 2$, thể tích bằng bao nhiêu?", answer: "$\\dfrac{2\\sqrt{2}}{3}$" },
        { text: "Một thùng carton hình hộp chữ nhật dài $50$cm, rộng $30$cm, cao $20$cm. Thể tích thùng là bao nhiêu lít?", answer: "$30$ lít" }
      ],
      "Vận dụng": [
        { text: "Cho khối chóp $S.ABC$ có đáy là tam giác vuông tại $B$ với $AB = 3$, $BC = 4$. Biết $SA = SB = SC$ và $SA = 5$. Tính thể tích khối chóp.", answer: "10" },
        { text: "Một bể chứa nước dạng khối hộp chữ nhật đáy vuông cạnh $3$m, chiều cao $2$m. Người ta thả vào bể một khối cầu bán kính $0{,}5$m. Thể tích nước tối đa bể chứa được (không tràn) là bao nhiêu m³?", answer: "$18 - \\dfrac{\\pi}{6}$" },
        { text: "Một kim tự tháp dạng chóp tứ giác đều cạnh đáy $230$m, chiều cao $146$m. Tính thể tích (triệu m³).", answer: "$\\approx 2{,}57$ triệu m³" }
      ],
      "Vận dụng cao": [
        { text: "Cho khối chóp tứ giác đều $S.ABCD$ cạnh đáy $a$, góc giữa mặt bên và đáy là $60°$. Tính tỉ số $V_1 / V_2$ biết $V_1$ là thể tích khối cầu ngoại tiếp, $V_2$ là thể tích khối chóp.", answer: "$\\dfrac{\\pi\\sqrt{3}}{2}$" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // HÌNH HỌC KHÔNG GIAN - MẶT TRÒN XOAY
  // ──────────────────────────────────────────────────────────
  "Mặt cầu - Hình trụ - Hình nón": {
    nlc: {
      "Nhận biết": [
        { text: "Hình trụ có $r = 3, h = 5$. Diện tích xung quanh là:", options: ["$15\\pi$", "$30\\pi$", "$45\\pi$", "$20\\pi$"], answer: 'B' },
        { text: "Thể tích khối cầu bán kính $R$ là:", options: ["$V = \\dfrac{4}{3}\\pi R^3$", "$V = 4\\pi R^2$", "$V = \\pi R^3$", "$V = \\dfrac{1}{3}\\pi R^3$"], answer: 'A' },
        { text: "Hình nón có $r = 4, h = 3$. Độ dài đường sinh $l$ là:", options: ["5", "7", "25", "$\\sqrt{7}$"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Hình nón có $r = 6, l = 10$. Thể tích khối nón là:", options: ["$96\\pi$", "$120\\pi$", "$288\\pi$", "$360\\pi$"], answer: 'A' },
        { text: "Mặt cầu ngoại tiếp hình hộp chữ nhật $2 \\times 4 \\times 4$ có bán kính:", options: ["3", "6", "9", "$\\sqrt{6}$"], answer: 'A' },
        { text: "Diện tích toàn phần hình trụ đường kính 6, chiều cao 8 là:", options: ["$66\\pi$", "$48\\pi$", "$54\\pi$", "$84\\pi$"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Cho khối cầu có phương trình $(x-1)^2 + (y+2)^2 + z^2 = 25$. Xét các mệnh đề sau:",
        statements: [
          { text: "Tâm mặt cầu là $I(1; -2; 0)$.", answer: "Đúng" },
          { text: "Bán kính mặt cầu là $R = 5$.", answer: "Đúng" },
          { text: "Điểm $A(4; 2; 0)$ nằm trên mặt cầu.", answer: "Sai" },
          { text: "Thể tích khối cầu là $\\dfrac{500\\pi}{3}$.", answer: "Đúng" }
        ]
      },
      {
        context: "Cho hình trụ có bán kính đáy $r = 2$ và chiều cao $h = 5$. Xét các mệnh đề sau:",
        statements: [
          { text: "Diện tích đáy hình trụ là $4\\pi$.", answer: "Đúng" },
          { text: "Diện tích xung quanh là $20\\pi$.", answer: "Đúng" },
          { text: "Thể tích hình trụ là $25\\pi$.", answer: "Sai" },
          { text: "Diện tích toàn phần là $28\\pi$.", answer: "Đúng" }
        ]
      },
      {
        context: "Một lon nước ngọt hình trụ có đường kính $6{,}6$ cm và chiều cao $12{,}2$ cm. Xét các mệnh đề:",
        statements: [
          { text: "Bán kính đáy lon là $r = 3{,}3$ cm.", answer: "Đúng" },
          { text: "Thể tích lon là $V = \\pi \\cdot (3{,}3)^2 \\cdot 12{,}2 \\approx 417$ cm³ $\\approx 417$ ml.", answer: "Đúng" },
          { text: "Diện tích nhôm cần để làm lon (gồm xung quanh + 2 đáy) là $S_{tp} = 2\\pi r(r + h) \\approx 321$ cm².", answer: "Đúng" },
          { text: "Nếu tăng đường kính gấp đôi (giữ chiều cao), thể tích tăng gấp $2$ lần.", answer: "Sai" }
        ]
      },
      {
        context: "Một quả bóng rổ tiêu chuẩn có chu vi $C \\approx 75$ cm. Coi bóng là hình cầu. Xét các mệnh đề:",
        statements: [
          { text: "Bán kính bóng là $R = \\dfrac{C}{2\\pi} = \\dfrac{75}{2\\pi} \\approx 11{,}94$ cm.", answer: "Đúng" },
          { text: "Diện tích bề mặt quả bóng $S = 4\\pi R^2 \\approx 1790$ cm².", answer: "Đúng" },
          { text: "Thể tích không khí trong bóng $V = \\dfrac{4}{3}\\pi R^3 \\approx 7124$ cm³.", answer: "Đúng" },
          { text: "Nếu bơm thêm để chu vi tăng $10\\%$, thể tích tăng khoảng $10\\%$.", answer: "Sai" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Một hình nón có bán kính đáy $r = 3$ và chiều cao $h = 4$. Tính thể tích hình nón.", answer: "$12\\pi$" },
        { text: "Khối cầu có đường kính $d = 6$. Tính diện tích mặt cầu.", answer: "$36\\pi$" },
        { text: "Hình trụ đường kính đáy $4$ và chiều cao $3$. Tính thể tích.", answer: "$12\\pi$" },
        { text: "Bể bơi hình trụ đường kính $4$m, sâu $1{,}5$m. Tính thể tích nước khi đầy (m³).", answer: "$6\\pi \\approx 18{,}85$ m³" }
      ],
      "Vận dụng": [
        { text: "Một cái nón lá hình nón có bán kính $r = 15$ cm, đường sinh $l = 30$ cm. Tính diện tích bề mặt (xung quanh) nón.", answer: "$450\\pi$ cm²" },
        { text: "Cho hình trụ nội tiếp khối cầu bán kính $R$. Khi chiều cao hình trụ $h = R\\sqrt{2}$, tính tỉ số thể tích hình trụ / hình cầu.", answer: "$\\dfrac{\\sqrt{2}}{4}$" },
        { text: "Một xô nước hình nón cụt (miệng rộng hơn đáy): đáy dưới $r_1 = 10$cm, miệng $r_2 = 15$cm, cao $h = 25$cm. Tính thể tích nước đầy xô.", answer: "$\\approx 12763$ cm³" }
      ],
      "Vận dụng cao": [
        { text: "Một bình nước hình nón cụt (bỏ phần đỉnh) có đường kính đáy lớn $20$cm, đáy nhỏ $10$cm, chiều cao $15$cm. Thể tích nước chứa tối đa (đến hàng đơn vị, dùng $\\pi \\approx 3{,}14$) là bao nhiêu cm³?", answer: "$5497$ cm³" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // XÁC SUẤT
  // ──────────────────────────────────────────────────────────
  "Xác suất": {
    nlc: {
      "Nhận biết": [
        { text: "Xác suất xuất hiện mặt chẵn khi tung xúc xắc cân đối là:", options: ["$1/2$", "$1/3$", "$1/6$", "$2/3$"], answer: 'A' },
        { text: "Rút 1 lá từ bộ bài 52 lá. Xác suất rút được lá Át (Ace) là:", options: ["$1/13$", "$1/52$", "$4/13$", "$1/4$"], answer: 'A' },
        { text: "Tung đồng xu 3 lần. Xác suất cả 3 lần đều ngửa là:", options: ["$1/8$", "$1/4$", "$1/2$", "$1/6$"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Hộp có 5 đỏ, 3 xanh. Lấy 2 bóng. Xác suất 2 bóng cùng màu là:", options: ["$13/28$", "$10/28$", "$3/28$", "$1/2$"], answer: 'A' },
        { text: "Tung 2 xúc xắc. Xác suất tổng số chấm bằng 7 là:", options: ["$1/6$", "$1/12$", "$1/36$", "$5/36$"], answer: 'A' },
        { text: "Đoán mò 4 câu trắc nghiệm (mỗi câu 4 đáp án). XS đúng ít nhất 3 câu là:", options: ["$13/256$", "$1/256$", "$12/256$", "$1/4$"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "Có 6 nam, 4 nữ. Chọn 3 người. Xác suất có ít nhất 1 nữ là:", options: ["$5/6$", "$1/6$", "$1/2$", "$2/3$"], answer: 'A' },
        { text: "Hai xạ thủ bắn độc lập. $P(A)=0{,}8; P(B)=0{,}7$. XS ít nhất 1 người trúng là:", options: ["$0{,}94$", "$0{,}56$", "$0{,}15$", "$0{,}8$"], answer: 'A' },
        { text: "Kho có 100 SP (5 lỗi). Lấy 3 SP. Xác suất có ít nhất 1 lỗi là:", options: ["$1 - \\dfrac{C_{95}^3}{C_{100}^3}$", "$\\dfrac{C_5^3}{C_{100}^3}$", "$0{,}05$", "$0{,}15$"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Tung một đồng xu cân đối 4 lần. Gọi $X$ là số lần xuất hiện mặt ngửa. Xét các mệnh đề sau:",
        statements: [
          { text: "$P(X = 0) = \\left(\\dfrac{1}{2}\\right)^4 = \\dfrac{1}{16}$.", answer: "Đúng" },
          { text: "$P(X = 2) = C_4^2 \\cdot \\left(\\dfrac{1}{2}\\right)^4 = \\dfrac{3}{8}$.", answer: "Đúng" },
          { text: "$P(X \\ge 1) = 1 - P(X=0) = \\dfrac{15}{16}$.", answer: "Đúng" },
          { text: "Xác suất để số lần ngửa nhiều hơn sấp là $P(X > 2) = \\dfrac{5}{16}$.", answer: "Đúng" }
        ]
      },
      {
        context: "Trong một lớp 30 học sinh (18 nam, 12 nữ). Chọn ngẫu nhiên 2 học sinh. Xét các mệnh đề sau:",
        statements: [
          { text: "Số cách chọn 2 học sinh bất kỳ là $C_{30}^2 = 435$.", answer: "Đúng" },
          { text: "Xác suất chọn được 2 nam là $\\dfrac{C_{18}^2}{C_{30}^2} = \\dfrac{153}{435}$.", answer: "Đúng" },
          { text: "Xác suất chọn được đúng 1 nam 1 nữ là $\\dfrac{C_{18}^1 \\cdot C_{12}^1}{C_{30}^2} = \\dfrac{216}{435}$.", answer: "Đúng" },
          { text: "Xác suất chọn được ít nhất 1 nữ là $\\dfrac{1}{2}$.", answer: "Sai" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Tung đồng xu 5 lần. Tính xác suất xuất hiện đúng 3 lần mặt ngửa.", answer: "$\\dfrac{5}{16}$" },
        { text: "Hộp có 4 bóng đỏ, 3 bóng xanh. Rút ngẫu nhiên 2 bóng. Xác suất 2 bóng khác màu bằng bao nhiêu?", answer: "$\\dfrac{4}{7}$" },
        { text: "Xác suất để một sản phẩm bị lỗi là $0{,}03$. Trong 100 sản phẩm, xác suất để không có sản phẩm nào bị lỗi là bao nhiêu? (Làm tròn 4 chữ số thập phân)", answer: "$0{,}0476$" }
      ],
      "Vận dụng": [
        { text: "Hai máy A và B hoạt động độc lập. XS máy A hỏng trong ngày là $0{,}1$; máy B là $0{,}15$. Tính XS để ít nhất một máy hỏng trong ngày.", answer: "$0{,}235$" },
        { text: "Trong một lần bắn, xạ thủ trúng đích với xác suất $0{,}8$. Bắn 3 lần. Tính XS trúng ít nhất 2 lần.", answer: "$0{,}896$" }
      ],
      "Vận dụng cao": [
        { text: "Trong kỳ thi, một thí sinh có xác suất đỗ môn Toán là $0{,}8$ và môn Văn là $0{,}7$ (hai môn độc lập). Tính xác suất đỗ cả hai môn.", answer: "$0{,}56$" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // DÃY SỐ - CẤP SỐ CỘNG - CẤP SỐ NHÂN
  // ──────────────────────────────────────────────────────────
  "Dãy số - Cấp số cộng - Cấp số nhân": {
    nlc: {
      "Nhận biết": [
        { text: "Cấp số cộng $u_1 = 2, d = 3$. Số hạng $u_{10}$ là:", options: ["29", "27", "32", "20"], answer: 'A' },
        { text: "Cấp số nhân $u_1 = 5, q = 2$. Số hạng $u_5$ là:", options: ["80", "40", "160", "20"], answer: 'A' },
        { text: "Dãy số $1, 4, 9, 16, 25, ...$ có $u_n$ là:", options: ["$n^2$", "$2n$", "$2^n$", "$n+1$"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Tổng 20 số hạng đầu của CSC $3, 7, 11, ...$ là:", options: ["820", "800", "780", "900$"], answer: 'A' },
        { text: "CSN $u_1 = 3, u_4 = 24$. Công bội $q$ là:", options: ["2", "3", "4", "1,5"], answer: 'A' },
        { text: "Ba số $x, x+4, x+12$ lập thành CSN. Tìm $x$:", options: ["$x = 4$", "$x = 2$", "$x = 8$", "$x = 0$"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "Cầu thang 12 bậc. Bậc 1 cao 10cm, mỗi bậc sau cao hơn 2cm. Tổng chiều cao là:", options: ["252 cm", "240 cm", "210 cm", "300 cm"], answer: 'A' },
        { text: "Gửi 10 triệu lãi kép $6\\%$/năm. Sau 5 năm có bao nhiêu (triệu)?", options: ["13,4", "13", "14", "12,6"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Cho cấp số cộng $(u_n)$ với $u_1 = 4, d = -2$. Xét các mệnh đề sau:",
        statements: [
          { text: "$u_n = 4 + (n-1)(-2) = 6 - 2n$.", answer: "Đúng" },
          { text: "$u_{10} = -14$.", answer: "Đúng" },
          { text: "Tổng 10 số hạng đầu $S_{10} = -50$.", answer: "Sai" },
          { text: "Số hạng đầu tiên âm là $u_4 = -2$.", answer: "Sai" }
        ]
      },
      {
        context: "Cho cấp số nhân $(v_n)$ với $v_1 = 1, q = 3$. Xét các mệnh đề sau:",
        statements: [
          { text: "$v_n = 3^{n-1}$.", answer: "Đúng" },
          { text: "$v_5 = 81$.", answer: "Đúng" },
          { text: "Tổng vô hạn cấp số nhân này hội tụ.", answer: "Sai" },
          { text: "Tổng $S_4 = 40$.", answer: "Đúng" }
        ]
      },
      {
        context: "Một người gửi tiết kiệm $5$ triệu đồng mỗi tháng vào ngân hàng với lãi suất $0{,}5\\%$/tháng (lãi kép). Xét các mệnh đề:",
        statements: [
          { text: "Số tiền sau $n$ tháng là cấp số nhân công bội $q = 1{,}005$.", answer: "Đúng" },
          { text: "Tổng tiền sau $12$ tháng: $S_{12} = 5 \\cdot \\dfrac{1{,}005^{12} - 1}{0{,}005} \\approx 61{,}68$ triệu đồng.", answer: "Đúng" },
          { text: "Tiền lãi sau $12$ tháng là $S_{12} - 60 \\approx 1{,}68$ triệu đồng.", answer: "Đúng" },
          { text: "Nếu lãi suất tăng gấp đôi thì tiền lãi cũng tăng chính xác gấp đôi.", answer: "Sai" }
        ]
      },
      {
        context: "Một nhà máy sản xuất năm đầu $1000$ sản phẩm, mỗi năm tăng $15\\%$. Xét các mệnh đề:",
        statements: [
          { text: "Sản lượng theo cấp số nhân với công bội $q = 1{,}15$.", answer: "Đúng" },
          { text: "Sản lượng năm thứ $3$ là $1000 \\cdot (1{,}15)^2 = 1322{,}5$ sản phẩm.", answer: "Đúng" },
          { text: "Tổng sản lượng $5$ năm đầu: $S_5 = 1000 \\cdot \\dfrac{1{,}15^5 - 1}{0{,}15} \\approx 6742$ sản phẩm.", answer: "Đúng" },
          { text: "Để sản lượng vượt $2000$ sản phẩm/năm cần ít nhất $4$ năm.", answer: "Sai" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Cấp số cộng có 5 số hạng. Số hạng đầu là $2$, số hạng cuối là $18$. Tính tổng.", answer: "50" },
        { text: "Cấp số nhân vô hạn giảm có $u_1 = 8$ và $q = \\dfrac{1}{2}$. Tính tổng $S$.", answer: "16" },
        { text: "Ba số lập thành cấp số cộng có tổng là $12$ và tích là $48$. Tìm ba số đó.", answer: "2, 4, 6" }
      ],
      "Vận dụng": [
        { text: "Một con bóng nảy lên $\\dfrac{2}{3}$ độ cao sau mỗi lần rơi. Bóng rơi từ độ cao $9$m. Tổng quãng đường bóng đi là bao nhiêu mét?", answer: "45 m" },
        { text: "Năm 2020, dân số một thành phố là 1 triệu người. Dân số tăng $2\\%$/năm. Hỏi năm nào dân số vượt $1{,}2$ triệu? (Biết $\\log_{1.02} 1{,}2 \\approx 9{,}2$)", answer: "2030" }
      ],
      "Vận dụng cao": [
        { text: "Tổng $S = \\sum_{k=1}^{\\infty} \\dfrac{k}{2^k}$ bằng bao nhiêu?", answer: "2" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // XÁC SUẤT CÓ ĐIỀU KIỆN (Folder 1 - Chủ đề Xác suất)
  // ──────────────────────────────────────────────────────────
  "Xác suất có điều kiện": {
    nlc: {
      "Nhận biết": [
        { text: "Công thức xác suất có điều kiện $P(A|B)$ là:", options: ["$\\dfrac{P(A \\cap B)}{P(B)}$", "$\\dfrac{P(A \\cap B)}{P(A)}$", "$P(A) \\cdot P(B)$", "$P(A) + P(B)$"], answer: 'A' },
        { text: "Hai biến cố $A, B$ độc lập khi và chỉ khi:", options: ["$P(A \\cap B) = P(A) \\cdot P(B)$", "$P(A \\cup B) = P(A) + P(B)$", "$P(A|B) = P(A)$", "Cả A và C đều đúng"], answer: 'D' },
        { text: "Công thức xác suất toàn phần với hệ đầy đủ $\{B_i\}$:", options: ["$P(A) = \\sum P(B_i)P(A|B_i)$", "$P(A) = \\sum P(A \\cap B_i)$", "Cả 2 đều đúng", "Cả 2 đều sai"], answer: 'C' }
      ],
      "Thông hiểu": [
        { text: "Hộp 3 đỏ, 2 xanh. Lấy lần lượt không hoàn lại 2 bi. $P(\\text{đỏ}_2 | \\text{đỏ}_1)$ là:", options: ["$2/4$", "$3/5$", "$2/5$", "$1/2$"], answer: 'A' },
        { text: "Máy A (60%), B (40%). Lỗi A 2%, B 3%. XS 1 SP bị lỗi là:", options: ["$0,024$", "$0,025$", "$0,026$", "$0,03$"], answer: 'A' },
        { text: "$P(A)=0,4; P(B)=0,3; P(A \\cap B)=0,1$. Tính $P(A|B)$:", options: ["$1/3$", "$1/4$", "$3/4$", "$0,12$"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "$P(Toán)=0{,}7$, $P(Văn)=0{,}6$, $P(T\\cap V)=0{,}5$. Tính $P(Toán|Văn)$:", options: ["$\\dfrac{5}{6}$", "$\\dfrac{5}{7}$", "$\\dfrac{7}{10}$", "$\\dfrac{1}{2}$"], answer: 'A' },
        { text: "Hội đồng 70% nam, 30% nữ. XS nam đỗ 0,8; nữ đỗ 0,9. Một người đỗ, XS là nữ:", options: ["$\\dfrac{27}{83}$", "$\\dfrac{3}{10}$", "$\\dfrac{9}{10}$", "$\\dfrac{1}{3}$"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Một lô hàng gồm 10 sản phẩm do hai máy A và B sản xuất: máy A làm 6 chiếc (có 1 phế phẩm), máy B làm 4 chiếc (có 1 phế phẩm). Chọn ngẫu nhiên 1 sản phẩm.",
        statements: [
          { text: "Xác suất chọn được sản phẩm của máy A là $P(A) = 0{,}6$.", answer: "Đúng" },
          { text: "Xác suất sản phẩm bị lỗi biết nó của máy A là $P(H|A) = \\dfrac{1}{6}$.", answer: "Đúng" },
          { text: "Xác suất toàn phần chọn được phế phẩm là $P(H) = \\dfrac{1}{6} \\cdot 0{,}6 + \\dfrac{1}{4} \\cdot 0{,}4 = 0{,}2$.", answer: "Đúng" },
          { text: "Nếu sản phẩm chọn được là phế phẩm, xác suất nó từ máy A là $\\dfrac{1}{2}$.", answer: "Đúng" }
        ]
      },
      {
        context: "Hai xạ thủ A và B độc lập bắn vào một mục tiêu. Biết $P(A) = 0{,}7$ và $P(B) = 0{,}8$. Xét sự kiện $C$: \"Có ít nhất một người bắn trúng\".",
        statements: [
          { text: "Xác suất cả hai đều trúng là $P(A \\cap B) = 0{,}56$.", answer: "Đúng" },
          { text: "Xác suất cả hai đều trượt là $P(\\bar{A} \\cap \\bar{B}) = 0{,}06$.", answer: "Đúng" },
          { text: "$P(C) = 1 - 0{,}06 = 0{,}94$.", answer: "Đúng" },
          { text: "Xác suất đúng một người bắn trúng là $P = 0{,}44$.", answer: "Sai" }
        ]
      },
      {
        context: "Một xưởng may kiểm tra chất lượng: lấy ngẫu nhiên $3$ sản phẩm từ lô hàng. Biết mỗi sản phẩm có xác suất đạt chuẩn là $0{,}9$, các sản phẩm kiểm tra độc lập nhau. Xét các mệnh đề sau:",
        statements: [
          { text: "Xác suất cả 3 sản phẩm đạt chuẩn là $0{,}9^3 = 0{,}729$.", answer: "Đúng" },
          { text: "Xác suất tất cả đều không đạt chuẩn là $0{,}1^3 = 0{,}001$.", answer: "Đúng" },
          { text: "Xác suất có ít nhất 1 sản phẩm không đạt là $1 - 0{,}729 = 0{,}271$.", answer: "Đúng" },
          { text: "Xác suất có đúng 2 sản phẩm đạt chuẩn là $C_3^2 \\cdot 0{,}9^2 \\cdot 0{,}1 = 0{,}243$. Đây là xác suất cao nhất trong các trường hợp.", answer: "Sai" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Cho $P(A) = 0{,}5$; $P(B) = 0{,}4$; $P(A \\cup B) = 0{,}7$. Tính $P(A|B)$.", answer: "$0{,}5$" },
        { text: "Hộp 1 có 2 bi đỏ 3 bi trắng; hộp 2 có 4 bi đỏ 1 bi trắng. Chọn ngẫu nhiên 1 hộp rồi lấy 1 bi. Tính xác suất lấy được bi đỏ.", answer: "$\\dfrac{3}{5}$" },
        { text: "Hai sự kiện $A$, $B$ độc lập với $P(A)=0{,}3$, $P(B)=0{,}4$. Tính $P(A \\cup B)$.", answer: "$0{,}58$" }
      ],
      "Vận dụng": [
        { text: "Một hãng sản xuất 60% từ nhà máy X, 40% từ nhà máy Y. Tỉ lệ lỗi nhà máy X là 5%, nhà máy Y là 2%. Một sản phẩm bị lỗi, xác suất nó đến từ nhà máy X là bao nhiêu?", answer: "$\\dfrac{15}{23}$" },
        { text: "Tung xúc xắc 4 lần. Tính xác suất xuất hiện mặt 6 chấm ít nhất 1 lần.", answer: "$\\dfrac{671}{1296}$" }
      ],
      "Vận dụng cao": [
        { text: "Có 3 hộp: Hộp I chứa 3 bi đỏ 2 bi trắng, Hộp II chứa 2 bi đỏ 3 bi trắng, Hộp III chứa 1 bi đỏ 4 bi trắng. Chọn ngẫu nhiên 1 hộp, lấy 1 bi được bi đỏ. Xác suất đó là hộp I bằng bao nhiêu?", answer: "$\\dfrac{9}{20}$" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // GIỚI HẠN HÀM SỐ (Chương 3)
  // ──────────────────────────────────────────────────────────
  "Giới hạn hàm số": {
    nlc: {
      "Nhận biết": [
        { text: "Tính $\\lim_{x \\to 2} (x^2 - 3x + 1)$:", options: ["$-1$", "$1$", "$2$", "$0$"], answer: 'A' },
        { text: "Giới hạn $\\lim_{x \\to 0} \\dfrac{\\sin x}{x}$ bằng:", options: ["1", "0", "$\\infty$", "Không tồn tại"], answer: 'A' },
        { text: "Hàm số $f(x)$ liên tục tại $x = a$ khi:", options: ["$\\lim_{x \\to a} f(x) = f(a)$", "$\\lim_{x \\to a} f(x)$ tồn tại", "$f(a)$ xác định", "Cả 3 đúng"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Tính $\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$:", options: ["6", "0", "3", "$\\infty$"], answer: 'A' },
        { text: "Tính $\\lim_{x \\to +\\infty} \\dfrac{2x^2 + 3}{x^2 - 1}$:", options: ["2", "3", "$+\\infty$", "1"], answer: 'A' },
        { text: "Tính $\\lim_{x \\to 0} \\dfrac{\\tan 3x}{x}$:", options: ["3", "1", "0", "$1/3$"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "Tính $\\lim_{x \\to 1} \\dfrac{x^3 - 1}{x^2 - 1}$:", options: ["$\\dfrac{3}{2}$", "$1$", "$3$", "Không tồn tại"], answer: 'A' },
        { text: "Tìm $a$ để $f(x) = \\begin{cases} x^2 + a & x < 1 \\\\ 3x - 1 & x \\ge 1 \\end{cases}$ liên tục tại $x = 1$:", options: ["$a = 1$", "$a = 0$", "$a = 2$", "$a = -1$"], answer: 'A' },
        { text: "Giới hạn $\\lim_{x \\to 0^+} x \\ln x$ bằng:", options: ["$0$", "$1$", "$-\\infty$", "$+\\infty$"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Xét hàm số $f(x) = \\dfrac{x^2 - 4}{x - 2}$. Xét các mệnh đề sau:",
        statements: [
          { text: "Hàm số $f(x)$ xác định tại $x = 2$.", answer: "Sai" },
          { text: "$\\lim_{x \\to 2} f(x) = \\lim_{x \\to 2} (x + 2) = 4$.", answer: "Đúng" },
          { text: "Nếu định nghĩa thêm $f(2) = 4$ thì $f$ liên tục tại $x = 2$.", answer: "Đúng" },
          { text: "Đồ thị hàm số $g(x) = x + 2$ và $(C): y = f(x)$ hoàn toàn trùng nhau.", answer: "Sai" }
        ]
      },
      {
        context: "Cho $\\lim_{x \\to +\\infty} \\dfrac{ax^2 + bx + 1}{x^2 + 2} = 3$. Xét các mệnh đề sau:",
        statements: [
          { text: "Giới hạn chỉ phụ thuộc vào hệ số của $x^2$ ở tử và mẫu.", answer: "Đúng" },
          { text: "$a = 3$.", answer: "Đúng" },
          { text: "$b$ có thể nhận mọi giá trị thực.", answer: "Đúng" },
          { text: "Nếu $a = 3$, $b = -1$ thì $\\lim_{x \\to +\\infty} f(x) = 3$.", answer: "Đúng" }
        ]
      },
      {
        context: "Dân số một thành phố tại năm thứ $n$ là $P(n) = \\dfrac{500}{1 + 4 \\cdot e^{-0{,}3n}}$ (nghìn người). Xét các mệnh đề sau:",
        statements: [
          { text: "Khi $n = 0$, dân số ban đầu $P(0) = \\dfrac{500}{5} = 100$ nghìn người.", answer: "Đúng" },
          { text: "$\\lim_{n \\to +\\infty} P(n) = 500$ nghìn người (dân số bão hòa).", answer: "Đúng" },
          { text: "Mô hình $P(n)$ là hàm Logistic — dân số tăng mãi không giới hạn.", answer: "Sai" },
          { text: "Khi $n$ đủ lớn, $P(n)$ tiến gần $500$ nhưng không bao giờ vượt $500$ nghìn.", answer: "Đúng" }
        ]
      },
      {
        context: "Nồng độ thuốc sau khi tiêm vào cơ thể tuân theo $C(t) = \\dfrac{10t}{t^2 + 4}$ (mg/l, $t$ giờ). Xét các mệnh đề khi $t \\to +\\infty$:",
        statements: [
          { text: "$\\lim_{t \\to +\\infty} C(t) = 0$ (thuốc sẽ hết tác dụng theo thời gian).", answer: "Đúng" },
          { text: "$C(t)$ liên tục trên $[0; +\\infty)$.", answer: "Đúng" },
          { text: "$C(t)$ đạt cực đại tại $t = 2$ giờ, $C(2) = \\dfrac{20}{8} = 2{,}5$ mg/l.", answer: "Đúng" },
          { text: "Sau $10$ giờ, nồng độ thuốc vẫn lớn hơn $1$ mg/l.", answer: "Sai" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Tính $\\lim_{x \\to 2} \\dfrac{x^3 - 8}{x - 2}$.", answer: "$12$" },
        { text: "Tính $\\lim_{x \\to +\\infty} \\dfrac{3x - 1}{2x + 5}$.", answer: "$\\dfrac{3}{2}$" },
        { text: "Tính $\\lim_{x \\to 0} \\dfrac{1 - \\cos 2x}{x^2}$.", answer: "$2$" },
        { text: "Dân số tăng theo $P(t) = \\dfrac{1000}{1 + 9e^{-0{,}5t}}$ (nghìn). Tìm $\\lim_{t \\to +\\infty} P(t)$.", answer: "$1000$ nghìn" }
      ],
      "Vận dụng": [
        { text: "Tìm $m$ để hàm $f(x) = \\begin{cases} \\dfrac{x^2 - 1}{x - 1} & x \\ne 1 \\\\ m & x = 1 \\end{cases}$ liên tục tại $x = 1$.", answer: "$m = 2$" },
        { text: "Tính $\\lim_{x \\to 0} \\dfrac{\\sqrt{1 + 2x} - 1}{x}$.", answer: "$1$" },
        { text: "Chi phí sản xuất trung bình mỗi sản phẩm khi sản xuất $n$ sản phẩm là $f(n) = 50 + \\dfrac{2000}{n}$ (nghìn đồng). Khi $n$ rất lớn, chi phí trung bình tiến tới bao nhiêu?", answer: "$50$ nghìn đồng" }
      ],
      "Vận dụng cao": [
        { topic: "Hàm số mũ - Hàm số Logarit", level: "Vận dụng cao", text: "Tiền gửi $100$ triệu, lãi $8\\%$/năm kép. Sau bao nhiêu năm vượt $200$ triệu?", options: ["10 năm", "8 năm", "12 năm", "9 năm"], answer: 'A' },
        { text: "Chứng minh phương trình $x^3 - 3x + 1 = 0$ có nghiệm trong khoảng $(1; 2)$. Xác nhận đúng hay sai: phương trình có ít nhất 1 nghiệm thuộc $(1;2)$.", answer: "Đúng" },
        { text: "Nhiệt độ lò nung nguội theo $T(t) = 25 + 475 \\cdot e^{-0{,}1t}$ (°C). Sau rất lâu, nhiệt độ lò tiến tới bao nhiêu? Sau bao lâu nhiệt độ giảm còn dưới $100$°C? ($\\ln 6{,}33 \\approx 1{,}845$)", answer: "$25$°C; $t \\approx 18{,}45$ phút" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // TÍCH PHÂN ỨNG DỤNG - DIỆN TÍCH, THỂ TÍCH (Chương 4-5)
  // ──────────────────────────────────────────────────────────
  "Tích phân ứng dụng": {
    nlc: {
      "Nhận biết": [
        { text: "Diện tích hình phẳng giới hạn bởi $y=f(x), y=g(x), x=a, x=b$ ($f \\ge g$) là:", options: ["$S = \\int_a^b [f(x)-g(x)]dx$", "$S = \\int_a^b [g(x)-f(x)]dx$", "$S = \\pi\\int_a^b [f(x)-g(x)]dx$", "Không có đáp án"], answer: 'A' },
        { text: "Thể tích vật thể tròn xoay quanh $Ox$ từ $a$ đến $b$ của $y=f(x)$ là:", options: ["$V = \\pi\\int_a^b f^2(x)dx$", "$V = \\int_a^b f^2(x)dx$", "$V = 2\\pi\\int_a^b f(x)dx$", "$V = \\pi\\int_a^b f(x)dx$"], answer: 'A' },
        { text: "Quãng đường vật đi với vận tốc $v(t)$ từ $t_1$ đến $t_2$ là:", options: ["$S = \\int_{t_1}^{t_2} v(t)dt$", "$S = v(t_2)-v(t_1)$", "$S = \\int_{t_1}^{t_2} v'(t)dt$", "$S = v'(t_2)$"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Diện tích hình phẳng giới hạn bởi $y = x^2$ và $y = x + 2$ là:", options: ["$4,5$", "$3$", "$2,5$", "$5$"], answer: 'A' },
        { text: "Thể tích khối tròn xoay tạo bởi $y = \\sqrt{x}, x = 4, Ox$ quanh $Ox$ là:", options: ["$8\\pi$", "$4\\pi$", "$16\\pi$", "$2\\pi$"], answer: 'A' },
        { text: "Vật có $v(t) = t^2 - 2t$. Quãng đường trong $[0; 3]$ là:", options: ["$2,67$ m", "$2$ m", "$4$ m", "$3$ m"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "Diện tích hình phẳng giới hạn $y = \\sin x$ và $y = \\cos x$ trên $\\left[0; \\dfrac{\\pi}{2}\\right]$ là:", options: ["$2(\\sqrt{2}-1)$", "$2$", "$\\sqrt{2}$", "$1$"], answer: 'A' },
        { text: "Bể bơi hình thang ngang: đáy lớn $10$m, đáy nhỏ $6$m, sâu $2$m, dài $25$m. Thể tích là:", options: ["$400$ m³", "$300$ m³", "$500$ m³", "$200$ m³"], answer: 'A' },
        { text: "Diện tích $S$ giới hạn bởi $y=e^x$, $y=e^{-x}$ và $x=1$ là:", options: ["$e - e^{-1} - 2 + 2 = e - \\frac{1}{e}$", "$e + e^{-1}$", "$2(e-1)$", "$e^2 - 1$"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Cho hình phẳng $(H)$ giới hạn bởi $y = x^2 - 2x$ và $y = 0$ (trục hoành). Xét các mệnh đề:",
        statements: [
          { text: "Parabol $y = x^2 - 2x$ cắt trục hoành tại $x = 0$ và $x = 2$.", answer: "Đúng" },
          { text: "Trên $[0;2]$, đường cong $y = x^2 - 2x$ nằm dưới trục hoành.", answer: "Đúng" },
          { text: "Diện tích $(H) = \\int_0^2 (x^2 - 2x)dx$.", answer: "Sai" },
          { text: "Diện tích $(H) = \\int_0^2 (2x - x^2)dx = \\dfrac{4}{3}$.", answer: "Đúng" }
        ]
      },
      {
        context: "Vật chuyển động thẳng với vận tốc $v(t) = 6t^2 - 6t$ (m/s, $t \\ge 0$). Xét các mệnh đề:",
        statements: [
          { text: "Vật đổi chiều tại $t = 0$ và $t = 1$.", answer: "Đúng" },
          { text: "Trên $[0;1]$, vận tốc $v(t) \\le 0$ (vật đi ngược chiều dương).", answer: "Đúng" },
          { text: "Quãng đường đi trong $[0;2]$ là $\\left|\\int_0^2 v(t)dt\\right| = 4$.", answer: "Sai" },
          { text: "Quãng đường đi trong $[0;2]$ là $\\int_0^1 |v(t)|dt + \\int_1^2 v(t)dt = 1 + 4 = 5$.", answer: "Sai" }
        ]
      },
      {
        context: "Cho $F(x) = x^2 \\ln x - \\dfrac{x^2}{2}$ là nguyên hàm của $f(x)$ trên $(0; +\\infty)$. Xét các mệnh đề:",
        statements: [
          { text: "$f(x) = 2x\\ln x + x - x = 2x\\ln x$.", answer: "Sai" },
          { text: "$f(x) = F'(x) = 2x\\ln x + x \\cdot \\dfrac{1}{x} - x = 2x\\ln x$.", answer: "Sai" },
          { text: "$F'(x) = 2x\\ln x + x^2 \\cdot \\dfrac{1}{x} - x = 2x\\ln x$.", answer: "Đúng" },
          { text: "$\\int_1^e f(x)dx = F(e) - F(1) = e^2 \\cdot 1 - \\dfrac{e^2}{2} - 0 + \\dfrac{1}{2} = \\dfrac{e^2+1}{2}$.", answer: "Đúng" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Tính diện tích hình phẳng giới hạn bởi $y = x^2$ và $y = 4$.", answer: "$\\dfrac{32}{3}$" },
        { text: "Tính thể tích vật tròn xoay khi quay miền giới hạn bởi $y = x$, $x = 2$, trục $Ox$ quanh $Ox$.", answer: "$\\dfrac{8\\pi}{3}$" },
        { text: "Vật có $v(t) = 3t^2$ m/s. Quãng đường đi được trong 2 giây đầu.", answer: "$8$ m" }
      ],
      "Vận dụng": [
        { text: "Tính diện tích hình phẳng giới hạn bởi $y = x^3$ và $y = x$ (hai đường cắt nhau tại $(-1,−1)$, $(0,0)$, $(1,1)$).", answer: "$\\dfrac{1}{2}$" },
        { text: "Bình sữa chua hình trụ có đường kính $7$cm, cao $10$cm. Thể tích sữa chua (ml, làm tròn):", answer: "$385$ ml" }
      ],
      "Vận dụng cao": [
        { text: "Tính diện tích hình phẳng giới hạn bởi $y = \\ln x$, trục hoành và đường thẳng $x = e$.", answer: "$1$" }
      ]
    }
  },

  "Phương trình - Bất phương trình mũ và logarit": {
    nlc: {
      "Nhận biết": [
        { text: "Giải phương trình $2^x = 16$:", options: ["$x = 4$", "$x = 3$", "$x = 2$", "$x = 5$"], answer: 'A' },
        { text: "Giải phương trình $\\log_3 x = 2$:", options: ["$x = 9$", "$x = 6$", "$x = 8$", "$x = 5$"], answer: 'A' },
        { text: "Tập xác định của $f(x) = \\log(x^2 - x - 2)$ là:", options: ["$x < -1$ hoặc $x > 2$", "$-1 < x < 2$", "$x > 2$", "$x < -1$"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Giải phương trình $4^x - 3 \\cdot 2^x - 4 = 0$:", options: ["$x = 2$", "$x = 0$", "$x = 1$", "Vô nghiệm"], answer: 'A' },
        { text: "Giải bất phương trình $\\log_{0{,}5}(2x - 1) < -1$:", options: ["$x > 1,5$", "$x < 1,5$", "$x > 0,5$", "$0,5 < x < 1,5$"], answer: 'A' },
        { text: "Giải phương trình $\\ln(x + 1) + \\ln(x - 1) = \\ln 3$:", options: ["$x = 2$", "$x = \\pm 2$", "$x = \\sqrt{2}$", "$x = 4$"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "Tìm số nghiệm nguyên của $\\left(\\dfrac{1}{2}\\right)^{x^2 - 3x} \\ge \\left(\\dfrac{1}{2}\\right)^2$:", options: ["2", "1", "3", "4"], answer: 'A' },
        { text: "Giải hệ $\\begin{cases} 2^x + 2^y = 6 \\\\ 2^{x+y} = 8 \\end{cases}$. Tính $x^2 + y^2$:", options: ["5", "10", "8", "4"], answer: 'A' },
        { text: "Tìm $m$ để $\\log_2(x^2 - 2mx + m) = 1$ có hai nghiệm phân biệt:", options: ["$m < 0$ hoặc $m > 2$", "$0 < m < 2$", "$m > 2$", "$m < 0$"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Cho phương trình $4^x - 5 \\cdot 2^x + 4 = 0$. Xét các mệnh đề sau:",
        statements: [
          { text: "Đặt $t = 2^x$ ($t > 0$), phương trình trở thành $t^2 - 5t + 4 = 0$.", answer: "Đúng" },
          { text: "Hai nghiệm của phương trình ẩn $t$ là $t = 1$ và $t = 4$.", answer: "Đúng" },
          { text: "Từ $t = 1$ suy ra $x = 0$; từ $t = 4$ suy ra $x = 2$.", answer: "Đúng" },
          { text: "Phương trình ban đầu có tập nghiệm $S = \\{-1; 2\\}$.", answer: "Sai" }
        ]
      },
      {
        context: "Cho bất phương trình $\\log_{0{,}5}(x - 1) \\ge \\log_{0{,}5}(3 - x)$. Xét các mệnh đề:",
        statements: [
          { text: "Điều kiện xác định: $x > 1$ và $x < 3$, tức $x \\in (1; 3)$.", answer: "Đúng" },
          { text: "Vì cơ số $0{,}5 < 1$ nên quan hệ bất đẳng thức đảo chiều: $x - 1 \\le 3 - x$.", answer: "Đúng" },
          { text: "Bất phương trình tương đương $x \\le 2$.", answer: "Đúng" },
          { text: "Nghiệm của bất phương trình là $x \\in (1; 2]$.", answer: "Đúng" }
        ]
      },
      {
        context: "Dân số một thành phố hiện tại là $N_0$ người, tăng theo hàm $N(t) = N_0 \\cdot (1{,}02)^t$ (t năm). Xét các mệnh đề:",
        statements: [
          { text: "Mô hình tăng trưởng này là hàm số mũ với cơ số $1{,}02 > 1$.", answer: "Đúng" },
          { text: "Dân số tăng $2\\%$ mỗi năm.", answer: "Đúng" },
          { text: "Để tính năm dân số tăng gấp đôi, ta giải $2 = (1{,}02)^t$, tức $t = \\log_{1{,}02} 2$.", answer: "Đúng" },
          { text: "Biết $\\log_{1{,}02} 2 \\approx 35$, dân số tăng gấp đôi sau khoảng 25 năm.", answer: "Sai" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Giải phương trình $9^x - 4 \\cdot 3^x + 3 = 0$. Tìm tổng các nghiệm.", answer: "$1$" },
        { text: "Giải bất phương trình $2^{x+1} > 16$. Tập nghiệm là?", answer: "$x > 3$" },
        { text: "Tính $x$ biết $\\log_2 x + \\log_2(x - 2) = 3$.", answer: "$x = 4$" }
      ],
      "Vận dụng": [
        { text: "Tiền gốc $100$ triệu, lãi suất $6\\%$/năm kép. Sau bao nhiêu năm (nguyên) số tiền vượt $150$ triệu? ($\\log_{1{,}06} 1{,}5 \\approx 6{,}96$)", answer: "$7$ năm" },
        { text: "Vi khuẩn nhân đôi sau mỗi $30$ phút. Ban đầu có $1000$ con. Sau $3$ giờ có bao nhiêu con?", answer: "$64000$" }
      ],
      "Vận dụng cao": [
        { text: "Tìm số giá trị nguyên của $m \\in [-10; 10]$ để phương trình $\\log_2(x^2 - mx + 1) = 1$ có nghiệm thực.", answer: "$19$" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // ĐƯỜNG THẲNG VÀ MẶT PHẲNG TRONG KHÔNG GIAN (Chương 6)
  // ──────────────────────────────────────────────────────────
  "Đường thẳng và mặt phẳng trong không gian": {
    nlc: {
      "Nhận biết": [
        { text: "Vectơ pháp tuyến của mặt phẳng $2x - y + 3z - 5 = 0$ là:", options: ["$(2; -1; 3)$", "$(2; 1; 3)$", "$(-2; 1; -3)$", "$(5; 0; 0)$"], answer: 'A' },
        { text: "Mặt phẳng qua $A(1;0;0)$, $B(0;2;0)$, $C(0;0;3)$ có phương trình:", options: ["$\\dfrac{x}{1}+\\dfrac{y}{2}+\\dfrac{z}{3}=1$", "$x+y+z=1$", "$2x+y+z=1$", "$x+2y+3z=6$"], answer: 'A' },
        { text: "Khoảng cách từ $M(1;2;3)$ đến mặt phẳng $Oxy$ bằng:", options: ["$3$", "$1$", "$2$", "$\\sqrt{14}$"], answer: 'A' }
      ],
      "Thông hiểu": [
        "Viết phương trình mặt phẳng đi qua $M(1;-1;2)$ và vuông góc với đường thẳng $\\dfrac{x-1}{2} = \\dfrac{y+1}{-1} = \\dfrac{z}{3}$.",
        "Tính khoảng cách từ điểm $A(2;1;-1)$ đến mặt phẳng $x + 2y - 2z + 3 = 0$.",
        "Hai mặt phẳng $\\alpha: x + y - z = 0$ và $\\beta: 2x + y + z = 1$ có vuông góc nhau không?"
      ],
      "Vận dụng": [
        "Cho $A(1;0;0)$, $B(0;1;0)$, $C(0;0;2)$. Tính khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(ABC)$.",
        "Đường thẳng $d$ đi qua $M(0;1;2)$ và song song $\\vec{u} = (1;-1;2)$. Tính khoảng cách từ $A(1;0;3)$ đến $d$."
      ]
    },
    ds: [
      {
        context: "Cho mặt phẳng $(P): 2x - y + 2z - 6 = 0$ và điểm $A(1; 2; 3)$. Xét các mệnh đề:",
        statements: [
          { text: "Vectơ pháp tuyến $\\vec{n} = (2; -1; 2)$.", answer: "Đúng" },
          { text: "Điểm $A(1;2;3)$ nằm trên mặt phẳng $(P)$.", answer: "Sai" },
          { text: "Khoảng cách từ $A$ đến $(P)$ là $d = \\dfrac{|2 \\cdot 1 - 2 + 2 \\cdot 3 - 6|}{\\sqrt{4+1+4}} = \\dfrac{2}{3}$.", answer: "Đúng" },
          { text: "Mặt phẳng song song với $(P)$ và cách $(P)$ khoảng $3$ có dạng $2x - y + 2z - c = 0$ với $|c - 6| = 9$.", answer: "Đúng" }
        ]
      },
      {
        context: "Cho đường thẳng $d: \\dfrac{x-1}{2} = \\dfrac{y+1}{1} = \\dfrac{z}{-1}$ và điểm $M(3; 0; 1)$. Xét các mệnh đề:",
        statements: [
          { text: "Vectơ chỉ phương của $d$ là $\\vec{u} = (2;1;-1)$.", answer: "Đúng" },
          { text: "Điểm $A(1;-1;0)$ thuộc đường thẳng $d$.", answer: "Đúng" },
          { text: "$\\overrightarrow{AM} = (2;1;1)$ và $[\\overrightarrow{AM}, \\vec{u}] = (2;4;0)$.", answer: "Sai" },
          { text: "Khoảng cách từ $M$ đến $d$ bằng $\\dfrac{|[\\overrightarrow{AM}, \\vec{u}]|}{|\\vec{u}|}$.", answer: "Đúng" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Viết phương trình mặt phẳng đi qua $A(1;2;3)$ và song song mặt phẳng $x - 2y + z = 0$.", answer: "$x - 2y + z = 0$ (dịch): $x - 2y + z + 2 = 0$" },
        { text: "Tính khoảng cách từ $O(0;0;0)$ đến mặt phẳng $x + 2y + 2z - 9 = 0$.", answer: "$3$" },
        { text: "Cho hai mặt phẳng $3x + y - z = 0$ và $x - y + 2z = 5$. Tính $\\cos$ góc giữa hai mặt phẳng.", answer: "$\\dfrac{2}{\\sqrt{33}}$" }
      ],
      "Vận dụng": [
        { text: "Cho hình chóp $S.ABCD$ với $ABCD$ là hình vuông cạnh $2$, $S$ cách đều 4 đỉnh đáy và $SO \\perp (ABCD)$ với $SO = 2$. Phương trình mặt phẳng $(SAB)$ nếu $A(0;0;0)$, $B(2;0;0)$, $S(1;1;2)$.", answer: "$z = 0$ và mặt phẳng SAB: $y + z... $" },
        { text: "Điểm $M$ nằm trên đường thẳng $d: x = 1+t, y = -t, z = 2t$ và cách mặt phẳng $(P): x - y + 2z = 0$ khoảng cách bằng $\\dfrac{2\\sqrt{6}}{6}$. Tìm tọa độ $M$.", answer: "$M(1;0;0)$ hoặc $M(\\frac{4}{3}; -\\frac{1}{3}; \\frac{2}{3})$" }
      ],
      "Vận dụng cao": [
        { text: "Cho tứ diện $OABC$ với $O$ là gốc tọa độ, $A(2;0;0)$, $B(0;3;0)$, $C(0;0;6)$. Tính thể tích tứ diện $OABC$.", answer: "$6$" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // THỐNG KÊ - SỐ ĐẶC TRƯNG MẪU SỐ LIỆU GHÉP NHÓM
  // ──────────────────────────────────────────────────────────
  "Thống kê": {
    nlc: {
      "Nhận biết": [
        { text: "Số trung bình cộng của mẫu $\\{2; 4; 6; 8; 10\\}$ bằng:", options: ["6", "5", "7", "4"], answer: 'A' },
        { text: "Trung vị của mẫu $\\{1; 3; 5; 7; 9\\}$ bằng:", options: ["5", "4", "6", "3"], answer: 'A' },
        { text: "Phương sai của mẫu $\\{2; 2; 2; 2\\}$ bằng:", options: ["0", "2", "4", "1"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Mẫu $n=20$ giá trị; mỗi giá trị tăng thêm $5$. Trung bình cộng:", options: ["Tăng thêm 5", "Không thay đổi", "Tăng gấp đôi", "Giảm 5"], answer: 'A' },
        { text: "Độ lệch chuẩn của mẫu $\\{3; 3; 7; 7\\}$ bằng:", options: ["2", "4", "5", "$\\sqrt{5}$"], answer: 'A' },
        { text: "Khoảng tứ phân vị $\\Delta Q = Q_3 - Q_1$ đo lường:", options: ["Mức phân tán của 50% dữ liệu giữa", "Giá trị trung bình", "Tổng dữ liệu", "Giá trị lớn nhất"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "Mẫu ghép nhóm: $[4;6)$: 8 HS; $[6;7)$: 12 HS; $[7;8)$: 10 HS; $[8;10]$: 10 HS (40 HS). Lớp chứa trung vị là:", options: ["$[7;8)$", "$[6;7)$", "$[4;6)$", "$[8;10]$"], answer: 'A' },
        { text: "Lớp A: điểm TB 7,2; $s=1{,}1$. Lớp B: điểm TB 7,2; $s=0{,}5$. Lớp nào đồng đều hơn?", options: ["Lớp B", "Lớp A", "Như nhau", "Không xác định"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Điểm kiểm tra của 40 học sinh lớp 12 được thống kê theo bảng ghép nhóm: $[4;6)$: 8 HS; $[6;7)$: 12 HS; $[7;8)$: 10 HS; $[8;10]$: 10 HS. Xét các mệnh đề sau:",
        statements: [
          { text: "Số trung bình xấp xỉ bằng $\\bar{x} \\approx 7{,}0$.", answer: "Đúng" },
          { text: "Lớp chứa trung vị là $[6;7)$ vì có số học sinh tích lũy vượt $50\\%$ tại lớp này.", answer: "Sai" },
          { text: "Lớp chứa trung vị là $[7;8)$.", answer: "Đúng" },
          { text: "Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ cho biết mức độ tập trung của $50\\%$ dữ liệu giữa.", answer: "Đúng" }
        ]
      },
      {
        context: "Cân nặng (kg) của 5 bạn học sinh: $45; 50; 52; 48; 55$. Xét các mệnh đề sau:",
        statements: [
          { text: "Số trung bình $\\bar{x} = 50$.", answer: "Đúng" },
          { text: "Phương sai $s^2 = \\dfrac{(45-50)^2 + (50-50)^2 + (52-50)^2 + (48-50)^2 + (55-50)^2}{5} = \\dfrac{58}{5} = 11{,}6$.", answer: "Đúng" },
          { text: "Độ lệch chuẩn $s \\approx 3{,}41$ kg.", answer: "Đúng" },
          { text: "Nếu thêm bạn cân nặng $50$ kg vào mẫu, trung bình cộng không thay đổi nhưng phương sai giảm.", answer: "Đúng" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Mẫu số liệu $\\{5; 8; 12; 15; 10\\}$. Tính số trung bình và trung vị.", answer: "$\\bar{x} = 10$; trung vị $= 10$" },
        { text: "Tính phương sai của mẫu $\\{2; 4; 4; 4; 5; 5; 7; 9\\}$.", answer: "$s^2 = 4$" },
        { text: "Chiều cao (cm) của 5 học sinh: $155; 160; 162; 158; 165$. Tính chiều cao trung bình.", answer: "$160$ cm" },
        { text: "Nhiệt độ 7 ngày: $28; 30; 32; 29; 31; 27; 33$ (°C). Tính trung vị.", answer: "$30$ °C" }
      ],
      "Vận dụng": [
        { text: "Điểm trung bình học kỳ của 10 học sinh: $6; 7; 7; 8; 8; 8; 9; 9; 9; 10$. Tính phương sai và nhận xét.", answer: "$\\bar{x} = 8{,}1$; $s^2 = 1{,}09$ — phân tán thấp" },
        { text: "Lớp A có điểm TB $= 7{,}2$, $s = 1{,}1$. Lớp B có điểm TB $= 7{,}2$, $s = 0{,}5$. Lớp nào đồng đều hơn?", answer: "Lớp B đồng đều hơn" },
        { text: "Lương tháng (triệu đồng) của 8 công nhân: $5; 6; 6; 7; 7; 8; 8; 9$. Tính độ lệch chuẩn.", answer: "$s \\approx 1{,}22$ triệu đồng" }
      ],
      "Vận dụng cao": [
        { text: "Mẫu số liệu ghép nhóm 50 học sinh. $[5;6)$: 5; $[6;7)$: 10; $[7;8)$: 20; $[8;9)$: 10; $[9;10]$: 5. Tính trung bình gần đúng.", answer: "$\\bar{x} \\approx 7{,}5$" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // TỔ HỢP - CHỈNH HỢP - HOÁN VỊ
  // ──────────────────────────────────────────────────────────
  "Tổ hợp - Xác suất": {
    nlc: {
      "Nhận biết": [
        { text: "Số hoán vị của $5$ phần tử là:", options: ["120", "60", "20", "24"], answer: 'A' },
        { text: "$C_{10}^3$ bằng:", options: ["120", "720", "30", "210"], answer: 'A' },
        { text: "Chỉnh hợp chập $3$ của $6$ phần tử $A_6^3$ bằng:", options: ["120", "20", "216", "36"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Từ $\\{1,2,3,4,5\\}$, lập số tự nhiên $3$ chữ số khác nhau. Số lượng là:", options: ["60", "120", "30", "125"], answer: 'A' },
        { text: "Tổ $3$ nam $4$ nữ, chọn $2$ đại diện có ít nhất $1$ nữ:", options: ["18", "21", "12", "6"], answer: 'A' },
        { text: "$8$ đội thi vòng tròn (mỗi cặp gặp $1$ lần). Tổng số trận:", options: ["28", "56", "16", "64"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "Có $15$ HS giỏi Toán, $10$ HS giỏi Văn, $5$ giỏi cả hai. Số HS chỉ giỏi Toán hoặc Văn (không phải cả hai) là:", options: ["15", "20", "25", "10"], answer: 'A' },
        { text: "Từ $10$ người chọn $3$ thành viên BCH (chủ tịch, phó, thư ký). Số cách là:", options: ["720", "120", "360", "210"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Một hội đồng thi gồm $10$ giám thị, trong đó có $4$ giám thị nữ. Cần chọn $3$ giám thị vào phòng thi. Xét các mệnh đề sau:",
        statements: [
          { text: "Số cách chọn $3$ giám thị bất kỳ là $C_{10}^3 = 120$ cách.", answer: "Đúng" },
          { text: "Số cách chọn $3$ giám thị đều là nữ là $C_4^3 = 4$ cách.", answer: "Đúng" },
          { text: "Số cách có đúng $2$ giám thị nữ là $C_4^2 \\cdot C_6^1 = 6 \\cdot 6 = 36$ cách.", answer: "Đúng" },
          { text: "Xác suất chọn được ít nhất $1$ giám thị nữ là $\\dfrac{116}{120} = \\dfrac{29}{30}$.", answer: "Đúng" }
        ]
      },
      {
        context: "Từ các chữ số $\\{0, 1, 2, 3, 4, 5\\}$ lập số tự nhiên có $4$ chữ số khác nhau. Xét các mệnh đề sau:",
        statements: [
          { text: "Chữ số hàng nghìn không thể là $0$, nên có $5$ cách chọn chữ số hàng nghìn.", answer: "Đúng" },
          { text: "Số các số tự nhiên gồm $4$ chữ số khác nhau lập từ tập trên là $5 \\times 5 \\times 4 \\times 3 = 300$.", answer: "Đúng" },
          { text: "Trong các số đó, số chẵn (kết thúc bằng chữ số chẵn $\\{0,2,4\\}$) nhiều hơn số lẻ.", answer: "Đúng" },
          { text: "Số các số lớn hơn $3000$ trong tập trên là $120$.", answer: "Sai" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Tính $C_{12}^4$.", answer: "$495$" },
        { text: "Một lớp có $10$ học sinh. Chọn $1$ lớp trưởng và $1$ lớp phó (khác nhau). Có bao nhiêu cách?", answer: "$90$ cách" },
        { text: "Tính $A_7^3$.", answer: "$210$" }
      ],
      "Vận dụng": [
        { text: "Từ $10$ người chọn $3$ thành viên ban chấp hành gồm: chủ tịch, phó chủ tịch và thư ký. Có bao nhiêu cách?", answer: "$720$ cách" },
        { text: "Một lớp $40$ học sinh bốc thăm $3$ phần thưởng khác nhau. Có bao nhiêu cách chia?", answer: "$A_{40}^3 = 59280$" }
      ],
      "Vận dụng cao": [
        { text: "Có bao nhiêu cách xếp $5$ học sinh nam và $3$ học sinh nữ vào $1$ hàng sao cho các học sinh nữ không đứng cạnh nhau?", answer: "$14400$" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // ỨNG DỤNG THỰC TẾ - TOÁN THỰC TẾ (CTGDPT 2026)
  // ──────────────────────────────────────────────────────────
  "Toán thực tế": {
    nlc: {
      "Nhận biết": [
        { text: "Cửa hàng giảm $20\\%$. Giá gốc $500.000$đ. Giá sau giảm là:", options: ["$400.000$đ", "$450.000$đ", "$480.000$đ", "$420.000$đ"], answer: 'A' },
        { text: "Lãi suất $6\\%$/năm. Gửi $10$ triệu, sau $1$ năm lãi đơn thu được:", options: ["$600.000$đ", "$60.000$đ", "$6.000.000$đ", "$1.000.000$đ"], answer: 'A' },
        { text: "Vật rơi từ $45$m với $h = 5t^2$. Thời gian rơi là:", options: ["$3$ giây", "$9$ giây", "$5$ giây", "$\\sqrt{5}$ giây"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Doanh thu tháng 1: $100$ triệu, tăng $5\\%$/tháng. Doanh thu tháng 4 là:", options: ["$115{,}76$ triệu", "$115$ triệu", "$120$ triệu", "$110{,}25$ triệu"], answer: 'A' },
        { text: "Đất hình chữ nhật chu vi $120$m, dài hơn rộng $20$m. Diện tích là:", options: ["$800$ m²", "$1600$ m²", "$900$ m²", "$700$ m²"], answer: 'A' },
        { text: "Xe đi $50$km/h mất $2$ giờ. Tăng lên $60$km/h thì mất:", options: ["$100$ phút", "$90$ phút", "$80$ phút", "$120$ phút"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "Chi phí $C(n) = 0{,}5n^2 + 20n + 500$. Chi phí trung bình nhỏ nhất khi $n$:", options: ["$n = \\sqrt{1000} \\approx 32$", "$n = 20$", "$n = 50$", "$n = 10$"], answer: 'A' },
        { text: "Bình trụ không nắp thể tích $V = 2000\\pi$ cm³. Bán kính để diện tích nhỏ nhất là:", options: ["$r = 10$ cm", "$r = 20$ cm", "$r = 5$ cm", "$r = \\sqrt{1000}$ cm"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Một nhà đầu tư gửi $200$ triệu vào ngân hàng với lãi suất kép $8\\%$/năm. Gọi $A_n$ là số tiền sau $n$ năm. Xét các mệnh đề:",
        statements: [
          { text: "$A_n = 200 \\cdot (1{,}08)^n$ (triệu đồng).", answer: "Đúng" },
          { text: "Sau $1$ năm, số tiền là $A_1 = 216$ triệu đồng.", answer: "Đúng" },
          { text: "Số tiền tăng gấp đôi sau $t = \\log_{1{,}08} 2 \\approx 9$ năm.", answer: "Đúng" },
          { text: "Sau $5$ năm, lợi nhuận xấp xỉ $93{,}9$ triệu đồng.", answer: "Đúng" }
        ]
      },
      {
        context: "Một đường ống nước dài $200$m có tiết diện hình tròn bán kính $r$ (cm). Lưu lượng nước $Q = k \\cdot r^2 \\cdot v$ (lít/phút, $k$ là hằng số, $v$ là vận tốc). Xét các mệnh đề:",
        statements: [
          { text: "Nếu bán kính tăng gấp đôi thì lưu lượng tăng gấp $4$ lần (với $v$ không đổi).", answer: "Đúng" },
          { text: "Thể tích nước chứa trong đường ống là $V = \\pi r^2 \\cdot 20000$ (cm³).", answer: "Đúng" },
          { text: "Nếu $r = 5$cm, dung tích đường ống khoảng $1570$ lít.", answer: "Đúng" },
          { text: "Để tăng lưu lượng lên $9$ lần trong khi giữ cùng vận tốc, cần tăng bán kính lên $3$ lần.", answer: "Đúng" }
        ]
      },
      {
        context: "Bài toán tối ưu: Cần làm hộp hình chữ nhật không có nắp từ tấm bìa hình vuông cạnh $12$cm bằng cách cắt bỏ $4$ góc vuông cạnh $x$ ($0 < x < 6$). Xét các mệnh đề:",
        statements: [
          { text: "Sau khi cắt, đáy hộp có kích thước $(12-2x) \\times (12-2x)$.", answer: "Đúng" },
          { text: "Thể tích hộp $V(x) = x(12-2x)^2$.", answer: "Đúng" },
          { text: "$V'(x) = (12-2x)^2 + x \\cdot 2(12-2x)(-2) = (12-2x)(12-2x-4x) = (12-2x)(12-6x)$.", answer: "Đúng" },
          { text: "Thể tích lớn nhất đạt tại $x = 2$ cm, $V_{max} = 128$ cm³.", answer: "Đúng" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Một mảnh vườn hình chữ nhật có diện tích $200$ m², chiều dài gấp đôi chiều rộng. Tính chiều dài.", answer: "$20$ m" },
        { text: "Ô tô đi từ A đến B hết $3$ giờ với vận tốc $60$ km/h. Quãng đường AB bằng bao nhiêu km?", answer: "$180$ km" },
        { text: "Nhiệt độ trung bình ngày của một thành phố theo mô hình $T(t) = 20 + 8\\sin\\left(\\dfrac{\\pi t}{12}\\right)$ ($t$ là giờ trong ngày). Nhiệt độ cao nhất là bao nhiêu?", answer: "$28°C$" }
      ],
      "Vận dụng": [
        { text: "Chi phí sản xuất $x$ sản phẩm: $C(x) = x^2 - 40x + 600$ (triệu đồng). Tìm số sản phẩm để chi phí trung bình nhỏ nhất.", answer: "$x = 20$, chi phí TB nhỏ nhất $= 200$ triệu" },
        { text: "Cần thiết kế hộp hình trụ có thể tích $V = 500\\pi$ cm³. Tìm bán kính $r$ để diện tích toàn phần nhỏ nhất.", answer: "$r = 5$ cm" }
      ],
      "Vận dụng cao": [
        { text: "Doanh nghiệp sản xuất $x$ tấn hàng/ngày, doanh thu $R(x) = -x^2 + 20x$ (triệu đồng), chi phí $C(x) = 2x + 10$ (triệu đồng). Tìm $x$ để lợi nhuận tối đa.", answer: "$x = 9$ tấn, lợi nhuận $= 53$ triệu đồng" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // HỆ PHƯƠNG TRÌNH - ỨNG DỤNG
  // ──────────────────────────────────────────────────────────
  "Hệ phương trình": {
    nlc: {
      "Nhận biết": [
        { text: "Giải hệ $\\begin{cases} x + y = 5 \\\\ x - y = 1 \\end{cases}$:", options: ["$(3; 2)$", "$(2; 3)$", "$(4; 1)$", "$(1; 4)$"], answer: 'A' },
        { text: "Hệ $\\begin{cases} 2x + y = 7 \\\\ 4x + 2y = 14 \\end{cases}$ có bao nhiêu nghiệm?", options: ["Vô số nghiệm", "Vô nghiệm", "1 nghiệm duy nhất", "2 nghiệm"], answer: 'A' },
        { text: "Nghiệm của hệ $\\begin{cases} x + 2y = 4 \\\\ 2x - y = 3 \\end{cases}$ là:", options: ["$(2; 1)$", "$(1; 2)$", "$(0; 2)$", "$(2; 0)$"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Tìm $a$ để hệ $\\begin{cases} ax + y = 1 \\\\ x + ay = 1 \\end{cases}$ vô nghiệm:", options: ["$a = -1$", "$a = 1$", "$a = 0$", "$a = 2$"], answer: 'A' },
        { text: "Giải hệ $\\begin{cases} 2^x + 2^y = 6 \\\\ 2^{x+y} = 8 \\end{cases}$:", options: ["$(1; 2)$ hoặc $(2; 1)$", "$(0; 3)$", "$(1; 1)$", "$Vô nghiệm$"], answer: 'A' },
        { text: "Giải hệ $\\begin{cases} \\log x + \\log y = 3 \\\\ \\log x - \\log y = 1 \\end{cases}$:", options: ["$x=100, y=10$", "$x=10, y=100$", "$x=100, y=100$", "$x=10, y=10$"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "Hai vòi nước cùng chảy vào bể đầy sau 4 giờ. Vòi A chảy một mình đầy bể sau 6 giờ. Vòi B chảy một mình mất:", options: ["12 giờ", "10 giờ", "8 giờ", "9 giờ"], answer: 'A' },
        { text: "Trộn $x$ lít dung dịch 30% với $y$ lít dung dịch 60% được 20 lít dung dịch 45%. Tìm $x, y$:", options: ["$x=10, y=10$", "$x=5, y=15$", "$x=15, y=5$", "$x=8, y=12$"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Một người đi bộ $3$ km rồi đi xe đạp $12$ km, tổng thời gian là $2$ giờ. Biết tốc độ xe đạp gấp $4$ lần tốc độ đi bộ. Gọi tốc độ đi bộ là $v$ km/h. Xét các mệnh đề:",
        statements: [
          { text: "Thời gian đi bộ là $\\dfrac{3}{v}$ giờ và thời gian đi xe đạp là $\\dfrac{12}{4v} = \\dfrac{3}{v}$ giờ.", answer: "Đúng" },
          { text: "Phương trình tìm $v$: $\\dfrac{3}{v} + \\dfrac{3}{v} = 2 \\Rightarrow \\dfrac{6}{v} = 2$.", answer: "Đúng" },
          { text: "Tốc độ đi bộ là $v = 3$ km/h.", answer: "Đúng" },
          { text: "Tốc độ xe đạp là $16$ km/h.", answer: "Sai" }
        ]
      },
      {
        context: "Hai công nhân A và B cùng sản xuất $1200$ sản phẩm. Năng suất A gấp $1{,}5$ lần năng suất B. Xét các mệnh đề:",
        statements: [
          { text: "Gọi số sản phẩm B làm là $x$, thì A làm $1{,}5x$ sản phẩm.", answer: "Đúng" },
          { text: "Phương trình: $x + 1{,}5x = 1200 \\Rightarrow 2{,}5x = 1200$.", answer: "Đúng" },
          { text: "B làm được $480$ sản phẩm.", answer: "Đúng" },
          { text: "A làm được $700$ sản phẩm.", answer: "Sai" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Giải hệ $\\begin{cases} 3x + 2y = 12 \\\\ x - y = 1 \\end{cases}$. Tính $x + y$.", answer: "$x = 2, y = 3 \\Rightarrow x + y = 5$" },
        { text: "Hai số có tổng là $28$ và hiệu là $4$. Tìm hai số đó.", answer: "$16$ và $12$" }
      ],
      "Vận dụng": [
        { text: "Pha $x$ lít cồn $90°$ với $y$ lít nước cất được $10$ lít cồn $70°$. Tìm $x$ và $y$.", answer: "$x = \\dfrac{70}{9} \\approx 7{,}78$ lít; $y \\approx 2{,}22$ lít" },
        { text: "Vòi A và B cùng chảy đầy bể sau $2$ giờ. Vòi A một mình đầy sau $3$ giờ. Hỏi vòi B một mình đầy sau mấy giờ?", answer: "$6$ giờ" }
      ],
      "Vận dụng cao": [
        { text: "Ba máy bơm A, B, C cùng làm đầy bể sau $1$ giờ $20$ phút. A+B đầy sau $2$ giờ; A+C đầy sau $2$ giờ $24$ phút. Hỏi A một mình đầy bể sau mấy giờ?", answer: "$6$ giờ" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // TÍNH ĐƠN ĐIỆU VÀ CỰC TRỊ - Đề số 01 (Bộ đề theo chương)
  // Nguồn: Bộ đề ôn tập Chương 1 - Form 2025
  // ──────────────────────────────────────────────────────────
  "Tính đơn điệu của hàm số": {
    nlc: {
      "Nhận biết": [
        { text: "Hàm số $y = -x^3 - 3x^2 + 9x - 1$ đồng biến trên khoảng nào?", options: ["$(-\\infty; -3)$", "$(-3; 1)$", "$(-3; +\\infty)$", "$(1; +\\infty)$"], answer: 'B' },
        { text: "Hàm số $y = 5x - 10$ có bao nhiêu cực trị?", options: ["0", "1", "2", "3"], answer: 'A' },
        { text: "Hàm số $y = \\frac{x}{x^2 + 1}$ đồng biến trên khoảng nào?", options: ["$(-1; 1)$", "$(0; +\\infty)$", "$(-\\infty; -1)$", "$(1; +\\infty)$"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Hàm số $y = x^4 - 2x^2 + 3$ nghịch biến trên khoảng nào?", options: ["$(-\\infty; -1)$ và $(0; 1)$", "$(-1; 0)$ và $(1; +\\infty)$", "$(-1; 1)$", "$(0; +\\infty)$"], answer: 'A' },
        { text: "Tìm cực tiểu của hàm số $y = x^3 - 3x + 2$:", options: ["$y_{ct} = 0$", "$y_{ct} = 4$", "$x_{ct} = 1$", "$x_{ct} = -1$"], answer: 'A' },
        { text: "Hàm số $f(x)$ có $f'(x) = x(x-1)^2(x-2)$. Số điểm cực trị là:", options: ["2", "1", "3", "0"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "Tìm $m$ để hàm số $y = x^3 - 3mx^2 + 3(m^2-1)x + 1$ đồng biến trên $\\mathbb{R}$:", options: ["$m \\in [-1; 1]$", "$m > 1$", "$m < -1$", "$m = 0$"], answer: 'A' },
        { text: "Hàm số $y = 2\\sin x - x$ đạt giá trị lớn nhất trên $[0; \\pi/2]$ tại:", options: ["$x = \\pi/3$", "$x = 0$", "$x = \\pi/2$", "$x = \\pi/6$"], answer: 'A' },
        { text: "Hàm số $y = x^3 - 3x^2 - 9x + 1$ đồng biến trên khoảng nào?", options: ["$(-\\infty; -1)$ và $(3; +\\infty)$", "$(-1; 3)$", "$(0; +\\infty)$", "$(-\\infty; 0)$"], answer: 'A' }
      ],
      "Vận dụng cao": [
        { text: "Tìm giá trị $m$ để hàm $y = \\dfrac{x^2 + mx + 1}{x+m}$ đồng biến trên $(0; +\\infty)$:", options: ["$m \\geq 1$", "$m \\leq -1$", "$m = 0$", "$m \\in [-1; 1]$"], answer: 'A' },
        { text: "Hàm $f(x) = \\sin x - \\dfrac{x}{1+x^2}$ thỏa mãn $f'(x)$ bằng:", options: ["$\\cos x - \\dfrac{1-x^2}{(1+x^2)^2}$", "$\\cos x + \\dfrac{1}{(1+x^2)^2}$", "$-\\sin x + \\dfrac{1}{1+x^2}$", "$\\cos x - \\dfrac{1}{1+x^2}$"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Cho hàm số $f(x) = 2\\sin x - x$ trên đoạn $\\left[0; \\dfrac{\\pi}{2}\\right]$. Xét các mệnh đề sau:",
        statements: [
          { text: "Đạo hàm $f'(x) = 2\\cos x - 1$.", answer: "Đúng" },
          { text: "$f'(x) = 0 \\Leftrightarrow \\cos x = \\dfrac{1}{2} \\Leftrightarrow x = \\dfrac{\\pi}{3}$ (trên đoạn đang xét).", answer: "Đúng" },
          { text: "Hàm số đồng biến trên $\\left[0; \\dfrac{\\pi}{3}\\right]$ và nghịch biến trên $\\left[\\dfrac{\\pi}{3}; \\dfrac{\\pi}{2}\\right]$.", answer: "Đúng" },
          { text: "Giá trị lớn nhất của $f$ trên $[0; \\pi/2]$ là $f\\!\\left(\\dfrac{\\pi}{3}\\right) = \\sqrt{3} - \\dfrac{\\pi}{3}$.", answer: "Đúng" }
        ]
      },
      {
        context: "Hàm số $y = x^3 - 3x^2 - 9x + 5$ có bảng biến thiên xác định được. Xét các mệnh đề sau:",
        statements: [
          { text: "$y' = 3x^2 - 6x - 9 = 3(x-3)(x+1)$.", answer: "Đúng" },
          { text: "Hàm số đồng biến trên $(-\\infty; -1)$ và $(3; +\\infty)$.", answer: "Đúng" },
          { text: "Hàm số đạt cực đại tại $x = -1$ với giá trị cực đại bằng $10$.", answer: "Đúng" },
          { text: "Giá trị cực tiểu của hàm số bằng $-22$.", answer: "Đúng" }
        ]
      },
      {
        context: "Cho hàm số $y = \\dfrac{x-1}{x+2}$. Xét các mệnh đề sau:",
        statements: [
          { text: "Tập xác định $D = \\mathbb{R} \\setminus \\{-2\\}$.", answer: "Đúng" },
          { text: "Đạo hàm $y' = \\dfrac{(x+2) - (x-1)}{(x+2)^2} = \\dfrac{3}{(x+2)^2} > 0$ với mọi $x \\in D$.", answer: "Đúng" },
          { text: "Hàm số đồng biến trên $(-\\infty; -2)$ và $(-2; +\\infty)$.", answer: "Đúng" },
          { text: "Hàm số đồng biến trên $\\mathbb{R}$.", answer: "Sai" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Tìm khoảng đồng biến của hàm số $y = x^3 - 3x + 2$.", answer: "$(-\\infty; -1)$ và $(1; +\\infty)$" },
        { text: "Hàm số $y = -x^2 + 6x - 5$ đạt cực đại tại $x = ?$", answer: "$x = 3$, cực đại $= 4$" },
        { text: "Tính $f'(x)$ nếu $f(x) = 2\\sin x - x$, sau đó tìm điểm cực đại trên $(0; \\pi)$.", answer: "$x = \\dfrac{\\pi}{3}$" }
      ],
      "Vận dụng": [
        { text: "Tìm $m$ để hàm $y = x^3 - 3x^2 + mx - 1$ không có cực trị.", answer: "$m \\geq 3$" },
        { text: "Cho $f(x) = x^3 - 3mx + 2m$. Tìm $m$ để $f$ có hai điểm cực trị $x_1, x_2$ thỏa $x_1^2 + x_2^2 = 8$.", answer: "$m = \\pm 2$" }
      ],
      "Vận dụng cao": [
        { text: "Tìm giá trị lớn nhất của $f(x) = x^3 - 3x$ trên $[-2; 3]$.", answer: "$f(3) = 18$" }
      ]
    }
  },

  "Vectơ và các phép toán vectơ trong không gian": {
    nlc: {
      "Nhận biết": [
        { text: "Trong không gian, quy tắc ba điểm đối với vectơ được phát biểu là:", options: ["$\\vec{AB} + \\vec{BC} = \\vec{AC}$", "$\\vec{AB} + \\vec{AC} = \\vec{BC}$", "$\\vec{AB} - \\vec{BC} = \\vec{AC}$", "$\\vec{AB} + \\vec{BC} = \\vec{CA}$"], answer: 'A' },
        { text: "Cho hình hộp $ABCD.A'B'C'D'$. Vectơ $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng:", options: ["$\\vec{AC'}$", "$\\vec{AC}$", "$\\vec{A'C}$", "$\\vec{BD'}$"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Cho tứ diện $ABCD$. Tìm vectơ $\\vec{x} = \\vec{AB} + \\vec{CD} - \\vec{AD}$:", options: ["$\\vec{CB}$", "$\\vec{BC}$", "$\\vec{BD}$", "$\\vec{AC}$"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Cho hình hộp $ABCD.A'B'C'D'$. Xét các mệnh đề sau:",
        statements: [
          { text: "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$.", answer: "Đúng" },
          { text: "$\\vec{AB} + \\vec{A'D'} = \\vec{AC}$ (nằm trong mặt phẳng đáy).", answer: "Đúng" },
          { text: "$\\vec{AC'} = \\vec{AC} + \\vec{CC'}$ (quy tắc ba điểm).", answer: "Đúng" },
          { text: "Bốn đường chéo của hình hộp cắt nhau tại trung điểm mỗi đường.", answer: "Đúng" }
        ]
      },
      {
        context: "Cho tứ diện đều $ABCD$ cạnh $a$, $M$ là trung điểm $BC$. Xét các mệnh đề:",
        statements: [
          { text: "$\\vec{AM} = \\dfrac{1}{2}(\\vec{AB} + \\vec{AC})$.", answer: "Đúng" },
          { text: "$\\vec{AB} \\cdot \\vec{AC} = \\dfrac{a^2}{2}$.", answer: "Đúng" },
          { text: "$\\vec{DA} + \\vec{DB} + \\vec{DC} = 3\\vec{DG}$ với $G$ là trọng tâm $\\triangle ABC$.", answer: "Đúng" },
          { text: "$|\\vec{AB} + \\vec{AC}| = a\\sqrt{3}$.", answer: "Đúng" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Cho hình bình hành $ABCD$. Chứng minh $\\vec{AC} + \\vec{BD} = 2\\vec{BC}$. Kết quả đúng hay sai?", answer: "Đúng" },
        { text: "Cho hình hộp $ABCD.A'B'C'D'$ có $AB = 3$, $AD = 4$, $AA' = 5$. Tính $|\\vec{AC'}|$.", answer: "$5\\sqrt{2}$" }
      ],
      "Vận dụng": [
        { text: "Ba lực $\\vec{F_1} = (2; 1; 3)$, $\\vec{F_2} = (-1; 3; 0)$, $\\vec{F_3} = (1; -2; -1)$ tác dụng lên vật. Tìm độ lớn hợp lực.", answer: "$2\\sqrt{3}$ N" },
        { text: "Máy bay bay từ $A$ đến $B$ theo vectơ $\\vec{AB} = (300; 400; 5)$ km. Tính khoảng cách bay.", answer: "$500$ km (xấp xỉ)" }
      ],
      "Vận dụng cao": [
        { text: "Cho tứ diện $ABCD$, $G$ là trọng tâm. Chứng minh $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$. Kết quả đúng hay sai?", answer: "Đúng" }
      ]
    }
  },

  "Toạ độ của vectơ trong không gian": {
    nlc: {
      "Nhận biết": [
        { text: "Trong không gian $Oxyz$, cho $\\vec{a} = (1; 2; -3)$. Độ dài của $\\vec{a}$ là:", options: ["$\\sqrt{14}$", "14", "$\\sqrt{6}$", "$\\sqrt{5}$"], answer: 'A' },
        { text: "Cho $A(1; 2; 3), B(2; 4; 2)$. Tọa độ vectơ $\\vec{AB}$ là:", options: ["$(1; 2; -1)$", "$(3; 6; 5)$", "$(-1; -2; 1)$", "$(1; 2; 1)$"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Trong không gian $Oxyz$, cho $A(1; 2; 3)$, $B(3; 4; 1)$, $C(2; 0; 5)$. Xét các mệnh đề:",
        statements: [
          { text: "$\\vec{AB} = (2; 2; -2)$.", answer: "Đúng" },
          { text: "Trung điểm $M$ của $AB$ có tọa độ $M(2; 3; 2)$.", answer: "Đúng" },
          { text: "$|\\vec{AB}| = 2\\sqrt{3}$.", answer: "Đúng" },
          { text: "Ba điểm $A$, $B$, $C$ thẳng hàng.", answer: "Sai" }
        ]
      },
      {
        context: "Robot công nghiệp di chuyển từ vị trí $P(0; 0; 0)$ đến $Q(4; 3; 0)$ rồi đến $R(4; 3; 5)$ trong hệ tọa độ $Oxyz$ (đơn vị mét). Xét các mệnh đề:",
        statements: [
          { text: "Quãng đường từ $P$ đến $Q$ trên mặt phẳng ngang là $PQ = 5$ m.", answer: "Đúng" },
          { text: "Quãng đường từ $Q$ lên $R$ (theo phương thẳng đứng) là $5$ m.", answer: "Đúng" },
          { text: "Khoảng cách tối thiểu từ $P$ đến $R$ (đường chim bay) là $PR = 5\\sqrt{2}$ m.", answer: "Đúng" },
          { text: "Tổng quãng đường thực tế robot di chuyển là $5\\sqrt{2}$ m.", answer: "Sai" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Cho $\\vec{a} = (2; -1; 3)$, $\\vec{b} = (1; 4; -2)$. Tính $\\vec{a} \\cdot \\vec{b}$.", answer: "$-8$" },
        { text: "Cho $A(1; -2; 3)$ và $B(4; 2; -1)$. Tính $AB$.", answer: "$\\sqrt{41}$" },
        { text: "Drone bay từ điểm $A(0; 0; 10)$ đến $B(30; 40; 10)$. Tính khoảng cách bay.", answer: "$50$ m" }
      ],
      "Vận dụng": [
        { text: "Tàu thủy ở vị trí $A(3; 5; 0)$ phát tín hiệu, trạm thu ở $B(7; 8; 0)$. Tính khoảng cách $AB$ (đơn vị km).", answer: "$5$ km" },
        { text: "Cho 3 đỉnh tam giác $A(1; 0; 0)$, $B(0; 1; 0)$, $C(0; 0; 1)$. Tính diện tích $\\triangle ABC$.", answer: "$\\dfrac{\\sqrt{3}}{2}$" }
      ],
      "Vận dụng cao": [
        { text: "Vệ tinh phát sóng từ $S(0; 0; 36000)$ km. Trạm mặt đất tại $A(6400; 0; 0)$ km. Tính khoảng cách $SA$.", answer: "$\\approx 36564$ km" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // ĐỀ THAM KHẢO BGD 2025 - CÁC BÀI TOÁN THỰC TẾ
  // ──────────────────────────────────────────────────────────
  "Bài toán thực tế tổng hợp": {
    nlc: {
      "Nhận biết": [
        { text: "Xe ô tô hãm phanh với vận tốc $v(t) = 16 - 4t$ (m/s). Xe dừng sau:", options: ["4 giây", "2 giây", "8 giây", "16 giây"], answer: 'A' },
        { text: "Lớp học có 30 HS (17 nữ, 13 nam). XS chọn được 1 học sinh nữ là:", options: ["$17/30$", "$13/30$", "$1/2$", "$17/13$"], answer: 'A' }
      ],
      "Thông hiểu": [
        { text: "Xe hãm phanh $v(t) = 16 - 4t$. Quãng đường đi được từ lúc phanh đến khi dừng là:", options: ["32 m", "64 m", "16 m", "8 m"], answer: 'A' },
        { text: "Lớp 30 HS (17 nữ, 13 nam); có 3 bạn tên Hiền (1 nữ, 2 nam). XS chọn được bạn Hiền biết là nữ là:", options: ["$1/17$", "$1/30$", "$1/3$", "$2/17$"], answer: 'A' }
      ],
      "Vận dụng": [
        { text: "GPS: Vệ tinh $A_1(3;0;0), A_2(-3;0;0)$. Điểm $M$ cách đều $A_1, A_2$ nằm trên mặt phẳng nào?", options: ["$x = 0$", "$y = 0$", "$z = 0$", "$x + y + z = 0$"], answer: 'A' }
      ]
    },
    ds: [
      {
        context: "Một xe ô tô đang chạy với vận tốc $16$ m/s thì hãm phanh, vận tốc giảm theo hàm $v(t) = 16 - 4t$ (m/s, $t \\geq 0$ tính bằng giây). Xét các mệnh đề sau:",
        statements: [
          { text: "Xe dừng hẳn tại thời điểm $t = 4$ giây (khi $v(4) = 0$).", answer: "Đúng" },
          { text: "Quãng đường xe đi được là $S = \\int_0^4 (16 - 4t)\\,dt$.", answer: "Đúng" },
          { text: "$S = \\left[16t - 2t^2\\right]_0^4 = 64 - 32 = 32$ mét.", answer: "Đúng" },
          { text: "Nếu vận tốc ban đầu tăng gấp đôi ($32$ m/s), quãng đường hãm phanh cũng tăng gấp đôi.", answer: "Sai" }
        ]
      },
      {
        context: "Lớp 12A có 30 học sinh: 17 nữ và 13 nam. Trong lớp có 3 bạn tên Hiền: 1 bạn nữ và 2 bạn nam. Chọn ngẫu nhiên 1 học sinh. Xét các mệnh đề sau:",
        statements: [
          { text: "Xác suất chọn được bạn tên Hiền là $P(\\text{Hiền}) = \\dfrac{3}{30} = \\dfrac{1}{10}$.", answer: "Đúng" },
          { text: "Xác suất chọn được bạn tên Hiền, biết bạn đó là nữ: $P(\\text{Hiền}|\\text{Nữ}) = \\dfrac{1}{17}$.", answer: "Đúng" },
          { text: "Xác suất chọn được bạn tên Hiền, biết bạn đó là nam: $P(\\text{Hiền}|\\text{Nam}) = \\dfrac{2}{13}$.", answer: "Đúng" },
          { text: "$P(\\text{Hiền}|\\text{Nữ}) > P(\\text{Hiền}|\\text{Nam})$ vì $\\dfrac{1}{17} > \\dfrac{2}{13}$.", answer: "Sai" }
        ]
      },
      {
        context: "Hệ định vị GPS dùng 4 vệ tinh. Vệ tinh $A_1$ ở $A_1(300; 0; 0)$ km và $A_2(-300; 0; 0)$ km. Điểm $M(x; y; z)$ là vị trí thiết bị trên mặt đất ($z = 0$). Xét các mệnh đề sau:",
        statements: [
          { text: "Phương trình mặt cầu tín hiệu từ $A_1$ có tâm $A_1(300; 0; 0)$ và bán kính $R$ bằng khoảng cách $A_1M$.", answer: "Đúng" },
          { text: "Nếu $M(0; y; 0)$ cách đều $A_1$ và $A_2$ thì $M$ nằm trên mặt phẳng $x = 0$.", answer: "Đúng" },
          { text: "Điểm $M$ được xác định chính xác khi biết khoảng cách từ $M$ đến ít nhất $3$ vệ tinh không đồng phẳng.", answer: "Đúng" },
          { text: "Với $4$ vệ tinh, hệ GPS có thể định vị chính xác theo cả $3$ chiều $x$, $y$, $z$.", answer: "Đúng" }
        ]
      }
    ],
    tln: {
      "Thông hiểu": [
        { text: "Xe hãm phanh với $v(t) = 20 - 5t$ (m/s). Tính quãng đường hãm phanh.", answer: "$S = \\int_0^4 (20-5t)dt = 40$ m" },
        { text: "Lớp 12 có 40 HS (22 nữ, 18 nam), 4 bạn tên An (2 nữ, 2 nam). Tính $P(\\text{An}|\\text{Nữ})$.", answer: "$\\dfrac{2}{22} = \\dfrac{1}{11}$" },
        { text: "Virus lây lan theo mô hình $N(t) = 100 \\cdot 2^t$. Sau $5$ ngày có bao nhiêu ca?", answer: "$3200$ ca" }
      ],
      "Vận dụng": [
        { text: "Doanh nghiệp giao hàng qua 3 kho A, B, C cách lần lượt $5$km, $8$km, $6$km từ kho chính. Góc $\\angle ABC = 60°$ và $AB = 10$km. Tính khoảng cách $AC$.", answer: "$AC = \\sqrt{AB^2 + BC^2 - 2\\cdot AB\\cdot BC\\cdot\\cos B} = \\sqrt{100+36-60} = \\sqrt{76}$ km" },
        { text: "Nhiệt độ lò nung $T(t) = 800 + 200t - 10t^2$ (°C, $0 \\leq t \\leq 15$ phút). Tìm nhiệt độ cao nhất.", answer: "$T_{max} = T(10) = 1800°C$" }
      ],
      "Vận dụng cao": [
        { text: "Trong bài toán GPS: thiết bị nhận tín hiệu từ 3 vệ tinh coplanar, thời gian nhận lần lượt là $t_1 = 0{,}001$ s, $t_2 = 0{,}0012$ s, $t_3 = 0{,}0015$ s (tốc độ sóng $c = 3\\times10^5$ km/s). Tính $|A_1M|$, $|A_2M|$, $|A_3M|$.", answer: "$300$ km; $360$ km; $450$ km" }
      ]
    }
  }
};

// ============================================================
// HÀM TIỆN ÍCH
// ============================================================

/**
 * Tìm topic phù hợp nhất trong QUESTION_BANK dựa trên tên bài học.
 * Ưu tiên: exact match > chứa lẫn nhau > fallback ngẫu nhiên.
 */
function findBestTopic(noiDung: string, fallbackTopics: string[]): TopicBank | undefined {
  // 1. Chuẩn hóa cực mạnh
  let input = noiDung.trim().toLowerCase();

  // Loại bỏ các tiền tố phổ biến: CĐ1, Chương 2, Bài 3, CD 5...
  input = input.replace(/^(c[đd]|chương|bài|b[.]|c[.])\s*\d+[.:\s-]*/i, '').trim();

  // Map các từ đồng nghĩa phổ biến để tăng khả năng trúng bank
  const SYNONYMS: { [key: string]: string } = {
    "biến thiên": "Tính đơn điệu của hàm số",
    "cực trị": "Tính đơn điệu của hàm số",
    "đạo hàm": "Hàm số",
    "giá trị lớn nhất": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "giá trị nhỏ nhất": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "gtln": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "gtnn": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "tiệm cận": "Đường tiệm cận của đồ thị hàm số",
    "tọa độ": "Toạ độ của vectơ trong không gian",
    "oxyz": "Toạ độ của vectơ trong không gian",
    "xác suất điều kiện": "Xác suất có điều kiện",
    "bayes": "Xác suất có điều kiện",
    "toàn phần": "Xác suất có điều kiện",
    "mũ": "Hàm số mũ - Hàm số Logarit",
    "logarit": "Hàm số mũ - Hàm số Logarit",
    "tích phân": "Nguyên hàm - Tích phân"
  };

  for (const [syn, target] of Object.entries(SYNONYMS)) {
    if (input.includes(syn)) return QUESTION_BANK[target];
  }

  const bankKeys = Object.keys(QUESTION_BANK);

  // 2. Ưu tiên fallbackTopics nếu trùng khớp hoàn toàn
  for (const ft of fallbackTopics) {
    if (ft.toLowerCase() === input) return QUESTION_BANK[ft];
  }

  // 3. Tìm key chứa input hoặc input chứa key (fuzzy match)
  let bestKey = '';
  let bestScore = 0;

  for (const key of bankKeys) {
    const keyLower = key.toLowerCase();
    if (keyLower === input) return QUESTION_BANK[key];

    if (input.includes(keyLower)) {
      const score = keyLower.length * 2;
      if (score > bestScore) { bestKey = key; bestScore = score; }
    }

    if (keyLower.includes(input)) {
      const score = input.length;
      if (score > bestScore) { bestKey = key; bestScore = score; }
    }

    // Tách từ và đếm số từ trùng (đã lọc các từ quá ngắn)
    const inputWords = input.split(/[\s\-–,;.]+/).filter(w => w.length > 2);
    const keyWords = keyLower.split(/[\s\-–,;.]+/).filter(w => w.length > 2);
    const commonWords = inputWords.filter(w => keyWords.some(kw => kw.includes(w) || w.includes(kw)));
    if (commonWords.length > 0) {
      const score = commonWords.length * 10 + commonWords.join('').length;
      if (score > bestScore) { bestKey = key; bestScore = score; }
    }
  }

  if (bestKey && bestScore > 0) return QUESTION_BANK[bestKey];

  // 4. Fallback cuối cùng: lấy từ danh sách mặc định
  return QUESTION_BANK[fallbackTopics[0]];

  // 4. Fallback: chọn ngẫu nhiên từ danh sách fallback
  const validFallbacks = fallbackTopics.filter(t => QUESTION_BANK[t]);
  if (validFallbacks.length > 0) {
    return QUESTION_BANK[validFallbacks[Math.floor(Math.random() * validFallbacks.length)]];
  }

  // 5. Cuối cùng: lấy topic đầu tiên có trong bank
  return QUESTION_BANK[bankKeys[0]];
}

const usedDSIndices: Map<string, Set<number>> = new Map();
const usedTLNIndices: Map<string, Set<number>> = new Map();
const usedNLCIndices: Map<string, Set<number>> = new Map();

/**
 * Reset toàn bộ tracking khi tạo đề mới.
 * Gọi hàm này trước khi bắt đầu generateExam.
 */
export function resetUsedQuestions(): void {
  usedDSIndices.clear();
  usedTLNIndices.clear();
  usedNLCIndices.clear();
}

// ============================================================
// BỘ LỌC CÂU HỎI THỰC TẾ
// ============================================================
const PRACTICAL_KEYWORDS = [
  // Vật lý / chuyển động
  'xe', 'ô tô', 'vận tốc', 'quãng đường', 'hãm phanh', 'bóng', 'ném', 'rơi', 'viên đạn', 'máy bay', 'tàu', 'drone', 'chuyển động',
  // Y tế / sinh học
  'thuốc', 'nồng độ', 'vi khuẩn', 'virus', 'bệnh', 'tiêm', 'dược', 'sức khỏe', 'y tế',
  // Tài chính / kinh tế
  'lãi suất', 'ngân hàng', 'đầu tư', 'gửi', 'triệu', 'doanh thu', 'chi phí', 'sản phẩm', 'sản xuất', 'lợi nhuận', 'giá', 'tiết kiệm', 'lãi kép', 'vốn',
  // Xây dựng / đời sống
  'nhà kho', 'bể', 'hồ bơi', 'bình', 'lon', 'xô', 'thùng', 'nón lá', 'kim tự tháp', 'đống cát', 'mảnh vườn', 'đất', 'hộp', 'bao bì',
  // Dân số / xã hội
  'dân số', 'học sinh', 'lớp', 'giám thị', 'công nhân', 'xạ thủ', 'người', 'cân nặng', 'chiều cao', 'lương',
  // Công nghệ / kỹ thuật
  'robot', 'vệ tinh', 'GPS', 'tín hiệu', 'ăng-ten', 'sóng', 'mạch điện', 'điện xoay chiều', 'kỹ thuật', 'nhà máy',
  // Nước / tự nhiên
  'nước', 'lũ', 'lưu lượng', 'nhiệt độ', 'lò nung', 'bơm',
  // Điện
  'điện', 'mạch', 'tổng trở', 'điện trở',
  // Đo lường thực tế  
  'cm', 'mét', 'm²', 'm³', 'km', 'lít', 'kg', 'tấn', 'giờ', 'phút', 'giây'
];

/** Kiểm tra câu DS có phải thực tế không */
function isPracticalDS(q: DSQuestion): boolean {
  const text = q.context.toLowerCase();
  return PRACTICAL_KEYWORDS.some(kw => text.includes(kw.toLowerCase()));
}

/** Kiểm tra câu TLN có phải thực tế không */
function isPracticalTLN(q: TLNQuestion): boolean {
  const text = q.text.toLowerCase();
  return PRACTICAL_KEYWORDS.some(kw => text.includes(kw.toLowerCase()));
}

/**
 * Lấy câu hỏi NLC ngẫu nhiên theo chủ đề và mức độ — có tracking chống trùng
 */
export function pickNLCQuestion(noiDung: string, mucDo: string): NLCQuestion {
  const fallbackTopics = ["Hàm số", "Nguyên hàm - Tích phân", "Xác suất", "Hàm số mũ - Hàm số Logarit", "Phương trình - Bất phương trình mũ và logarit", "Giới hạn hàm số", "Xác suất có điều kiện", "Thống kê", "Tổ hợp - Xác suất"];

  // 1. Tìm topic sát nhất
  const bankEntry = findBestTopic(noiDung, fallbackTopics);
  const levels = bankEntry?.nlc || {};
  let rawPool = (levels[mucDo] || levels["Nhận biết"] || []).map(toNLC);

  // 2. Nếu pool trống, thử lấy từ danh sách fallback (các chủ đề lớn tương tự)
  if (rawPool.length === 0) {
    for (const fbTopic of fallbackTopics) {
      if (noiDung.toLowerCase().includes(fbTopic.toLowerCase()) || fbTopic.toLowerCase().includes(noiDung.toLowerCase())) {
        const fbLevels = QUESTION_BANK[fbTopic]?.nlc || {};
        const fbPool = (fbLevels[mucDo] || fbLevels["Nhận biết"] || []).map(toNLC);
        if (fbPool.length > 0) {
          rawPool = fbPool;
          break;
        }
      }
    }
  }

  // 3. Nếu vẫn trống, lấy bừa 1 câu từ topic đầu tiên của fallbackTopics để đảm bảo không bị lạc đề quá xa
  if (rawPool.length === 0) {
    const defaultTopic = fallbackTopics[0];
    const defLevels = QUESTION_BANK[defaultTopic]?.nlc || {};
    rawPool = (defLevels[mucDo] || defLevels["Nhận biết"] || []).map(toNLC);
  }

  // 4. Tracking: chọn câu chưa dùng
  const key = `${noiDung}__${mucDo}`;
  if (!usedNLCIndices.has(key)) usedNLCIndices.set(key, new Set());
  const used = usedNLCIndices.get(key)!;

  const indices = shuffle(Array.from({ length: rawPool.length }, (_, i) => i));

  for (const idx of indices) {
    if (!used.has(idx)) {
      used.add(idx);
      return rawPool[idx];
    }
  }

  used.clear();
  const chosen = indices[0];
  used.add(chosen);
  return rawPool[chosen];
}

/**
 * Lấy câu hỏi Đúng/Sai — ƯU TIÊN CÂU THỰC TẾ, không trùng lặp
 */
export function pickDSQuestion(noiDung: string): DSQuestion {
  const fallbackTopics = ["Hàm số", "Nguyên hàm - Tích phân", "Xác suất", "Hình học không gian", "Xác suất có điều kiện"];
  const bankEntry = findBestTopic(noiDung, fallbackTopics);
  let pool = bankEntry?.ds || [];

  // 2. Nếu pool trống, thử lấy từ các chủ đề lớn của fallback
  if (pool.length === 0) {
    for (const fbTopic of fallbackTopics) {
      if (noiDung.toLowerCase().includes(fbTopic.toLowerCase()) || fbTopic.toLowerCase().includes(noiDung.toLowerCase())) {
        const fbPool = QUESTION_BANK[fbTopic]?.ds || [];
        if (fbPool.length > 0) { pool = fbPool; break; }
      }
    }
  }

  // 3. Vẫn trống thì lấy mặc định
  if (pool.length === 0) {
    pool = QUESTION_BANK[fallbackTopics[0]]?.ds || [];
  }

  if (pool.length === 0) {
    return {
      context: `Xét các mệnh đề sau liên quan đến ${noiDung}:`,
      statements: [
        { text: "Mệnh đề nhận biết mức 1.", answer: "Đúng" },
        { text: "Mệnh đề thông hiểu mức 2.", answer: "Sai" },
        { text: "Mệnh đề vận dụng mức 3.", answer: "Đúng" },
        { text: "Mệnh đề vận dụng cao mức 4.", answer: "Sai" }
      ]
    };
  }

  // ƯU TIÊN câu thực tế — mở rộng tìm kiếm toàn bộ ngân hàng nếu cần
  let practicalPool = pool.filter(isPracticalDS);

  // Nếu topic hiện tại không có đủ câu thực tế, tìm trên TẤT CẢ topics
  if (practicalPool.length === 0) {
    const allPracticalDS: DSQuestion[] = [];
    for (const topicKey of Object.keys(QUESTION_BANK)) {
      const topicDS = QUESTION_BANK[topicKey].ds || [];
      allPracticalDS.push(...topicDS.filter(isPracticalDS));
    }
    if (allPracticalDS.length > 0) practicalPool = allPracticalDS;
  }

  const targetPool = practicalPool.length > 0 ? practicalPool : pool;

  // Tracking: chọn câu chưa dùng
  const key = noiDung || '__default__';
  if (!usedDSIndices.has(key)) usedDSIndices.set(key, new Set());
  const used = usedDSIndices.get(key)!;

  // Shuffle pool indices
  const indices = shuffle(Array.from({ length: targetPool.length }, (_, i) => i));

  // Tìm câu chưa dùng
  for (const idx of indices) {
    if (!used.has(idx)) {
      used.add(idx);
      return targetPool[idx];
    }
  }

  // Nếu hết câu practical chưa dùng, reset và chọn lại từ practical
  used.clear();
  const chosen = indices[0];
  used.add(chosen);
  return targetPool[chosen];
}

/**
 * Lấy câu hỏi TLN — ƯU TIÊN CÂU THỰC TẾ, không trùng lặp
 */
export function pickTLNQuestion(noiDung: string, mucDo: string): TLNQuestion {
  const fallbackTopics = ["Hàm số", "Nguyên hàm - Tích phân", "Xác suất", "Hình học không gian", "Xác suất có điều kiện"];
  const bankEntry = findBestTopic(noiDung, fallbackTopics);
  const levels = bankEntry?.tln || {};
  let pool = (levels[mucDo] || levels["Thông hiểu"] || []);

  // 2. Nếu pool trống, thử tìm chủ đề liên quan trong fallback
  if (pool.length === 0) {
    for (const fbTopic of fallbackTopics) {
      if (noiDung.toLowerCase().includes(fbTopic.toLowerCase()) || fbTopic.toLowerCase().includes(noiDung.toLowerCase())) {
        const fbLevels = QUESTION_BANK[fbTopic]?.tln || {};
        const fbPool = (fbLevels[mucDo] || fbLevels["Thông hiểu"] || []);
        if (fbPool.length > 0) { pool = fbPool; break; }
      }
    }
  }

  // 3. Vẫn trống thì lấy mặc định
  if (pool.length === 0) {
    const defLevels = QUESTION_BANK[fallbackTopics[0]]?.tln || {};
    pool = (defLevels[mucDo] || defLevels["Thông hiểu"] || []);
  }

  if (pool.length === 0) {
    return { text: `Câu hỏi trả lời ngắn về ${noiDung} mức ${mucDo}.`, answer: "..." };
  }

  // ƯU TIÊN câu thực tế — mở rộng tìm kiếm toàn bộ ngân hàng nếu cần
  let practicalPool = pool.filter(isPracticalTLN);

  // Nếu topic hiện tại không có đủ câu thực tế, tìm trên TẤT CẢ topics
  if (practicalPool.length === 0) {
    const allPracticalTLN: TLNQuestion[] = [];
    for (const topicKey of Object.keys(QUESTION_BANK)) {
      const topicTLN = QUESTION_BANK[topicKey].tln || {};
      const topicPool = topicTLN[mucDo] || topicTLN["Thông hiểu"] || [];
      allPracticalTLN.push(...topicPool.filter(isPracticalTLN));
    }
    if (allPracticalTLN.length > 0) practicalPool = allPracticalTLN;
  }

  const targetPool = practicalPool.length > 0 ? practicalPool : pool;

  // Tracking: chọn câu chưa dùng
  const key = `${noiDung}__${mucDo}`;
  if (!usedTLNIndices.has(key)) usedTLNIndices.set(key, new Set());
  const used = usedTLNIndices.get(key)!;

  // Shuffle pool indices
  const indices = shuffle(Array.from({ length: targetPool.length }, (_, i) => i));

  // Tìm câu chưa dùng
  for (const idx of indices) {
    if (!used.has(idx)) {
      used.add(idx);
      return targetPool[idx];
    }
  }

  // Nếu hết câu practical chưa dùng, reset và chọn lại
  used.clear();
  const chosen = indices[0];
  used.add(chosen);
  return targetPool[chosen];
}

