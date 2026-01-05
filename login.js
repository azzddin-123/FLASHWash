// Identifiants de l'administrateur
const adminCredentials = { username: "admin", password: "admin123" };
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault(); 

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (username === adminCredentials.username && password === adminCredentials.password) {
        window.location.href = "dashboard.html"; 
    } else {
        alert("Vous avez saisi des informations incorrectes. Seul l'administrateur peut accéder.");
    }
});
