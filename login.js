let password = document.getElementById("password")
let icon = document.getElementById("icon")
icon.onclick = function () {
    if (password.type === "password") {
        password.type = "text"
        icon.className = "fa-solid fa-eye"
    } else {
        password.type = "password"
        icon.className = "fa-solid fa-eye-slash"
    }
}

let login = document.getElementById('login');

login.addEventListener("submit", (e) => {
    e.preventDefault();

    let a = document.getElementById("email").value.trim()
    let b = document.getElementById("password").value.trim()

    let users = JSON.parse(localStorage.getItem("users")) || []
    let user = users.find(x => x.email === a && x.password == b)

    if (user) {
        localStorage.setItem("isLoggedIn", JSON.stringify(user.name))
        window.location.href = "p.html"

    } else {
        alert("no user credentials with database")
    }
})

function playinputsound() {
    document.getElementById("inputsound").play();
}
function playbuttonsound() {
    document.getElementById("buttonsound").play();
}