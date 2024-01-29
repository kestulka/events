document.addEventListener("DOMContentLoaded", function () {
  const signUpButton = document.getElementById("signUpButton");
  const signInButton = document.getElementById("signInButton");
  const authenticationModal = document.getElementById("authentication-modal");
  const registrationModal = document.getElementById("registration-modal");

  signUpButton.addEventListener("click", function () {
    authenticationModal.classList.add("hidden");
    registrationModal.classList.remove("hidden");
    document.body.classList.toggle("overflow-hidden");
  });

  signInButton.addEventListener("click", function () {
    registrationModal.classList.add("hidden");
    authenticationModal.classList.remove("hidden");
    document.body.classList.toggle("overflow-hidden");
  });

  // Optional: Close the authentication modal when clicking outside of it
  authenticationModal.addEventListener("click", function (event) {
    if (event.target === authenticationModal) {
      authenticationModal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }
  });

  // Optional: Close the registration modal when clicking outside of it
  registrationModal.addEventListener("click", function (event) {
    if (event.target === registrationModal) {
      registrationModal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }
  });

  // Optional: Close the authentication modal when clicking the close button
  const closeAuthButton = authenticationModal.querySelector(
    '[data-modal-hide="authentication-modal"]',
  );
  closeAuthButton.addEventListener("click", function () {
    authenticationModal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  });

  // Optional: Close the registration modal when clicking the close button
  const closeRegButton = registrationModal.querySelector(
    '[data-modal-hide="registration-modal"]',
  );
  closeRegButton.addEventListener("click", function () {
    registrationModal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  });
});

function showSignInModal() {
  const authenticationModal = document.getElementById("authentication-modal");
  const registrationModal = document.getElementById("registration-modal");

  registrationModal.classList.add("hidden");
  authenticationModal.classList.remove("hidden");
  document.body.classList.remove("overflow-hidden");
}
