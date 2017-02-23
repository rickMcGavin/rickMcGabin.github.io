const button = document.querySelector('button');
const nav = document.querySelector('nav');
const topOfProj = document.querySelector('#projects').offsetTop;
const topOfAbout = document.querySelector('#about .photo').offsetTop;
const topOfContact = document.querySelector('#contact .social').offsetTop;
const links = document.querySelectorAll('.link');
const hamburger = document.querySelector('.ion-navicon');
const closeButton = document.querySelector('.ion-ios-close-outline');
let row = document.querySelector('.row');



// array of objects containing the data to build each card quickly
const projectsObj = [
	// {
	// 	title: 'Tribute Page',
	// 	description: 'This page is a tribute to chess legend, Bobby Fischer.',
	// 	tools: 'HTML - CSS - Responsive Design',
	// 	link: 'projects/bobby_fischer/bobby.html',
	// 	name: 'bobby'
	// },
	{
		title: 'Random Quote Generator',
		description: 'A random quote machine for the TV Show Silicon Valley',
		tools: 'HTML - CSS - Vanilla JavaScript',
		link: 'projects/random_quote/random.html',
		name: 'quote'
	},
	{
		title: 'Wikipedia Viewer',
		description: 'A search front end utilizing wiki search API',
		tools: 'HTML - SCSS - Vanilla JavaScript',
		link: 'projects/wikipedia_viewer/wiki.html',
		name: 'wiki'
	},
	{
		title: 'JavaScipt Calculator',
		description: 'A basic calculator',
		tools: 'HTML - SCSS - Vanilla JavaScript',
		link: 'projects/javascript_calculator/calculator.html',
		name: 'calc'
	},
	{
		title: 'Pomodoro Timer',
		description: 'A pomodoro, productivity timer',
		tools: 'HTML - SCSS - Vanilla JavaScript',
		link: 'projects/pomodoro_clock/pomodoro.html',
		name: 'pomo'
	},
	{
		title: 'Tic-Tac-Toe',
		description: 'A tic-tac-toe game for one or two players with a random AI',
		tools: 'HTML - SCSS - jQuery',
		link: 'projects/tic_tac_toe/tic-tac-toe.html',
		name: 'tictac'
	},
	{
		title: 'Simon',
		description: 'A browser based version of the 80s classic game: Simon',
		tools: 'HTML - SCSS - Vanilla JavaScript',
		link: 'projects/simon/simon.html',
		name: 'simon'
	}
];


// function to build cards for display
function buildCards() {
	for (let i = projectsObj.length-1; i >= 0; i--) {
	let html =
	`
	<div class="wide-card">
		<div class="card-splash ${projectsObj[i].name}">
			<h3>${projectsObj[i].title}</h3>
		</div>
		<div class="card-description">
			<p>${projectsObj[i].description}</p>
			<p>${projectsObj[i].tools}</p>
		</div>
		<div class="card-link">
			<a href="${projectsObj[i].link}" target="_blank">View Project</a>
		</div>
	</div>
	`
	row.innerHTML += html;
	}
}


// functions that will remove and add shadows on the email form button on click
function buttonDown() {
	button.style.boxShadow = '0px 0px 0px 0px rgba(0,0,0,0.0)';
}

function buttonUp () {
	button.style.boxShadow = '0px 2px 2px 0px rgba(0,0,0,0.5)';
}



// function to fix nav to top of window on scroll
function fixNav() {
	if (window.scrollY >= topOfProj) {
		document.body.classList.add('fix');
		nav.style.background = '#193549';
		document.body.style.paddingTop = nav.offsetHeight + 'px';
		nav.classList.add('box-shadow');
	} else {
		document.body.classList.remove('fix');
		nav.style.background = 'transparent';
		document.body.style.paddingTop = 0;
		nav.classList.remove('box-shadow');
	}
}

// function to toggle class to make mobile nav open on click
function toggleMobileNav() {
	document.querySelector('.mobile-nav').classList.toggle('open');
}


// event listeners for the email form button
button.addEventListener('mousedown', buttonDown);
button.addEventListener('mouseup', buttonUp);

// event listener for scroll 
window.addEventListener('scroll', fixNav);

// event listener for mobile navigation menu
hamburger.addEventListener('click', toggleMobileNav);
closeButton.addEventListener('click', toggleMobileNav);



buildCards();

