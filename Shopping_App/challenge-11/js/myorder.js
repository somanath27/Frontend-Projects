function myOrderShow() {
    let gettingMyOrder = localStorage.getItem("myOrder");
    // console.log(gettingMyOrder);

    if (gettingMyOrder == null) {
        myOrderObj = [];
    }
    else {
        myOrderObj = JSON.parse(gettingMyOrder);
    }

    let myOrderShow = "";

    myOrderObj.forEach(function (element) {
        myOrderShow += ` <div class="product-details">
        <hr>
        <div class="product-image-with-details">

            <div class="product-image">
                <img src="./images/${element.imageName}.png" alt="" height="100px">
            </div>
            <div class="about-my-order">
                <div class="about-my-order-data" >
                   <b>Your's Favourite Premium Quality..</b>
                    <h6>Color:Multicolor</h6>
                    <h6>Seller:Somanath Barik</h6>
                </div>
               <div class="about-my-order-price">
                Rs <span>${element.price}</span>
               </div>
               <div class="about-delivery">
                <ul style="list-style-type:circle ;">
                    <li>Delivery Expected by july 28</li>
                </ul>
                <h6>Your Order has been placed</h6>
                <a href="">Track Your Order</a>
               </div>
                
            </div>
        </div>
        <hr>
    </div>`
    });

    
        document.querySelector("#my-order-data").innerHTML = myOrderShow;

}
myOrderShow()