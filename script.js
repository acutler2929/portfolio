'use strict';

const htmlProjectZero = `
	<div class="project-left">
	<h3 class="modal-title">Nostalgia Beats</h3>
		<img
			src="./pictures/screenshots/nostalgia-beats-screen.png"
			id="project-image-zero"
			class="project-image-modal"
		/>
		<ul class="modal-tech-list">
			<li class="tech-used">Html/Css</li>
			<li class="tech-used">Sass</li>
			<li class="tech-used">Javascript</li>
		</ul>
	</div>
	<div class="project-right">
		<p class="modal-description">
		Uses Spotify api. When finished, Nostalgia Beats will be a full stack playlist maker that focuses on music that was popular when you were young. You could then save these playlists in an account. In addition to Bootstrap and Node.js, I also plan to use React and MongoDB.
		</p>
		<div class="modal-links">
			<a href="https://github.com/acutler1987/Nostalgia-Beats.git" target="_blank" rel="noopener noreferrer">Github</a>
		</div>
	</div>
`;

const htmlProjectOne = `
	<div class="project-left">
	<h3 class="modal-title">MovieFax</h3>
		<img
			src="./pictures/screenshots/moviefax-screen.png"
			id="project-image-one"
			class="project-image-modal"
		/>
		<ul class="modal-tech-list">
			<li class="tech-used">Html/Css</li>
			<li class="tech-used">Sass</li>
			<li class="tech-used">Bootstrap</li>
			<li class="tech-used">Javascript</li>
			<li class="tech-used">Node.JS</li>
		</ul>
	</div>
	<div class="project-right">
		<p class="modal-description">
		This was my first project that was entirely server-side rendered. Handling multiple api calls between IMDB.com and Watchmode.com, this app currently allows you to search for a movie and view purchase, streaming and rental options. (WIP) => I am currently learning MongoDB and in future updates,  will allow you to build a list of movies you like, and from that list the app will give you suggestions of other movies you might like. Stay tuned!
		</p>
		<div class="modal-links">
			<a href="https://moviefax.alicecutler.dev" target="_blank" rel="noopener noreferrer">Demo</a>
			<a href="https://github.com/acutler1987/moviefax.git" target="_blank" rel="noopener noreferrer">Github</a>
		</div>
	</div>
`;

const htmlProjectTwo = `
	<div class="project-left">
	<h3 class="modal-title">Simple Weather</h3>
		<img
			src="./pictures/screenshots/simple-weather-screen.png"
			id="project-image-three"
			class="project-image-modal"
		/>
		<ul class="modal-tech-list">
			<li class="tech-used">Html/Css</li>
			<li class="tech-used">Sass</li>
			<li class="tech-used">Javascript</li>
			<li class="tech-used">Node.js</li>
		</ul>
	</div>
	<div class="project-right">
		<p class="modal-description">
		Using Open Weather Map api, this was my first independant project where I began to use api calls. With Simple Weather, you enter your city and state and get back a forecast of weather by the day or hour. Starting with this project, I began to experiment with backend technologies such as Node.js and express. This was also my first project that starts a server, handles routing through an app.js file, and handles api calls and data processing through seperate modules- before passing the resulting data on to the client. Probably my biggest challenge with this project was learning to handle async/await declarations while using two different api endpoints, a reverse geocoding endpoint and a weather data endpoint.
		</p>
		<div class="modal-links">
			<a href="https://simpleweather.alicecutler.dev" target="_blank" rel="noopener noreferrer">Demo</a>
			<a href="https://github.com/acutler1987/Simple-Weather.git" target="_blank" rel="noopener noreferrer">Github</a>
		</div>
	</div>
`;

const htmlProjectThree = `
<div class="project-left">
	<h3 class="modal-title">Giza Wellness</h3>
		<img
			src="./pictures/screenshots/giza-wellness-screen.png"
			id="project-image-three"
			class="project-image-modal"
		/>
		<ul class="modal-tech-list">
			<li class="tech-used">Html/Css</li>
		</ul>
	</div>
	<div class="project-right">
		<p class="modal-description">
		The first big project I finished! This is a simple web site made with just html and css, no libraries. I decided to make a satire site making fun of alternative health pyramid schemes. With this project, I learned the basics of website design and layout.
		</p>
		<div class="modal-links">
			<a href="https://gizawellness.alicecutler.dev" target="_blank" rel="noopener noreferrer">Demo</a>
			<a href="https://github.com/acutler1987/CIS170.git" target="_blank" rel="noopener noreferrer">Github</a>
		</div>
	</div>
`;

const displayModal = function () {
	// Get the modal and content
	const projectModal = document.getElementsByClassName('project-modal');
	const projectDescription = document.getElementsByClassName(
		'project-description'
	);

	// Get the button that opens the modal
	const btn0 = document.getElementById('project-clickable-zero');
	const btn1 = document.getElementById('project-clickable-one');
	const btn2 = document.getElementById('project-clickable-two');
	const btn3 = document.getElementById('project-clickable-three');

	// Get the <span> element that closes the modal
	const closeSpan = document.getElementsByClassName('close')[0];

	// When the user clicks on the button, open the modal
	btn0.onclick = function () {
		projectModal[0].style.display = 'block';
		projectDescription[0].innerHTML = '';
		projectDescription[0].innerHTML = htmlProjectZero;
	};

	btn1.onclick = function () {
		projectModal[0].style.display = 'block';
		projectDescription[0].innerHTML = '';
		projectDescription[0].innerHTML = htmlProjectOne;
	};

	btn2.onclick = function () {
		projectModal[0].style.display = 'block';
		projectDescription[0].innerHTML = '';
		projectDescription[0].innerHTML = htmlProjectTwo;
	};

	btn3.onclick = function () {
		projectModal[0].style.display = 'block';
		projectDescription[0].innerHTML = '';
		projectDescription[0].innerHTML = htmlProjectThree;
	};

	// When the user clicks on <span> (x), close the modal
	closeSpan.onclick = function () {
		projectModal[0].style.display = 'none';
	};

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target == projectModal) {
			projectModal.style.display = 'none';
		}
	};
};
displayModal();

/////////////////// Switch landing images when screen size shrinks

function checkScreen() {
	const landingRowTop = document.getElementById('landing-row-top');
	const landingColumnLeft = document.getElementById('landing-column-left');
	const landingColumnRight = document.getElementById('landing-column-right');

	const checkMobile = window.matchMedia('screen and (max-width: 575px)');
	const checkTablet = window.matchMedia(
		'screen and (min-width: 576px) and (max-width: 991px)'
	);
	const checkDesktop = window.matchMedia('screen and (min-width: 992px)');

	checkMobile.addListener(function (e) {
		if (e.matches) {
			console.log('MOBILE');

			landingRowTop.style.display = 'none';
			landingColumnLeft.style.display = 'none';
			landingColumnRight.style.display = 'none';
		}
	});

	checkTablet.addListener(function (e) {
		if (e.matches) {
			console.log('TABLET');

			landingRowTop.style.display = 'flex';
			landingColumnLeft.style.display = 'none';
			landingColumnRight.style.display = 'none';
		}
	});

	checkDesktop.addListener(function (e) {
		if (e.matches) {
			console.log('DESKTOP');

			landingRowTop.style.display = 'none';
			landingColumnLeft.style.display = 'flex';
			landingColumnRight.style.display = 'flex';
		}
	});
}
checkScreen();
