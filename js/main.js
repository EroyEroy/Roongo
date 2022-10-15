window.addEventListener('load', () => {
	const media = document.querySelectorAll('a, img'),
		allImg = document.querySelectorAll('img'),
		dropdowns = document.querySelectorAll('.dropdown');
	for (let i = 0; i < media.length; i++) {
		media[i].setAttribute('draggable', false);
	};
	for (let i = 0; i < allImg.length; i++) {
		allImg[i].setAttribute('loading', 'lazy');
	};
	dropdowns.forEach(dropdown => {
		const select = dropdown.querySelector('.select'),
			menu = dropdown.querySelector('.menu'),
			caret = dropdown.querySelector('.caret'),
			options = dropdown.querySelectorAll('.menu li'),
			selected = dropdown.querySelector('.selected');

		select.addEventListener('click', () => {
			select.classList.toggle('select-clicked');
			caret.classList.toggle('caret-rotate');
			menu.classList.toggle('menu-open');
		});
		options.forEach(option => {
			option.addEventListener('click', () => {
				selected.innerText = option.innerText;
				select.classList.remove('select-clicked');
				caret.classList.remove('caret-rotate');
				menu.classList.remove('menu-open');
				for (let i = 0; i < options.length; i++) {
					options[i].classList.remove('active');
				}
				option.classList.add('active')
			});
		});
		document.addEventListener('click', (e) => {
			if (menu.classList.contains('menu-open') && !menu.contains(e.target) && !select.contains(e.target)) {
				select.classList.remove('select-clicked');
				caret.classList.remove('caret-rotate');
				menu.classList.remove('menu-open');
			}
		});
	});
	// валидация
	let form = document.querySelector('.sign-popup'),
		formInputs = document.querySelectorAll('.valInput'),
		inputEmail = document.querySelector('.inputEmail'),
		inputPhone = document.querySelector('.inputPhone'),
		inputName = document.querySelector('.inputName'),
		inputAssortment = document.querySelector('.inputAssortment'),
		inputProducts = document.querySelector('.inputProducts');

	function validateEmail(email) {
		let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
	function validatePhone(phone) {
		let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
		return re.test(String(phone));
	}
	function validateName(name) {
		let re = /[а-яёА-ЯЁ]/;
		return re.test(String(name));
	}
	if (form != null || form != undefined) {
		form.onsubmit = function (e) {
			e.preventDefault();
			let emailVal = inputEmail.value,
				phoneVal = inputPhone.value,
				nameVal = inputName.value,
				emptyInputs = Array.from(formInputs).filter(input => input.value === '');

			formInputs.forEach(function (input) {
				if (input.value === '') {
					input.classList.add('is-invalid');
				} else {
					input.classList.remove('is-invalid');
				}
			});
			if (inputAssortment.innerText === '') {
				inputAssortment.parentElement.classList.add('is-invalid');
			} else {
				inputAssortment.parentElement.classList.remove('is-invalid');
			}
			if (inputProducts.innerText === '') {
				inputProducts.parentElement.classList.add('is-invalid');
			} else {
				inputProducts.parentElement.classList.remove('is-invalid');
			}
			if (emptyInputs.length != 0) {
				return false;
			}
			if (!validateName(nameVal)) {
				inputName.classList.add('is-invalid');
				return false;
			} else {
				inputName.classList.remove('is-invalid');
			}
			if (!validateEmail(emailVal)) {
				inputEmail.classList.add('is-invalid');
				return false;
			} else {
				inputEmail.classList.remove('is-invalid');
			}
			if (!validatePhone(phoneVal)) {
				inputPhone.classList.add('is-invalid');
				return false;
			} else {
				inputPhone.classList.remove('is-invalid');
			}
			if (inputAssortment.innerText === '') {
				inputAssortment.parentElement.classList.add('is-invalid');
				return false;
			} else {
				inputAssortment.parentElement.classList.remove('is-invalid');
			}
			if (inputProducts.innerText === '') {
				inputProducts.parentElement.classList.add('is-invalid');
				return false;
			} else {
				inputProducts.parentElement.classList.remove('is-invalid');
			}
			form.reset();
			form.style.display = 'none';
			document.querySelector('.notification').style.display = 'block';
		};
	}
});