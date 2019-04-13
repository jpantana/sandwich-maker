import meat from "./meat.js";
import util from "../helpers/util.js";
import buttonEvents from "../helpers/buttonEvents.js";

// const ingredients = [];
const cart = [];

const mySandwich = (e) => {
    e.preventDefault(); 
    let meats = meat.addMeat();
    console.log(meats);
    let eventId = e.target.id;
    const newIngredient = {
        name: eventId,
        type: e.target.name,
    }

    if (e.target.name === 'meat') {
        newIngredient.price = meats[e.target.id];
        cart.push(newIngredient);
        console.log(cart);
    }
        const sandTotal = cart.reduce((a, b) => {return a + b.price}, 0);
        let domString = '';   
                domString += `<div>`;
                domString += `  <h3>Ingredients:</h3>`;
                domString += `  <ul>`;
                cart.forEach((item) => {
                domString += `           <li>${cart.name},</li>`;
            })
                domString += `      </ul>`;
                domString += `</div>`;
                domString += `<div>`;
                domString += `   <h3 class="">Total Cost: <span id="costSpan">$${sandTotal.toFixed(2)}</span></h3>`;
                domString += `</div>`;
                
        util.printToDom('totalCostDiv', domString);
};

export default { mySandwich };