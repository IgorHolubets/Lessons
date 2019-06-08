//Random
function myRandom (min, max) {
return Math.floor(Math.random() * (max -min + 1) ) + min;}
var rand = myRandom(0, 10);
for (var i = 2; i <10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}




//association array
var arr = ['lorem ', 'ipsum ', 'is', 'simply', 'dummy'];
 for (var i = 0; i <arr.length; i++) {
   newArr = arr[i][0].toUpperCase() + arr[i].slice(1);}
   var result = arr.join(' ');
console.log(result);


//comparison strings
str1 = 'lorem ipsum is simply dummy';
str2 = 'Please visit Microsoft!';
function count() {
    if (str1 > str2) {
        console.log(str1)
    }else{
        false;
    }
}
count();




