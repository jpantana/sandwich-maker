import buttonEvents from "../helpers/buttonEvents.js";
import util from "../helpers/util.js";

const resetCheckbox = () => {
    document.getElementById('ham').checked = false;
    document.getElementById('turkey').checked = false;
    document.getElementById('roastBeef').checked = false;
    document.getElementById('chicken').checked = false;
    document.getElementById('american').checked = false;
    document.getElementById('cheddar').checked = false;
    document.getElementById('swiss').checked = false;
    document.getElementById('jack').checked = false;
    document.getElementById('tomatoes').checked = false;
    document.getElementById('onions').checked = false;
    document.getElementById('peppers').checked = false;
    document.getElementById('pickles').checked = false;
    document.getElementById('oilAndVinegar').checked = false;
    document.getElementById('mayo').checked = false;
    document.getElementById('mustard').checked = false;
    document.getElementById('ranch').checked = false;
    document.getElementById('white').checked = false;
    document.getElementById('wheat').checked = false;
    document.getElementById('rye').checked = false;
    document.getElementById('sourDough').checked = false;
};

const buySandwich = (e) => {
    e.preventDefault();
    let checkOut = e.target.id;
    console.log(checkOut);
    resetCheckbox();
    // document.getElementById("ham").checked = false;
    let domString = '';
    domString += `<div>`;
    domString += `  <h3 class="card priceCard">Total Cost: <span id="costSpan">$0.00</span></h3>`;
    domString += `  </div class="d-flex ml-auto">`;
    util.printToDom('totalCostDiv', domString);
};

export default { buySandwich };