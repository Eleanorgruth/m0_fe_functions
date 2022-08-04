// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting(){
  console.log(`Hello`);
}
printGreeting();
printGreeting();
printGreeting();



// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
 function displayName(nameOne){
   console.log(`Hello, ${nameOne}`)
 }
 displayName("Eleanor")



function printNumber(firstNumber){
  console.log(`Hello, ${firstNumber}`)
}
printNumber(1)


// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company,
//and the numbers will represent the minimum and maximum of a pay range for a posted job.
// The function should print out a sentence that includes the name of the company and the range itself
//(if the numbers passed in are 90000 and 110000, the pay range is 20000).

function displayJobPosting(name, min, max){
  console.log(`Apply for a job at ${name}. The pay range is ${max - min}!`);
}
displayJobPosting("King Soopers", 40000, 100000);

// 4: Write a function that satifies the following interaction pattern:

function checkStock(number, ingredient){
  if (number >=4 ) {
    console.log(`${ingredient} is stocked`);
  } else if (number === 0) {
    console.log(`${ingredient} - OUT of stock`);
  } else {
    console.log(`${ingredient} is running LOW`)
  }
}

checkStock(4, "Coffee");
checkStock(3, "Tortillas");
checkStock(0, "Cheese");
checkStock(1, "Salsa");
//
//
//
// checkStock(4, "Coffee");
// // => "Coffee is stocked"
//
// checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"
//
// checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"
//
// checkStock(1, "Salsa");
