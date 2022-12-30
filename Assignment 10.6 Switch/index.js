"use strict"

let weekDay = "rabu";

switch (weekDay) {
  case "Monday":
    console.log("Time to make da Pizzas!");
    break;
  case "Tuesday":
    console.log("Tuesday is two days too long without pizza ...");
    break;
  case "Wednesday":
    console.log("Nothing cures the mid-week blues like pizza!");
    break;
  case "Thursday":
    console.log("Thursday's Special Secret Surprize Pie day!");
    break;
  case "Friday":
    console.log("Friday night, and Pizza's alllll riiiiight!");
    break;
  case "Saturday":
    console.log(
      "Saturday, Game Day - really any day is a good time for Pizza!"
    );
    break;
  case "Sunday":
    console.log("Lazy Sundays are only made better with extra cheese!");
    break;
  default:
    console.log(
      "Something is funny about today ...What day of the week is it ?"
    );
    break;
}