/**
 * KHO CÂU HỎI TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (NLC)
 * Math Matrix Pro 2026
 * 
 * Cấu trúc: mảng phẳng, mỗi câu gồm:
 *   - topic: chủ đề
 *   - level: mức độ (Nhận biết / Thông hiểu / Vận dụng / Vận dụng cao)
 *   - text, options, answer
 */

export interface NLCQuestion {
  text: string;
  options: [string, string, string, string];
  answer: 'A' | 'B' | 'C' | 'D';
  topic: string;
  level: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
  image?: string;
}

export const NLC_BANK: NLCQuestion[] = [

  // ──────────────────────────────────────────────────────────
  // HÀM SỐ - TÍNH ĐƠN ĐIỆU, CỰC TRỊ
  // ──────────────────────────────────────────────────────────
  { topic: "Hàm số", level: "Nhận biết", text: "Hàm số $y = -x^3 - 3x^2 + 9x - 1$ đồng biến trên khoảng nào?", options: ["$(-\\infty; -3)$", "$(-3; 1)$", "$(-3; +\\infty)$", "$(1; +\\infty)$"], answer: 'B' },
  { topic: "Hàm số", level: "Nhận biết", text: "Hàm số $y = 5x - 10$ có bao nhiêu cực trị?", options: ["0", "1", "2", "3"], answer: 'A' },
  { topic: "Hàm số", level: "Nhận biết", text: "Hàm số $y = \\dfrac{x}{x^2 + 1}$ đồng biến trên khoảng nào?", options: ["$(-1; 1)$", "$(0; +\\infty)$", "$(-\\infty; -1)$", "$(1; +\\infty)$"], answer: 'A' },
  { topic: "Hàm số", level: "Nhận biết", text: "Đường tiệm cận đứng của đồ thị $y = \\dfrac{2x-1}{x+1}$ là:", options: ["$x = -1$", "$x = 1$", "$y = 2$", "$y = -2$"], answer: 'A' },
  { topic: "Hàm số", level: "Nhận biết", text: "Đường tiệm cận ngang của đồ thị $y = \\dfrac{3x+2}{x-1}$ là:", options: ["$y = 3$", "$y = 1$", "$x = 1$", "$x = -1$"], answer: 'A' },
  { topic: "Hàm số", level: "Thông hiểu", text: "Giá trị lớn nhất của $f(x) = x^3 - 3x$ trên $[-2; 2]$ là:", options: ["2", "-2", "4", "0"], answer: 'A' },
  { topic: "Hàm số", level: "Thông hiểu", text: "GTNN của $y = x + \\dfrac{4}{x}$ trên $(0; +\\infty)$ bằng:", options: ["4", "2", "8", "1"], answer: 'A' },
  { topic: "Hàm số", level: "Thông hiểu", text: "Số đường tiệm cận của đồ thị $y = \\dfrac{\\sqrt{x^2+1}}{x}$ là:", options: ["3", "2", "1", "0"], answer: 'A' },
  { topic: "Hàm số", level: "Vận dụng", text: "Tìm $m$ để $y = x^3 - 3mx^2 + 3(m^2-1)x + 1$ đồng biến trên $\\mathbb{R}$:", options: ["$m \\in [-1; 1]$", "$m > 1$", "$m < -1$", "$m = 0$"], answer: 'A' },
  { topic: "Hàm số", level: "Vận dụng", text: "Tìm $m$ để đồ thị $y = \\dfrac{x-1}{x^2-mx+1}$ không có tiệm cận đứng:", options: ["$-2 < m < 2$", "$m \\ge 2$", "$m \\le -2$", "$m = \\pm 2$"], answer: 'A' },
  { topic: "Hàm số", level: "Vận dụng cao", text: "Tìm $m$ để phương trình $|x^3 - 3x| = m$ có 6 nghiệm phân biệt:", options: ["$0 < m < 2$", "$m = 2$", "$m > 2$", "$m = 0$"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // HÀM SỐ MŨ - HÀM SỐ LOGARIT
  // ──────────────────────────────────────────────────────────
  { topic: "Hàm số mũ - Hàm số Logarit", level: "Nhận biết", text: "Tập xác định của $y = \\log_2(x-1)$ là:", options: ["$(1; +\\infty)$", "$[1; +\\infty)$", "$(-\\infty; 1)$", "$\\mathbb{R}$"], answer: 'A' },
  { topic: "Hàm số mũ - Hàm số Logarit", level: "Nhận biết", text: "$\\log_2 8 =$", options: ["3", "4", "2", "1"], answer: 'A' },
  { topic: "Hàm số mũ - Hàm số Logarit", level: "Thông hiểu", text: "$\\log_3 27 - \\log_3 3 =$", options: ["2", "3", "1", "9"], answer: 'A' },
  { topic: "Hàm số mũ - Hàm số Logarit", level: "Thông hiểu", text: "Hàm số $y = 3^x$ đồng biến vì:", options: ["Cơ số $3 > 1$", "Cơ số $3 < 1$", "Hàm số chẵn", "Hàm số lẻ"], answer: 'A' },
  { topic: "Hàm số mũ - Hàm số Logarit", level: "Vận dụng", text: "Giải $4^x = 8^{x-1}$:", options: ["$x = 3$", "$x = 2$", "$x = 4$", "$x = 1$"], answer: 'A' },
  { topic: "Hàm số mũ - Hàm số Logarit", level: "Vận dụng cao", text: "Tiền gửi $100$ triệu, lãi $8\\%$/năm kép. Sau bao nhiêu năm vượt $200$ triệu?", options: ["10 năm", "8 năm", "12 năm", "9 năm"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // PHƯƠNG TRÌNH - BẤT PHƯƠNG TRÌNH MŨ VÀ LOGARIT
  // ──────────────────────────────────────────────────────────
  { topic: "Phương trình - Bất phương trình mũ và logarit", level: "Nhận biết", text: "Nghiệm của $2^x = 16$ là:", options: ["4", "3", "2", "8"], answer: 'A' },
  { topic: "Phương trình - Bất phương trình mũ và logarit", level: "Thông hiểu", text: "Bất phương trình $\\log_2(x-1) > 3$ có nghiệm:", options: ["$x > 9$", "$x > 5$", "$x < 9$", "$x < 5$"], answer: 'A' },
  { topic: "Phương trình - Bất phương trình mũ và logarit", level: "Vận dụng", text: "Số nghiệm của $\\log_2(x^2-3x+2) = 1$:", options: ["2", "1", "0", "3"], answer: 'A' },
  { topic: "Phương trình - Bất phương trình mũ và logarit", level: "Vận dụng cao", text: "Dân số tăng $2\\%$/năm. Sau bao nhiêu năm dân số gấp đôi?", options: ["Khoảng 35 năm", "Khoảng 50 năm", "Khoảng 25 năm", "Khoảng 70 năm"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // NGUYÊN HÀM - TÍCH PHÂN
  // ──────────────────────────────────────────────────────────
  { topic: "Nguyên hàm - Tích phân", level: "Nhận biết", text: "$\\int x^2\\,dx =$", options: ["$\\dfrac{x^3}{3} + C$", "$2x + C$", "$x^3 + C$", "$\\dfrac{x^2}{2} + C$"], answer: 'A' },
  { topic: "Nguyên hàm - Tích phân", level: "Nhận biết", text: "$\\int_0^1 x\\,dx =$", options: ["$\\dfrac{1}{2}$", "$1$", "$0$", "$2$"], answer: 'A' },
  { topic: "Nguyên hàm - Tích phân", level: "Thông hiểu", text: "$\\int_0^2 (2x+1)\\,dx =$", options: ["6", "4", "5", "3"], answer: 'A' },
  { topic: "Nguyên hàm - Tích phân", level: "Thông hiểu", text: "$\\int e^x\\,dx =$", options: ["$e^x + C$", "$e^{x+1} + C$", "$xe^x + C$", "$\\dfrac{e^x}{x} + C$"], answer: 'A' },
  { topic: "Nguyên hàm - Tích phân", level: "Vận dụng", text: "Xe hãm phanh $v(t) = 20 - 5t$ (m/s). Quãng đường từ lúc phanh đến khi dừng là:", options: ["40 m", "20 m", "60 m", "80 m"], answer: 'A' },
  { topic: "Nguyên hàm - Tích phân", level: "Vận dụng", text: "$\\int_0^{\\pi} \\sin x\\,dx =$", options: ["2", "0", "1", "$-1$"], answer: 'A' },
  { topic: "Nguyên hàm - Tích phân", level: "Vận dụng cao", text: "Diện tích hình phẳng giới hạn bởi $y = x^2$ và $y = x$ là:", options: ["$\\dfrac{1}{6}$", "$\\dfrac{1}{3}$", "$\\dfrac{1}{2}$", "$1$"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // TÍCH PHÂN ỨNG DỤNG
  // ──────────────────────────────────────────────────────────
  { topic: "Tích phân ứng dụng", level: "Thông hiểu", text: "Diện tích hình phẳng giới hạn bởi $y = \\sqrt{x}$, $y = 0$ và $x = 4$ là:", options: ["$\\dfrac{16}{3}$", "$4$", "$8$", "$\\dfrac{8}{3}$"], answer: 'A' },
  { topic: "Tích phân ứng dụng", level: "Vận dụng", text: "Thể tích khối tròn xoay khi quay $y = \\sqrt{x}$ ($0 \\le x \\le 1$) quanh $Ox$ là:", options: ["$\\dfrac{\\pi}{2}$", "$\\pi$", "$2\\pi$", "$\\dfrac{\\pi}{4}$"], answer: 'A' },
  { topic: "Tích phân ứng dụng", level: "Vận dụng cao", text: "Một hồ bơi có phần cắt ngang là miền giới hạn bởi $y = -x^2 + 4$ và $y = 0$ (m). Diện tích mặt cắt là:", options: ["$\\dfrac{32}{3}$ m²", "$16$ m²", "$8$ m²", "$\\dfrac{16}{3}$ m²"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // DÃY SỐ - CẤP SỐ CỘNG - CẤP SỐ NHÂN
  // ──────────────────────────────────────────────────────────
  { topic: "Dãy số - Cấp số cộng - Cấp số nhân", level: "Nhận biết", text: "Công sai của CSC $(2; 5; 8; 11; ...)$ là:", options: ["3", "2", "5", "1"], answer: 'A' },
  { topic: "Dãy số - Cấp số cộng - Cấp số nhân", level: "Nhận biết", text: "Công bội của CSN $(2; 6; 18; 54; ...)$ là:", options: ["3", "2", "4", "6"], answer: 'A' },
  { topic: "Dãy số - Cấp số cộng - Cấp số nhân", level: "Thông hiểu", text: "Tổng $n$ số hạng đầu CSC với $u_1 = 1$, $d = 2$: $S_{10} =$", options: ["100", "55", "110", "90"], answer: 'A' },
  { topic: "Dãy số - Cấp số cộng - Cấp số nhân", level: "Vận dụng", text: "Vi khuẩn nhân đôi mỗi giờ. Sau 10 giờ số lượng gấp bao nhiêu lần ban đầu?", options: ["$1024$", "$512$", "$2048$", "$256$"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // XÁC SUẤT
  // ──────────────────────────────────────────────────────────
  { topic: "Xác suất", level: "Nhận biết", text: "Gieo 1 xúc xắc. Xác suất ra mặt 6 chấm là:", options: ["$\\dfrac{1}{6}$", "$\\dfrac{1}{2}$", "$\\dfrac{1}{3}$", "$\\dfrac{5}{6}$"], answer: 'A' },
  { topic: "Xác suất", level: "Nhận biết", text: "Một hộp có 3 bi đỏ, 2 bi xanh. Xác suất chọn ngẫu nhiên được bi đỏ là:", options: ["$\\dfrac{3}{5}$", "$\\dfrac{2}{5}$", "$\\dfrac{1}{5}$", "$1$"], answer: 'A' },
  { topic: "Xác suất", level: "Thông hiểu", text: "Lớp 12A có 20 HS giỏi và 10 HS khá. XS chọn ngẫu nhiên được HS giỏi:", options: ["$\\dfrac{2}{3}$", "$\\dfrac{1}{3}$", "$\\dfrac{1}{2}$", "$\\dfrac{3}{4}$"], answer: 'A' },
  { topic: "Xác suất", level: "Vận dụng", text: "Một lô 20 sản phẩm, 3 lỗi. Chọn ngẫu nhiên 2. XS cả 2 không lỗi là:", options: ["$\\dfrac{C_{17}^2}{C_{20}^2}$", "$\\dfrac{C_3^2}{C_{20}^2}$", "$\\dfrac{17}{20}$", "$\\dfrac{3}{20}$"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // XÁC SUẤT CÓ ĐIỀU KIỆN
  // ──────────────────────────────────────────────────────────
  { topic: "Xác suất có điều kiện", level: "Nhận biết", text: "Công thức xác suất có điều kiện: $P(A|B) =$", options: ["$\\dfrac{P(A \\cap B)}{P(B)}$", "$\\dfrac{P(A)}{P(B)}$", "$P(A) \\cdot P(B)$", "$P(A) + P(B)$"], answer: 'A' },
  { topic: "Xác suất có điều kiện", level: "Thông hiểu", text: "Nhà máy có 2 dây chuyền. DC1: 60% sản lượng, tỉ lệ lỗi 2%. DC2: 40% sản lượng, tỉ lệ lỗi 5%. XS chọn ngẫu nhiên sản phẩm lỗi là:", options: ["$3{,}2\\%$", "$7\\%$", "$2{,}5\\%$", "$4\\%$"], answer: 'A' },
  { topic: "Xác suất có điều kiện", level: "Vận dụng", text: "Túi A: 3 bi đỏ, 2 bi xanh. Túi B: 2 bi đỏ, 3 bi xanh. Chọn ngẫu nhiên 1 túi, rút 1 bi đỏ. Xác suất bi từ túi A là:", options: ["$\\dfrac{3}{5}$", "$\\dfrac{2}{5}$", "$\\dfrac{1}{2}$", "$\\dfrac{3}{10}$"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // THỐNG KÊ
  // ──────────────────────────────────────────────────────────
  { topic: "Thống kê", level: "Nhận biết", text: "Số trung bình của mẫu số liệu: $2, 4, 6, 8, 10$ là:", options: ["6", "5", "8", "4"], answer: 'A' },
  { topic: "Thống kê", level: "Thông hiểu", text: "Phương sai của mẫu: $1, 2, 3, 4, 5$ là:", options: ["2", "3", "1", "4"], answer: 'A' },
  { topic: "Thống kê", level: "Vận dụng", text: "Điểm thi 10 HS: $5,6,7,7,8,8,8,9,9,10$. Số trung vị là:", options: ["8", "7", "7{,}5", "8{,}5"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // TỔ HỢP - XÁC SUẤT
  // ──────────────────────────────────────────────────────────
  { topic: "Tổ hợp - Xác suất", level: "Nhận biết", text: "$C_5^2 =$", options: ["10", "20", "5", "15"], answer: 'A' },
  { topic: "Tổ hợp - Xác suất", level: "Thông hiểu", text: "Có bao nhiêu cách chọn 3 HS từ nhóm 8 HS?", options: ["56", "24", "512", "28"], answer: 'A' },
  { topic: "Tổ hợp - Xác suất", level: "Vận dụng", text: "Gieo 3 đồng xu. Xác suất được đúng 2 mặt ngửa là:", options: ["$\\dfrac{3}{8}$", "$\\dfrac{1}{8}$", "$\\dfrac{1}{2}$", "$\\dfrac{3}{4}$"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // GIỚI HẠN HÀM SỐ
  // ──────────────────────────────────────────────────────────
  { topic: "Giới hạn hàm số", level: "Nhận biết", text: "$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} =$", options: ["1", "0", "$+\\infty$", "Không tồn tại"], answer: 'A' },
  { topic: "Giới hạn hàm số", level: "Thông hiểu", text: "$\\lim_{x \\to +\\infty} \\dfrac{3x^2 + 1}{x^2 - 5} =$", options: ["3", "1", "0", "$+\\infty$"], answer: 'A' },
  { topic: "Giới hạn hàm số", level: "Vận dụng", text: "$\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x - 1} =$", options: ["2", "1", "0", "$+\\infty$"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // ĐƯỜNG THẲNG VÀ MẶT PHẲNG TRONG KHÔNG GIAN
  // ──────────────────────────────────────────────────────────
  { topic: "Đường thẳng và mặt phẳng trong không gian", level: "Nhận biết", text: "Bao nhiêu điểm không thẳng hàng xác định một mặt phẳng duy nhất?", options: ["3", "2", "4", "1"], answer: 'A' },
  { topic: "Đường thẳng và mặt phẳng trong không gian", level: "Thông hiểu", text: "Hai mặt phẳng phân biệt cùng vuông góc với mặt phẳng thứ ba thì:", options: ["Song song hoặc cắt nhau", "Luôn song song", "Luôn cắt nhau", "Luôn trùng nhau"], answer: 'A' },
  { topic: "Đường thẳng và mặt phẳng trong không gian", level: "Vận dụng", text: "Cho hình lập phương $ABCD.A'B'C'D'$. Đường thẳng $AA'$ vuông góc với mặt phẳng:", options: ["$(ABCD)$", "$(ABB'A')$", "$(BCC'B')$", "$(A'B'C'D')$"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // KHỐI ĐA DIỆN
  // ──────────────────────────────────────────────────────────
  { topic: "Khối đa diện", level: "Nhận biết", text: "Hình lập phương có cạnh $a$ thì diện tích toàn phần là:", options: ["$6a^2$", "$4a^2$", "$a^3$", "$3a^2$"], answer: 'A' },
  { topic: "Khối đa diện", level: "Thông hiểu", text: "Thể tích khối chóp tứ giác đều cạnh đáy $a$, chiều cao $h$ là:", options: ["$\\dfrac{a^2 h}{3}$", "$a^2 h$", "$\\dfrac{a^2 h}{6}$", "$\\dfrac{2a^2 h}{3}$"], answer: 'A' },
  { topic: "Khối đa diện", level: "Vận dụng", text: "Một hộp quà hình lập phương cạnh $20$ cm. Thể tích hộp là:", options: ["$8000$ cm³", "$4000$ cm³", "$2400$ cm²", "$6000$ cm³"], answer: 'A' },
  { topic: "Khối đa diện", level: "Vận dụng cao", text: "Một hộp thiếc hình chóp tứ giác đều, cạnh đáy $10$ cm, cao $12$ cm. Thể tích là:", options: ["$400$ cm³", "$200$ cm³", "$600$ cm³", "$300$ cm³"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // MẶT CẦU - HÌNH TRỤ - HÌNH NÓN
  // ──────────────────────────────────────────────────────────
  { topic: "Mặt cầu - Hình trụ - Hình nón", level: "Nhận biết", text: "Diện tích xung quanh hình trụ bán kính $r$, chiều cao $h$ là:", options: ["$2\\pi rh$", "$\\pi r^2 h$", "$2\\pi r^2$", "$\\pi rh$"], answer: 'A' },
  { topic: "Mặt cầu - Hình trụ - Hình nón", level: "Nhận biết", text: "Diện tích mặt cầu bán kính $R$ là:", options: ["$4\\pi R^2$", "$2\\pi R^2$", "$\\dfrac{4}{3}\\pi R^3$", "$\\pi R^2$"], answer: 'A' },
  { topic: "Mặt cầu - Hình trụ - Hình nón", level: "Thông hiểu", text: "Hình nón có bán kính đáy $r = 3$ cm, đường sinh $l = 5$ cm. Diện tích xung quanh là:", options: ["$15\\pi$ cm²", "$9\\pi$ cm²", "$25\\pi$ cm²", "$10\\pi$ cm²"], answer: 'A' },
  { topic: "Mặt cầu - Hình trụ - Hình nón", level: "Vận dụng", text: "Quả bóng đường kính $22$ cm. Diện tích bề mặt xấp xỉ:", options: ["$1519$ cm²", "$760$ cm²", "$380$ cm²", "$2000$ cm²"], answer: 'A' },
  { topic: "Mặt cầu - Hình trụ - Hình nón", level: "Vận dụng cao", text: "Lon đồ hộp hình trụ, thể tích $500$ cm³. Tìm $r$ để diện tích tổng nhỏ nhất:", options: ["$r = \\sqrt[3]{\\dfrac{250}{\\pi}} \\approx 3{,}99$ cm", "$r = 5$ cm", "$r = 4$ cm", "$r = \\dfrac{500}{\\pi}$ cm"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // VECTƠ TRONG KHÔNG GIAN
  // ──────────────────────────────────────────────────────────
  { topic: "Vectơ và các phép toán vectơ trong không gian", level: "Nhận biết", text: "Hình bình hành $ABCD$, vectơ $\\overrightarrow{AB} + \\overrightarrow{AD} =$", options: ["$\\overrightarrow{AC}$", "$\\overrightarrow{BD}$", "$\\overrightarrow{BC}$", "$\\overrightarrow{DC}$"], answer: 'A' },
  { topic: "Vectơ và các phép toán vectơ trong không gian", level: "Thông hiểu", text: "Cho $\\vec{a} = (1; 2; 3)$. Độ dài $|\\vec{a}|$ là:", options: ["$\\sqrt{14}$", "$6$", "$\\sqrt{6}$", "$14$"], answer: 'A' },
  { topic: "Vectơ và các phép toán vectơ trong không gian", level: "Vận dụng", text: "Trọng lực $\\vec{P} = (0; 0; -mg)$, phản lực $\\vec{N} = (0; 0; mg)$. Hợp lực là:", options: ["$\\vec{0}$", "$(0; 0; 2mg)$", "$(0; 0; -2mg)$", "$(mg; mg; 0)$"], answer: 'A' },

  // ──────────────────────────────────────────────────────────
  // BÀI TOÁN THỰC TẾ TỔNG HỢP
  // ──────────────────────────────────────────────────────────
  { topic: "Bài toán thực tế tổng hợp", level: "Nhận biết", text: "Xe ô tô hãm phanh với vận tốc $v(t) = 16 - 4t$ (m/s). Xe dừng sau:", options: ["4 giây", "2 giây", "8 giây", "16 giây"], answer: 'A' },
  { topic: "Bài toán thực tế tổng hợp", level: "Thông hiểu", text: "Xe hãm phanh $v(t) = 16 - 4t$. Quãng đường đi được từ lúc phanh đến khi dừng là:", options: ["32 m", "64 m", "16 m", "8 m"], answer: 'A' },
  { topic: "Bài toán thực tế tổng hợp", level: "Vận dụng", text: "GPS: Vệ tinh $A_1(3;0;0), A_2(-3;0;0)$. Điểm $M$ cách đều $A_1, A_2$ nằm trên mặt phẳng nào?", options: ["$x = 0$", "$y = 0$", "$z = 0$", "$x + y + z = 0$"], answer: 'A' },
];
