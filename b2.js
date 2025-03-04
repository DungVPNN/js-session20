let a = (prompt("Nhap vao"));
if (a < 0 || Number.isNaN(a) || Number.isInteger(a)) {
    console.log("Du lieu nhap vao khong hop le");
} else{
    for (i = 1; i <=a; i++) {
        if(i % 5 ==0){
            console.log("cac so chia het cho 5 la:",i);
        }
    }
}
