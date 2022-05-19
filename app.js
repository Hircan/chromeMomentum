const calculate = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  times: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
};

const num1 = 10;
const num2 = 20;
calculate.add(num1, num2);
calculate.minus(num1, num2);
calculate.times(num1, num2);
calculate.divide(num1, num2);
