// get products data
let totalItem=document.getElementById("total-item")

let productsListUrl = 'products.json';


async function loadProducts(productsListUrl) {
    fetch(productsListUrl)
        .then(response => response.json())
        .then(data => {
            const products = data.Products;
            let cards = '';
            products.forEach((product,no_of_items) => {
                totalItem.innerText = `(${no_of_items + 1} Items)`//second arguments represents index value
                let stars = '';
                const ratings = Math.floor(+product.ratings);
                for (let i = 1; i <= 5; i++)
                 {
                    if (i <= ratings)
                    {
                        stars = stars + '<i class="fa fa-star checked"></i>';
                    } 
                    else
                    {
                        stars = stars + '<i class="fa fa-star-o"></i>';
                    }
                }
                cards = cards +
                    ` <section class="card-view-page">
                    <img src="./images/${product.imageName}.png" height="200px" width="200px">
                    <div class="three-icon">
                        <img src="./images/cart.png" class="cart1">
                        <img src="./images/view.png" class="cart2">
                        <img src="./images/wishlist.png" class="cart3">
                    </div>
                    <div class="card-product-details">
                        <h6>${product.name}</h6>
                        <span class="price-after-discount">RS ${product.priceAfterDiscount}</span><del class="price-before-discount">RS
                            ${product.price}</del><span class="total-discount">(40% Off)</span>
                            <div class="stars">
                               ${stars}
                            </div>           
                   </div>
                   </section>`;
            });
            document.querySelector('#dress-section').innerHTML = cards;
        });
}

loadProducts(productsListUrl);