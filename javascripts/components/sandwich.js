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
        console.log(newIngredient);
    }

    // ingredients.push(eventId);


    
    // if (e.target.name === 'meat') {
    //     meat.addMeat.
    //     let toppings = meat.addMeat();
    //     console.log(toppings);
    // } else if (e.target.name === 'bread') {
    //     console.log("this is bread");
    // } else if (e.target.name === 'condiments') {
    //     console.log("this is condiments");
    // } else if (e.target.name === 'veggies') {
    //     console.log("this is veggies");
    // } else if (e.target.name === 'cheese') {
    //     console.log("this is cheese");
    // }
        const sandTotal = cart.reduce((a, b) => {return a + b}, 0);
        let domString = '';
            domString += `<div>`;
            domString += `   <h3 class="">Total Cost: <span id="costSpan">$${sandTotal.toFixed(2)}</span></h3>`;
            domString += `</div>`;
            domString += `<div>`;
            domString += `  <h3>Ingredients:</h3>`;
            domString += `      <ul>`;
            domString += `           <li>${eventId},</li>`;
            domString += `      </ul>`;
            domString += `</div>`;
        util.printToDom('totalCostDiv', domString);
};

export default { mySandwich };