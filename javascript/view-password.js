document.getElementById("pass-view").addEventListener("click", function () {
  const passwordInput = document.getElementById("passfield");
  const toggleButtonView = document.getElementById("pass-view");
  const toggleButtonNoView = document.getElementById("pass-noview");

  passwordInput.type = "text";
  toggleButtonView.style.display = "none";
  toggleButtonNoView.style.display = "block";
});

document.getElementById("pass-noview").addEventListener("click", function () {
  const passwordInput = document.getElementById("passfield");
  const toggleButtonView = document.getElementById("pass-view");
  const toggleButtonNoView = document.getElementById("pass-noview");

  passwordInput.type = "password";
  toggleButtonView.style.display = "block";
  toggleButtonNoView.style.display = "none";
});
