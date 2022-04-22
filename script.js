'use strict';

const htmlProjectZero = `
	<div class="project-description">
		<div class="project-left">
			<img
				src="./pictures/screenshots/nostalgia-beats-screen.png"
				id="project-image-zero"
				class="project-image"
			/>
		</div>
		<div class="project-right">
			<h3>Project Title</h3>
			<ul class="tech-list">
				<li class="tech-used">Html/Css</li>
				<li class="tech-used">Sass</li>
				<li class="tech-used">Javascript</li>
			</ul>
			<p>
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
				<a>Demo</a>
				<a>Github</a>
			</div>
		</div>
	</div>
`;

const htmlProjectOne = `<h3>MovieFax Preview</h3>`;

const htmlProjectTwo = `<h3>Simple Weather Preview</h3>`;

const htmlProjectThree = `<h3>Giza Wellness Preview</h3>`;

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
		// projectDescription[0].insertAdjacentHTML('afterbegin', htmlProjectZero);
		projectDescription[0].innerHTML = htmlProjectZero;
	};

	btn1.onclick = function () {
		projectModal[0].style.display = 'block';
		projectDescription[0].innerHTML = '';
		projectDescription[0].insertAdjacentHTML('afterbegin', htmlProjectOne);
	};

	btn2.onclick = function () {
		projectModal[0].style.display = 'block';
		projectDescription[0].innerHTML = '';
		projectDescription[0].insertAdjacentHTML('afterbegin', htmlProjectTwo);
	};

	btn3.onclick = function () {
		projectModal[0].style.display = 'block';
		projectDescription[0].innerHTML = '';
		projectDescription[0].insertAdjacentHTML(
			'afterbegin',
			htmlProjectThree
		);
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
