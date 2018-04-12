'use strict';

(function(){
	var openPopup = document.querySelector('.user-login__link');
	var form = document.querySelector('.modal-form');
	var over = document.querySelector('.overlay');
	openPopup.addEventListener('click', function(e) {
		e.preventDefault();
		form.classList.add('show');
		over.classList.add('show');
	})
	window.addEventListener('keydown', function(e) {
		if (e.keyCode === 27) {
			if(form.classList.contains('show')) {
				form.classList.remove('show');
				over.classList.remove('show');
			}
		}
	})
})();
	