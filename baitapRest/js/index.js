function dom(selector){
    return document.querySelector(selector);
}

const tinhDiemTB = (...diem) =>{
    return diem.reduce((result, value)=> result + value, 0) / diem.length ;
};

//Khối 1
dom('#btnKhoi1').addEventListener('click', function(){
    let diemToan = +dom('#inpToan').value;
    let diemLy = +dom('#inpLy').value;
    let diemHoa = +dom('#inpHoa').value;

    const diemTB = tinhDiemTB(diemToan, diemLy, diemHoa);
    dom('#tbKhoi1').innerHTML = diemTB;

});

//Khối 2
dom('#btnKhoi2').addEventListener('click', function(){
    let diemVan = +dom('#inpVan').value;
    let diemSu = +dom('#inpSu').value;
    let diemDia = +dom('#inpDia').value;
    let diemAV = +dom('#inpEnglish').value;

    const diemTB = tinhDiemTB(diemVan, diemSu, diemDia, diemAV);
    dom('#tbKhoi2').innerHTML = diemTB;
})