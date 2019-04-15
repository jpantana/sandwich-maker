import sandwich from "../components/sandwich.js";
import buy from "../components/buy.js";

const addEvent = () => {
    document.getElementById('ham').addEventListener('click', sandwich.mySandwich);
    document.getElementById('turkey').addEventListener('click', sandwich.mySandwich);
    document.getElementById('roastBeef').addEventListener('click', sandwich.mySandwich);
    document.getElementById('chicken').addEventListener('click', sandwich.mySandwich);  

    document.getElementById('american').addEventListener('click', sandwich.mySandwich);
    document.getElementById('cheddar').addEventListener('click', sandwich.mySandwich);
    document.getElementById('swiss').addEventListener('click', sandwich.mySandwich);
    document.getElementById('jack').addEventListener('click', sandwich.mySandwich); 

    document.getElementById('tomatoes').addEventListener('click', sandwich.mySandwich);
    document.getElementById('onions').addEventListener('click', sandwich.mySandwich);
    document.getElementById('peppers').addEventListener('click', sandwich.mySandwich);
    document.getElementById('pickles').addEventListener('click', sandwich.mySandwich); 

    document.getElementById('oilAndVinegar').addEventListener('click', sandwich.mySandwich);
    document.getElementById('mayo').addEventListener('click', sandwich.mySandwich);
    document.getElementById('mustard').addEventListener('click', sandwich.mySandwich);
    document.getElementById('ranch').addEventListener('click', sandwich.mySandwich); 

    document.getElementById('white').addEventListener('click', sandwich.mySandwich);
    document.getElementById('wheat').addEventListener('click', sandwich.mySandwich);
    document.getElementById('rye').addEventListener('click', sandwich.mySandwich);
    document.getElementById('sourDough').addEventListener('click', sandwich.mySandwich);

};

export default { addEvent };