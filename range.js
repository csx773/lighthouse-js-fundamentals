function range(start, end, step){
  var emptyArray = [];
  var goodArray = [];
  if ( (start || end || step) === undefined){
    console.log("In undefined condition");
    return emptyArray;
  }
  else if ( start > end){
    console.log("In start > end condition");
    return emptyArray;
  }
  else if ( step < 0){
    console.log("In step < 0 condition");
    return emptyArray;
  }
  else{
    console.log("In good parameters condition");
    for (var i = start; i <= end; i += step) {
      goodArray.push(i);
    }
    return goodArray;
  }

}



console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));