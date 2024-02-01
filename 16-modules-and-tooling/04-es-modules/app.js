// ES Modules
import { capitalizeWords, makeMoney } from "./modules/utils.js";
import Person from "./modules/Person.js";

console.log(capitalizeWords('hello world'));

console.log(makeMoney(500));

const sara = new Person('Sara', 40);
sara.greet();