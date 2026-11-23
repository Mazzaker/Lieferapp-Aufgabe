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
                        <button onclick="addToBasket()">
                            Add to basket
                        </button>
                    </div>
                </div>
            </div>
        `
}