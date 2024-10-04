const prompt = require("prompt-sync")({ sigint: true });

const Password = "rojdan137"; //The correct password

let userPassword;   //Variable to store user input

do {
  userPassword = prompt("Enter your password: ");   //Prompt the user to enter the password.
  if (userPassword !== Password) {   //Check if the user input password is correct.
    console.log("Try again"); 
  }
} while (userPassword !== Password);

console.log("Access granted"); //Display "Access granted' if the pasword guessed is correct."
