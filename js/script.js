const quotes = [
  // quote number zero
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: "Oprah Winfrey",
    citation: '',
    year: ''
  },
  // quote number one
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin",
    citation: '',
    year: ''
  },
  // quote number two
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    source: 'Dr. Seuss',
    citation: '',
    year: ''
  },
  // quote number three
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    source: 'Babe Ruth',
    citation: '',
    year: ''
  },
  // quote number four 
  {
    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    source: 'Winston S. Churchill',
    citation: '',
    year: ''
  },
  {
    quote: "The question isn't who is going to let me; it's who is going to stop me.",
    citation: 'Ayn Rand',
    year: ''
  },
  // quote number five
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
    source: 'Steve Jobs',
    citation: '',
    year: ''
  },
  // quote number six 
  {
    quote: "Only a life lived for others is a life worthwhile.",
    source: 'Albert Einstein',
    citation: '',
    year: ''
  },
  // quote number seven
  {
    quote: "If you really look closely, most overnight successes took a long time.",
    source: 'Steve Jobs',
    citation: '',
    year: ''
  },
  // quote number eight
  {
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    source: 'Maya Angelou',
    citation: '',
    year: ''
  }
]

// console.log(quotes)


/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  let randomQuote = quotes[Math.floor(Math.random () * quotes.length)]; 
  return randomQuote;
};

/***
 * `printQuote` function
***/


function printQuote () {
  let quote = getRandomQuote ();
  let html = `<p class="quote">${quote.quote}</p>
   <p class="source">${quote.source}`
    if (quote.citation !== undefined) {
     html += `<span class ="citation">${quote.citation}</span>`;
    }
    if (quote.year !== undefined) {
     html += `<span class = "year">${quote.year}</span>`;
    }
    if (quote.tag !== undefined) {
      html += `<span class = "tag">, ${quote.tag}</span>`;
     }
    `</p>`
  
      return(document.getElementById("quote-box").innerHTML = html);
  }
   // interval to rotate between color and quotes, set for five seconds
  setInterval(printQuote, 4000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);