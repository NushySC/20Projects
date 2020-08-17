const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

form.addEventListener('submit', function (e) {
	e.preventDefault();
	// console.log('submit');
	if (username.value === '') {
		showError(username, 'Username is required');
	} else {
		showSuccess(username);
	}
	if (email.value === '') {
		showError(email, 'Email is required');
	} else if (!isEmailValid(email.value)) {
		showError(email, 'Email is not valid');
	} else {
		showSuccess(email);
	}
	if (password.value === '') {
		showError(password, 'Password is required');
	} else {
		showSuccess(password);
	}

	if (password.value === !passwordConfirm.value) {
		showError(passwordConfirm, 'Passwords must match');
	} else {
		showSuccess(passwordConfirm);
	}
	if (passwordConfirm.value === '') {
		showError(passwordConfirm, 'Password is required');
	} else {
		showSuccess(passwordConfirm);
	}
});

// Check if email is valid
function isEmailValid(email) {
	const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	return reg.test(String(email).toLowerCase());
}
