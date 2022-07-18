/**
 * Bài tập 1 - Quản lý tuyển sinh
 * Khối 1: Input
 * - diemChuan: Điểm chuẩn của Hội đồng
 * - diemMon1, diemMon2, diemMon3: điểm thi 3 môn của thí sinh
 * - khuVuc: Khu vực của thí sinh
 * - congKhuVuc: điểm cộng tương ứng với từng khu vực
 * - doiTuong: đối tượng của thí sinh
 * - congDoiTuong: điểm cộng tương ứng với từng đối tượng
 * - tongDiem
 * 
 * Khối 2: tính toán
 * B1: Tạo biến, gán giá trị cho biến
 * - diemChuan
 * - diemMon1, diemMon2, diemMon3
 * - congKhuVuc
 * - congDoiTuong
 * - tính tongDiem = diemMon1 + diemMon2 + diemMon3 + congKhuVuc + congDoiTuong
 * B2: so sánh tongDiem và diemChuan => xác định đậu hay rớt
 * B3: thông báo kết quả
 * 
 * Khối 3: Output
 * - Thí sinh đậu hay rớt?
 * - Tổng điểm đạt được
 * 
 */

function tuyenSinh(){
    var diemMon1 = Number(document.getElementById("diemMon1").value);
    var diemMon2 = Number(document.getElementById("diemMon2").value);
    var diemMon3 = Number(document.getElementById("diemMon3").value);
    var congKhuVuc = Number(document.getElementById("khuVuc").value);
    var congDoiTuong = Number(document.getElementById("doiTuong").value);
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + congKhuVuc + congDoiTuong;
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var ketqua = ""
    if (tongDiem > diemChuan){
        ketqua = "Chúc mừng thí sinh đã đậu với tổng điểm (cả điểm ưu tiên nếu có) là: " + tongDiem;
    }else {
        ketqua = "Chúc thí sinh may mắn lần sau. Tổng điểm (cả điểm ưu tiên nếu có) là: " + tongDiem;
    }
    document.getElementById("txtResultbai1").innerHTML = ketqua;
}
document.getElementById("tinhBai1").onclick = tuyenSinh;


/**
 * Bài tập 2 - Tính tiền điện
 * Khối 1: Input
 * - Tên hộ sử dụng điện
 * - Số Kw tiêu thụ trong tháng
 * 
 * Khối 2
 * B1: tạo biến và gán giá trị cho biến
 * B2: tính tiền điện theo từng bậc thang giá
 * B3: thông báo kết quả
 * 
 * Khối 3: Output
 * - tính số tiền phải thanh toán
 */

//Bảng giá tiền điện theo bậc thang
const BAC_50KW_DAU = 500;
const BAC_50KW_KE = 650;
const BAC_100KW_KE = 850;
const BAC_150KW_TIEP = 500;
const BAC_CON_LAI = 500;

function tinhTienDien(){
    var soDien = Number(document.getElementById("soDien").value);
    var thanhTien = 0;
    if (0 < soDien && soDien <=50){
        console.log("Giá đầu");
        thanhTien = soDien * BAC_50KW_DAU;
    }else if(50 < soDien && soDien <=100){
        thanhTien = 50 * BAC_50KW_DAU + (soDien - 50) * BAC_50KW_KE; 
    }else if(100 < soDien && soDien <=200){
        thanhTien = 50 * BAC_50KW_DAU + 50 * BAC_50KW_KE + (soDien - 100) * BAC_100KW_KE;
    }else if(200 < soDien && soDien <=350){
        thanhTien = 50 * BAC_50KW_DAU + 50 * BAC_50KW_KE + 100 * BAC_100KW_KE + (soDien - 200) * BAC_150KW_TIEP;
    }else {
        thanhTien = 50 * BAC_50KW_DAU + 50 * BAC_50KW_KE + 100 * BAC_100KW_KE + 150 * BAC_150KW_TIEP +  (soDien - 350) * BAC_CON_LAI;
    }
    console.log(thanhTien);
}
document.getElementById("tinhBai2").onclick = tinhTienDien;

/**
 * Bài tập 3 - tính thuế thu nhập cá nhân
 * Khối 1; Input
 * - hoTen
 * - tongThuNhap
 * - soNguoiPT
 * 
 * Khối 2:
 * B1: tạo biến và gán giá trị cho biến
 * B2: 
 * 
 * 
 * Khối 3: Output
 * - Tính số 
 */

//Thuế suất
const TS_DEN_60 = 0.05;
const TS_TREN_60_DEN_120 = 0.1;
const TS_TREN_120_DEN_210 = 0.15;
const TS_TREN_210_DEN_384 = 0.15;
const TS_TREN_384_DEN_624 = 0.25;
const TS_TREN_624_DEN_960 = 0.30;
const TS_TREN_960 = 0.35;

function tinhThue(){
    var hoTen = document.getElementById("hoTen").value;
    var tongThuNhap = Number(document.getElementById("tongThuNhap").value);
    var soNguoiPT = Number(document.getElementById("soNguoiPT").value);
    var thuNhapCT = tongThuNhap - 4 - (soNguoiPT * 1.6);
    var tienThue = 0;

    if (0 < thuNhapCT && thuNhapCT <= 60){
        tienThue = thuNhapCT * TS_DEN_60;
    }else if (60 < thuNhapCT && thuNhapCT <= 120){
        tienThue = thuNhapCT * TS_TREN_60_DEN_120;
    }else if (120 < thuNhapCT && thuNhapCT <= 210){
        tienThue = thuNhapCT * TS_TREN_120_DEN_210;
    }else if (210 < thuNhapCT && thuNhapCT <= 384){
        tienThue = thuNhapCT * TS_TREN_210_DEN_384;
    }else if (384 < thuNhapCT && thuNhapCT <= 624){
        tienThue = thuNhapCT * TS_TREN_384_DEN_624;
    }else if (624 < thuNhapCT && thuNhapCT <= 960){
        tienThue = thuNhapCT * TS_TREN_624_DEN_960;
    }else {
        tienThue = thuNhapCT * TS_TREN_960;
    }
    document.getElementById("txtResultbai3").innerHTML = "Tiền thuế TNCN mà ông/bà " + hoTen + " phải nộp là: " + tienThue.toFixed(2) + " triệu đồng";
}
document.getElementById("tinhBai3").onclick = tinhThue;



