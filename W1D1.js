var inputUserName = document.getElementById('input1');
var inputPassword = document.getElementById('input2');
var myButton = document.getElementById('loginButton');


myButton.addEventListener('click', logIn);

function logIn(a) {

    if (inputUserName.value === 'UserName' && inputPassword.value === 'formget#123') {
        window.location.href = ('\success.html');
    } else {
        window.alert('You are not registered');
    }

}