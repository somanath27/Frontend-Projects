wishListShow();
fetch("products.json").then(response => response.json())
    .then((data) => {
        let prodt = data.Products;
        localStorage.setItem("jsonote", JSON.stringify(prodt));
    })

function addWishList(index){

    let jsonStore = JSON.parse(localStorage.getItem("jsonote"));
    let body = jsonStore[index - 1];
    let wishObj = localStorage.getItem("wishObj");
    if (wishObj == null){
        list = [];
        list.push(body);
    }
    else{
        list = JSON.parse(wishObj);
        list.forEach(function(element, ind){
            if (element.id == body.id){
                body = null;
                alert("already item has added to wishlist")
            }
        })
        if(body != null){
            list.push(body);
        }
    }
    localStorage.setItem("wishObj", JSON.stringify(list));
    wishListShow();
}



function wishListShow(){    
    let wishObj = localStorage.getItem("wishObj");
    if (wishObj == null){
        list = [];
    }
    else{
        list = JSON.parse(wishObj);
    }

    
    document.querySelector(".myWishList").innerHTML = `(0 Item)`;

    let wishShow = "";
    let starList = "";
    let noStarList = "";
    list.forEach(function(element, index){

        document.querySelector(".myWishList").innerHTML = `(${index + 1} Item)`;
        wishShow += `<div class="product-details">
        <hr>
        <div class="product-image-with-details">

            <div class="product-image">
                <img src="./images/${element.imageName}.png" alt="" height="200px">
            </div>
            <div class="about-product">
                <b>Your's Favourite Premium Quality Natural</b>
                <div class="stars">`
                for(let i=1; i<=element.ratings; i++){
                    starList += `<i class="fa-solid fa-star"></i>`
                }
                wishShow += starList;
                starList = "";

                if (element.ratings < 5){
                    let j = 1;
                    do {
                        noStarList += `<i class="fa-regular fa-star"></i>`
                        j++;
                    }while(j <= (6-element.ratings));
                }
                wishShow += noStarList;
                noStarList = "";
                
                wishShow += `</div>
                <div>
                    <span class="price-after-dis">RS ${element.priceAfterDiscount}</span>
                    <del class="price-before-dis">RS${element.price}</del><span class="discount-rate">(40% Off)</span>
                </div>
                <select name="pack-of" id="pack-of">
                    <option value="">select pack of</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
                <div class="add-remove">
                    <button onclick="addicart(${index})">Add to Cart</button><span class="slash">|</span><small
                        class="remove-wishlist" onclick="removeWish(${index})">Remove from wishlist</small>
                </div>
            </div>

        </div>
        <hr>
    </div>`
    });

    let myWishListItemAdd = document.querySelector(".myWishListItemAdd");
    if(list.length != 0){
        myWishListItemAdd.innerHTML = wishShow;
    }
    else{
        myWishListItemAdd.innerHTML = "You don't have any product in wishlist...";
    }
}

function removeWish(index){
    let wishObj = localStorage.getItem("wishObj");
    if (wishObj == null){
        list = [];
    }
    else{
        list = JSON.parse(wishObj);
    }
    list.splice(index, 1);
    localStorage.setItem("wishObj", JSON.stringify(list));
    wishListShow();
}

