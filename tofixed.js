const number = 7.895;
const result = number.toFixed()
const finalResult = parseFloat(result)
console.log(typeof(result))
console.log(finalResult)
console.log(result)



var num1 = 99;
var stringRes =num1.toString()
console.log(stringRes)

/* const myNum = 11.569
const totalValue = myNum.toPrecision(2)
const final = parseFloat(totalValue)
console.log(final) */



const arr = [1, 2, 3];

arr.toString(); // "1,2,3"
Object.prototype.toString.call(arr); 
