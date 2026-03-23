function register() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user && pass) {
        localStorage.setItem("user", user);
        localStorage.setItem("pass", pass);
        document.getElementById("message").textContent = "Compte créé !";
    }
}

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const savedUser = localStorage.getItem("user");
    const savedPass = localStorage.getItem("pass");

    if (user === savedUser && pass === savedPass) {
        window.location.href = "home.html";
    } else {
        document.getElementById("message").textContent = "Erreur !";
    }
}

function logout() {
    window.location.href = "index.html";
}