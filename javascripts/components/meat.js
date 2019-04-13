import util from "../helpers/util.js";

const meatObject = {
    ham: .50,
    turkey: .45,
    roastBeef: .60,
    chicken: .35
}

const ingredients = [];
const cart = [];

// const getCart = () => {
//     return cart;
// }
const addMeat = () => {
    return meatObject;
};

const pickMeat = (e) => {
    e.preventDefault(); 
    let eventId = e.target.id;
    ingredients.push(eventId);
    console.log(ingredients);
    // ingredients.push(Object.keys(addMeat()));
    //if (target by name and ask if box is checked, and is i.e. bread)
        if (eventId === 'ham') {
            let ingredient = addMeat().ham;
            cart.push(ingredient);
        } else if (eventId === 'turkey') {
            let ingredient = addMeat().turkey
            cart.push(ingredient);
        } else if (eventId === 'roastBeef') {
            let ingredient = addMeat().roastBeef;
            cart.push(ingredient);
        } else if (eventId === 'chicken') {
            let ingredient = addMeat().chicken;
            cart.push(ingredient);
        }    
        console.log(cart);
        const sandTotal = cart.reduce((a, b) => {return a + b}, 0);
        let domString = '';
            domString += `<div>`;
            domString += `   <h3 class="">Total Cost: <span id="costSpan">$${sandTotal.toFixed(2)}</span></h3>`;
            domString += `</div>`;
            domString += `<div>`;
            domString += `  <h3>Ingredients:</h3>`;
            domString += `      <ul>`;
            domString += `           <li>${ingredients},</li>`;
            domString += `      </ul>`;
            domString += `</div>`;
        util.printToDom('totalCostDiv', domString);
};


const buyButton = () => {

};

export default { addMeat, pickMeat };