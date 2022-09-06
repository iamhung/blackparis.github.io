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


// hover video
const hoverVideo1 = $('.video1')
const hoverVideo2 = $('.video2')
const hoverVideo3 = $('.video3')
const hoverVideo4 = $('.video4')
const hoverVideo5 = $('.video5')

// console.log(hoverVideo1)
//hover video 1
const hoverVideo = () => {
    hoverVideo1.addEventListener('mouseover',function(){
        hoverVideo1.classList.add('transform')
        hoverVideo2.classList.add('transformOut')
    })
    hoverVideo1.addEventListener('mouseout',function(){
        hoverVideo1.classList.remove('transform')
        hoverVideo2.classList.remove('transformOut')
    })
    //hover video 2
    hoverVideo2.addEventListener('mouseover',function(){
        hoverVideo2.classList.add('transform')
        hoverVideo1.classList.add('transformOut')
        hoverVideo3.classList.add('transformOut')
    })
    hoverVideo2.addEventListener('mouseout',function(){
        hoverVideo2.classList.remove('transform')
        hoverVideo1.classList.remove('transformOut')
        hoverVideo3.classList.remove('transformOut')
    })
    //hover video 3
    hoverVideo3.addEventListener('mouseover',function(){
        hoverVideo3.classList.add('transform')
        hoverVideo2.classList.add('transformOut')
        hoverVideo4.classList.add('transformOut')
    })
    hoverVideo3.addEventListener('mouseout',function(){
        hoverVideo3.classList.remove('transform')
        hoverVideo2.classList.remove('transformOut')
        hoverVideo4.classList.remove('transformOut')
    })
    //hover video 4
    hoverVideo4.addEventListener('mouseover',function(){
        hoverVideo4.classList.add('transform')
        hoverVideo3.classList.add('transformOut')
        hoverVideo5.classList.add('transformOut')
    })
    hoverVideo4.addEventListener('mouseout',function(){
        hoverVideo4.classList.remove('transform')
        hoverVideo3.classList.remove('transformOut')
        hoverVideo5.classList.remove('transformOut')
    })
    //hover video 1
    hoverVideo5.addEventListener('mouseover',function(){
        hoverVideo5.classList.add('transform')
        hoverVideo4.classList.add('transformOut')
    })
    hoverVideo5.addEventListener('mouseout',function(){
        hoverVideo5.classList.remove('transform')
        hoverVideo4.classList.remove('transformOut')
    })
}

hoverVideo()

