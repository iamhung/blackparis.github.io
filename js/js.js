
//Hiện thị văn bản ra HTML
//onmouseover = thay đổi màu thẻ khi di chuột vào
myFunction = () => {
    document.getElementById('js').innerHTML ='Wellcome to Javascript';
}

var random = Math.floor(Math.random()*100);

    if (random < 50) {
        console.log(document.getElementById('random').innerHTML ='success');
    }else{
        console.log(document.getElementById('random').innerHTML ='lost');
    }


document.getElementById('random').innerHTML = random;



