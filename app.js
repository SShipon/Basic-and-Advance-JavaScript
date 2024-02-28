
document.write("My shipon form cumilla")

document.getElementById("btn_hero").addEventListener('click',function(){
    console.log("button click ")
  
})


const users = [
    {name:'Shipon', id:1, age:22, date: '10/7/1999'},
    {name:'Habib', id:2, age:23, date: '10/7/1998'},
    {name:'Farjan', id:3, age:22, date: '10/8/1999'}
];

const modifiedUsers = [];

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    modifiedUsers.push({
        name: user.name,
        id: user.id,
        age: user.age,
        date: user.date,
        modifiedProperty: 'new value' // You can add or modify properties as needed
    });
}

console.log(modifiedUsers);




const products = [
    {name:"Laptop", price:5000, brand:"Hp", publish:'10/7/78'},
    {name:"Phone", price:3000, brand:"Samsung", publish:'10/7/69'},
    {name:"Car", price:15000, brand:"BMW", publish:'10/7/66'}
];

const allProductPrice = products.map(product => {
    const updatedPrice = product.price + 1000; // You can adjust the value to add as needed
    console.log(updatedPrice)
    return {
        ...product,
        price: updatedPrice
    };
});

console.log(allProductPrice);