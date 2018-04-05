const shift = require("./shift");

const array1 = ["john", "jane", "sarah", "alex"];
console.log(array1);
shift(array1, "left", 2);

const array2 = [1, 2, 3, 4, 5];
console.log(array2);
shift(array2, "right", 3);
