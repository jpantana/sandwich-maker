import meat from "./meat.js";
import bread from "./bread.js";
import condiments from "./condiments.js";
import veggies from "./veggies.js";
import cheese from "./cheese.js";
import util from "../helpers/util.js";
import buy from "../components/buy.js";
// import buttonEvents from "../helpers/buttonEvents.js";

// const ingredients = [];
const cart = [];

const mySandwich = (e) => {
    // e.preventDefault(); 
    // console.log(e);
    let meats = meat.addMeat();
    let breads = bread.addBread();
    let sauce = condiments.addCondiments();
    let veg = veggies.addVeggies();
    let cheeses = cheese.addCheese();
    let eventId = e.target.id;
    const newIngredient = {
        name: eventId,
        type: e.target.name,
    }
    if (e.target.name === 'meat') {
        newIngredient.price = meats[e.target.id];
        cart.push(newIngredient);
        console.log(cart);
    } else if (e.target.name === 'bread') {
        newIngredient.price = breads[e.target.id];
        cart.push(newIngredient);
        console.log(cart);
    } else if (e.target.name === 'cheese') {
        newIngredient.price = cheeses[e.target.id];
        cart.push(newIngredient);
        console.log(cart);
    } else if (e.target.name === 'condiments') {
        newIngredient.price = sauce[e.target.id];
        cart.push(newIngredient);
        console.log(cart);
    } else if (e.target.name === 'veggies') {
        newIngredient.price = veg[e.target.id];
        cart.push(newIngredient);
        console.log(cart);
    }
        const sandTotal = cart.reduce((a, b) => {return a + b.price}, 0);
        let domString = '';   
                domString += `<div class="card ingredCard">`;
                domString += `  <h3>Ingredients:</h3>`;
                domString += `  <ul>`;
                cart.forEach((item) => {
                domString += `           <li>${item.name}</li>`;
            })
                domString += `      </ul>`;
                domString += `</div>`;
                domString += `<div>`;
                domString += `  <h3 class="card priceCard">Total Cost: <span id="costSpan">$${sandTotal.toFixed(2)}</span></h3>`;
                domString += `  </div class="d-flex ml-auto">`;
                domString += `      <button id="checkoutBtn" class="order-btn btn btn-primary checkoutBtn" type="submit">ORDER NOW</button>`;
                domString += `  </div>`
                domString += `</div>`;
        util.printToDom('totalCostDiv', domString);
        document.getElementById('checkoutBtn').addEventListener('click', buy.buySandwich);
};

export default { mySandwich };