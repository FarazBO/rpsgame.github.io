"use strict";

// All DOM events
const message = document.querySelector(".message");
const rock = document.querySelector(".player-options .rock");
const paper = document.querySelector(".player-options .paper");
const scissors = document.querySelector(".player-options .scissors");
const playerScore = document.querySelector(".player-score p");
const computerScore = document.querySelector(".computer-score p");
const restart = document.querySelector(".push-restart");
const Crock = document.querySelector(".computer-options .rock");
const Cpaper = document.querySelector(".computer-options .paper");
const Cscissors = document.querySelector(".computer-options .scissors");
const nextBtn = document.querySelector(".nextBtn");

// variables
let varPlayerScore = 0;
let varComputerScore = 0;

// functions

const game = function () {
  // Computer Moves
  const ComputerOptions = ["rock", "paper", "scissors"];
  let computerRandomNumber = Math.trunc(Math.random() * 3);
  let ComputerMoves = ComputerOptions[computerRandomNumber];
  console.log(ComputerMoves);

  // ALl Event Handlers

  // Event-handlers for ROCK
  rock.addEventListener("click", function () {
    paper.classList.add("hidden");
    scissors.classList.add("hidden");
    if (ComputerMoves === "rock") {
      Cpaper.classList.add("hidden");
      Cscissors.classList.add("hidden");
      message.textContent = "Its a draw";
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      console.log(ComputerMoves);
      rock.classList.add("disable");
    } else if (ComputerMoves === "paper") {
      Crock.classList.add("hidden");
      Cscissors.classList.add("hidden");
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "Computer Wins";
      varComputerScore++;
      computerScore.textContent = varComputerScore;
      console.log(ComputerMoves);
      rock.classList.add("disable");
    } else if (ComputerMoves === "scissors") {
      Crock.classList.add("hidden");
      Cpaper.classList.add("hidden");
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "You win";
      varPlayerScore++;
      playerScore.textContent = varPlayerScore;
      console.log(ComputerMoves);
      rock.classList.add("disable");
    }
  });

  // Event Handlers for Paper
  paper.addEventListener("click", function () {
    rock.classList.add("hidden");
    scissors.classList.add("hidden");
    if (ComputerMoves === "rock") {
      Cpaper.classList.add("hidden");
      Cscissors.classList.add("hidden");
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "You win";
      varPlayerScore++;
      playerScore.textContent = varPlayerScore;
      console.log(ComputerMoves);
      paper.classList.add("disable");
    } else if (ComputerMoves === "paper") {
      Crock.classList.add("hidden");
      Cscissors.classList.add("hidden");
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "Its a draw";
      console.log(ComputerMoves);
      paper.classList.add("disable");
    } else {
      Crock.classList.add("hidden");
      Cpaper.classList.add("hidden");
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "Computer Wins";
      varComputerScore++;
      computerScore.textContent = varComputerScore;
      console.log(ComputerMoves);
      paper.classList.add("disable");
    }
  });

  // Event Handler for Scissors
  scissors.addEventListener("click", function () {
    rock.classList.add("hidden");
    paper.classList.add("hidden");
    if (ComputerMoves === "rock") {
      Cpaper.classList.add("hidden");
      Cscissors.classList.add("hidden");
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "Computer Wins";
      varComputerScore++;
      computerScore.textContent = varComputerScore;
      console.log(ComputerMoves);
      scissors.classList.add("disable");
    } else if (ComputerMoves === "paper") {
      Crock.classList.add("hidden");
      Cscissors.classList.add("hidden");
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "You win";
      varPlayerScore++;
      playerScore.textContent = varPlayerScore;
      console.log(ComputerMoves);
      scissors.classList.add("disable");
    } else {
      Crock.classList.add("hidden");
      Cpaper.classList.add("hidden");
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "Its a draw";
      console.log(ComputerMoves);
      scissors.classList.add("disable");
    }
  });
};

// Start Game
game();

// ReStart Game
restart.addEventListener("click", function () {
  // Varibles
  varPlayerScore = 0;
  varComputerScore = 0;

  // Resetting Scores
  playerScore.textContent = varPlayerScore;
  computerScore.textContent = varComputerScore;

  message.textContent = `Make your Move . . . `;

  rock.classList.remove("hidden");
  paper.classList.remove("hidden");
  scissors.classList.remove("hidden");

  rock.classList.remove("disable");
  paper.classList.remove("disable");
  scissors.classList.remove("disable");

  Crock.classList.remove("hidden");
  Cpaper.classList.remove("hidden");
  Cscissors.classList.remove("hidden");
});

// Next Button

nextBtn.addEventListener("click", function () {
  rock.classList.remove("hidden");
  paper.classList.remove("hidden");
  scissors.classList.remove("hidden");

  Crock.classList.remove("hidden");
  Cpaper.classList.remove("hidden");
  Cscissors.classList.remove("hidden");

  rock.classList.remove("disable");
  paper.classList.remove("disable");
  scissors.classList.remove("disable"); 
});
