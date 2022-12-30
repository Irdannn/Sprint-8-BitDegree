"use strict"

let lives = 3;

while (lives > 0) {
  let result = prompt(`You have ${lives} lives left. What is 2+2?`);
  if (result !== "4") {
    lives--;
    console.log("I'm afraid that's not right - try again");
  } else if (result ==="4"){
    console.log("Congratulations! That's the correct answer.");
    break;
  } 
}
while(lives ===0) {
    console.log("Game Over");
    break;
}
