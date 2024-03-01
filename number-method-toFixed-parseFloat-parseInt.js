//parseFloat
const number = '33.56'
console.log(number)
const result  = parseFloat(number) // parseFloat পূর্ণ সংখ্যা থেকে  দশমিক সংখ্যা পর্যন্ত নিবে। 
console.log(result)

// parseInt 
const num ='65.34'
const result2 = parseInt(num)//parseInt শুধুমাত্র পূর্ন সংখ্যা নিবে।
console.log(num)
console.log(result2)



//The toFixed() method converts a number to a string.
//toFixed() একটি সংখ্যাকে একটি স্ট্রিং এ রূপান্তর করে।
const num1 = 123.335;
const total = num1.toFixed()
console.log(total)
///ans:123

//toFixed() স্ট্রিংটিকে নির্দিষ্ট সংখ্যক দশমিকে বৃত্তাকার করে।
/*The toFixed() method rounds the string 
to a specified number of decimals.*/
const num2 = 123.335;
const totalResult = num1.toFixed(2)
console.log(totalResult)
///ans:123.33

/* 

সংখ্যা মানের toPrecision() পদ্ধতিটি নির্দিষ্ট নির্ভুলতায় এই 
সংখ্যার প্রতিনিধিত্বকারী একটি স্ট্রিং প্রদান করে। 

*/

const bigNumber = 12.34;
const bigResult = bigNumber.toPrecision(2)
console.log(bigResult)

/*

 স্থির-বিন্দু বা সূচকীয় স্বরলিপিতে একটি সংখ্যা অবজেক্টের 
প্রতিনিধিত্বকারী একটি স্ট্রিং যা সূক্ষ্ম উল্লেখযোগ্য সংখ্যাগুলিতে
 বৃত্তাকার। Number.prototype.toFixed() পদ্ধতির বর্ণনায় রাউন্ডিংয়ের
  আলোচনা দেখুন, যা toPrecision() এর ক্ষেত্রেও প্রযোজ্য। 
  
  */
let createNumber = 5.123456;
console.log(createNumber.toPrecision()); // '5.123456'
console.log(createNumber.toPrecision(5)); // '5.1235'
console.log(createNumber.toPrecision(2)); // '5.1'
console.log(createNumber.toPrecision(1)); // '5'

numCreate = 0.000123;
console.log(numCreate.toPrecision()); // '0.000123'
console.log(numCreate.toPrecision(5)); // '0.00012300'
console.log(numCreate.toPrecision(2)); // '0.00012'
console.log(numCreate.toPrecision(1)); // '0.0001'


console.log(Number("2345"))//string ke number convert 
console.log(Number("23.34345"))//string ke number convert 

/*
1/parseFloat
2/ parseInt
3/toFixed
4/toPrecision
5/Number 
*/