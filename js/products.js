// var $$$ = document.querySelector.bind(document)
// var $$$$ = document.querySelectorAll.bind(document)

// handle Allproducts click next page
function nextPage(){
    const page1 = document.querySelectorAll('.page1')
    const page2 = document.querySelectorAll('.page2')
    const products1 = document.querySelectorAll('.products1')
    const products2 = document.querySelectorAll('.products2')

    // products2.forEach((product2)=>{
    //     console.log(product2)
    // })

    page1.forEach((cb)=>{
        cb.onclick = function(){
            document.querySelector('.page-link.active').classList.remove('active')
            document.querySelector('.pr1').classList.add('active')

            products1.forEach((product1)=>{
                product1.classList.remove('none')
            })
            products2.forEach((product2)=>{
                product2.classList.remove('block')
            })
            
        }
    })
    page2.forEach((cb2)=>{
        cb2.onclick = function(){
            document.querySelector('.page-link.active').classList.remove('active')
            document.querySelector('.pr2').classList.add('active')

            products1.forEach((product1)=>{
                product1.classList.add('none')
            })
            products2.forEach((product2)=>{
                product2.classList.add('block')
            })
        }
    })
}
nextPage()

function checked(){ 

    const inputs = document.querySelectorAll('input')

    const womens = document.querySelectorAll('.all_products .women')
    const mens = document.querySelectorAll('.all_products .men')
    const accs = document.querySelectorAll('.all_products .acc')
    const tees = document.querySelectorAll('.all_products .tee')
    const pants = document.querySelectorAll('.all_products .pant')
    const hoodies = document.querySelectorAll('.all_products .hoodies')
    const jackets = document.querySelectorAll('.all_products .jacket')
    const sweaters = document.querySelectorAll('.all_products .sweater')
    const all_products = document.querySelectorAll('.all_products')

    const next = document.querySelector('.pagination')
    
    const pds2 = document.querySelectorAll('.products2')
    const pds1 = document.querySelectorAll('.products1')
    let women = inputs[0],men = inputs[1],acc = inputs[2],
        tee = inputs[3],pant = inputs[4], hoodie = inputs[5], sweater = inputs[6],
        jacket = inputs[7];
    
        women.onclick = function(){
            if(this.checked){
                // womens.forEach((women)=>{
                //     women.classList.add('block')  
                    
                // })
                pds2.forEach((pd2)=>{
                    pd2.classList.add('block')
                })
                mens.forEach((men)=>{
                    men.style.display ='none'
                })
                accs.forEach((acc)=>{
                    acc.classList.add('none')
                    next.style.display = 'none';
                })
            }else{
                mens.forEach((men)=>{
                    men.style.display='none'
                })
                accs.forEach((acc)=>{
                    acc.classList.remove('none')
                })
                womens.forEach((women)=>{
                    women.classList.remove('block')
                    next.style.display = 'flex'
                    // products2.classList.remove('flex')
                })
                pds2.forEach((pd2)=>{
                    pd2.style.display='none'
                })
                pds1.forEach((pd1)=>{
                    pd1.style.display='block'
                })
            }
        } 
}
checked()




