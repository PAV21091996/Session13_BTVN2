let mang = [1, 2, 6, 24, 120, 720];
let check = true;
let so = Number(prompt("Nhập số cần tìm: "));

for (let index in mang){
    if (so === mang[index]){
        check = true;
        break;
    }
    else {
        check = false;
    }
}

if (check) {
    alert("Bingo");
}
else {
    alert("Chúc bạn may mắn lần sau");
}