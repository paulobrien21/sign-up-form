function checkPasswordMatch(event){
	let password1 = document.getElementById('password').value;
	let password2 = document.getElementById('confirm_password').value;
	let passwordField1 = document.getElementById('password');
	let passwordField2 = document.getElementById('confirm_password');
	let warningText = document.getElementById('pw-warning-text');
	event.preventDefault();
	if(password1 === ''){
		warningText.textContent = '*Password field is empty'
		passwordField1.classList.add("error");
		passwordField2.classList.add("error");
		return;
	}
	else if(password2 === ''){
		warningText.textContent = '*Confirm Password field is empty'
		passwordField1.classList.add("error");
		passwordField2.classList.add("error");
		return;
	}
	else if(password1 != password2){
		warningText.textContent = '*Passwords do not match'
		passwordField1.setAttribute("style","border-color: red");
		passwordField2.setAttribute("style","border-color: red");
		console.log('no match');
		return;
	}
	warningText.textContent = ''
	document.getElementById('my-form').submit();
}