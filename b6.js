let n = prompt("Nhập vào:");
if (n < 2) {
  console.log(n + " không phải là số nguyên tố.");
} else {
  let flag = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      flag = false;
      break;
    }
  }
  console.log(n + (flag ? " là số nguyên tố." : " không phải là số nguyên tố."));
}
