
const productDetails = document.querySelector('.productDetails')
const allProducts = document.querySelector('.all_products')
const itemProducts = document.querySelectorAll('.item-product')

console.log(productDetails)
console.log(allProducts)
console.log(itemProducts)
function nonePds(){
    allProducts.forEach((product,index)=>{
        product.style.display = 'none'
    })
}

// function clickProducts(){
    itemProducts.forEach((itemProduct,index)=>{
        // let arr = itemProduct[index]
        itemProduct.onclick = function(){
            console.log(this,index)
            let that = products[index]

                this.innerHTML = `
                <div class="productDetails">
                    <div class="left">
                        <div class="imgPrimary">
                            <img src="${that.image1}">
                        </div>
                        <div class="imgDetails">
                            <img src="${that.image1}">
                            <img src="${that.image2}">
                            <img src="${that.image3}">
                            <img src="${that.image4}">
                            <img src="${that.image5}">
                        </div>
                    </div>
                    <div class="mid"></div>
                    <div class="right">
                        <h2>${that.name}</h2>
                        <h4>p${that.price}</h4>
                        <div class="size">
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                        </div>
                        <div class="addAmount">
                            <button>
                                <p>1</p>
                                <div class="icon">
                                    <img src="/img/icon/icon total.jpg" width="15px">
                                    <img src="/img/icon/dấu trừ.png" width="18px" style="margin-top:10px">
                                </div>
                            </button>
                            
                        </div>
                        <div class="addtocart">
                            <button>ADD TO CART</button>
                            <button style='display:none' class='soldOut'>SOLD OUT</button>
                        </div>
                        <div class="info">
                            <span>DESCRIPTION</span>
                            <p>${this.descreption}</p>
                        </div>
                        <div class="info">
                            <span>SHIPPING & RETURNS</span>
                            <p>Fast International Shipping
                                Shipments are fulfilled as soon as your order is verified, it may take up to 72 hours to process and ship your order during business days (Monday - Friday).
                                After your order has been shipped, delivery time is 2-7 business days.
                                To ensure the best delivery service, we ship using the top carriers (DHL Express, Fedex)
                                *Depending on your country, import/customs fees may be applied to your order.
                                Orders are shipped via our warehouse based in Hong Kong. 
                                All applicable custom fees, taxes and duties are the sole responsibility of the customer and refused packages won't be refunded. 
                                Returns
                                Blvck Paris accepts International returns. All fees are the responsibility of the customer. To return your product, please contact us at support@blvck.com.</p>
                        </div>
                    </div>
                </div>
                ` 
        }
        
    })
    // <div id="root"></div>
    // <script type="text/babel">
    // const h1React = React.creatElement ('h1',
    // {
    //     className : "nothing"
    // },"Text");

    // function Header(){
    //     return 
    //     <div className='header'>New header</div>
    // }

    // {/* App.js */}
    // function App(){
    //     return (
    //         <div id='wrapper'>
    //             <Header />
    //         </div>
    //     )
    // }
    // </script>

