"use strict";

const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("All form fields must be filled in");
  }

  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(formData);
  event.currentTarget.reset();
}
