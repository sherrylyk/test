function toggleForm(showFrom){
    // Display an alert with a custom message based on the form requested
    alert("Requested form: " + showFrom);
}

// Assuming 'loginPlease' and 'registerPlease' are variables referencing DOM elements,
// you need to ensure they are correctly defined. For example:
// var loginPlease = document.getElementById('loginPlease');
// var registerPlease = document.getElementById('registerPlease');

loginPlease.addEventListener('click', function(){
    toggleForm("login-form");
}, false);
registerPlease.addEventListener('click', function(){
    toggleForm("register-form");
}, false);