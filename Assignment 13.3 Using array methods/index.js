"use strict";

let originalPoem = `This little piggy went to market this little piggy stayed home this little piggy had roast beef and this little piggy had none and this little piggy cried "Wee! Wee! Wee!" all the way home!`;
let arrayedPoem = originalPoem.split(" ");

console.log(arrayedPoem.indexOf("piggy"));
console.log(arrayedPoem.lastIndexOf("cried"))

let poemQuote = arrayedPoem.slice(28, 31)

console.log(poemQuote);
console.log(arrayedPoem.indexOf("and"));
console.log(arrayedPoem.splice(17, 1));
console.log(arrayedPoem.join(" "));
console.log(arrayedPoem.concat("The", "End"));