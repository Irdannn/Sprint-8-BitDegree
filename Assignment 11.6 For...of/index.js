"use strict";

let originalPoem = `This little piggy went to market, this little piggy stayed home, this little piggy had roast beef, and this little piggy had none, and this little piggy cried “Wee! Wee! Wee!” all the way home!`;
let spacedPoem;

for (const element of originalPoem) {
  if (element == ",") {
    spacedPoem += `\n`;
  } else {
    spacedPoem += element;
  }
}
console.log(spacedPoem);