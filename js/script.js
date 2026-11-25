let rating = document.getElementById("rating")
let dishes = document.getElementById("dishes")
let basket = document.getElementById("basket")

function init(){
    renderDishes();
}

function renderDishes(){
    let html = "";
    for(let i = 0; i < arrayDishes.length; i++){
        dishes.innerHTML += htmlDishTemplate(i);
    }
}

function addToBasket(i) {
    let idAlreadyInBasket = alreadyInBasket(i);

    if (idAlreadyInBasket) {
        idAlreadyInBasket.amount++;
    } 
    else {
        arrayBasket.push({
            dishID: i,
            amount: 1
        });
    }

    renderBasket();
}

function alreadyInBasket(dishID){
    for (let i = 0; i < arrayBasket.length; i++) {
        if (arrayBasket[i].dishID == dishID) {
            return arrayBasket[i];
        }
    }
    return undefined;
}


function renderBasket() {
    if (arrayBasket.length == 0) {
    basket.innerHTML = `
        <h2>Your Basket</h2>
        <p>
            Nothing here yet.
            Go ahead and choose something delicious!
        </p>
        <img src="./assets/icons/basket.png" alt="Basket">
    `;
    return;
    }

    let html = "";

    for (let i = 0; i < arrayBasket.length; i++) {
        html += htmlBasketDishTemplate(i);
    }

    basket.innerHTML = htmlBasketTemplate(html, calculateSubtotal());
}

function calculateSubtotal() {
    let subtotal = 0;

    for (let i = 0; i < arrayBasket.length; i++) {
        let dishBasket = arrayBasket[i];
        let dishMenu = arrayDishes[dishBasket.dishID];

        subtotal += dishMenu.price * dishBasket.amount;
    }

    return subtotal;
}

function removeFromBasket(i) {
    if (arrayBasket[i].amount > 1) {
        arrayBasket[i].amount--;
    } else {
        arrayBasket.splice(i, 1);
    }

    renderBasket();
}


