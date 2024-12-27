document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    successMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    successMessage.style.display = "block";

    form.reset();
  });
});
