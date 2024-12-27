document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const togglePassword = document.getElementById("togglePassword");
  const passwordField = document.getElementById("Password");
  const loginError = document.getElementById("loginError");

  togglePassword.addEventListener("change", () => {
    passwordField.type = togglePassword.checked ? "text" : "password";
  });

  //Form Submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("UserName").value.trim();
    const password = passwordField.value.trim();

    if (!username || !password) {
      alert("Please fill out all fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (username === "testuser" && password === "password123") {
      alert("Login successful! Welcome, " + username + ".");
      form.reset();
      loginError.style.display = "none";
    } else {
      loginError.style.display = "block";
    }
  });
});
