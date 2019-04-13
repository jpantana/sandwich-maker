import util from "../helpers/util.js";
import sandwich from "../components/sandwich.js";

const cheeseObject = {
    cheddar: .50,
    swiss: .45,
    american: .60,
    jack: .35
}

const addCheese = () => {
    return meatObject;
};

const pickCheese = (e) => {
    e.preventDefault(); 
    let eventId = e.target.id;
    sandwich.ingredients.push(eventId);
    console.log(sandwich.ingredients);
    // ingredients.push(Object.keys(addMeat()));
    //if (target by name and ask if box is checked, and is i.e. bread)
    if (e.target.name === 'meat') {
        console.log("this is meat");
    } else if (e.target.name === 'bread') {
        console.log("this is bread");
    } else if (e.target.name === 'condiments') {
        console.log("this is condiments");
    } else if (e.target.name === 'veggies') {
        console.log("this is veggies");
    } else if (e.target.name === 'cheese') {
        console.log("this is cheese");
    }
        if (eventId === 'ham') {
            let ingredient = addMeat().ham;
            sandwich.cart.push(ingredient);
        } else if (eventId === 'turkey') {
            let ingredient = addMeat().turkey
            sandwich.cart.push(ingredient);
        } else if (eventId === 'roastBeef') {
            let ingredient = addMeat().roastBeef;
            sandwich.cart.push(ingredient);
        } else if (eventId === 'chicken') {
            let ingredient = addMeat().chicken;
            sandwich.cart.push(ingredient);
        }    
        console.log(sandwich.cart);
        const sandTotal = sandwich.cart.reduce((a, b) => {return a + b}, 0);
        let domString = '';
            domString += `<div>`;
            domString += `   <h3 class="">Total Cost: <span id="costSpan">$${sandTotal.toFixed(2)}</span></h3>`;
            domString += `</div>`;
            domString += `<div>`;
            domString += `  <h3>Ingredients:</h3>`;
            domString += `      <ul>`;
            domString += `           <li>${sandwich.ingredients},</li>`;
            domString += `      </ul>`;
            domString += `</div>`;
        util.printToDom('totalCostDiv', domString);
};


const buyButton = () => {

};

export default { addCheese, pickCheese };