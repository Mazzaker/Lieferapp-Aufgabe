function htmlDishTemplate(i){
    return `
            <div class="dish">
                <img src="${arrayDishes[i].image}" alt="Burger">
                <div class="dishInfo">
                    <div class="dishLeft">
                        <h3>
                            ${arrayDishes[i].name}
                        </h3>
                        <span>
                            ${arrayDishes[i].ingredients}
                        </span>
                    </div>
                    <div class="dishRight">
                        <h3>
                            ${arrayDishes[i].price.toFixed(2)}€
                        </h3>
                        <button onclick="addToBasket(${i})">
                            Add to basket
                        </button>
                    </div>
                </div>
            </div>
        `
}


function htmlBasketDishTemplate(i) {
    let dishBasket = arrayBasket[i];
    let dishMenu = arrayDishes[dishBasket.dishID];

    return `
        <div class="basketDish">
            <p>${dishBasket.amount} x ${dishMenu.name}</p>

            <div class="basketDishBottom">
                <div class="basketDishBottomLeft">
                    ${dishBasket.amount > 1
                        ? `<span class="basketMinus" onclick="removeFromBasket(${i})">−</span>`
                        : `<img src="./assets/icons/delete.png" onclick="removeFromBasket(${i})">`
                    }
                    <span>${dishBasket.amount}</span>
                    <span onclick="addToBasket(${dishBasket.dishID})">+</span>
                </div>

                <span>${(dishMenu.price * dishBasket.amount).toFixed(2).replace(".", ",")}€</span>
            </div>
        </div>
    `;
}

function htmlBasketTemplate(html, subtotal) {
    let total = subtotal + 4.99;

    return `
        <h2>Your Basket</h2>

        <div class="basketContent">
            <div class="basketDishes">
                ${html}
            </div>

            <div class="basketSum">
                <div class="subtotal">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2).replace(".", ",")}€</span>
                </div>

                <div class="deliveryFee">
                    <span>Delivery fee</span>
                    <span>4,99€</span>
                </div>

                <div class="totalSum">
                    <span>Total</span>
                    <span>${total.toFixed(2).replace(".", ",")}€</span>
                </div>

                <button>
                    Buy now (${total.toFixed(2).replace(".", ",")}€)
                </button>
            </div>
        </div>
    `;
}

