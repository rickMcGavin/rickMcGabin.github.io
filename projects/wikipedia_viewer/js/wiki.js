// declaring consts 
const searchIcon = document.querySelector('.fa-search');
const input = document.querySelector('input');
const endpoint = 'https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&origin=*&limit=10&search=';
const results = document.querySelector('.results-container');



let searchResults = [];

// Functions that fire from HTML element input

// turns icon blue when you click in the search box
function changeIconColor() {
	searchIcon.style.color = '#448AFF';
}

// turns icon back to gray when you click outside of the search box
function revertIconColor() {
	searchIcon.style.color = '#757575'
}

// function used to call wikipedia api and return the 
function searchWiki() {

	// when the user wants to make multiple searches this will clear previous searches
	results.innerHTML = '';

	// assign user's search item to a variable
	let searchItem = input.value;
	
	// use axios to grab the data from wikipedia api
	// axios: https://github.com/mzabriskie/axios
	axios.get(endpoint+searchItem)
	.then(blob => {
		let data = blob.data;
		// loop through each element in the first array returned from api
		for (let i = 0; i < data[1].length; i++) {
		
		// assign the entirity of the HTML for each card to a variable
		let html =	
		`<div class="result-card animated">
				<div class="head">
					<div>	
						<h4><a href=${data[3][i]} target="_blank">${data[1][i]}</a></h4>
					</div>
				</div>
				<div class="par">
					<div>
						<p>${data[2][i]}</p>
					</div>
				</div>
			</div>`

			// continue to add each html card to the results container
			// the key here was utilizing the += operator 
			results.innerHTML += html;
		}
			const cards = document.querySelectorAll('.result-card');
			cards.forEach((card, index) => {
			index % 2 === 0 ? card.classList.add('slideInLeft') : card.classList.add('slideInRight');
		});
	});
}


// Event Listeners

// listens for a mouse click on the search icon then runs the searchWiki function
searchIcon.addEventListener('click', searchWiki);
window.onkeyup = function(e) {if (e.keyCode === 13) {searchWiki();}}

// listens on the window for the 'enter' key to be pressed and will also run searchWiki function
// window.addEventListener('keyup');
