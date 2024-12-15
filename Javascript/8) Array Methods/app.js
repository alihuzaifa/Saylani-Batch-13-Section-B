let fruits = ["Apple", "Banana", "Orange"];


// 1. push() - Add element to end
let newFruit = prompt("Enter a fruit to add at the end (push):");
fruits.push(newFruit);
console.log("After push:", fruits);

// 2. pop() - Remove element from end
let removedFruit = fruits.pop();
console.log(
  "After pop (removed last element):",
  fruits,
  "Removed:",
  removedFruit
);

// 3. shift() - Remove element from start
let shiftedFruit = fruits.shift();
console.log(
  "After shift (removed first element):",
  fruits,
  "Removed:",
  shiftedFruit
);

// 4. unshift() - Add element to start
let fruitToAddAtStart = prompt("Enter a fruit to add at the start (unshift):");
fruits.unshift(fruitToAddAtStart);
console.log("After unshift (added to start):", fruits);

// 5. splice() - Remove 1 element from index 1 and add 2 new elements
let fruitToAdd1 = prompt("Enter a fruit to add at index 1 (splice):");
let fruitToAdd2 = prompt("Enter another fruit to add at index 1 (splice):");
fruits.splice(1, 1, fruitToAdd1, fruitToAdd2); // Remove 1 item at index 1, and add 2 new items
console.log(
  "After splice (replace 1 element at index 1 with 2 elements):",
  fruits
);

// 6. slice() - Get a portion of the array
let start = prompt("Enter start index for slice:");
let end = prompt("Enter end index for slice:");
let slicedFruits = fruits.slice(Number(start), Number(end));
console.log("Sliced portion from index", start, "to", end, ":", slicedFruits);

// 7. length - Display the length of the array
console.log("Current array length:", fruits.length);

alert("Check the console (F12) to see the output for each operation.");
