const form = document.getElementById('loginform');
const errorMsg = document.getElementById('errorMsg');

function login(event) {
    event.preventDefault(); 
    
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // Password benar
    if (user === "ndapluviophile" && pass === "phitt") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html"; 
    } else {
        // Password salah
        errorMsg.style.display = "block"; 
    }
}
function kembalilogin() {
    window.location.href = "index.html"
}
