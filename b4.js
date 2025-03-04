let a = prompt("nhap");
let key = prompt("nhap key");
let flag = false;
for( i = 0; i<a.length; i++){
    if( a[i] == key ){
        flag=true;
    }
}

if(flag){
    console.log("co gia tri can tim");
}else{
    console.log("khong co gia tri can tim");
}