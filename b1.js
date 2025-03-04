let a = parseInt(prompt("Nhap vao"));
let sum = 0;
if (a < 0 || Number.isNaN(a)) {
    console.log("Du lieu nhap vao khong hop le");
} else {
    for (i = 1; i <=a; i++) {
        sum += i;
    }
    console.log(sum);
}
