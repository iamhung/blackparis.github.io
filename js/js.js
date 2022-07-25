
//Hiện thị văn bản ra HTML
//onmouseover = thay đổi màu thẻ khi di chuột vào
myFunction = () => {
    document.getElementById('js').innerHTML ='Wellcome to Javascript';
}

// var random = Math.floor(Math.random()*100);

//     if (random < 50) {
//         console.log(document.getElementById('random').innerHTML ='success');
//     }else{
//         console.log(document.getElementById('random').innerHTML ='lost');
//     }


// document.getElementById('random').innerHTML = random;

// let person = prompt("Mời bạn nhập tên của mình", "");
// let text;
// if (person == null || person == "") {
// text = "Buồn quá, bạn không muốn nhập tên!";
// } else {
// text = "Xin chào " + person + "";
// }
// document.write(text);

// for(i=0; i < 100 ; i++){
//     document.write(i + '. I love U'+'<br/>');
// }
let n = ' ';
document.getElementById('random').innerHTML = 'Nhập N : ' + ' ';

for(i=0; i < n ; i++){
    document.write(i + '. I love U'+'<br/>');
}
