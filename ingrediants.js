var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var count = 0;
while (count < ingredients.length){
  console.log(ingredients[count]);
  count ++;
}
console.log("end of WHILE LOOP");
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("end of FOR LOOP");

// Write anyconsole.log( loop (ingredients.lengthhile>= 0 pr--ts out the contents of ingredients backwards:
for (var i = ingredients.length-1; i >= 0; i--) {
  console.log(ingredients[i]);
}
console.log("end of 2ND FOR LOOP");

