// var CORRECT_USER = 'iamhung';
// var CORRECT_PASS = '123@';

// var inputUsername = document.getElementById('username');
// var inputPassword = document.getElementById('password');

// var formLogin = document.getElementById('form-login');

// if(formLogin.attachEvent) {
//     formLogin.attachEvent ('submit',onFormSubmit);
// }else {
//     formLogin.addEvenListener ('submit',onFormSubmit);
// }

// function onFormSubmit (e) {
//     var username = inputUserName.value;
//     var password = inputPassword.value;

//     if (username == CORRECT_USER && password == CORRECT_PASS) {
//         alert('đăng nhập thành công');
//     } else {
//         alert('Đăng nhập thất bại');
//     }
// }
// var a = 1;
//     b = 2;
//     c = a + b;

//     if(c == 3) {
//         window.location.href='/html/starbucks_home.html';
//     }

var dataprompt = prompt('Đây là web riêng tư !!!') ;
// var delay = setTimeout(function(){
//     window.location.href='/index.html';
// },2000);

if(dataprompt == 'iamhung'){
    // document.write('Hi ' + dataprompt + '<br/>' + ' Wellcome to my Website');
    window.location.href='/html/starbucks_home.html';
} else {
    document.write('Xin lỗi ' + dataprompt + '<br/>' + ' Bạn không được phép truy cập Website này !!!')
    setTimeout(function(){
        window.location.href='/index.html';
    },2500);
}
    

    
// document.write('Hi ' + dataprompt + '<br/>' + ' Wellcome to my Website');

// return window.location.href='/html/starbucks_home.html';
// setTimeout(return window.location.href='/html/starbucks_home.html', 2);