import meat from "../components/meat.js";
import cheese from "../components/cheese.js";
import sandwich from "../components/sandwich.js";



const addEvent = () => {
    document.getElementById('ham').addEventListener('click', sandwich.mySandwich);
    document.getElementById('turkey').addEventListener('click', sandwich.mySandwich);
    document.getElementById('roastBeef').addEventListener('click', sandwich.mySandwich);
    document.getElementById('chicken').addEventListener('click', sandwich.mySandwich);  

    // document.getElementById('american').addEventListener('click', cheese.pickCheese);
    // document.getElementById('cheddar').addEventListener('click', cheese.pickCheese);
    // document.getElementById('swiss').addEventListener('click', cheese.pickCheese);
    // document.getElementById('jack').addEventListener('click', cheese.pickCheese); 

    // document.getElementById('tomatoes').addEventListener('click', veggies.pickVeggies);
    // document.getElementById('onions').addEventListener('click', veggies.pickVeggies);
    // document.getElementById('peppers').addEventListener('click', veggies.pickVeggies);
    // document.getElementById('pickles').addEventListener('click', veggies.pickVeggies); 

    // document.getElementById('oilAndVinegar').addEventListener('click', condiments.pickCondiments);
    // document.getElementById('mayo').addEventListener('click', condiments.pickCondiments);
    // document.getElementById('mustard').addEventListener('click', condiments.pickCondiments);
    // document.getElementById('ranch').addEventListener('click', condiments.pickCondiments); 

    // document.getElementById('white').addEventListener('click', bread.pickBread);
    // document.getElementById('wheat').addEventListener('click', bread.pickBread);
    // document.getElementById('rye').addEventListener('click', bread.pickBread);
    // document.getElementById('soudDough').addEventListener('click', bread.pickBread);

    // document.getElementById('checkoutBtn').addEventListener('click', buySandwich);
};

export default { addEvent };