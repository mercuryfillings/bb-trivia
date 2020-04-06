### Breaking Bad Quote Trivia
Shows a quote from Breaking Bad, and presents 3 character photos for user to select. If user answers 5 questions correctly, they win. If user answers 5 incorrectly, they lose.
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

| Task          | Time Estimate | 
| ------------- |:-------------:|
| HTML          | 2 hrs | 
| CSS           | 4 hrs |   
| Display quote | 4 hrs |  
| Display correct answer image + character name | 4 hrs |
| Display random character images + character names | 4 hrs |
| Play actions / score tally | 4 hrs |
| Scoring system | 3 hrs |
| Reset button | 2 hrs | 
| Win / Loss states | 2 hrs |
| Repetition prevention | 4 hrs |
| Bug hunting | 3 hrs |

Total Time Estimate: 36 hours

### Goals
Day 1) Build out the html and CSS to display the game, test basic API functionality with console logs
Day 2) Get quotes and images displaying correctly, start click functionality 
Day 3) Get click, tally, and win / loss functionality working
Day 4) Reset button and repetition prevention
Day 5, 6, 7) Bud hunting and polish


### Priority Matrix

https://git.generalassemb.ly/mercuryfillings/breaking-bad-quote-game/blob/master/Priority%20Matrix.png



### Ideas for Post-MVP

1) Sound effects and music pulled from the show
2) Video intro
3) Share score buttons
4) Countdown clock
5) Endless mode - 1 wrong stops game, see if you can get a streak.
