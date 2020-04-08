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

console.log('Working')

const BASE_URL = `https://breakingbadapi.com/api/`;
const QUOTE_URL = `quote/random`;
const WRONG_ANSWER_URL = `character/random`;
let CORRECT_URL = ``;

document.querySelector('.start').addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  let button = document.querySelector('button');
  if (button.className === "restart") {
    //clear score
    //reset lives
    fetchData();
  } else {
    button.className = "restart";
    button.innerHTML = "Restart";
    fetchData();
  }
}

function accessData(response) {
  //create variable for the quote
  let quote = response.data;
  console.log(quote[0].quote)
  let correctAnswer = quote[0].author;
  if (correctAnswer === 'Jimmy McGill') {
    correctAnswer = 'Saul Goodman'
  } else if (correctAnswer === 'Gus Fring') {
    correctAnswer = 'Gus';
  } else if (correctAnswer === 'Chuck McGill') {
    correctAnswer = 'Charles McGill';
  }
  displayQuote(quote);
  CORRECT_URL = `characters?name=${correctAnswer}`;
  console.log(`correct answer = ${correctAnswer}`);
  if (CORRECT_URL.includes(" ")) {
    CORRECT_URL = CORRECT_URL.replace(/\s/g, "+"); //Shout to https://flaviocopes.com/how-to-replace-whitespace-javascript/ for the regEx help
  }
  // let choice1 = character[0].
  // displayCorrect(answer);
  // displayIncorrect(answer)
}

function displayQuote(quote) {
  const quoteText = document.querySelector('.quote');
  quoteText.innerHTML = `\"${quote[0].quote}\"`;
}

function displayCorrect(response) {
  let li = document.createElement('li').className = "answer";
  li.innerHTML = `${}`
  const correctContent = document.querySelector('.answerbox');
  correctContent.appendChild(li)
}

async function fetchData() {
  const response = await axios.get(BASE_URL + QUOTE_URL);
  accessData(response);
  fetchCorrectAnswer();
  fetchWrongAnswer1();
  fetchWrongAnswer2(); //not dry but it works, unlike looping 
};

async function fetchCorrectAnswer() {
  const response = await axios.get(BASE_URL + CORRECT_URL);
  displayCorrect(response);
  console.log(BASE_URL + CORRECT_URL);
  console.log(response.data[0].name);
  // displayData(response);
};

async function fetchWrongAnswer1() {
  const response = await axios.get(BASE_URL + WRONG_ANSWER_URL);
  console.log(response.data[0].name);
  // displayData(response);
};

async function fetchWrongAnswer2() {
  const response = await axios.get(BASE_URL + WRONG_ANSWER_URL);
  console.log(response.data[0].name);
  // displayData(response);
};




