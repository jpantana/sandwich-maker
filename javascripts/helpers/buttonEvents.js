import meat from "../components/meat.js";
import sandwich from "../components/sandwich.js";
import util from "./util.js";

const attachEvent = (e) => {
    e.preventDefault();
    console.log(meat.meatSender);
};

const cart = [];

const getCart = () => {
    return cart;
}

const setCart = (meat) => {
    cart.push(meat);
    console.log('setCart function', cart);
};

const addMeat = (e) => {
    e.preventDefault();
    const myCart = getCart();
        if (e.target.id === 'ham') {
            let ingredient = meat.addMeat().ham;
            cart.push(ingredient);
        } else if (e.target.id === 'turkey') {
            let ingredient = meat.addMeat().turkey;
            cart.push(ingredient);
        } else if (e.target.id === 'roastBeef') {
            let ingredient = meat.addMeat().roastBeef;
            cart.push(ingredient);
        } else if (e.target.id === 'chicken') {
            let ingredient = meat.addMeat().chicken;
            cart.push(ingredient);
        }
        const sandTotal = myCart.reduce((a, b) => {return a + b}, 0);
        let domString = '';
        domString = `You owe ${sandTotal.toFixed(2)}`;
        util.printToDom('sandwichIngredients', domString);
};

// const sandwichCost = () => {
//     let domString = '';
//     domString = `You owe ${sandTotal.toFixed(2)}`;
//     util.printToDom('sandwichIngredients', domString);
//     console.log(sandTotal);
// };


const addEvent = () => {
    document.getElementById('ham').addEventListener('click', addMeat);
    document.getElementById('turkey').addEventListener('click', addMeat);
    document.getElementById('roastBeef').addEventListener('click', addMeat);
    document.getElementById('chicken').addEventListener('click', addMeat);  
    // document.getElementById('totalCostDiv').addEventListener('click', buySandwich);
};

export default { addEvent, addMeat };