'use strict';

const htmlProjectZero = `
	<div class="project-left">
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
		<h3 class="modal-title">Nostalgia Beats</h3>
		<p class="modal-description">
			Lorem ipsum dolor sit amet, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua. Ut enim ad minim veniam, quis
			nostrud exercitation ullamco laboris nisi ut aliquip
			ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore
			eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia
			deserunt mollit anim id est laborum.
		</p>
		<div class="modal-links">
			<a href="https://nostalgiabeats.alicecutler.dev" target="_blank" rel="noopener noreferrer">Demo</a>
			<a href="https://github.com/acutler1987/Nostalgia-Beats.git" target="_blank" rel="noopener noreferrer">Github</a>
		</div>
	</div>
`;

const htmlProjectOne = `
	<div class="project-left">
		<img
			src="./pictures/screenshots/moviefax-screen.png"
			id="project-image-one"
			class="project-image-modal"
		/>
		<ul class="modal-tech-list">
			<li class="tech-used">Html/Css</li>
			<li class="tech-used">Sass</li>
			<li class="tech-used">Javascript</li>
			<li class="tech-used">Node.JS</li>
		</ul>
	</div>
	<div class="project-right">
		<h3 class="modal-title">MovieFax</h3>
		<p class="modal-description">
			Lorem ipsum dolor sit amet, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua. Ut enim ad minim veniam, quis
			nostrud exercitation ullamco laboris nisi ut aliquip
			ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore
			eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia
			deserunt mollit anim id est laborum.
		</p>
		<div class="modal-links">
			<a href="https://moviefax.alicecutler.dev" target="_blank" rel="noopener noreferrer">Demo</a>
			<a href="https://github.com/acutler1987/moviefax.git" target="_blank" rel="noopener noreferrer">Github</a>
		</div>
	</div>
`;

const htmlProjectTwo = `
	<div class="project-left">
		<img
			src="./pictures/screenshots/simple-weather-screen.png"
			id="project-image-three"
			class="project-image-modal"
		/>
		<ul class="modal-tech-list">
			<li class="tech-used">Html/Css</li>
			<li class="tech-used">Sass</li>
			<li class="tech-used">Javascript</li>
		</ul>
	</div>
	<div class="project-right">
		<h3 class="modal-title">Simple Weather</h3>
		<p class="modal-description">
			Lorem ipsum dolor sit amet, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua. Ut enim ad minim veniam, quis
			nostrud exercitation ullamco laboris nisi ut aliquip
			ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore
			eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia
			deserunt mollit anim id est laborum.
		</p>
		<div class="modal-links">
			<a href="https://simpleweather.alicecutler.dev" target="_blank" rel="noopener noreferrer">Demo</a>
			<a href="https://github.com/acutler1987/Simple-Weather.git" target="_blank" rel="noopener noreferrer">Github</a>
		</div>
	</div>
`;

const htmlProjectThree = `
	<div class="project-left">
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
		<h3 class="modal-title">Giza Wellness</h3>
		<p class="modal-description">
			Lorem ipsum dolor sit amet, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua. Ut enim ad minim veniam, quis
			nostrud exercitation ullamco laboris nisi ut aliquip
			ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore
			eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia
			deserunt mollit anim id est laborum.
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
	const btn0 = document.getElementById('project-image-zero');
	const btn1 = document.getElementById('project-image-one');
	const btn2 = document.getElementById('project-image-two');
	const btn3 = document.getElementById('project-image-three');

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
