const prompt = require("prompt-sync")();
const correctNumber = Math.floor(Math.random() * 10) +1; //pick a number to guess

let user = 0;
while (user !== correctNumber){
    user = Number(prompt("Guess a number between 1 and 10; ")); // Prompt the user to input a number.
    if(user< correctNumber){
        console.log("Too low! Try again.");
    } else if (user > correctNumber){
        console.log("Too high! Try again.")
    }
}
console.log("You're correct."); 
