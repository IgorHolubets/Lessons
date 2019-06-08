//switch
var num = 1;
switch (num) {
    case 3:
        console.log('c');
        break;
    case 2:
        console.log('b');
        break;
    case 1:
        console.log('a');
        break;
    default:
    console.log('z');
}



//FOR
for (var i = 1; i < 10; i++) {
    if (i === 5) {continue;}
    console.log("Квадрат " + i + "дорівнює " + i * i);
}


//WHILE
var i = 1;
while (i < 10) {
    console.log("Квадрат " + i + "дорівнює " + i * i);
    i++;
}



//returning a larger number
function calc(number1, number2){
    if (number1>number2) {
        console.log(number1);
    }else{false};
}
calc(5, 3);