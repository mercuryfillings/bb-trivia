### Breaking Bad Quote Trivia

https://pages.git.generalassemb.ly/mercuryfillings/breaking-bad-quote-game/

Shows a quote from Breaking Bad, and presents 3 character photos for user to select. If user answers 5 questions correctly, they win. If user answers 3 incorrectly, they lose.
- **API**: https://breakingbadapi.com/documentation
- **API Snippet**: 

```
Quote: 
[
    {
        "quote_id": 78,
        "quote": "You know how they say, 'It's been a pleasure?' It hasn't.",
        "author": "Mike Ehrmantraut",
        "series": "Breaking Bad"
    }
]
    
Character: 
[
    {
        "char_id": 1,
        "name": "Walter White",
        "birthday": "09-07-1958",
        "occupation": [
            "High School Chemistry Teacher",
            "Meth King Pin"
        ],
        "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        "status": "Presumed dead",
        "nickname": "Heisenberg",
        "appearance": [
            1,
            2,
            3,
            4,
            5
        ],
        "portrayed": "Bryan Cranston",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    }
]
```


### MVP

1) Must pull quotes from the API's quote data, associate the quote's author attribute with the character profile, and display quote to DOM. 
2) Must pull image of the correct character, plus images from two random characters, and list them on the page in a random order.
3) Must inform user of correct & incorrect guesses upon click, and display a running tally.
4) Must inform player of win or loss.
5) Must include functional reset or play again button.

**Wireframe:** https://wireframe.cc/DSETuV

| Task          | Time Estimate | Actual Time |
| ------------- |:-------------:|:------------:|
| HTML          | 2 hrs | 2 hrs|
| CSS           | 4 hrs | 6 hrs |
| Display quote | 4 hrs | 6 hrs |
| Display correct answer image + character name | 4 hrs | 6 hrs |
| Display random character images + character names | 3 hrs | 6 hrs |
| Play actions / score tally | 4 hrs | 2 hrs |
| Scoring system | 3 hrs | 1 hr | 
| Reset button | 2 hrs | 5 min |
| Win / Loss states | 2 hrs | 3 hrs |
| Repetition prevention | 4 hrs | 1 hr |
| Bug hunting | 3 hrs |

Total Time Estimate: 36 hours
Totsl Time: 33 hrs

### Goals
* Day 1) Build out the html and CSS to display the game, test basic API functionality with console logs
* Day 2) Get quotes and images displaying correctly, start click functionality 
* Day 3) Get click, tally, and win / loss functionality working
* Day 4) Reset button and repetition prevention
* Day 5) Bug hunting and polish


### Priority Matrix

https://git.generalassemb.ly/mercuryfillings/breaking-bad-quote-game/blob/master/Priority%20Matrix.png



### Ideas for Post-MVP

1) Sound effects and music pulled from the show
2) Video intro
3) Share score buttons
4) Countdown clock
5) Endless mode - 1 wrong stops game, see if you can get a streak.

###Code Snippet!
```
function answerClick(e) {
  e.preventDefault();
  currentAnswers = [];
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

function shuffle() {
  let rando = Math.floor(Math.random() * Math.floor(5));
  for (let i = 1; i <= rando; i++) {
    let position = document.querySelector('.answerbox');
    position.appendChild(position.firstChild);
  }
}
```

### Changes from MVP?
Not many! I executed this pretty much as I laid out in the document, save for some styling differences on the desktop version. Deduplication of quotes and answer choices was not in the MVP, but it became pretty obvious that it was necessary. Had to come up with a real hacky version of the current answer dedup, though.
