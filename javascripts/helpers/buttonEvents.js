import meat from "../components/meat.js";



const addEvent = () => {
    document.getElementById('ham').addEventListener('click', meat.pickMeat);
    document.getElementById('turkey').addEventListener('click', meat.pickMeat);
    document.getElementById('roastBeef').addEventListener('click', meat.pickMeat);
    document.getElementById('chicken').addEventListener('click', meat.pickMeat);  
    // document.getElementById('checkoutBtn').addEventListener('click', buySandwich);
};

export default { addEvent };