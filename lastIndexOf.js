function lastIndexOf(testArray, num){
  var lastPlace = -1;
  for( var i = 0; i < testArray.length; i++){
    if ( testArray[i] === num){
      lastPlace = i;
    }
  }
  console.log("Done for loop Array test");
  if (lastPlace === -1){
    return -1;
  } else {
    console.log("returning index of: ");
    return lastPlace;
  }

}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);