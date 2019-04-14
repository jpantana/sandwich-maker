import util from "../helpers/util.js";
import sandwich from "../components/sandwich.js";

const condimentsObject = {
    mayo: .50,
    mustard: .50,
    oilAndVinegar: .50,
    ranch: .60
}

const addCondiments = () => {
    return condimentsObject;
};

export default { addCondiments };