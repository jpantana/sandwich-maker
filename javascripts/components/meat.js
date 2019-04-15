import util from "../helpers/util.js";
import sandwich from "../components/sandwich.js";

const meatObject = {
    ham: .50,
    turkey: .45,
    roastBeef: .60,
    chicken: .35
}

const addMeat = () => {
    return meatObject;
}; 

export default { addMeat };