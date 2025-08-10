// login.js
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");
  const errorMsg = document.getElementById("errorMsg");

  if (email === storedEmail && password === storedPassword) {
    localStorage.setItem("isLoggedIn", "true"); // ✅ mark as logged in
    errorMsg.textContent = "";
    window.location.href = "index.html";
  } else {
    errorMsg.textContent = "Invalid email or password.";
  }
});
