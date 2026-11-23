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

function addToBasket(){
    
}
