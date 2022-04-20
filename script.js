'use strict';

const displayModal = function () {
	// Get the modal
	const projectModal = document.getElementsByClassName('project-modal');

	// Get the button that opens the modal
	const btn1 = document.getElementById('project-clickable-one');
	const btn2 = document.getElementById('project-clickable-two');
	const btn3 = document.getElementById('project-clickable-three');
	const btn4 = document.getElementById('project-clickable-four');

	// Get the <span> element that closes the modal
	const closeSpan = document.getElementsByClassName('close')[0];

	// When the user clicks on the button, open the modal
	btn1.onclick = function () {
		projectModal[0].style.display = 'block';
	};

	btn2.onclick = function () {
		projectModal[0].style.display = 'block';
	};

	btn3.onclick = function () {
		projectModal[0].style.display = 'block';
	};

	btn4.onclick = function () {
		projectModal[0].style.display = 'block';
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
