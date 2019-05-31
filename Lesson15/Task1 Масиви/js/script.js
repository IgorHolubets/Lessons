//№1111111111111111111111111

var arrmatrix = [
  [1, 1, 1],
  [1, 5, 1],
  [1, 1, 1]
];

function getMatrixIndex(arrmatrix) {
  var sum = 0;
  for (var i = 0; i < arrmatrix.length; i++) {
      for (var j = 0; j < arrmatrix.length; j++) {
          sum = sum + arrmatrix[i][j];
      }
  }
  return sum;
}
console.log(getMatrixIndex(arrmatrix));


//№2222222222222222222222

var longString = "Lorem ipsum dolor sit amet consectetur adipisicing elit Consequuntur laboriosam nisi fuga";
var array = longString.split(' ');
console.log(array);
for (var i = 0; i < array.length; i++) {
    if (array[i].length > 5) {

        console.log(array[i]);
    }
}


//№333333333333333333333333333

var numberArray = [1, 9, 22, 7, 6];
numberArray.splice(3, 0, 8);
console.log(numberArray);






//№4444444444444444

var arrayOfNumbers = [8, 6, 12, 10];
var square = arrayOfNumbers.map(function(sqr) {
    return sqr * sqr;
});
console.log(square);
