console.log('Working')

const BASE_URL = `https://breakingbadapi.com/api/`;
const QUOTE_URL = `quote/random`;
const WRONG_ANSWER_URL = `character/random`;
let CORRECT_URL = ``;
let playerAnswer = ``;
let previousQuotes = [];
let currentAnswers = [];

document.querySelector('.start').addEventListener('click', onClick);


//Start game on click
function onClick(e) {
  e.preventDefault();
  let button = document.querySelector('button');
  if (button.className === "restart") {
    location.reload();
  } else {
    button.className = "restart";
    button.innerHTML = "RESET";
    playRound();
  }
}

//Access data pulled from fetchQuote & handle unique cases, 
//then fire display, and fire access wrong answer 1 & 2

function accessQuote(response) {
  let quote = response.data;
  console.log(quote[0].quote)
  correctAnswer = quote[0].author;
  let record = (quote[0].quote_id);
  if (previousQuotes.includes(record)) {
    clearBoard();
    fetchQuote();
  }
  previousQuotes.push(record);
  console.log(previousQuotes)
  if (correctAnswer === 'Jimmy McGill') {
    correctAnswer = 'Saul Goodman'
  } else if (correctAnswer === 'Gus Fring') {
    correctAnswer = 'Gus';
  } else if (correctAnswer === 'Chuck McGill') {
    correctAnswer = 'Charles McGill';
  } else if (correctAnswer === 'Kim Wexler') {
    correctAnswer = 'Kim';
  } else if (correctAnswer === 'Hank Schrader') {
    correctAnswer = 'Henry Schrader';
  }
  displayQuote(quote);
  CORRECT_URL = `characters?name=${correctAnswer}`;
  console.log(`correct answer is: ${correctAnswer}`);
  if (CORRECT_URL.includes(" ")) {
    CORRECT_URL = CORRECT_URL.replace(/\s/g, "+"); //Shout to https://flaviocopes.com/how-to-replace-whitespace-javascript/ for the regEx help
  }
  fetchWrongAnswer1();
  fetchWrongAnswer2();
}

//Display the quote from accessQuote above
function displayQuote(quote) {
  const quoteText = document.querySelector('.quote');
  quoteText.innerHTML = `\"${quote[0].quote}\"`;
}

//Access data from the correct character fetch, check for duplicates
function accessCorrect(response) {
  let correctCharacterData = response.data;
  let record = correctCharacterData[0].name;
  if (currentAnswers.includes(record)) {
    currentAnswers = [];
    clearBoard();
    fetchQuote();
    console.log('accessCorrect')
    return;
  }
  currentAnswers.push(record);
  console.log(currentAnswers);
  displayCorrect(correctCharacterData);
  // let correctName = correctCharacter[0].name; //Add overlay with name in CSS post MVP
}

//Display image of correct answer above to DOM
function displayCorrect(correctCharacterData) {
  let li = document.createElement('li');
  li.className = 'circle';
  let img = document.createElement('img');
  img.src = `${correctCharacterData[0].img}`;
  img.title = `${correctCharacterData[0].name}`;
  img.className = `correct`;
  li.appendChild(img);
  const correctContent = document.querySelector('.answerbox');
  correctContent.appendChild(li);
  applyAnswerListener();
}

//Access wrong answer from fetchWrongAnswer1 async function below & check for duplicates
function accessIncorrect1(response) {
  let incorrectCharacterData = response.data;
  let record = incorrectCharacterData[0].name;
  if (currentAnswers.includes(record)) {
    currentAnswers = [];
    clearBoard();
    fetchQuote();
    console.log("AccessIncorrect1")
    return;
  }
  currentAnswers.push(record);
  displayIncorrect1(incorrectCharacterData);
  // let correctName = correctCharacter[0].name; //Figure out how to overlay in CSS post MVP
}

//Display image from accessIncorrect1 to DOM
function displayIncorrect1(incorrectCharacterData) {
  let li = document.createElement('li');
  li.className = 'circle';
  let img = document.createElement('img');
  img.src = `${incorrectCharacterData[0].img}`;
  img.title = `${incorrectCharacterData[0].name}`;
  li.appendChild(img);
  const incorrectContent = document.querySelector('.answerbox');
  incorrectContent.appendChild(li);
}

//Access a second incorrect answer from fetchWrongAnswer2 async function below & check for duplicates
function accessIncorrect2(response) {
  let incorrectCharacterData = response.data;
  let record = (incorrectCharacterData[0].name);
  if (currentAnswers.includes(record)) {
    currentAnswers = [];
    clearBoard();
    fetchQuote();
    console.log("accessIncorrect 2")
    return;
  }
  currentAnswers.push(record);
  displayIncorrect2(incorrectCharacterData);
  // let correctName = correctCharacter[0].name; //Figure out how to overlay in CSS post MVP
}

//Display 2nd incorrect image to DOM
function displayIncorrect2(incorrectCharacterData) {
  let li = document.createElement('li');
  li.className = 'circle';
  let img = document.createElement('img');
  img.title = `${incorrectCharacterData[0].name}`;
  img.src = `${incorrectCharacterData[0].img}`;
  li.appendChild(img);
  const incorrectContent = document.querySelector('.answerbox');
  incorrectContent.appendChild(li);
}

//Dedup still a work in progress - for now, janky quote reset solution in place
function accessDedup() {
  let dedupData = response.data;
  let record = (dedupData[0].name);
  if (currentAnswers.includes(record)) {
    clearDuplicate();
    fetchDedup();
    console.log("Dedup")
    return;
  }
  currentAnswers.push(record);
  displayDedup(incorrectCharacterData);
}

//Unused dedupe improvements. DO NOT LOOK, I'M NOT DECENT.
function displayDedup(newCharacterData) {
  let record = (newCharacterData[0].name);
  let li = document.createElement('li');
  li.className = 'circle';
  let img = document.createElement('img');
  img.title = `${newCharacterData[0].name}`;
  img.src = `${newCharacterData[0].img}`;
  li.appendChild(img);
  const replacementContent = document.querySelector('.answerbox');
  replacementContent.appendChild(li);
}

//Pulls random quote from API through built-in random functionality
async function fetchQuote() {
  const response = await axios.get(BASE_URL + QUOTE_URL);
  accessQuote(response);
};

//Pulls character data for the character who spoke the quote fetched in the preceding function
async function fetchCorrectAnswer() {
  const response = await axios.get(BASE_URL + CORRECT_URL);
  accessCorrect(response);
};

//Fetches an incorrect answer
async function fetchWrongAnswer1() {
  const response = await axios.get(BASE_URL + WRONG_ANSWER_URL);
  accessIncorrect1(response);
};

//Fetches a second incorrect answer. These didn't seem to work in parallel, so I broke it into 2.
async function fetchWrongAnswer2() {
  const response = await axios.get(BASE_URL + WRONG_ANSWER_URL);
  accessIncorrect2(response);
  fetchCorrectAnswer();
};

//Unused dedupe improvements. DO NOT LOOK, I'M NOT DECENT.
async function fetchDedup() {
  const response = await axios.get(BASE_URL + WRONG_ANSWER_URL);
  accessDedup(response);
}

//Starts the round, clears currentAnswer tracking array, and clears the board if anything exists
function playRound() {
  if (document.querySelector('.answerbox').hasChildNodes()) {
    clearBoard()
  }
  currentAnswers = [];
  fetchQuote();
}

//Clears the board area
function clearBoard() {
  const parent = document.querySelector('.answerbox');
  parent.querySelectorAll('*').forEach(n => n.remove())
}

//Clears the board and hud from the DOM
function clearAll() {
  const quote = document.querySelector('.quotebox');
  quote.remove();
  const hud = document.querySelector('.hud');
  hud.remove();
  clearBoard();
}

//Unused dedupe improvements. DO NOT LOOK, I'M NOT DECENT.
function clearDuplicate() {
  let dupe = document.querySelector()
} //TODO

//Applies click functionality to all answer choices
function applyAnswerListener() {
  document.querySelectorAll('.circle').forEach((circle) => {
    circle.addEventListener('click', answerClick);
  })
  shuffle();
}

//Shows if a chosen answer is correct or incorrect, increments score or removes a life accordingly, 
//and checks for win / loss state
function answerClick(e) {
  e.preventDefault();
  let targetElement = event.target;
  let lives = document.querySelector('.lives');
  let score = document.querySelector('.score').textContent;
  let parent = targetElement.parentElement;
  console.log(parent);
  score = parseInt(score);
  console.log(score);
  if (targetElement.className === 'correct') {
    console.log("right");
    parent.className = 'green-circle';
    score++;
    document.querySelector('.score').textContent = score;
    checkWinLoss();
  } else {
    console.log("wrong");
    parent.className = 'red-circle';
    targetElement.id = 'red';
    lives.removeChild(lives.children[0]);
    checkWinLoss();
  }
}

//Checks conditions for win loss, delivers win loss message if met, and starts next round if not.
function checkWinLoss() {
  let lives = document.querySelector('.lives');
  let score = document.querySelector('.score').textContent;
  score = parseInt(score)
  if (score >= 5) {
    clearAll();
    const winMsg = document.querySelector('h1');
    winMsg.textContent = 'YOU WIN';
    winMsg.className = 'win';
  } else if (lives.children.length === 0) {
    clearAll();
    const loseMsg = document.querySelector('h1');
    loseMsg.textContent = 'YOU LOSE';
    loseMsg.className = 'loss';
  } else setTimeout(playRound, 900);
}

//Shuffles answers so correct isn't always in the same spot
function shuffle() {
  let rando = Math.floor(Math.random() * Math.floor(5));
  for (let i = 1; i <= rando; i++) {
    let position = document.querySelector('.answerbox');
    position.appendChild(position.firstChild);
  }
}

//Full Pseudocode Instructions

//Write event listener for start game button (Add button w/ class 'start' to HTML)
//Done - needs to activate DOM manipulation though

//Write function for event listener that captures API data on click
//Done

//API request for the first quote.
//Done

// Write function that pulls correct answer from characters
//Done

//Write function that pulls random wrong answers from characters
//Be sure to exlcude correct answer
//Done, **except correct answer dedupe**

//Write callback function that displays quote to DOM & separate function that displays answers

//Write event listener for selecting answers

//Write a function that checks for correctness of answer

//Write function that increments score or removes lives in correct / incorrect scenarios

//Write a function that checks for win state

//Write a function that transitions to the next question (based on start game function - can this be DRY?)

// Write a function that transitions to win / loss states

//Write async functions to pull data
//done

//Write function to randomize position of answers
//May not be needed bc of async - will report back

//Write function that changes start button to restart button

//Write play again / reset function

//Write duplicate prevention into quote function at 2