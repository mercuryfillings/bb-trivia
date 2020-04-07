console.log('Working')
const BASE_URL = `https://breakingbadapi.com/api/`;
const QUOTE_URL = `quote/random`;
const WRONG_ANSWER_URL = `character/random`;

//Full Pseudocode Instructions
//1 - Write event listener for start game button (Add button w/ class 'start' to HTML)
document.querySelector('button').addEventListener('click', handleClick);
//2 - Write function for event listener that builds the 
//API request for the first quote.

//3 - Write function that pulls correct answer from characters
//4 - Write function that pulls random wrong answers from characters
//Be sure to exlcude correct answer
//5 - Write callback function that activates all 3 functions above and displays to DOM
//6 - Write event listener for selecting answers
//7 - Write a function that checks for correctness of answer
//8 - Write function that increments score or removes lives in correct / uncorrect scenarios
//9 - Write a function that checks for win state
//10 - Write a function that transitions to the next question (based on start game function - can this be DRY?)
//11 - Write a function that transitions to win / loss states
//12 - Write a callback function for answer selector at 6 that passes 7-11 in
//13 - Write async function to pull data
async function fetchQuote() {
  const response = await axios.get(BASE_URL + );
  // console.log(response)
  displayData(response);
  // displayData(response);
};
//14 - Write play again / reset function
//15 - Write duplicate prevention into quote function at 2


