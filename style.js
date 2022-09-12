
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// scroll nav
const nav = $('.nav')
const move = $('.move')

window.addEventListener('scroll',function(){
    x = window.pageYOffset
    // console.log(x)
    if(x>0){
        nav.classList.add('sticky')
    }else{
        nav.classList.remove('sticky')
    }
    if(x>200){
        move.classList.add('display')
    }else{
        move.classList.remove('display')
    }
})
// New ProDucts click
const newPDs = $$('.newproducts')
const newPds = $$('.new_products')

newPDs.forEach((newPD,index) => {
    const newPd = newPds[index]
    newPD.onclick = function (){
        $('.newproducts.opacity').classList.remove('opacity')
        $('.new_products.active').classList.remove('active')
        
        this.classList.add('opacity')
        newPd.classList.add('active')
        
    }
})
//click menu
// function clickMenu(){
    // const inputs = document.querySelectorAll('input')

    // const womens = document.querySelectorAll('.all_products .women')
    // const mens = document.querySelectorAll('.all_products .men')
    // const accs = document.querySelectorAll('.all_products .acc')
    // const tees = document.querySelectorAll('.all_products .tee')
    // const pants = document.querySelectorAll('.all_products .pant')
    // const hoodies = document.querySelectorAll('.all_products .hoodie')
    // const sweaters = document.querySelectorAll('.all_products .sweater')
    // const jackets = document.querySelectorAll('.all_products .jacket')

    // const next = document.querySelector('.pagination')
    // const bannerText = document.querySelector('.banner h1')
    // const pds2 = document.querySelectorAll('.products2')
    // const pds1 = document.querySelectorAll('.products1')
    
    // let women = inputs[0],men = inputs[1],acc = inputs[2],
    //     tee = inputs[3],pant = inputs[4], hoodie = inputs[5], sweater = inputs[6],
    //     jacket = inputs[7];
    
    // const womenMenu = $('.nav_women')
    // womenMenu.onclick = function(){
    //     mens.style.display = 'none'
        // inputs[0].checked = true
        // for(let i = 1;i <= 7; i++){
        //     inputs[i].checked = false;
        // }
        // if(inputs[0].checked){
        //     bannerText.innerHTML = 'WOMEN'
        //     pds2.forEach((pd2)=>{
        //         pd2.style.display = 'block'
        //     })
        //     mens.forEach((men)=>{
        //         men.style.display ='none'
        //     })
        //     accs.forEach((acc)=>{
        //         acc.style.display = 'none'
        //         next.style.display = 'none';
        //     })  
        //     womens.forEach((women)=>{
        //         women.style.display= 'block'
        //     })
        // }else{
        //     bannerText.innerHTML = 'ALL PRODUCTS'
        //     pds1.forEach((pd1)=>{
        //         pd1.style.display='block'
        //         next.style.display = 'flex'
        //     })
        //     pds2.forEach((pd2)=>{
        //         pd2.style.display='none'
        //     })
        //     document.querySelector('.page-link.active').classList.remove('active')
        //     document.querySelector('.pr1').classList.add('active')
        // }
//     }
// }
// clickMenu()

// handle Allproducts click next page
function nextPage(){
    const page1 = document.querySelectorAll('.page1')
    const page2 = document.querySelectorAll('.page2')
    const products1 = document.querySelectorAll('.products1')
    const products2 = document.querySelectorAll('.products2')
    page1.forEach((cb)=>{
        cb.onclick = function(){
            document.querySelector('.page-link.active').classList.remove('active')
            document.querySelector('.pr1').classList.add('active')

            products1.forEach((product1)=>{
                product1.style.display='block'
            })
            products2.forEach((product2)=>{
                product2.style.display = 'none'
            })
        }
    })
    page2.forEach((cb2)=>{
        cb2.onclick = function(){
            document.querySelector('.page-link.active').classList.remove('active')
            document.querySelector('.pr2').classList.add('active')
            products1.forEach((product1)=>{
                product1.style.display='none'
            })
            products2.forEach((product2)=>{
                product2.style.display='block'
            })
        }
    })
}
nextPage()

// function checked(){ 
//     const inputs = document.querySelectorAll('input')

//     const womens = document.querySelectorAll('.all_products .women')
//     const mens = document.querySelectorAll('.all_products .men')
//     const accs = document.querySelectorAll('.all_products .acc')
//     const tees = document.querySelectorAll('.all_products .tee')
//     const pants = document.querySelectorAll('.all_products .pant')
//     const hoodies = document.querySelectorAll('.all_products .hoodie')
//     const sweaters = document.querySelectorAll('.all_products .sweater')
//     const jackets = document.querySelectorAll('.all_products .jacket')

//     const next = document.querySelector('.pagination')
//     const bannerText = document.querySelector('.banner h1')
//     const pds2 = document.querySelectorAll('.products2')
//     const pds1 = document.querySelectorAll('.products1')
    
//     let women = inputs[0],men = inputs[1],acc = inputs[2],
//         tee = inputs[3],pant = inputs[4], hoodie = inputs[5], sweater = inputs[6],
//         jacket = inputs[7];
    
//     // loopChecked()
//     women.onclick = function(){
//         for(let i = 1;i <= 7; i++){
//             inputs[i].checked = false;
//         }
//         if(inputs[0].checked){
//             bannerText.innerHTML = 'WOMEN'
//             pds2.forEach((pd2)=>{
//                 pd2.style.display = 'block'
//             })
//             mens.forEach((men)=>{
//                 men.style.display ='none'
//             })
//             accs.forEach((acc)=>{
//                 acc.style.display = 'none'
//                 next.style.display = 'none';
//             })  
//             womens.forEach((women)=>{
//                 women.style.display= 'block'
//             })
//         }else{
//             bannerText.innerHTML = 'ALL PRODUCTS'
//             pds1.forEach((pd1)=>{
//                 pd1.style.display='block'
//                 next.style.display = 'flex'
//             })
//             pds2.forEach((pd2)=>{
//                 pd2.style.display='none'
//             })
//             document.querySelector('.page-link.active').classList.remove('active')
//             document.querySelector('.pr1').classList.add('active')
//         }
//     }
//     men.onclick = function(){
//         for(let i = 2;i <= 7; i++){
//             inputs[0].checked = false;
//             inputs[i].checked = false;
//         }
//         if(inputs[1].checked){
//             bannerText.innerHTML = 'MEN'
//             pds2.forEach((pd2)=>{
//                 pd2.style.display = 'block'
//             })
//             mens.forEach((men)=>{
//                 men.style.display ='none'
//             })
//             accs.forEach((acc)=>{
//                 acc.style.display = 'none'
//                 next.style.display = 'none';
//             })  
//             mens.forEach((women)=>{
//                 women.style.display= 'block'
//             })
//         }else{
//             bannerText.innerHTML = 'ALL PRODUCTS'
//             pds1.forEach((pd1)=>{
//                 pd1.style.display='block'
//                 next.style.display = 'flex'
//             })
//             pds2.forEach((pd2)=>{
//                 pd2.style.display='none'
//             })
//             document.querySelector('.page-link.active').classList.remove('active')
//             document.querySelector('.pr1').classList.add('active')
//         }
//     }
//     acc.onclick = function(){
//         for(let i = 3;i <= 7; i++){
//             inputs[0].checked = false;
//             inputs[1].checked = false;
//             inputs[i].checked = false;
//         }
//         if(inputs[2].checked){
//             bannerText.innerHTML = 'ACCESSORIES'
//             pds2.forEach((pd2)=>{
//                 pd2.style.display = 'block'
//             })
//             mens.forEach((men)=>{
//                 men.style.display = 'none'
//             })
//             womens.forEach((women)=>{
//                 women.style.display= 'none'
//             })
            
//             tees.forEach((tee)=>{
//                 tee.style.display = 'none'
//             })
//             accs.forEach((acc)=>{
//                 acc.style.display = 'block'
//                 next.style.display = 'none';
//             })
//         }else{
//             bannerText.innerHTML = 'ALL PRODUCTS'
//             pds1.forEach((pd1)=>{
//                 pd1.style.display='block'
//                 next.style.display = 'flex'
//             })
//             pds2.forEach((pd2)=>{
//                 pd2.style.display='none'
//             })
//             document.querySelector('.page-link.active').classList.remove('active')
//             document.querySelector('.pr1').classList.add('active')
//         }
//     }
//     tee.onclick = function(){
//         for(let i = 4;i <= 7; i++){
//             inputs[0].checked = false;
//             inputs[1].checked = false;
//             inputs[2].checked = false;
//             inputs[i].checked = false;
//         }
//         if(inputs[3].checked){
//             bannerText.innerHTML = 'TEES'
//             pds2.forEach((pd2)=>{
//                 pd2.style.display = 'block'
//             })
//             mens.forEach((men)=>{
//                 men.style.display = 'none'
//             })
//             womens.forEach((women)=>{
//                 women.style.display= 'none'
//             }) 
//             accs.forEach((acc)=>{
//                 acc.style.display = 'none'
//                 next.style.display = 'none';
//             })
//             tees.forEach((tee)=>{
                
//                 tee.style.display = 'block'
//             })
//         }else{
//             bannerText.innerHTML = 'ALLPRODUCTS'
//             pds1.forEach((pd1)=>{
//                 pd1.style.display='block'
//                 next.style.display = 'flex'
//             })
//             pds2.forEach((pd2)=>{
//                 pd2.style.display='none'
//             })
//             document.querySelector('.page-link.active').classList.remove('active')
//             document.querySelector('.pr1').classList.add('active')
//         }
//     }
//     pant.onclick = function(){
//         for(let i = 0;i <= 3; i++){
//             inputs[i].checked = false;
//         }
//         for(let i = 5;i <= 7; i++){
//             inputs[i].checked = false;
//         }
//         if(inputs[4].checked){
//             bannerText.innerHTML = 'PANTS'
//             pds2.forEach((pd2)=>{
//                 pd2.style.display = 'block'
//             })
//             mens.forEach((men)=>{
//                 men.style.display = 'none'
//             })
//             womens.forEach((women)=>{
//                 women.style.display= 'none'
//             })
//             accs.forEach((acc)=>{
//                 acc.style.display = 'none'
//                 next.style.display = 'none';
//             })
//             pants.forEach((pant)=>{
//                 pant.style.display = 'block'
//             })
//         }else{
//             bannerText.innerHTML = 'ALLPRODUCTS'
//             pds1.forEach((pd1)=>{
//                 pd1.style.display='block'
//                 next.style.display = 'flex'
//             })
//             pds2.forEach((pd2)=>{
//                 pd2.style.display='none'
//             })
//             document.querySelector('.page-link.active').classList.remove('active')
//             document.querySelector('.pr1').classList.add('active')
//         }
//     }
//     hoodie.onclick = function(){
//         bannerText.innerHTML = 'HOODIES'
//         for(let i = 0;i <= 4; i++){
//             inputs[6].checked = false;
//             inputs[7].checked = false;
//             inputs[i].checked = false;
//         }  
//         if(inputs[5].checked){   
              
//             pds2.forEach((pd2)=>{
//                 pd2.style.display = 'block'
//             })
//             mens.forEach((men)=>{
//                 men.style.display = 'none'
//             })
//             womens.forEach((women)=>{
//                 women.style.display= 'none'
//             })
//             accs.forEach((acc)=>{
//                 acc.style.display = 'none'
//                 next.style.display = 'none';
//             })
//             hoodies.forEach((hoodie)=>{
//                 hoodie.style.display = 'block'
//             })
//         }else{
//             bannerText.innerHTML = 'ALLPRODUCTS'
//             pds1.forEach((pd1)=>{
//                 pd1.style.display='block'
//                 next.style.display = 'flex'
//             })
//             pds2.forEach((pd2)=>{
//                 pd2.style.display='none'
//             })
//             document.querySelector('.page-link.active').classList.remove('active')
//             document.querySelector('.pr1').classList.add('active')
//         }
//     }
//     sweater.onclick = function(){
//         bannerText.innerHTML = 'SWEATERS'
//         for(let i = 0;i <= 5; i++){
//             inputs[7].checked = false;
//             inputs[i].checked = false;
//         }
//         if(inputs[6].checked){
            
//             pds2.forEach((pd2)=>{
//                 pd2.style.display = 'block'
//             })
//             mens.forEach((men)=>{
//                 men.style.display = 'none'
//             })
//             womens.forEach((women)=>{
//                 women.style.display= 'none'
//             })
//             accs.forEach((acc)=>{
//                 acc.style.display = 'none'
//                 next.style.display = 'none';
//             })
//             sweaters.forEach((sweater)=>{
//                 sweater.style.display = 'block'
//             })
//         }else{
//             bannerText.innerHTML = 'ALLPRODUCTS'
//             pds1.forEach((pd1)=>{
//                 pd1.style.display='block'
//                 next.style.display = 'flex'
//             })
//             pds2.forEach((pd2)=>{
//                 pd2.style.display='none'
//             })
//             document.querySelector('.page-link.active').classList.remove('active')
//             document.querySelector('.pr1').classList.add('active')
//         }
//     }
//     jacket.onclick = function(){
//         bannerText.innerHTML = 'JACKETS'
//         for(let i = 0;i <= 6; i++){
//             inputs[i].checked = false;
//         }
//         if(inputs[7].checked){
//             pds2.forEach((pd2)=>{
//                 pd2.style.display = 'block'
//             })
//             mens.forEach((men)=>{
//                 men.style.display = 'none'
//             })
//             womens.forEach((women)=>{
//                 women.style.display= 'none'
//             })
//             accs.forEach((acc)=>{
//                 acc.style.display = 'none'
//                 next.style.display = 'none';
//             })
//             jackets.forEach((jacket)=>{
//                 jacket.style.display = 'block'
//             })
//         }else{
//             bannerText.innerHTML = 'ALLPRODUCTS'
//             pds1.forEach((pd1)=>{
//                 pd1.style.display='block'
//                 next.style.display = 'flex'
//             })
//             pds2.forEach((pd2)=>{
//                 pd2.style.display='none'
//             })
//             document.querySelector('.page-link.active').classList.remove('active')
//             document.querySelector('.pr1').classList.add('active')
//         }
//     }  
// }
// checked()


// hover video
const hoverVideo = () => {
    const hoverVideo1 = $('.video1')
    const hoverVideo2 = $('.video2')
    const hoverVideo3 = $('.video3')
    const hoverVideo4 = $('.video4')
    const hoverVideo5 = $('.video5')
    //hover video 1
    hoverVideo1.onmouseover = function(){
        hoverVideo1.classList.add('transform')
        hoverVideo2.classList.add('transformOut')
    }
    hoverVideo1.onmouseout = function(){
        hoverVideo1.classList.remove('transform')
        hoverVideo2.classList.remove('transformOut')
    }
    //hover video 2
    hoverVideo2.onmouseover = function(){
        hoverVideo2.classList.add('transform')
        hoverVideo1.classList.add('transformOut')
        hoverVideo3.classList.add('transformOut')
    }
    hoverVideo2.onmouseout = function(){
        hoverVideo2.classList.remove('transform')
        hoverVideo1.classList.remove('transformOut')
        hoverVideo3.classList.remove('transformOut')
    }
    //hover video 3
    hoverVideo3.onmouseover = function(){
        hoverVideo3.classList.add('transform')
        hoverVideo2.classList.add('transformOut')
        hoverVideo4.classList.add('transformOut')
    }
    hoverVideo3.onmouseout = function(){
        hoverVideo3.classList.remove('transform')
        hoverVideo2.classList.remove('transformOut')
        hoverVideo4.classList.remove('transformOut')
    }
    //hover video 4
    hoverVideo4.onmouseover = function(){
        hoverVideo4.classList.add('transform')
        hoverVideo3.classList.add('transformOut')
        hoverVideo5.classList.add('transformOut')
    }
    hoverVideo4.onmouseout = function(){
        hoverVideo4.classList.remove('transform')
        hoverVideo3.classList.remove('transformOut')
        hoverVideo5.classList.remove('transformOut')
    }
    //hover video 1
    hoverVideo5.onmouseover = function(){
        hoverVideo5.classList.add('transform')
        hoverVideo4.classList.add('transformOut')
    }
    hoverVideo5.onmouseout = function(){
        hoverVideo5.classList.remove('transform')
        hoverVideo4.classList.remove('transformOut')
    }
}
hoverVideo()







