import React from "react";

 const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
	if (
		userInput === "rock" ||
		userInput === "paper" ||
		userInput === "scissors" ||
		userInput === "bomb"
	) {
		return userInput;
	} else {
		console.log("Error");
	}
};

 const getComputerChoice = () => {
	let randomNumber = Math.floor(Math.random() * 3);
	switch (randomNumber) {
		case 0:
			return "rock";
			break;
		case 1:
			return "paper";
			break;
		case 2:
			return "scissors";
			break;
		default:
			return "Error";
			break;
	}
};

 const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === "bomb") {
		return "user won!";
	}
	if (userChoice === computerChoice) {
		return "It's a tie!";
	}
	if (userChoice === "rock") {
		if (computerChoice === "paper") {
			return "computer won!";
		} else {
			return "user won!";
		}
	}
	if (userChoice === "paper") {
		if (computerChoice === "scissors") {
			return "computer won!";
		} else {
			return "user won!";
		}
	}
	if (userChoice === "scissors") {
		if (computerChoice === "rock") {
			return "computer won!";
		} else {
			return "user won!";
		}
	}
};
export const playGame = () => {
	let userChoice = getUserChoice("bomb");
	let computerChoice = getComputerChoice();
	console.log(`You threw ${userChoice}`);
	console.log(`The computer threw ${computerChoice}`);
	console.log(determineWinner(userChoice, computerChoice));
};

playGame();
