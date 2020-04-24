// get elements we need to use
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "levana-bemo" && password === "bmo2020!") {
        window.location.replace("main.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})