// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = [];
// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   if (element % 2 === 0) {
//     evenNumbers.push(element);
//   }
// }
// console.log(evenNumbers);

// Always return boolean value for filter method
// const evenNumbers = numbers.filter((item) => {
//   return item % 2 === 0;
// });
// console.log(evenNumbers);

// const students = [
//   {
//     name: "Ali",
//     gender: "Male",
//   },
//   {
//     name: "Ayesha",
//     gender: "Female",
//   },
//   {
//     name: "Ansab",
//     gender: "Male",
//   },
//   {
//     name: "Fatima",
//     gender: "Female",
//   },
//   {
//     name: "Hassan",
//     gender: "Male",
//   },
// ];

// const filterMales = students.filter(({ gender }) => gender === "Male");
// console.log(filterMales);

// const obj = {
//   name: "Ali",
//   gender: "Male",
// };

// const { name, gender } = obj;
// console.log(name, gender);
// const products = [
//   {
//     name: "Shirt",
//     price: 2000,
//   },
//   {
//     name: "Shirt",
//     price: 5000,
//   },
//   {
//     name: "Shirt",
//     price: 8000,
//   },
//   {
//     name: "Shirt",
//     price: 1000,
//   },
// ];

// products.reduce()
// console.log(products);

// let totalAmount = 0;
// for (let index = 0; index < products.length; index++) {
//   const element = products[index];
//   totalAmount += element.price;
// }
// console.log(totalAmount);

// const totalAmount = products.reduce(
//   (initialValue, item) => (initialValue += item.price),
//   0
// );
// // const totalAmount = products.reduce((initialValue, item) => {
// //   return (initialValue += item.price);
// // }, 0);
// console.log(totalAmount);

let pNameElement = document.getElementById("productName");
let pPriceElement = document.getElementById("productPrice");
let tableBody = document.getElementById("table-body");
let btn = document.getElementById("submitButton");
let amountElement = document.getElementById("amount");
let products = [];

// For Updating Total Amount
const updateTotalAmount = () => {
  amountElement.innerHTML = "";
  const totalAmount = products.reduce((initialValue, item) => {
    return (initialValue += item.price);
  }, 0);
  amountElement.innerHTML = `Total Amount ${totalAmount}`;
};

// Delete product
const deleteProduct = (id) => {
  const filteredProducts = products.filter((item) => {
    return item.id !== id;
  });
  products = filteredProducts;
  renderProducts();
  updateTotalAmount();
};

function editProduct(index) {
  const obj = products[index];
  pNameElement.value = obj.name;
  pPriceElement.value = obj.price;
}

function renderProducts() {
  // Reset
  tableBody.innerHTML = "";

  // Rendering Table
  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    tableBody.innerHTML += `
      <tr>
          <th>${index + 1}</th>
          <td>${element.name}</td>
          <td>${element.price}</td>
          <td class="g-3">
            <button class="btn btn-danger" onclick="deleteProduct(${
              element.id
            })">Delete</button>
            <button class="btn btn-primary" onclick="editProduct(${index})">Edit</button>
          </td>
        </tr>
    `;
  }
}

renderProducts();
updateTotalAmount();

// Add Element
btn.addEventListener("click", () => {
  const obj = {
    name: pNameElement.value,
    price: Number(pPriceElement.value),
    id: new Date().getTime(),
  };
  products.push(obj);
  pNameElement.value = "";
  pPriceElement.value = "";
  renderProducts();
  updateTotalAmount();
});
