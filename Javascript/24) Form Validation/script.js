// var btn = document.getElementById("btn");
// var nameEl = document.getElementById("name");
// var emailEl = document.getElementById("email");
// var passwordEl = document.getElementById("password");
// var emailRegex =
//   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// function submitForm(params) {
//   params.preventDefault();
//   var nameValue = nameEl.value;
//   var emailValue = emailEl.value;
//   var passwordValue = passwordEl.value;

//   // Name Field
//   if (nameValue.trim() === "") {
//     showError("nameError", "Name is required");
//     return;
//   }

//   // Email Field
//   var isValidEmail = emailRegex.test(emailValue);
//   if (isValidEmail === false) {
//     showError("emailError", "Email is required");
//     return;
//   }

//   // Password Field
//   if (passwordValue.trim().length < 6) {
//     showError("passwordError", "Password should be at least 6 characters long");
//     return;
//   }

//   // Gmail URL
//   console.log("Test");
// }

// btn.addEventListener("click", submitForm);

// function showError(id, message) {
//   var element = document.getElementById(id);
//   element.innerHTML = message;
// }

// function clearAllError() {
//   var nameError = document.getElementById("nameError");
//   var emailError = document.getElementById("emailError");
//   var passwordError = document.getElementById("passwordError");

//   nameError.innerHTML = "";
//   emailError.innerHTML = "";
//   passwordError.innerHTML = "";
// }

//

// if (true) {
//   let name1 = "Account Name";
//   console.log(name1);
// }
// // lexical scope
// if (true) {
//   let name1 = "User Name";
//   console.log(name1);
// }

// console.log(name1);

const PIE = 3.142;
PIE = 342;
console.log(PIE);
