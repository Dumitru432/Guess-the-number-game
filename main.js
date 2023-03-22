const bodyElemenet = document.querySelector("body");

let inputElement = document.createElement("input");
bodyElemenet.append(inputElement);

//butonul submit
let submitButton = document.createElement("button"); // acesta ii butonul
submitButton.classList.add("submit");
submitButton.innerText = "Submit";
bodyElemenet.append(submitButton);

// butonul show number
let showNumberButton = document.createElement("button");
showNumberButton.classList.add("show-number");
showNumberButton.innerText = "Show Number";
bodyElemenet.append(showNumberButton);

// butonul Exit Game

let exitGameButton = document.createElement("button");
exitGameButton.classList.add("exit-game");
exitGameButton.innerText = "Exit Game";
bodyElemenet.append(exitGameButton);

// Create an element that will display the messages
let outputElement = document.createElement("p");
outputElement.classList.add("output");
outputElement.innerText = "";
bodyElemenet.append(outputElement);

// Define variables for the: - random number (we will store our randomly generated number in case we will have to display it later on), - number of guesses (we will store here the number of times it took till the number was guessed and display it later on), - and a game over flag (this will be a boolean )

let randomNumber;
let numberOfGuesses = 1; // de cate ori incearca user ul sa ghiceasca numarul
let gameOver = false;

// Write a newGame() function to start a new game, which generates a random number between 1 and 100, resets the guess count, and sets the game over flag to false.

// asa se scrie un array function
const newGame = () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  numberOfGuesses = 0;
};
newGame();

// Write a checkGuess() function which is called when the user clicks the "Check Guess" button. - The function first checks if the game is over. If it is, then the function does nothing:

const checkGuess = () => {
    numberOfGuesses++; 
  if (inputElement.value == randomNumber) {
    outputElement.innerText = `ai ghicit numarul, numarul era: ${randomNumber} ai incercat de ${numberOfGuesses}` 
    newGame();
  } else if (inputElement.value > 101 || inputElement.value < 1) {
    outputElement.innerText = "ai gresit jocul, baiatul meu";
  } else if (inputElement.value > randomNumber) {
    outputElement.innerText = `numarul este prea mare, ai incercat de: ${numberOfGuesses}`;
  } else if (inputElement.value < randomNumber) {
    outputElement.innerText = `numarul este prea mic, ai incercat de: ${numberOfGuesses}`;
  } 
    inputElement.value = '';
};

submitButton.addEventListener("click", checkGuess);

showNumberButton.addEventListener('click', ()=>{
    outputElement.innerText = randomNumber;
    newGame();
})

exitGameButton.addEventListener('click', ()=>{
    window.close()
})

