### Breaking Bad Quote Trivia
Shows a quote from Breaking Bad, and presents 3 character photos for user to select. If user guesses 5 correctly, they win. If user guesses 5 incorrectly, they lose.
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

#### Your application must meet these requirements:

  1. Built with HTML, CSS, and JavaScript.
  1. Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
  1. Fulfill the build requirements you have specified in your MVP.
  1. Implement responsive design (i.e. it should be fully functional on desktop, tablet, mobile, etc), using at least one media query.
  1. Deployed to a site hosting service like [surge.sh](https://surge.sh/).
  1. Commits to GitHub every day.
  1. A `README.md` file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as ```npm i```.

### STEP 5: &#x1F535; Ideas for Post-MVP - Not Mandatory
