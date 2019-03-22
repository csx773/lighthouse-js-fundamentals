function ageCalculator(name, YearBorn, ThisYear){
  var age = ThisYear - YearBorn;
  return name + " is " + age + " years old.";
// will be returned as a string
}

//testing
console.log(ageCalculator("Miranda", 1983, 2015));
//answer should be 32
console.log(ageCalculator("Ferdinand", 1988, 2015));
// answer should be 27
