import util from "../helpers/util.js";
import sandwich from "../components/sandwich.js";

const breadObject = {
    white: .30,
    wheat: .25,
    sourDough: .50,
    rye: .40
};

const addBread = () => {
    return breadObject;
};

export default { addBread };