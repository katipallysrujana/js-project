let password = document.getElementById("password");
let icon = document.getElementById("icon");

icon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        icon.className = "fa-solid fa-eye";
    } else {
        password.type = "password";
        icon.className = "fa-solid fa-eye-slash";
    }
}
let loginForm = document.getElementById('login');
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();


    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
     let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(x => x.email === email && x.password === password);

    if (user) {
        console.log("User found: ", user);
        localStorage.setItem("isLoggedIn", JSON.stringify(user.name));
        alert("logined successfully")
        window.location.href = "p.html";
    } else {
        alert("Invalid credentials! Please check your email and password.");
    }
});

function playinputsound() {
    document.getElementById("inputsound").play();
}

function playbuttonsound() {
    document.getElementById("buttonsound").play();
}
let guestButton = document.getElementById("guestbtn");
guestButton.addEventListener("click", (e) => {
    e.preventDefault();
    let guestUser = { name: "Guest User", email: "guest@example.com", password: "guest123" };

    let users = JSON.parse(localStorage.getItem("users")) || [];


    if (!users.find(user => user.email === guestUser.email)) {
        users.push(guestUser);
        localStorage.setItem("users", JSON.stringify(users));
    }
    localStorage.setItem("isLoggedIn", JSON.stringify(guestUser.name));
    alert("Welcome, Guest!");
    localStorage.setItem("isGuestLoggedIn", "true");
    window.location.href = "p.html";
});