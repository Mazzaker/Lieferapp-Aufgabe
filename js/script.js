let rating = document.getElementById("rating")
let dishes = document.getElementById("dishes")
let basket = document.getElementById("basket")

function init(){
    renderDishes();
}

function renderDishes(){
    for(let i = 0; i < arrayDishes.length; i++){
        dishes.innerHTML += htmlDishTemplate(i);
    }
}

function addToBasket(i){
    basket.innerHTML = `
        <h2>Your Basket</h2>
        <div class="basketContent">
                    <div class="basketDishes">
                        <div class="basketDish">
                            <p>
                                XX x ${arrayDishes[i].name}
                            </p>
                            <div class="basketDishBottom">
                                <div class="basketDishBottomLeft">
                                    <img src="./assets/icons/delete.png">
                                    <span>1</span>
                                    <span>+</span>
                                </div>
                                <span>16,90€</span>
                            </div>
                        </div>
                    </div>
                    <div class="basketSum">
                        <div class="subtotal">
                            <span>Subtotal</span>
                            <span>XXXX€</span>
                        </div>
                        <div class="deliveryFee">
                            <span>Delivery fee</span>
                            <span>4,99€</span>
                        </div>
                        <div class="totalSum">
                            <span>Total</span>
                            <span>XXXX€</span>
                        </div>
                        <button>Buy now (XXX€)</button>
                    </div>
                </div>
    `
}


