//#11111111111
var name = "Igor";
var student = name;
console.log(student);


//№22222222222
var a = '5';
var b = 2;
console.log('5' + 2);


//#33333333333
var a = 'Hello';
var b = 5;
console.log('Hello ' + 5);


//№4444444444444
var a = 5;
var b = 3;
(a>b) && (a===b);
console.log(a, b);



//switch:::::::::::
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



//ЦИКЛ FOR:::::::::::::::
for (var i = 1; i < 10; i++) {
    if (i === 5) {continue;}
    console.log("Квадрат " + i + "дорівнює " + i * i);
}


//ЦИКЛ WHILE:::::::::::::::
var i = 1;
while (i < 10) {
    console.log("Квадрат " + i + "дорівнює " + i * i);
    i++;
}