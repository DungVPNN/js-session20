let a = prompt("Nhập vào một chuỗi số nguyên:");
if( isNaN(a) || !Number.isInteger(a) );
let flag = true;
for (let i = 0; i <a.length / 2; i++) {
  if (a[i] !== a[a.length - 1 - i]) {
    flag = false;
    break;
  }
}

if (flag) {
  console.log("Số đối xứng.");
} else {
  console.log("Số không đối xứng.");
}
