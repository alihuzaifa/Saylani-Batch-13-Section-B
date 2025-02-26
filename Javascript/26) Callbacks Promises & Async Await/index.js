// function success(response) {
//   console.log(response);
// }

// function error(error) {
//   console.log(error);
// }

// function fetchData() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(success)
//     .catch(error);
// }

// fetchData();

// There are two of behaviour in Javascript
// Synchronous ===> Code Blocking
// Asynchronous ===> Non Blocking Code

// console.log('Hello World');
// console.log('Hello World 1');
// console.log('Hello World 2');
// console.log('Hello World 3');

// function callback() {
//   console.log("Callback");
// }

// setTimeout(callback, 2000);

// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

// for (var index = 0; index < 100000; index++) {
//   console.log(index);
// }

// console.log("Hello World");

// Callbacks
// Promises
// Async Await

// function doAsyncTask(callbackSuccess, callbackError) {
//   function callback() {
//     var success = false;
//     if (success) {
//       callbackSuccess("Test Data");
//     } else {
//       callbackError("Error");
//     }
//   }
//   setTimeout(callback, 3000);
// }

// function success(response) {
//   console.log("response", response);
// }

// function error(error) {
//   console.log("error", error);
// }

// doAsyncTask(success, error);

// Kisi aur website se data aye ga
// function doAsyncTask(callbackSuccess, callbackError) {
//   setTimeout(function () {
//     var success = true;
//     if (success) {
//       callbackSuccess(["Apple", "Mango"]);
//     } else {
//       callbackError("Error");
//     }
//   }, 3000);
// }

// // Agar mera kam hojaye ga tu is function ko pata chale ga
// function success(response) {
//   console.log(response);
// }

// // agar kam na hun tu ye function mujhe inform kare ga
// function error(err) {
//   console.log(err);
// }

// doAsyncTask(success, error);

// success('Ali Huzaifa')
// error('Error')

// function doAsyncTask() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       var success = true;
//       if (success) {
//         resolve(["Apple", "Mango"]);
//       } else {
//         reject("Error");
//       }
//     }, 2000);
//   });
// }

// function success(response) {
//   console.log(response);
// }

// // agar kam na hun tu ye function mujhe inform kare ga
// function error(err) {
//   console.log(err);
// }

// doAsyncTask().then(success).catch(error);

// async function doAsyncTask() {
//   try {
//     var response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     var parseResponse = await response.json();
//     console.log(parseResponse);
//   } catch (error) {
//     console.log(error);
//   }
// }
// doAsyncTask();

function doAsyncTask() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (parseResponse) {
      console.log(parseResponse);
    })
    .catch();
}

doAsyncTask();
