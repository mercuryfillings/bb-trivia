console.log('Working')
const BASE_URL = `https://breakingbadapi.com/api/`;
const QUOTE_URL = `quote/random`;
const WRONG_ANSWER_URL = `character/random`;
let CORRECT_URL = ``;

//Full Pseudocode Instructions
//Write event listener for start game button (Add button w/ class 'start' to HTML)
document.querySelector('button').addEventListener('click', onClick);
//Write function for event listener that builds the 
//API request for the first quote.
function onClick(e) {
  e.preventDefault();
  fetchData();
  // fetchCorrectAnswer();
}
//Write function that pulls correct answer from characters

//Write function that pulls random wrong answers from characters
//Be sure to exlcude correct answer

//Write callback function that displays quote to DOM & separate function that displays answers

//Write event listener for selecting answers

//Write a function that checks for correctness of answer

//Write function that increments score or removes lives in correct / incorrect scenarios

//Write a function that checks for win state

//Write a function that transitions to the next question (based on start game function - can this be DRY?)

// Write a function that transitions to win / loss states

//Write a callback function for answer selector at 6 that passes in 7-11

//Write async function to pull data

//Write function to randomize position of answers

//Write function that changes start button to restart button

//
function accessData(response) {
  //create variable for the quote
  let quote = response.data;
  console.log(quote[0].quote)
  let correctAnswer = quote[0].author;
  if (correctAnswer === 'Jimmy McGill') {
    correctAnswer = 'Saul Goodman'
  } else if (correctAnswer === 'Gus Fring') {
    correctAnswer = Gus;
  }
  CORRECT_URL = `characters?name=${correctAnswer}`
  console.log(`correct answer = ${correctAnswer}`)
  if (CORRECT_URL.includes(" ")) {
    CORRECT_URL = CORRECT_URL.replace(/\s/g, "+"); //Shout to https://flaviocopes.com/how-to-replace-whitespace-javascript/ for the regEx help
  }

  // ?name = Walter + White
  // //select movie list
  // const selectMovieList = document.querySelector(".movie-list");
  // //iterate through the results
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
  console.log(BASE_URL + CORRECT_URL);
  console.log(response.data[0].name);
  // if (CORRECT_URL.includes('Jimmy')) {
  //   CORRECT_URL = '/api/characters?name=Saul+Goodman'
  // } else if (response.data[0].name === undefined) {
  //   CORRECT_URL = CORRECT_URL.substring(0, s.indexOf('+') - 1);
  //   console.log(CORRECT_URL);
  // }
  // displayData(response);
};

// fetchCorrectAnswer();

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

//14 - Write play again / reset function
//15 - Write duplicate prevention into quote function at 2


