// 🌸 Generate unique ID like #1234A
function generateUserId() {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return `#${randomNum}${randomLetter}`;
}

// 🌸 Toggle between signup and login
const signupCard = document.getElementById("signup-card");
const loginCard = document.getElementById("login-card");
document.getElementById("show-login").addEventListener("click", () => {
  signupCard.classList.add("hidden");
  loginCard.classList.remove("hidden");
});
document.getElementById("show-signup").addEventListener("click", () => {
  loginCard.classList.add("hidden");
  signupCard.classList.remove("hidden");
});

// 🌸 Handle Sign Up
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const newUser = {
    userId: generateUserId(),
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    dob: document.getElementById("dob").value,
    gender: document.getElementById("gender").value,
    email: document.getElementById("email").value.trim(),
  };

  localStorage.setItem("user", JSON.stringify(newUser));

  alert(`Welcome ${newUser.firstName}! Your ID is ${newUser.userId} 💖`);
  window.location.href = "home.html";
});

// 🌸 Handle Login
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const enteredId = document.getElementById("login-id").value.trim();
  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (savedUser && savedUser.userId === enteredId) {
    alert(`Welcome back, ${savedUser.firstName}! 💕`);
    window.location.href = "home.html";
  } else {
    alert("Invalid User ID! Please try again or create an account.");
  }
});
