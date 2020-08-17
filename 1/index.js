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
	// checkRequiered(username);
	// checkRequiered(email);
	checkRequiered([username, email, password, passwordConfirm]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 10);
	checkMatch(password, passwordConfirm);
});

// form.addEventListener('submit', function (e) {
// 	e.preventDefault();
// 	// console.log('submit');
// 	if (username.value === '') {
// 		showError(username, 'Username is required');
// 	} else {
// 		showSuccess(username);
// 	}
// 	if (email.value === '') {
// 		showError(email, 'Email is required');
// 	} else if (!isEmailValid(email.value)) {
// 		showError(email, 'Email is not valid');
// 	} else {
// 		showSuccess(email);
// 	}
// 	if (password.value === '') {
// 		showError(password, 'Password is required');
// 	} else {
// 		showSuccess(password);
// 	}

// 	if (password.value === !passwordConfirm.value) {
// 		showError(passwordConfirm, 'Passwords must match');
// 	} else {
// 		showSuccess(passwordConfirm);
// 	}
// 	if (passwordConfirm.value === '') {
// 		showError(passwordConfirm, 'Password is required');
// 	} else {
// 		showSuccess(passwordConfirm);
// 	}
// });

// Check if email is valid

// REFACTORED
function checkMatch(input, input2) {
	if (input.value === !input2.value) {
		showError(input2, 'Passwords must match');
	} else {
		showSuccess(input2);
	}
	if (input2.value === '') {
		showError(input2, 'Password is required');
	} else {
		showSuccess(input2);
	}
}

function checkRequiered(inputArray) {
	inputArray.forEach(function (input) {
		if (input.value.trim() === '') {
			// showError(input, `${input.id} should not be empty`);
			showError(input, `${getFieldName(input)} should not be empty`);
		} else {
			showSuccess(input);
		}
	});
}

function checkLength(input, min, max) {
	if (input.value.length < min) {
		console.log(input.value.length);
		showError(
			input,
			`${getFieldName(input)} should not be sooo fucking short `
		);
	} else if (input.value.length > max) {
		console.log(input.value.length);
		showError(
			input,
			`${getFieldName(input)} should not be sooo fucking long `
		);
	} else {
		showSuccess(input);
	}
}
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function isEmailValid(email) {
	const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	return reg.test(String(email).toLowerCase());
}
