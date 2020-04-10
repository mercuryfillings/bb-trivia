console.log('Working')

const BASE_URL = `https://breakingbadapi.com/api/`;
const QUOTE_URL = `quote/random`;
const WRONG_ANSWER_URL = `character/random`;
let CORRECT_URL = ``;
let playerAnswer = ``;

document.querySelector('.start').addEventListener('click', onClick);

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

function accessQuote(response) {
  //create variable for the quote
  let quote = response.data;
  console.log(quote[0].quote)
  correctAnswer = quote[0].author;
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

function displayQuote(quote) {
  const quoteText = document.querySelector('.quote');
  quoteText.innerHTML = `\"${quote[0].quote}\"`;
}

function accessCorrect(response) {
  let correctCharacterData = response.data;
  displayCorrect(correctCharacterData);
  // let correctName = correctCharacter[0].name; //Figure out how to overlay in CSS post MVP
}

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

function accessIncorrect1(response) {
  let incorrectCharacterData = response.data;
  displayIncorrect1(incorrectCharacterData);
  // let correctName = correctCharacter[0].name; //Figure out how to overlay in CSS post MVP
}

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

function accessIncorrect2(response) {
  let incorrectCharacterData = response.data;
  displayIncorrect2(incorrectCharacterData);
  // let correctName = correctCharacter[0].name; //Figure out how to overlay in CSS post MVP
}

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

async function fetchQuote() {
  const response = await axios.get(BASE_URL + QUOTE_URL);
  accessQuote(response);
};

async function fetchCorrectAnswer() {
  const response = await axios.get(BASE_URL + CORRECT_URL);
  accessCorrect(response);
};

async function fetchWrongAnswer1() {
  const response = await axios.get(BASE_URL + WRONG_ANSWER_URL);
  accessIncorrect1(response);
};

async function fetchWrongAnswer2() {
  const response = await axios.get(BASE_URL + WRONG_ANSWER_URL);
  accessIncorrect2(response);
  fetchCorrectAnswer();
};

function playRound() {
  if (document.querySelector('.answerbox').hasChildNodes()) {
    clearBoard()
  }
  fetchQuote();
}

function clearBoard() {
  const parent = document.querySelector('.answerbox');
  parent.querySelectorAll('*').forEach(n => n.remove())
}

function clearAll() {
  const quote = document.querySelector('.quotebox');
  quote.remove();
  const hud = document.querySelector('.hud');
  hud.remove();
  clearBoard();
}

function applyAnswerListener() {
  document.querySelectorAll('.circle').forEach((circle) => {
    circle.addEventListener('click', answerClick);
  })
  shuffle();
}

function answerClick(e) {
  e.preventDefault();
  let targetElement = event.target;
  let lives = document.querySelector('.lives');
  let score = document.querySelector('.score').textContent;
  score = parseInt(score);
  console.log(score);
  if (targetElement.className === 'correct') {
    console.log("right");
    score++;
    document.querySelector('.score').textContent = score;
    checkWinLoss()

  } else {
    console.log("wrong");
    console.log(lives.children)
    lives.removeChild(lives.children[0]);
    checkWinLoss();
  }
}

function checkWinLoss() {
  let lives = document.querySelector('.lives');
  let score = document.querySelector('.score').textContent;
  score = parseInt(score)
  if (score >= 5) {
    clearAll();
    const winMsg = document.querySelector('h1');
    winMsg.textContent = 'YOU WIN';
    winMsg.className = 'win';
  } else if (lives.hasChildNodes() != true) {
    clearAll();
    const loseMsg = document.querySelector('h1');
    loseMsg.textContent = 'YOU LOSE';
    loseMsg.className = 'loss';
  } else setTimeout(playRound, 900);
}

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