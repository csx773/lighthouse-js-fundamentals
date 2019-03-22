function howManyHundreds(num){
  var result = Math.trunc( (num / 100));
  return result;
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);


//sample trunc function
//console.log(Math.trunc(13.37));
// expected output: 13

