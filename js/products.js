// random ID 0 -> 1000
function randomId(){
    return Math.floor(Math.random()*1000);
}

// List products

    let products = [
        {
            id: randomId(),
            name: 'Blvck Bold Floral Hoodie',
            description:
                "Part of the BLVCK06 Collection, the 'Blvck Bold Floral Hoodie' features a unique embroidered floral logo on the chest and  on the back for a minimalist, streetwear look.Made from luxurious 100% Terry Cotton, all our hoodies are super soft to the touch and perfect for everyday wear.Fits regular size for male.The model is wearing L and is 1m86.",
            price: 250000,
            salePrice: 30000,
            image1: src="/img/products/men/hoodies/Blvck Bold Floral Hoodie 1.webp",
            image2: src="/img/products/men/hoodies/Blvck Bold Floral Hoodie 2.webp",
            count: 1,
            sex : 'male',
            type: 'hoodie',
            page : 'products1',
        },
        {
            id: randomId(),
            name: 'Blvck AirTag Holder',
            description:
                'fffffffffffffffffff',
            price: 200000,
            image1: src="/img/products/accessories/Blvck AirTag Holder 2.webp",
            image2: src="/img/products/accessories/Blvck AirTag Holder 1.webp",
            count: 1,
            sex : 'acc',
            type: '',
            page : 'products1',
        },
        {
            id: randomId(),
            name: "Blvck 'Monogram' Denim Jacket",
            description:
                'fffffffffffffffffff',
            price: 2500000,
            image1: src="/img/products/men/jackets/Blvck 'Monogram' Denim Jacket 1.webp",
            image2: src="/img/products/men/jackets/Blvck 'Monogram' Denim Jacket 2.webp",
            count: 1,
            sex : 'male',
            type: 'jacket',
            page : 'products1',
        },
        {
            id: randomId(),
            name: 'ffffffffff',
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/women/crop/Blvck Crop Signature Sweater.webp",
            image2: src="/img/products/women/crop/Blvck Crop Signature Sweater 1.webp",
            count: 1,
            sex : 'female',
            type: 'sweater',
            page : 'products1',
        },
        {
            id: randomId(),
            name: 'ffffffffff',
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/men/pants/Blvck Letter Sweatpants 1.webp",
            image2: src="/img/products/men/pants/Blvck Letter Sweatpants 2.webp",
            count: 1,
            sex : 'male',
            type: 'pant',
            page : 'products1',
        },
        {
            id: randomId(),
            name: 'ffffffffff',
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/accessories/Blvck Desktop Set 1.webp",
            image2: src="/img/products/accessories/Blvck Desktop Set.webp",
            count: 1,
            sex : 'acc',
            type: '',
            page : 'products1',
        },
        {
            id: randomId(),
            name: 'Blvck Buttoned Crop Hoodie',
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/women/hoodies/Blvck Buttoned Crop Hoodie.webp",
            image2: src="/img/products/women/hoodies/Blvck Buttoned Crop Hoodie 1.webp",
            count: 1,
            sex : 'female',
            type: 'hoodie',
            page : 'products1',
        },
        {
            id: randomId(),
            name: 'Blvck Minimalist Sweats',
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/men/pants/Blvck Minimalist Sweats 1.webp",
            image2: src="/img/products/men/pants/Blvck Minimalist Sweats 2.webp",
            count: 1,
            sex : 'male',
            type: 'pant',
            page : 'products1',
        },
        {
            id: randomId(),
            name: "Blvck Monogram Jersey",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/men/shirts/Blvck Monogram Jersey 1.webp",
            image2: src="/img/products/men/shirts/Blvck Monogram Jersey 2.webp",
            count: 1,
            sex : 'male',
            type: 'shirt',
            page : 'products1',
        },
        {
            id: randomId(),
            name: "'Blvck x Whte' Baseball Jacket",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/women/jackets/'Blvck x Whte' Baseball Jacket.webp",
            image2: src="/img/products/women/jackets/'Blvck x Whte' Baseball Jacket 1.webp",
            count: 1,
            sex : 'female',
            type: 'jacket',
            page : 'products1',
        },
        {
            id: randomId(),
            name: "Blvck Drawing Pad",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/accessories/Blvck Drawing Pad.webp",
            image2: src="/img/products/accessories/Blvck Drawing Pad 1.webp",
            count: 1,
            sex : 'acc',
            type: '',
            page : 'products1',
        },
        {
            id: randomId(),
            name: "fffffff",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/men/sweaters/Blvck Bad Romance Sweater 1.webp",
            image2: src="/img/products/men/sweaters/Blvck Bad Romance Sweater 2.webp",
            count: 1,
            sex : 'male',
            type: 'sweater',
            page : 'products1',
        },
        {
            id: randomId(),
            name: "fffffff",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/accessories/Blvck Evil Teddy Bear Keychain.webp",
            image2: src="/img/products/accessories/Blvck Evil Teddy Bear Keychain 1.webp",
            count: 1,
            sex : 'acc',
            type: '',
            page : 'products1',
        },
        {
            id: randomId(),
            name: "fffffff",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/men/tees/Blvck Bold Floral Tee 1.webp",
            image2: src="/img/products/men/tees/Blvck Bold Floral Tee 2.webp",
            count: 1,
            sex : 'male',
            type: 'tee',
            page : 'products1',
        },
        {
            id: randomId(),
            name: "fffffff",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/women/pants/Blvck Buttoned Pants.webp",
            image2: src="/img/products/women/pants/Blvck Buttoned Pants 1.webp",
            count: 1,
            sex : 'female',
            type: 'pant',
            page : 'products1',
        },
        {
            id: randomId(),
            name: "fffffff",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/men/hoodies/Blvck Evil Twin Teddy Bear Hoodie 1.webp",
            image2: src="/img/products/men/hoodies/Blvck Evil Twin Teddy Bear Hoodie 2.webp",
            count: 1,
            sex : 'male',
            type: 'hoodie',
            page : 'products1',
        },
        {
            id: randomId(),
            name: "fffffff",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/women/crop/Blvck Cropped Pattern Hoodie.webp",
            image2: src="/img/products/women/crop/Blvck Cropped Pattern Hoodie 1.webp",
            count: 1,
            sex : 'female',
            type: 'blaze crop',
            page : 'products2',
        },
        {
            id: randomId(),
            name: "fffffff",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/accessories/Classic Blvck Backpack.webp",
            image2: src="/img/products/accessories/Classic Blvck Backpack 1.webp",
            count: 1,
            sex : 'acc',
            type: '',
            page : 'products2',
        },
        {
            id: randomId(),
            name: "fffffff",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/women/hoodies/Blvck Zipped Hoodie.webp",
            image2: src="/img/products/women/hoodies/Blvck Zipped Hoodie 1.webp",
            count: 1,
            sex : 'female',
            type: 'hoodie',
            page : 'products2',
        },
        {
            id: randomId(),
            name: "Blvck Signature Sweater",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/men/sweaters/Blvck Signature Sweater 1.webp",
            image2: src="/img/products/men/sweaters/Blvck Signature Sweater 2.webp",
            count: 1,
            sex : 'male',
            type: 'sweater',
            page : 'products2',
        },
        {
            id: randomId(),
            name: "Blvck Oversized Sombre Desire Tee",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/men/tees/Blvck Oversized Sombre Desire Tee 1.webp",
            image2: src="/img/products/men/tees/Blvck Oversized Sombre Desire Tee 2.webp",
            count: 1,
            sex : 'male',
            type: 'tee',
            page : 'products2',
        },
        {
            id: randomId(),
            name: "Blvck Branded Tee",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/women/tees/Blvck Branded Tee 1.webp",
            image2: src="/img/products/women/tees/Blvck Branded Tee 2.webp",
            count: 1,
            sex : 'female',
            type: 'tee',
            page : 'products2',
        },
        {
            id: randomId(),
            name: "Blvck Mini Wrap Skirt",
            description:
                'fffffffffffffffffff',
            price: 250000,
            image1: src="/img/products/women/pants/Blvck Mini Wrap Skirt.webp",
            image2: src="/img/products/women/pants/Blvck Mini Wrap Skirt 1.webp",
            count: 1,
            sex : 'female',
            type: 'pant',
            page : 'products2',
        },
        // {
        //     id: randomId(),
        //     name: "fffffff",
        //     description:
        //         'fffffffffffffffffff',
        //     price: 250000,
        //     image1: src="fffffffff",
        //     image2: src="fffffffff",
        //     count: 1,
        //     sex : 'male',
        //     type: 'sweater',
        //     page : 'products2',
        // },
    ]
// convert to VND
function convertMoney(num) {
    return num.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

// render to Html
let productsEle = document.querySelector('.all_products')
let productsLength = products.length
function renderUI(){
    for (let i = 0; i < productsLength; i++) {
            let p = products[i];
            productsEle.innerHTML += `
            <div onclick=nonePds() class="item-product ${p.sex} ${p.type}  ${p.page}">
                <div class="item-img ">
                    <a href='/html/productDetails.html'>
                        <img src="${p.image1}">
                        <img src="${p.image2}">
                        
                    </a>
                    <button>Add To Cart</button>
                </div>
                <a>
                <div class="items">
                    <h5>${p.name}</h5>
                    <div class="item-price">
                        <span class="item-price-origin">${convertMoney(p.price)}</span>
                        <!-- <span class="item-price-sale">800.000 đ</span> -->
                    </div>
                </div>
                </a>
            </div>
        `;
    } 
}
renderUI()
// function test(){
//     productDetails.innerHTML = `
//     <div class="productDetails">
//         <div class="left">
//             <div class="imgPrimary">
//                 <img src="${p.image1}">
//             </div>
//             <div class="imgDetails">
//                 <img src="${p.image1}">
//                 <img src="${p.image2}">
//                 <img src="${p.image3}">
//                 <img src="${p.image4}">
//                 <img src="${p.image5}">
//             </div>
//         </div>
//         <div class="mid"></div>
//         <div class="right">
//             <h2>${p.name}</h2>
//             <h4>p${p.price}</h4>
//             <div class="size">
//                 <button>S</button>
//                 <button>M</button>
//                 <button>L</button>
//                 <button>XL</button>
//             </div>
//             <div class="addAmount">
//                 <button>
//                     <p>1</p>
//                     <div class="icon">
//                         <img src="/img/icon/icon total.jpg" width="15px">
//                         <img src="/img/icon/dấu trừ.png" width="18px" style="margin-top:10px">
//                     </div>
//                 </button>
                
//             </div>
//             <div class="addtocart">
//                 <button>ADD TO CART</button>
//                 <button style='display:none' class='soldOut'>SOLD OUT</button>
//             </div>
//             <div class="info">
//                 <span>DESCRIPTION</span>
//                 <p>${p.descreption}</p>
//             </div>
//             <div class="info">
//                 <span>SHIPPING & RETURNS</span>
//                 <p>Fast International Shipping
//                     Shipments are fulfilled as soon as your order is verified, it may take up to 72 hours to process and ship your order during business days (Monday - Friday).
//                     After your order has been shipped, delivery time is 2-7 business days.
//                     To ensure the best delivery service, we ship using the top carriers (DHL Express, Fedex)
//                     *Depending on your country, import/customs fees may be applied to your order.
//                     Orders are shipped via our warehouse based in Hong Kong. 
//                     All applicable custom fees, taxes and duties are the sole responsibility of the customer and refused packages won't be refunded. 
//                     Returns
//                     Blvck Paris accepts International returns. All fees are the responsibility of the customer. To return your product, please contact us at support@blvck.com.</p>
//             </div>
//         </div>
//     </div>
//     `
// }