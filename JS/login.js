document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (userEmail == 'shanta07@gamil.com' && password == '12345') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid Email or Password');
    }

})