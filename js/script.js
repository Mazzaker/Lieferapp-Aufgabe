let rating = document.getElementById("rating")
let dishes = document.getElementById("dishes")
let basket = document.getElementById("basket")
let orderDialog = document.getElementById("orderDialog")
let mobileBasketDialog = document.getElementById("mobileBasketDialog")
let mobileBasketContent = document.getElementById("mobileBasketContent")


function init(){
    renderDishes();
    renderBasket();
}

function renderDishes(){
    let html = "";

    for(let i = 0; i < arrayDishes.length; i++){
        html += htmlDishTemplate(i);
    }

    dishes.innerHTML = html;
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
    let html = "";

    if (arrayBasket.length == 0) {
        html = `
            <h2>Your Basket</h2>
            <p>Nothing here yet. Go ahead and choose something delicious!</p>
            <img src="./assets/icons/basket.png" alt="Basket">
        `;
    } else {
        let dishesHtml = "";

        for (let i = 0; i < arrayBasket.length; i++) {
            dishesHtml += htmlBasketDishTemplate(i);
        }

        html = htmlBasketTemplate(dishesHtml, calculateSubtotal());
    }

    basket.innerHTML = html;
    mobileBasketContent.innerHTML = html;
}

function openMobileBasket() {
    renderBasket();
    mobileBasketDialog.showModal();
}

function closeMobileBasket() {
    mobileBasketDialog.close();
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

let dialogTimer;

function buyNow(){
    arrayBasket.length = 0;
    renderBasket();
    clearTimeout(dialogTimer);

    if (mobileBasketDialog.open) {
        closeMobileBasket();
    }

    orderDialog.showModal();

    dialogTimer = setTimeout(() => {
        orderDialog.close();
        }, 2500);
}

function closeDialog(){
    clearTimeout(dialogTimer);
    orderDialog.close();
}

