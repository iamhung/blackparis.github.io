
var dataprompt = prompt('Xin lỗi !!! Đây là Web riêng tư !!!') ;
// var delay = setTimeout(function(){
//     window.location.href='/index.html';
// },2000);

if(dataprompt == 'iamhung'){
    // document.write('Hi ' + dataprompt + '<br/>' + ' Wellcome to my Website');
    window.location.href='/html/starbucks_home.html';
} else {
    document.write('Xin lỗi vì sự bất tiện này...'+ '<br/>' + ' Bạn sẽ được quay lại trang index !!!')
    setTimeout(function(){
        window.location.href='/index.html';
    },2500);
}


    

    
