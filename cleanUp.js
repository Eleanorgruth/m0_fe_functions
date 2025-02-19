// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();

// In example 1, I added semi-colons at the end of each line of code.
// EX 2:
function addThreeNums(first, second, third) {
  console.log(`${first}, ${second}, ${third}`);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

// In example 2, I deleted the sum variable because the parameters act like variables.
// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();

//In example 3 I used the `function` key word instead of 'func'.
//  EX 4:
function average(num1, num2)
  {
var sum = num1 + num2;
    var avg = sum / 2;

  console.log(`the average is: ${avg}.`)
  }

  average(3,5);

  // In example 4, I called the function on line 48.
