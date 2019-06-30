//create a calculator object with methods:
var calculator = {
      number1: 2,
      number2: 3,

      sum: function () {
          return this.number1 + this.number2;
    },
      mul: function () {
          return this.number1 * this.number2;
      }
  }

  alert(calculator.sum());
  alert(calculator.mul());


  //Object Calculator via Constructor:
var calculator = new Calculator('2', '3');

  console.log("Сума =" + calculator.sum());
  console.log("Добуток =" + calculator.mul());