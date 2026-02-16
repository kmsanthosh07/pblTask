document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMsg = document.getElementById("errorMsg");
    
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if(username === "" || password === ""){
            errorMsg.textContent = "Please enter both username and password";
            errorMsg.style.color = "red";
            return;
        }

        //Success
        errorMsg.textContent = "";
        alert("Login Successful!");
        window.location.href = "dashboard.html";

    });

});