let loginButton = document.getElementById('login-button');
if (loginButton) {
    document.getElementById('email').oninput = checkEmailLogin;
    document.getElementById('password').oninput = checkEmailLogin;

    function checkEmailLogin(){
        let emailValue = document.getElementById('email').value;
        emailValue = emailValue.trim();
        let passwordValue = document.getElementById('password').value;
        passwordValue = passwordValue.trim();
        if (emailValue !='' && emailValue.length > 4 && emailValue.indexOf('@') >= 0 && passwordValue!='' && passwordValue.length>5) {
            loginButton.removeAttribute('disabled');
            loginButton.classList.remove('disabled');
        }
        else {
            loginButton.disabled = true;
            loginButton.classList.add('disabled');
        }
    }
}

