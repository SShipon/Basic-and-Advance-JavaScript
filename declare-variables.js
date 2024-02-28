const student = "Kamrul Isalm shipon";
console.log(student)



const products = [
    {name:"Laptop", price:5000, brand:"Hp", publish:'10/7/78'},
    {name:"Phone", price:3000, brand:"Samsung", publish:'10/7/69'},
    {name:"Car", price:15000, brand:"BMW", publish:'10/7/66'}
];

const modifiedProducts = products.map(product => {
    product.price += 1000; // You can adjust the value to add as needed
    return product;
});

console.log(modifiedProducts);