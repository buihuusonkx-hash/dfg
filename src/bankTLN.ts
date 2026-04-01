/**
 * KHO CÂU HỎI TRẢ LỜI NGẮN (TLN)
 * Math Matrix Pro 2026
 *
 * Mỗi câu gồm: topic, level, text (đề bài), answer (đáp án)
 */

export interface TLNQuestion {
  text: string;
  answer: string;
  topic: string;
  level: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
  image?: string;
}

export const TLN_BANK: TLNQuestion[] = [

  // ──────────────────────────────────────────────────────────
  // HÀM SỐ
  // ──────────────────────────────────────────────────────────
  { topic: "Hàm số", level: "Thông hiểu", text: "Tìm cực đại của $f(x) = -x^2 + 4x + 1$.", answer: "Cực đại $f(2) = 5$" },
  { topic: "Hàm số", level: "Thông hiểu", text: "Tìm GTLN của $y = \\sin x$ trên $[0; \\pi]$.", answer: "$1$ (tại $x = \\dfrac{\\pi}{2}$)" },
  { topic: "Hàm số", level: "Vận dụng", text: "Chi phí sản xuất: $C(x) = 0{,}01x^2 - 2x + 150$ (triệu), $x$ là số sản phẩm. Tìm $x$ để chi phí trên mỗi sản phẩm nhỏ nhất.", answer: "$x = 100$ sản phẩm" },
  { topic: "Hàm số", level: "Vận dụng", text: "Lợi nhuận $P(x) = -x^2 + 8x - 7$ (triệu đồng). Tìm số sản phẩm $x$ cho lợi nhuận cực đại.", answer: "$x = 4$ sản phẩm, $P_{max} = 9$ triệu" },
  { topic: "Hàm số", level: "Vận dụng cao", text: "Một kho hàng hình chữ nhật có diện tích $S = 200$ m². Tìm kích thước để chu vi nhỏ nhất.", answer: "$a = b = \\sqrt{200} = 10\\sqrt{2}$ m (hình vuông)" },

  // ──────────────────────────────────────────────────────────
  // NGUYÊN HÀM - TÍCH PHÂN
  // ──────────────────────────────────────────────────────────
  { topic: "Nguyên hàm - Tích phân", level: "Thông hiểu", text: "Tính $\\int_0^2 (3x^2 - 2x + 1)\\,dx$.", answer: "$6$" },
  { topic: "Nguyên hàm - Tích phân", level: "Thông hiểu", text: "Tính $\\int_1^e \\dfrac{1}{x}\\,dx$.", answer: "$1$" },
  { topic: "Nguyên hàm - Tích phân", level: "Vận dụng", text: "Xe ô tô hãm phanh $v(t) = 20 - 5t$ (m/s). Tính quãng đường từ lúc phanh đến khi dừng.", answer: "$40$ m" },
  { topic: "Nguyên hàm - Tích phân", level: "Vận dụng", text: "Nước chảy vào bể với tốc độ $Q(t) = 3t^2 + 2$ (lít/phút). Tính lượng nước chảy vào trong 3 phút.", answer: "$33$ lít" },
  { topic: "Nguyên hàm - Tích phân", level: "Vận dụng cao", text: "Tính diện tích hình phẳng giới hạn bởi $y = x^2 - 4$ và trục $Ox$.", answer: "$\\dfrac{32}{3}$" },
  { topic: "Nguyên hàm - Tích phân", level: "Vận dụng cao", text: "Sản lượng điện tích lũy từ giờ thứ 0 đến giờ thứ 8: $P(t) = 50 + 10\\sin\\left(\\dfrac{\\pi t}{12}\\right)$ (kW). Tính tổng điện năng.", answer: "$400 + \\dfrac{120}{ \\pi} \\approx 438$ kWh" },

  // ──────────────────────────────────────────────────────────
  // HÀM SỐ MŨ - LOGARIT
  // ──────────────────────────────────────────────────────────
  { topic: "Hàm số mũ - Hàm số Logarit", level: "Thông hiểu", text: "Tính $\\log_2 32 + \\log_2 4$.", answer: "$7$" },
  { topic: "Hàm số mũ - Hàm số Logarit", level: "Thông hiểu", text: "Giải phương trình $3^x = 81$.", answer: "$x = 4$" },
  { topic: "Hàm số mũ - Hàm số Logarit", level: "Vận dụng", text: "Tiền gửi ngân hàng $100$ triệu, lãi suất $7\\%$/năm kép. Sau bao nhiêu năm số tiền vượt $200$ triệu?", answer: "Khoảng $11$ năm ($100 \\times 1{,}07^{11} \\approx 210$ triệu)" },
  { topic: "Hàm số mũ - Hàm số Logarit", level: "Vận dụng", text: "Dân số tăng $1{,}2\\%$/năm từ mốc $5$ triệu. Sau bao nhiêu năm dân số đạt $6$ triệu?", answer: "Khoảng $16$ năm" },
  { topic: "Hàm số mũ - Hàm số Logarit", level: "Vận dụng cao", text: "Cường độ âm thanh $L = 10\\log\\dfrac{I}{I_0}$ (dB), $I_0 = 10^{-12}$ W/m². Tính $L$ khi $I = 10^{-6}$ W/m².", answer: "$60$ dB" },

  // ──────────────────────────────────────────────────────────
  // XÁC SUẤT
  // ──────────────────────────────────────────────────────────
  { topic: "Xác suất", level: "Nhận biết", text: "Một hộp có 4 bi đỏ, 6 bi xanh. Chọn ngẫu nhiên 1 bi. Tính xác suất được bi đỏ.", answer: "$\\dfrac{2}{5}$" },
  { topic: "Xác suất", level: "Thông hiểu", text: "Nhà máy sản xuất có $96\\%$ sản phẩm đạt chuẩn. Kiểm tra 3 sản phẩm. Tính xác suất cả 3 đạt chuẩn.", answer: "$0{,}96^3 \\approx 0{,}885$" },
  { topic: "Xác suất", level: "Vận dụng", text: "Xác suất một máy bơm hỏng trong 1 giờ là $0{,}02$. Tính xác suất cả 3 máy độc lập đều hoạt động trong 1 giờ.", answer: "$0{,}98^3 \\approx 0{,}941$" },
  { topic: "Xác suất", level: "Vận dụng cao", text: "Bệnh viện: $70\\%$ bệnh nhân bệnh A, $30\\%$ bệnh B. XS xét nghiệm dương tính với bệnh A là $90\\%$, với bệnh B là $15\\%$. Tính XS bệnh nhân xét nghiệm dương tính.", answer: "$0{,}70 \\times 0{,}90 + 0{,}30 \\times 0{,}15 = 0{,}675$" },

  // ──────────────────────────────────────────────────────────
  // DÃY SỐ - CẤP SỐ
  // ──────────────────────────────────────────────────────────
  { topic: "Dãy số - Cấp số cộng - Cấp số nhân", level: "Nhận biết", text: "Tính tổng 10 số hạng đầu CSC: $u_1 = 3$, $d = 4$.", answer: "$S_{10} = 210$" },
  { topic: "Dãy số - Cấp số cộng - Cấp số nhân", level: "Thông hiểu", text: "Vi khuẩn ban đầu $100$ con, số lượng nhân 3 sau mỗi giờ. Sau 5 giờ có bao nhiêu vi khuẩn?", answer: "$100 \\times 3^5 = 24{.}300$ con" },
  { topic: "Dãy số - Cấp số cộng - Cấp số nhân", level: "Vận dụng", text: "Gửi tiết kiệm $50$ triệu, lãi $8\\%$/năm kép. Sau 5 năm có bao nhiêu tiền?", answer: "$50 \\times 1{,}08^5 \\approx 73{,}47$ triệu" },
  { topic: "Dãy số - Cấp số cộng - Cấp số nhân", level: "Vận dụng cao", text: "Một khoản đầu tư tăng $12\\%$/năm. Cần ít nhất bao nhiêu năm để gấp 3 lần?", answer: "Ít nhất $10$ năm ($1{,}12^{10} \\approx 3{,}11$)" },

  // ──────────────────────────────────────────────────────────
  // THỐNG KÊ
  // ──────────────────────────────────────────────────────────
  { topic: "Thống kê", level: "Nhận biết", text: "Tính trung bình cộng: $3; 5; 7; 9; 11$.", answer: "$\\bar{x} = 7$" },
  { topic: "Thống kê", level: "Thông hiểu", text: "Điểm thi 6 HS: $6; 7; 8; 8; 9; 10$. Tính độ lệch chuẩn.", answer: "$s \\approx 1{,}29$" },
  { topic: "Thống kê", level: "Vận dụng", text: "Dữ liệu năng suất lúa 5 thửa ruộng (tạ/ha): $45; 48; 50; 52; 55$. Tính phương sai.", answer: "$s^2 = 12$" },
  { topic: "Thống kê", level: "Vận dụng", text: "Chiều cao (cm) của $5$ học sinh: $160; 162; 165; 168; 170$. Tính trung bình và độ lệch chuẩn.", answer: "$\\bar{x} = 165$ cm; $s \\approx 3{,}74$ cm" },

  // ──────────────────────────────────────────────────────────
  // TỔ HỢP - XÁC SUẤT
  // ──────────────────────────────────────────────────────────
  { topic: "Tổ hợp - Xác suất", level: "Nhận biết", text: "Tính $A_5^2$.", answer: "$20$" },
  { topic: "Tổ hợp - Xác suất", level: "Thông hiểu", text: "Một ban tổ chức gồm 4 người chọn từ 7 người. Có bao nhiêu cách chọn?", answer: "$C_7^4 = 35$ cách" },
  { topic: "Tổ hợp - Xác suất", level: "Vận dụng", text: "Gieo 4 đồng xu. Tính xác suất ra đúng 3 mặt ngửa.", answer: "$\\dfrac{C_4^3}{2^4} = \\dfrac{4}{16} = \\dfrac{1}{4}$" },

  // ──────────────────────────────────────────────────────────
  // KHỐI ĐA DIỆN
  // ──────────────────────────────────────────────────────────
  { topic: "Khối đa diện", level: "Nhận biết", text: "Thể tích hình lập phương cạnh $5$ cm.", answer: "$125$ cm³" },
  { topic: "Khối đa diện", level: "Thông hiểu", text: "Một kho hàng hình hộp chữ nhật: dài $8$ m, rộng $5$ m, cao $4$ m. Tính thể tích.", answer: "$160$ m³" },
  { topic: "Khối đa diện", level: "Vận dụng", text: "Hộp sữa hình hộp: đáy $6 \\times 4$ cm, cao $10$ cm. Tính thể tích.", answer: "$240$ cm³ = $240$ ml" },
  { topic: "Khối đa diện", level: "Vận dụng cao", text: "Một kim tự tháp hình chóp tứ giác đều, cạnh đáy $200$ m, cao $130$ m. Tính thể tích.", answer: "$V = \\dfrac{1}{3} \\times 200^2 \\times 130 = \\dfrac{5.200.000}{3} \\approx 1.733.333$ m³" },

  // ──────────────────────────────────────────────────────────
  // MẶT CẦU - HÌNH TRỤ - HÌNH NÓN
  // ──────────────────────────────────────────────────────────
  { topic: "Mặt cầu - Hình trụ - Hình nón", level: "Nhận biết", text: "Thể tích hình trụ bán kính $R = 3$ cm, cao $h = 10$ cm.", answer: "$90\\pi \\approx 282{,}7$ cm³" },
  { topic: "Mặt cầu - Hình trụ - Hình nón", level: "Thông hiểu", text: "Quả cam hình cầu đường kính $7$ cm. Tính thể tích.", answer: "$V = \\dfrac{4}{3}\\pi \\times 3{,}5^3 \\approx 179{,}6$ cm³" },
  { topic: "Mặt cầu - Hình trụ - Hình nón", level: "Vận dụng", text: "Thùng xăng hình trụ bán kính $0{,}5$ m, dài $2$ m. Tính thể tích.", answer: "$V = \\pi \\times 0{,}25 \\times 2 = 0{,}5\\pi \\approx 1{,}57$ m³" },
  { topic: "Mặt cầu - Hình trụ - Hình nón", level: "Vận dụng cao", text: "Một hình nón có diện tích xung quanh bằng $3$ lần diện tích đáy. Tính tỉ số đường sinh và bán kính.", answer: "$\\dfrac{l}{r} = 3$" },

  // ──────────────────────────────────────────────────────────
  // VECTƠ
  // ──────────────────────────────────────────────────────────
  { topic: "Vectơ và các phép toán vectơ trong không gian", level: "Thông hiểu", text: "Cho $\\vec{a} = (2; -1; 3)$, $\\vec{b} = (1; 4; -2)$. Tính $\\vec{a} \\cdot \\vec{b}$.", answer: "$-8$" },
  { topic: "Vectơ và các phép toán vectơ trong không gian", level: "Thông hiểu", text: "Cho $A(1; -2; 3)$ và $B(4; 2; -1)$. Tính $AB$.", answer: "$\\sqrt{41}$" },
  { topic: "Vectơ và các phép toán vectơ trong không gian", level: "Vận dụng", text: "Drone bay từ $A(0; 0; 10)$ đến $B(30; 40; 10)$ m. Tính khoảng cách bay.", answer: "$50$ m" },
  { topic: "Vectơ và các phép toán vectơ trong không gian", level: "Vận dụng", text: "Tàu thủy ở $A(3; 5; 0)$ km, trạm thu ở $B(7; 8; 0)$ km. Tính khoảng cách.", answer: "$5$ km" },
  { topic: "Vectơ và các phép toán vectơ trong không gian", level: "Vận dụng cao", text: "Vệ tinh phát sóng từ $S(0; 0; 36000)$ km. Trạm tại $A(6400; 0; 0)$ km. Tính $SA$.", answer: "$\\approx 36564$ km" },

  // ──────────────────────────────────────────────────────────
  // PHƯƠNG TRÌNH - BẤT PT MŨ LOGARIT
  // ──────────────────────────────────────────────────────────
  { topic: "Phương trình - Bất phương trình mũ và logarit", level: "Thông hiểu", text: "Giải $2^{x+1} = 16$.", answer: "$x = 3$" },
  { topic: "Phương trình - Bất phương trình mũ và logarit", level: "Thông hiểu", text: "Giải $\\log_3(2x-1) = 2$.", answer: "$x = 5$" },
  { topic: "Phương trình - Bất phương trình mũ và logarit", level: "Vận dụng", text: "Tiền gốc $P$, lãi $r\\%$/năm kép. Sau $n$ năm có $A = P(1+r)^n$. Tính số năm để $100$ triệu tăng gấp $1{,}5$ lần với lãi suất $6\\%$.", answer: "Khoảng $7$ năm" },
  { topic: "Phương trình - Bất phương trình mũ và logarit", level: "Vận dụng cao", text: "Chất phóng xạ có chu kỳ bán rã $T_{1/2} = 5730$ năm. Còn lại $30\\%$ chất ban đầu. Tính tuổi mẫu.", answer: "Khoảng $9953$ năm" },

  // ──────────────────────────────────────────────────────────
  // BÀI TOÁN THỰC TẾ TỔNG HỢP
  // ──────────────────────────────────────────────────────────
  { topic: "Bài toán thực tế tổng hợp", level: "Vận dụng", text: "Xe hãm phanh từ $v_0 = 72$ km/h $= 20$ m/s với gia tốc $-5$ m/s². Tính quãng đường hãm phanh.", answer: "$S = \\dfrac{v_0^2}{2a} = \\dfrac{400}{10} = 40$ m" },
  { topic: "Bài toán thực tế tổng hợp", level: "Vận dụng", text: "Lớp 30 HS (17 nữ, 13 nam), 3 bạn tên Hiền (1 nữ, 2 nam). XS chọn bạn Hiền biết là nữ.", answer: "$\\dfrac{1}{17}$" },
  { topic: "Bài toán thực tế tổng hợp", level: "Vận dụng cao", text: "Một xưởng có chi phí $C(x) = 500 + 2x + 0{,}005x^2$ (nghìn đồng) cho $x$ sản phẩm. Tìm $x$ để chi phí bình quân nhỏ nhất.", answer: "$x = \\sqrt{\\dfrac{500}{0{,}005}} = 316$ sản phẩm" },
];
