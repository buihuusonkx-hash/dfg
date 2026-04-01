/**
 * KHO CÂU HỎI TRẮC NGHIỆM ĐÚNG/SAI (DS)
 * Math Matrix Pro 2026
 *
 * Mỗi câu gồm: topic, level, context (dẫn bài), statements (4 mệnh đề)
 */

export interface DSStatement {
  text: string;
  answer: 'Đúng' | 'Sai';
}

export interface DSQuestion {
  topic: string;
  level: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
  context: string;
  statements: DSStatement[];
  image?: string;
}

export const DS_BANK: DSQuestion[] = [

  // ──────────────────────────────────────────────────────────
  // HÀM SỐ
  // ──────────────────────────────────────────────────────────
  {
    topic: "Hàm số", level: "Nhận biết",
    context: "Cho hàm số $f(x) = x^3 - 3x + 2$. Xét các mệnh đề sau:",
    statements: [
      { text: "$f'(x) = 3x^2 - 3$.", answer: "Đúng" },
      { text: "Hàm số đạt cực đại tại $x = -1$.", answer: "Đúng" },
      { text: "Giá trị cực đại là $f(-1) = 4$.", answer: "Đúng" },
      { text: "Hàm số đồng biến trên $(-\\infty; -1)$.", answer: "Sai" }
    ]
  },
  {
    topic: "Hàm số", level: "Thông hiểu",
    context: "Đồ thị $y = \\dfrac{x+1}{x-1}$ và các tính chất của nó. Xét các mệnh đề:",
    statements: [
      { text: "Hàm số có tiệm cận đứng $x = 1$.", answer: "Đúng" },
      { text: "Hàm số có tiệm cận ngang $y = 1$.", answer: "Đúng" },
      { text: "Hàm số đồng biến trên từng khoảng xác định.", answer: "Sai" },
      { text: "Đồ thị nhận $I(1; 1)$ làm tâm đối xứng.", answer: "Đúng" }
    ]
  },
  {
    topic: "Hàm số", level: "Vận dụng",
    context: "Doanh thu bán lẻ theo mô hình $R(x) = -x^3 + 12x^2 + 60x$ (triệu đồng), $x$ là số ngày tháng 1 ($1 \\le x \\le 20$). Xét các mệnh đề:",
    statements: [
      { text: "$R'(x) = -3x^2 + 24x + 60$.", answer: "Đúng" },
      { text: "Doanh thu tăng khi $x \\in (0; 10)$.", answer: "Đúng" },
      { text: "Doanh thu đạt cực đại ở ngày thứ 10.", answer: "Đúng" },
      { text: "Doanh thu ngày 10 là $R(10) = 700$ triệu.", answer: "Sai" }
    ]
  },
  {
    topic: "Hàm số", level: "Vận dụng cao",
    context: "Lợi nhuận sản xuất: $P(x) = -2x^3 + 9x^2 + 12x - 25$ (triệu đồng), $x$ là số tấn sản phẩm ($0 < x \\le 5$). Xét các mệnh đề:",
    statements: [
      { text: "Lợi nhuận tăng khi $x \\in \\left(0; \\dfrac{9+\\sqrt{153}}{6}\\right)$.", answer: "Đúng" },
      { text: "$P'(x) = -6x^2 + 18x + 12$.", answer: "Đúng" },
      { text: "$P'(x) = 0$ tại $x = 3 + \\sqrt{5}$ (nằm ngoài miền xét).", answer: "Đúng" },
      { text: "Lợi nhuận lớn nhất đạt được tại $x = 5$ trên miền $[0; 5]$.", answer: "Đúng" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // NGUYÊN HÀM - TÍCH PHÂN
  // ──────────────────────────────────────────────────────────
  {
    topic: "Nguyên hàm - Tích phân", level: "Nhận biết",
    context: "Cho $F(x)$ là nguyên hàm của $f(x) = 2x + 3$. Xét các mệnh đề:",
    statements: [
      { text: "$F(x) = x^2 + 3x + C$ ($C$ là hằng số).", answer: "Đúng" },
      { text: "$\\int_0^1 (2x+3)\\,dx = 4$.", answer: "Đúng" },
      { text: "$\\int_0^2 (2x+3)\\,dx = 10$.", answer: "Đúng" },
      { text: "Mọi nguyên hàm của $f$ đều bằng nhau.", answer: "Sai" }
    ]
  },
  {
    topic: "Nguyên hàm - Tích phân", level: "Thông hiểu",
    context: "Xe ô tô đang chạy $16$ m/s thì hãm phanh, vận tốc $v(t) = 16 - 4t$ (m/s, $t \\ge 0$ giây). Xét các mệnh đề sau:",
    statements: [
      { text: "Xe dừng hẳn tại thời điểm $t = 4$ giây.", answer: "Đúng" },
      { text: "Quãng đường xe đi được là $S = \\int_0^4 (16 - 4t)\\,dt$.", answer: "Đúng" },
      { text: "$S = \\left[16t - 2t^2\\right]_0^4 = 32$ mét.", answer: "Đúng" },
      { text: "Nếu tốc độ ban đầu tăng gấp đôi, quãng đường hãm phanh cũng tăng gấp đôi.", answer: "Sai" }
    ]
  },
  {
    topic: "Nguyên hàm - Tích phân", level: "Vận dụng",
    context: "Mực nước sông sau cơn mưa thay đổi theo $v(t) = 3 - 0{,}5t$ (m/giờ), $0 \\le t \\le 6$ (giờ). Xét các mệnh đề:",
    statements: [
      { text: "Mực nước tăng trong khoảng $0 < t < 6$.", answer: "Sai" },
      { text: "Mực nước tăng trong khoảng $0 < t < 6$ khi $v(t) > 0$, tức $t < 6$.", answer: "Đúng" },
      { text: "Tổng lượng nước tăng là $\\int_0^6 (3-0{,}5t)\\,dt = 9$ m.", answer: "Đúng" },
      { text: "Mực nước bắt đầu giảm từ $t = 6$ giờ.", answer: "Đúng" }
    ]
  },
  {
    topic: "Nguyên hàm - Tích phân", level: "Vận dụng cao",
    context: "Một xí nghiệp sản xuất với tốc độ $R(t) = 50 + 6t - 0{,}2t^2$ (sản phẩm/giờ), $0 \\le t \\le 8$. Xét các mệnh đề:",
    statements: [
      { text: "Tổng sản phẩm trong 8 giờ là $\\int_0^8 R(t)\\,dt$.", answer: "Đúng" },
      { text: "$\\int_0^8 (50 + 6t - 0{,}2t^2)\\,dt = 400 + 192 - 34{,}1 \\approx 558$ sản phẩm.", answer: "Đúng" },
      { text: "Tốc độ sản xuất đạt cực đại tại $t = 15$.", answer: "Sai" },
      { text: "$R'(t) = 6 - 0{,}4t = 0 \\Rightarrow t = 15$ (nằm ngoài miền $[0;8]$), nên $R$ đồng biến cả khoảng.", answer: "Đúng" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // XÁC SUẤT
  // ──────────────────────────────────────────────────────────
  {
    topic: "Xác suất", level: "Nhận biết",
    context: "Một nhà máy sản xuất bóng đèn, xác suất một bóng không lỗi là $0{,}95$. Lấy ngẫu nhiên 1 bóng. Xét các mệnh đề:",
    statements: [
      { text: "Xác suất bóng đèn bị lỗi là $0{,}05$.", answer: "Đúng" },
      { text: "Nếu lấy 20 bóng, chắc chắn có đúng 1 bóng lỗi.", answer: "Sai" },
      { text: "Xác suất cả hai bóng lấy ra đều không lỗi là $0{,}95^2 = 0{,}9025$.", answer: "Đúng" },
      { text: "Xác suất ít nhất 1 bóng lỗi trong 2 bóng là $1 - 0{,}9025 = 0{,}0975$.", answer: "Đúng" }
    ]
  },
  {
    topic: "Xác suất", level: "Thông hiểu",
    context: "Lớp 12A có 30 học sinh: 17 nữ, 13 nam; có 3 bạn tên Hiền (1 nữ, 2 nam). Chọn ngẫu nhiên 1 học sinh. Xét các mệnh đề:",
    statements: [
      { text: "Xác suất chọn được bạn tên Hiền là $\\dfrac{3}{30} = \\dfrac{1}{10}$.", answer: "Đúng" },
      { text: "XS chọn bạn Hiền biết là nữ: $P(\\text{Hiền}|\\text{Nữ}) = \\dfrac{1}{17}$.", answer: "Đúng" },
      { text: "XS chọn bạn Hiền biết là nam: $P(\\text{Hiền}|\\text{Nam}) = \\dfrac{2}{13}$.", answer: "Đúng" },
      { text: "$P(\\text{Hiền}|\\text{Nữ}) > P(\\text{Hiền}|\\text{Nam})$ vì $\\dfrac{1}{17} > \\dfrac{2}{13}$.", answer: "Sai" }
    ]
  },
  {
    topic: "Xác suất", level: "Vận dụng",
    context: "Một dây chuyền sản xuất có xác suất mỗi sản phẩm đạt chuẩn là $0{,}9$. Kiểm tra ngẫu nhiên 4 sản phẩm. Xét các mệnh đề:",
    statements: [
      { text: "XS cả 4 sản phẩm đạt chuẩn là $0{,}9^4 = 0{,}6561$.", answer: "Đúng" },
      { text: "XS có đúng 3 sản phẩm đạt chuẩn là $C_4^3 \\cdot 0{,}9^3 \\cdot 0{,}1 = 0{,}2916$.", answer: "Đúng" },
      { text: "XS ít nhất 3 sản phẩm đạt chuẩn là $0{,}6561 + 0{,}2916 = 0{,}9477$.", answer: "Đúng" },
      { text: "XS không có sản phẩm nào đạt chuẩn là $0{,}9^4$.", answer: "Sai" }
    ]
  },
  {
    topic: "Xác suất", level: "Vận dụng cao",
    context: "Hệ định vị GPS dùng 4 vệ tinh. Vệ tinh $A_1(300; 0; 0)$ km và $A_2(-300; 0; 0)$ km. Điểm $M(x; y; z)$ là thiết bị ($z=0$). Xét các mệnh đề:",
    statements: [
      { text: "$|MA_1|^2 = (x-300)^2 + y^2$.", answer: "Đúng" },
      { text: "$|MA_2|^2 = (x+300)^2 + y^2$.", answer: "Đúng" },
      { text: "Nếu $|MA_1| = |MA_2|$ thì $M$ thuộc mặt phẳng $x = 0$.", answer: "Đúng" },
      { text: "Nếu $|MA_1| = 500$ và $|MA_2| = 500$ thì $M$ có tọa độ $x = 0$, $y = 400$.", answer: "Đúng" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // DÃY SỐ - CẤP SỐ
  // ──────────────────────────────────────────────────────────
  {
    topic: "Dãy số - Cấp số cộng - Cấp số nhân", level: "Nhận biết",
    context: "Cấp số nhân $(u_n)$ có $u_1 = 2$, công bội $q = 3$. Xét các mệnh đề:",
    statements: [
      { text: "$u_2 = 6$.", answer: "Đúng" },
      { text: "$u_3 = 18$.", answer: "Đúng" },
      { text: "$u_n = 2 \\cdot 3^{n-1}$.", answer: "Đúng" },
      { text: "$u_4 = 54$.", answer: "Đúng" }
    ]
  },
  {
    topic: "Dãy số - Cấp số cộng - Cấp số nhân", level: "Thông hiểu",
    context: "Gửi tiết kiệm $50$ triệu, lãi suất $6\\%$/năm kép. Xét các mệnh đề sau $n$ năm:",
    statements: [
      { text: "Số tiền sau 1 năm là $50 \\times 1{,}06 = 53$ triệu.", answer: "Đúng" },
      { text: "Công thức tổng quát: $S_n = 50 \\times 1{,}06^n$ (triệu).", answer: "Đúng" },
      { text: "Sau 10 năm số tiền vượt $90$ triệu.", answer: "Đúng" },
      { text: "Số tiền tăng theo cấp số cộng.", answer: "Sai" }
    ]
  },
  {
    topic: "Dãy số - Cấp số cộng - Cấp số nhân", level: "Vận dụng",
    context: "Dân số một tỉnh năm 2020 là $2$ triệu người, tăng $1{,}5\\%$/năm. Xét các mệnh đề:",
    statements: [
      { text: "Dân số dạng cấp số nhân với $q = 1{,}015$.", answer: "Đúng" },
      { text: "Năm 2025 dân số $\\approx 2 \\times 1{,}015^5 \\approx 2{,}15$ triệu.", answer: "Đúng" },
      { text: "Dân số vượt $2{,}5$ triệu sau hơn 20 năm.", answer: "Đúng" },
      { text: "Mỗi năm dân số tăng thêm đúng $30.000$ người.", answer: "Sai" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // THỐNG KÊ
  // ──────────────────────────────────────────────────────────
  {
    topic: "Thống kê", level: "Thông hiểu",
    context: "Điểm kiểm tra của 10 học sinh: $5; 6; 7; 7; 8; 8; 8; 9; 9; 10$. Xét các mệnh đề:",
    statements: [
      { text: "Điểm trung bình là $\\bar{x} = 7{,}7$.", answer: "Đúng" },
      { text: "Trung vị (Median) là $8$.", answer: "Đúng" },
      { text: "Mode (yếu vị) là $8$.", answer: "Đúng" },
      { text: "Phương sai đúng bằng $1{,}61$.", answer: "Đúng" }
    ]
  },
  {
    topic: "Thống kê", level: "Vận dụng",
    context: "Năng suất lúa (tạ/ha) của 8 thửa ruộng: $42; 45; 48; 50; 52; 55; 58; 60$. Xét các mệnh đề:",
    statements: [
      { text: "Năng suất trung bình là $\\bar{x} = 51{,}25$ tạ/ha.", answer: "Đúng" },
      { text: "Trung vị là $\\dfrac{50+52}{2} = 51$ tạ/ha.", answer: "Đúng" },
      { text: "Độ lệch chuẩn nhỏ hơn $7$ tạ/ha.", answer: "Đúng" },
      { text: "Phương sai bằng $36$.", answer: "Sai" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // KHỐI ĐA DIỆN
  // ──────────────────────────────────────────────────────────
  {
    topic: "Khối đa diện", level: "Thông hiểu",
    context: "Hình hộp chữ nhật có 3 kích thước $a = 3$ cm, $b = 4$ cm, $c = 5$ cm (chiều dài các cạnh). Xét các mệnh đề:",
    statements: [
      { text: "Thể tích hộp $V = 60$ cm³.", answer: "Đúng" },
      { text: "Diện tích toàn phần $S = 2(ab + bc + ca) = 94$ cm².", answer: "Đúng" },
      { text: "Đường chéo không gian $d = \\sqrt{a^2+b^2+c^2} = 5\\sqrt{2}$ cm.", answer: "Đúng" },
      { text: "Hộp này có thể đặt vừa trong mặt cầu bán kính $\\dfrac{5\\sqrt{2}}{2}$ cm.", answer: "Đúng" }
    ]
  },
  {
    topic: "Khối đa diện", level: "Vận dụng",
    context: "Một hộp quà hình lập phương cạnh $a = 20$ cm. Phủ giấy gói bên ngoài. Xét các mệnh đề:",
    statements: [
      { text: "Diện tích cần phủ (6 mặt) là $S = 2400$ cm².", answer: "Đúng" },
      { text: "Thể tích hộp là $V = 8000$ cm³.", answer: "Đúng" },
      { text: "Nếu cạnh tăng gấp đôi, diện tích tăng gấp $4$ lần.", answer: "Đúng" },
      { text: "Nếu cạnh tăng gấp đôi, thể tích tăng gấp $4$ lần.", answer: "Sai" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // MẶT CẦU - HÌNH TRỤ - HÌNH NÓN
  // ──────────────────────────────────────────────────────────
  {
    topic: "Mặt cầu - Hình trụ - Hình nón", level: "Vận dụng",
    context: "Một bể nước hình trụ bán kính đáy $r = 1{,}5$ m, chiều cao $h = 2$ m. Xét các mệnh đề:",
    statements: [
      { text: "Thể tích bể $V = \\pi r^2 h = 4{,}5\\pi \\approx 14{,}14$ m³.", answer: "Đúng" },
      { text: "Diện tích xung quanh $S_{xq} = 2\\pi rh = 6\\pi \\approx 18{,}85$ m².", answer: "Đúng" },
      { text: "Bể chứa được khoảng $14{,}14$ khối nước (1 m³ = 1.000 lít).", answer: "Đúng" },
      { text: "Nếu bán kính tăng gấp đôi, thể tích tăng gấp đôi.", answer: "Sai" }
    ]
  },
  {
    topic: "Mặt cầu - Hình trụ - Hình nón", level: "Vận dụng cao",
    context: "Một lon nước giải khát hình trụ, thể tích $330$ ml $= 330$ cm³. Xét các mệnh đề:",
    statements: [
      { text: "Với $r = 3$ cm, chiều cao $h = \\dfrac{330}{9\\pi} \\approx 11{,}7$ cm.", answer: "Đúng" },
      { text: "Diện tích toàn phần $S = 2\\pi r^2 + 2\\pi rh$.", answer: "Đúng" },
      { text: "Để $S$ nhỏ nhất, cần $r = h$.", answer: "Sai" },
      { text: "Để $S$ nhỏ nhất, cần $r^3 = \\dfrac{V}{2\\pi}$, tức $r \\approx 3{,}74$ cm.", answer: "Đúng" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // VECTƠ TRONG KHÔNG GIAN
  // ──────────────────────────────────────────────────────────
  {
    topic: "Vectơ và các phép toán vectơ trong không gian", level: "Thông hiểu",
    context: "Cho hình bình hành $ABCD$. Xét các mệnh đề về các vectơ:",
    statements: [
      { text: "$\\overrightarrow{AC} + \\overrightarrow{BD} = 2\\overrightarrow{BC}$.", answer: "Đúng" },
      { text: "$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.", answer: "Đúng" },
      { text: "$\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} + \\overrightarrow{OD} = \\vec{0}$ (với $O$ là giao của 2 đường chéo).", answer: "Đúng" },
      { text: "$\\overrightarrow{AB} = \\overrightarrow{DC}$.", answer: "Đúng" }
    ]
  },
  {
    topic: "Vectơ và các phép toán vectơ trong không gian", level: "Vận dụng",
    context: "Robot công nghiệp di chuyển từ $P(0; 0; 0)$ đến $Q(4; 3; 0)$ rồi đến $R(4; 3; 5)$ (m). Xét các mệnh đề:",
    statements: [
      { text: "Quãng đường từ $P$ đến $Q$ là $PQ = 5$ m.", answer: "Đúng" },
      { text: "Quãng đường từ $Q$ lên $R$ là $5$ m.", answer: "Đúng" },
      { text: "Khoảng cách $PR = 5\\sqrt{2}$ m.", answer: "Đúng" },
      { text: "Tổng quãng đường robot đi là $5\\sqrt{2}$ m.", answer: "Sai" }
    ]
  },
  {
    topic: "Vectơ và các phép toán vectơ trong không gian", level: "Vận dụng cao",
    context: "Trong hệ $Oxyz$, cho $A(1; 2; 3)$, $B(3; 4; 1)$, $C(2; 0; 5)$. Xét các mệnh đề:",
    statements: [
      { text: "$\\overrightarrow{AB} = (2; 2; -2)$.", answer: "Đúng" },
      { text: "Trung điểm $M$ của $AB$ là $M(2; 3; 2)$.", answer: "Đúng" },
      { text: "$|\\overrightarrow{AB}| = 2\\sqrt{3}$.", answer: "Đúng" },
      { text: "Ba điểm $A$, $B$, $C$ thẳng hàng.", answer: "Sai" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // BÀI TOÁN THỰC TẾ TỔNG HỢP
  // ──────────────────────────────────────────────────────────
  {
    topic: "Bài toán thực tế tổng hợp", level: "Vận dụng",
    context: "Một xe ô tô đang chạy $16$ m/s thì hãm phanh, $v(t) = 16 - 4t$ (m/s). Xét các mệnh đề sau:",
    statements: [
      { text: "Xe dừng tại $t = 4$ giây.", answer: "Đúng" },
      { text: "Quãng đường hãm phanh là $S = \\int_0^4 (16 - 4t)\\,dt = 32$ m.", answer: "Đúng" },
      { text: "Đồ thị $v(t)$ là đường thẳng giảm từ $16$ xuống $0$.", answer: "Đúng" },
      { text: "Nếu tốc độ ban đầu là $32$ m/s thì quãng đường hãm phanh là $64$ m.", answer: "Đúng" }
    ]
  },
  {
    topic: "Bài toán thực tế tổng hợp", level: "Vận dụng cao",
    context: "Một mô hình dịch bệnh cho thấy số ca nhiễm mới mỗi ngày là $f(t) = 100e^{0{,}1t}$ (người), $t$ tính bằng ngày từ ngày 0. Xét các mệnh đề:",
    statements: [
      { text: "Ngày 0 có $100$ ca nhiễm mới.", answer: "Đúng" },
      { text: "Tổng số ca từ ngày 0 đến ngày 10: $\\int_0^{10} 100e^{0{,}1t}\\,dt = 1000(e - 1) \\approx 1718$ ca.", answer: "Đúng" },
      { text: "Số ca nhiễm mới tăng theo hàm mũ.", answer: "Đúng" },
      { text: "Nếu áp dụng cách ly từ ngày 5, tổng ca từ 0 đến 5 là $\\int_0^5 100e^{0{,}1t}\\,dt \\approx 649$ ca.", answer: "Đúng" }
    ]
  },
];
