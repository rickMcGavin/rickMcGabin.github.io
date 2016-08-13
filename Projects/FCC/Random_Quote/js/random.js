// declare variables
var quoteButton = document.querySelector(".quoteButton");
var quoteDisplay = document.querySelector(".quote");
var num = Number;
var num2 = Number;
var authorDisplay = document.querySelector(".author");
var tweet = document.querySelector("a");


// create an array of objects
quotes = [{
  author: "Jared Dunn",
  quote: "If you keep screaming your name, it forces your assailant to acknowledge you as a human."
}, {
  author: "Erlich Bachman",
  quote: "Ask me what 9 times F is. It's Fleventy Five."
}, {
  author: "Erlich Bachman",
  quote: "We're walking in there with three foot cocks covered in Elvis Dust."
}, {
  author: "Gavin Belson",
  quote: "I don't want to live in a world where someone else makes the world a better place... better than we do."
}, {
  author: "Richard Hendricks",
  quote: "I always knew I was missing something, and then when someone explained the concept of ‘game.’ I remember very distinctly thinking ‘That’s what I don’t have.'"
}, {
  author: "Erlich Bachman",
  quote:  "You just brought piss to a shit fight!"
}, {
  author: "Richard's Doctor",
  quote: "I don’t know how you did it, but you essentially aged 40 years in the last seven weeks. We had a meth addict in here this morning who was biologically younger than you are, and he’s 58. Myspace guy."
}, {
  author: "Dinesh",
  quote: "I was already happy you got punched in the face, but now I’m super happy!"
 }, {
   author: "Russ Hanneman",
   quote: "What's got two thumbs and three commas? This guy."
 }, {
   author: "Big Head",
   quote: "This house has, like, nine bedrooms. You have any idea how scary that gets at night?"
 }, {
   author: "Jared Dunn",
   quote: "My name's only Jared because Gavin called me that on my first day. My real name is Donald."
 }, {
   author: "Jian-Yang",
   quote: "Eric Bachman, is your refrigerator running? This is Mike Hunt."
 }, {
   author: "Jian-Yang",
   quote: "Erlich, he started crying in Taco Bell. He tried to blame the taco sauce."
 }, {
   author: "Peter Gregory",
   quote: "College has become a cruel expensive joke on the poor and the middle class that benefits only the perpetrators of it. The bloated administrators."
 }, {
   author: "Laurie Bream",
   quote: "Dress unattractively when you tell them. I read a study. The less sexual interest they feel for you, the less perturbing it will be. It sounds strange, but it's credible. May I suggest the beige ensemble in which you came to work Tuesday?"
 }, {
   author: "Laurie Bream",
   quote: "It is a question mark made of human hair harvested apparently from dead people in India. It's a pun. It signifies, at Raviga we ask the big hairy questions."
 }, {
   author: "Gilfoyle",
   quote: "Let me put this in terms you'll understand. I'm like a suicide bomber of humiliation. I'm happy to go out as long as I take you with me. Your shame is my paradise."
 }, {
   author: "Gilfoyle",
   quote: "I entice the flesh, I don't pay for it."
 }, {
   author: "Dinesh",
   quote: "That is a good point. Anytime you're near a woman it is important to explain why. Otherwise they get nervous."
 }, {
   author: "Dinesh",
   quote: "And your solution to that was to go into business with him? Big Head? The guy you once called more useless than a bag of dicks without a handle?"
 }];

// make a random number to grab quotes out of the array
function randomQuoteNum() {
  return Math.floor(Math.random() * quotes.length);
}

// run functions when button is clicked
quoteButton.addEventListener("click", function() {
  updateQuote();
  tweetUpdate();
});

// put display updates in to a function
function updateQuote() {
  num = randomQuoteNum();
  quoteDisplay.textContent = quotes[num].quote;
  authorDisplay.textContent = quotes[num].author;
}



// update twitter href function
// add quote text to twitter button
function tweetUpdate() {
  tweet.setAttribute("href", "https://twitter.com/intent/tweet?text=" + quotes[num].quote + " - " + quotes[num].author);
}

// create init func to launch initial quote
function init() {
  updateQuote();
  tweetUpdate();
}

init();

// Notes //
// figure out how to not allow same quote to repeat

// add font awesome quotes v/

// Add more quotes
