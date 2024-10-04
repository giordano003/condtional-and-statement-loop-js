const prompt = require("prompt-sync")();
let score = (prompt("Enter your score: "));
score = Number(score);

score >= 90 ? console.log("Your Grade is: Excellent.")
    :score >= 80 ? console.log("Your Grade is: Good")
    :score >= 70 ? console.log("Your Grade is: Fair")
    :console.log("Your Grade is: Needs Improvements.");