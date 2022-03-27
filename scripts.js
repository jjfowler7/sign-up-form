function checkPassword() {
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("confirm_password").value;
    let errorMessage = document.getElementById("confirm_password");
    if (password === passwordConfirm) {
        errorMessage.setCustomValidity('');
    } else {
        errorMessage.setCustomValidity('Password does not match');
    }
}