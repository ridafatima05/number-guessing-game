#! /usr/bin/env node
//shabang

import inquirer from "inquirer";
// random num
// input
// correct or not
// result

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessingNumber",
    type: "number",
    message: "Please Guess a Number between 1-6:",
  },
]);

if (answer.userGuessingNumber === randomNumber) {
  console.log("Congratulations! you guessed the right  number.");
} else {
  console.log("You guessed the wrong number.");
}
