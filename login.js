// let password = document.getElementById("password")
// let icon = document.getElementById("icon")
// icon.onclick = function () {
//     if (password.type === "password") {
//         password.type = "text"
//         icon.className = "fa-solid fa-eye"
//     } else {
//         password.type = "password"
//         icon.className = "fa-solid fa-eye-slash"
//     }
// }

// let login = document.getElementById('login');

// login.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let a = document.getElementById("email").value.trim()
//     let b = document.getElementById("password").value.trim()

//     let users = JSON.parse(localStorage.getItem("users")) || []
//     let user = users.find(x => x.email === a && x.password === b)

//     if (user) {
//         localStorage.setItem("isLoggedIn", JSON.stringify(user.name))
//         window.location.href = "p.html"

//     }

//     else {
//         alert("no user credentials with database")
//     }
// })

// function playinputsound() {
//     document.getElementById("inputsound").play();
// }
// function playbuttonsound() {
//     document.getElementById("buttonsound").play();
// }
// let guest = document.getElementById("guestbtn")
// guest.addEventListener("click", () => {
//     let guestUser = { name: "Guest User", email: "guest@example.com", password: "guest123" }


//     let users = JSON.parse(localStorage.getItem("users")) || []
//     if (!users.find(user => user.email === guestUser.email)) {
//         users.push(guestUser);
//         localStorage.setItem("users", JSON.stringify(users))
//     }
   
//     localStorage.setItem("isLoggedIn", JSON.stringify(guestUser.name))
//     alert("Welcome, Guest!")
//     window.location.href = "p.html"
    
// })



// let password = document.getElementById("password");
// let icon = document.getElementById("icon");

// icon.onclick = function () {
//     if (password.type === "password") {
//         password.type = "text";
//         icon.className = "fa-solid fa-eye";
//     } else {
//         password.type = "password";
//         icon.className = "fa-solid fa-eye-slash";
//     }
// }

// // Form submission for normal login
// let login = document.getElementById('login');
// login.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let email = document.getElementById("email").value.trim();
//     let password = document.getElementById("password").value.trim();

//     // Skip validation for guest login
//     if (localStorage.getItem("isGuestLoggedIn") !== "true") {
//         // Validate empty fields for normal login
//         if (!email || !password) {
//             alert("Please fill in both fields.");
//             return;
//         }

//         // Validate email format
//         let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//         if (!emailPattern.test(email)) {
//             alert("Please enter a valid email address.");
//             return;
//         }

//         // Retrieve users from localStorage
//         let users = JSON.parse(localStorage.getItem("users")) || [];

//         // Find the user in localStorage
//         let user = users.find(x => x.email === email && x.password === password);

//         if (user) {
//             localStorage.setItem("isLoggedIn", JSON.stringify(user.name));
//             window.location.href = "p.html"; // Redirect to the user’s page
//         } else {
//             alert("Invalid credentials! Please check your email and password.");
//         }
//     }
// });

// // Play sound effects for input and button
// function playinputsound() {
//     document.getElementById("inputsound").play();
// }

// function playbuttonsound() {
//     document.getElementById("buttonsound").play();
// }

// // Guest login functionality
// let guest = document.getElementById("guestbtn");
// guest.addEventListener("click", () => {
//     // Create guest user data
//     let guestUser = { name: "Guest User", email: "guest@example.com", password: "guest123" };

//     // Retrieve existing users from localStorage
//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     // If guest user does not exist, add them to the array
//     if (!users.find(user => user.email === guestUser.email)) {
//         users.push(guestUser); // Add guest user to localStorage if not already present
//         localStorage.setItem("users", JSON.stringify(users));
//     }

//     // Set guest as logged in (avoid filling form fields)
//     localStorage.setItem("isLoggedIn", JSON.stringify(guestUser.name));
//     localStorage.setItem("isGuestLoggedIn", "true"); // Set guest login flag

//     // Redirect to the guest page
//     alert("Welcome, Guest!");
//     window.location.href = "p.html";
// });












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

// Form submission for regular user login
let loginForm = document.getElementById('login');
loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission by default

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Validate user input (email and password)
    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    // Validate email format
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Retrieve users from localStorage and check for matching credentials
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(x => x.email === email && x.password === password);

    if (user) {
        console.log("User found: ", user);
        localStorage.setItem("isLoggedIn", JSON.stringify(user.name));
        alert("logined successfully")
        window.location.href = "p.html"; // Redirect to user dashboard page
    } else {
        alert("Invalid credentials! Please check your email and password.");
    }
});

// Play sound effects for input and button
function playinputsound() {
    document.getElementById("inputsound").play();
}

function playbuttonsound() {
    document.getElementById("buttonsound").play();
}

// Guest login functionality (bypasses the form)
let guestButton = document.getElementById("guestbtn");
guestButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the form from being submitted when the guest button is clicked

    // Predefined guest user data
    let guestUser = { name: "Guest User", email: "guest@example.com", password: "guest123" };

    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the guest user is already stored; if not, add it
    if (!users.find(user => user.email === guestUser.email)) {
        users.push(guestUser); // Add guest user to localStorage if not already present
        localStorage.setItem("users", JSON.stringify(users)); // Save updated users list to localStorage
    }

    // Log in as guest by setting localStorage
    localStorage.setItem("isLoggedIn", JSON.stringify(guestUser.name)); // Store guest login info
    alert("Welcome, Guest!"); // Alert the user that they are logged in as a guest

    // Set a flag in localStorage to indicate guest login status
    localStorage.setItem("isGuestLoggedIn", "true");

    // Redirect to the guest dashboard or any other page
    window.location.href = "p.html"; 
});