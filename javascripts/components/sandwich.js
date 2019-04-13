import meat from "./meat.js";
import util from "../helpers/util.js";
import buttonEvents from "../helpers/buttonEvents.js";

const getPrice = () => {
    const sandTotal = myCart.reduce((a, b) => {return a + b}, 0);
        let domString = '';
            domString = `<h3 class="">Total Cost: <span id="costSpan">$${sandTotal.toFixed(2)}</span></h3>`;
        util.printToDom('totalCostDiv', domString);
};


export default { getPrice };