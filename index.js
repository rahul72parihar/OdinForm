const submit = document.getElementById("submit");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const error = document.getElementById("error");
submit.addEventListener("click", handleClick);
function handleClick(e) {
  e.preventDefault();
  if (
    password === "" ||
    confirmPassword === "" ||
    password !== confirmPassword
  ) {
    error.style.display = "block";
  }
}
