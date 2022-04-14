// Additional assignments for M2-W3-P1

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

/* WRITE YOUR ANSWER HERE */

const giveMeRandom = function (n) {
    const array = [];
    for (let i = 0; i <= n; i++) {
      array.push(Math.floor(Math.random() * 10));
    }
    return array;
  };
  
  const checkArray = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 5) {
        console.log(array[i] + " is bigger than 5");
        sum = sum + array[i];
      } else {
        console.log(array[i] + " is not bigger than 5");
      }
    }
    console.log("The sum of the numbers greater than 5 is " + sum);
  };
  
  checkArray(giveMeRandom(3));

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

/* WRITE YOUR ANSWER HERE */

const shoppingCart = [
    {
      id: 204,
      name: "Jacket",
      price: 40,
      quantity: 12,
    },
    {
      id: 300,
      name: "Shoe",
      price: 560,
      quantity: 1,
    },
    {
      id: 114,
      name: "School Bag",
      price: 200,
      quantity: 17,
    },
  ];

  let shoppingCartTotal = function () {
      let total = 0;
      for (let i = 0; i < shoppingCart.length; i++) {
          total = total + shoppingCart[i].price *shoppingCart[i].quantity;
        }
     return total
  }

  console.log(shoppingCartTotal());

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

/* WRITE YOUR ANSWER HERE */


let Item = 
    {
      id: 208,
      name: "Radio",
      price: 50,
      quantity: 22,
    };

let addToShoppingCart = function (addedItem) {
   newItem = shoppingCart.push(addedItem); 
   return newItem;
};
 
console.log(addToShoppingCart(Item));
console.log(shoppingCart);

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

/* WRITE YOUR ANSWER HERE */

const maxShoppingCart = function (cart) {
    let mostExpensiveItem = cart[0];
    for (let i = 1; i < cart.length; i++) {
      if (cart[i].price > mostExpensiveItem.price) {
        mostExpensiveItem = cart[i];
      }
    }
    return mostExpensiveItem;
  };
  
  console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
