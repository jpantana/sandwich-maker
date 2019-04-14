import util from "../helpers/util.js";
import sandwich from "../components/sandwich.js";

const cheeseObject = {
    cheddar: .50,
    swiss: .45,
    american: .60,
    jack: .35
}

const addCheese = () => {
    return cheeseObject;
};

export default { addCheese };