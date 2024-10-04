const prompt = require("prompt-sync")(); 
// Prompt the user to enter a day of the week.
let dayOfWeek = prompt("Enter a day of the week:");

// Convert input to lowercase.
dayOfWeek = dayOfWeek.toLowerCase();

// Switch statement to assign tasks based on the day.
switch (dayOfWeek) {
  case "monday":
    console.log("Your task for Monday is: Study for upcoming exams.");
    break;
  case "tuesday":
    console.log("Your task for Tuesday is: Attend class .");
    break;
  case "wednesday":
    console.log("Your task for Wednesday is: Complete school assignments.");
    break;
  case "thursday":
    console.log("Your task for Thursday is:Work on a group project.");
    break;
  case "friday":
    console.log("Your task for Friday is:Catch up on schoolwork.");
    break;
  case "saturday":
    console.log("Your task for Saturday is: Relax and recharge.");
    break;
  case "sunday":
    console.log("Your task for Sunday is:  Go to church and prepare for the week ahead.");
    break;
  default:
    console.log("Invalid input. Please enter a valid day of the week.");
}
