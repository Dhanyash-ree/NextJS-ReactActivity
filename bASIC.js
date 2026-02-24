

var num=10;
console.log(num);
var num= 20;
console.log(num);

//const 

//U cant redeclar or also cant reinitiallize 
const b=10;
b=20;

console.log(b);

//let 
//can reinistialize cant redeclare 

let a=10;
a=20;

console.log(a);



//scope 


let nu1=100;
let nu2=200;

if(nu2>nu1){
    var msg="hello";
    console.log("Success ");
}   
console.log(msg);
//Success  hello


let numm1=100;
let numm2=200;

if(numm2<numm1){
    var msg="hello";
    console.log("Success ");
}   
console.log(msg);
//undefined bcz: if -block ddint run so no var initialized 
//  var is function scope and let is block scope


let num1=100;
let num2=200;

if(num2<num1){
   let  msg="hello";
    console.log("Success ");
}   
console.log(msg);

//reference error 

//Aroor function 




// const addArrow=(a,b)=> a+b;


// const  addNormal=(a,b)=>{
//     return a+b;
// }


// function greatUser(name){
//     return `Hello ${name} welcome to react!`;
// }

// function calculatetotal(price,tax){
//     return price+tax;
// }

// const greatUser=(name)=> `Hello ${name} welcome to react!`;

// const calculatetotal=(price,tax)=> price+(price*tax);



//OBJECTSS 


// let user = {     // an object
//   name: "John",  // by key "name" store value "John"
//   age: 30   ,
//   feepaid:true,
//     address : {
//         // city:"Delhi",
//         state:"Delhi",
//         country:"India"
//     }
// };

// console.log(user.name);
// console.log(user.address.city);
// console.log(user.age);



// let {name,age,feepaid,address:{city}}= user;

// console.log(user);


// const userProfile={
//     id:1,
//     userNme:"John",
//     email:"john@example.com",
//     address:{
//         city:"Delhi",
//         zip:110001
//     }
// }

// let {id,userNme, email,address:{city,zip},}= userProfile;
// console.log(userProfile);


//spread operator 


// let arr1 =[1,2,3];
// let arr2 =[...arr1];
// console.log(arr2);


// let arr1 =[1,2,3];
// let arr2 =[,4,5,6,...arr1];
// console.log(arr2);

// let arr1 =[1,2,3];
// let arr2 =[...arr1,4,5,6];
// console.log(arr2);




// let obj1={
//     name:"John",
//     age:30
// }


// let arr1=[1,2,3];
// let arr2=[...arr1,...obj1.name,];
// console.log(arr2);


//filter 
let originalArray=[1,2,3,4,5];
const filteredArray=originalArray.filter(num=> num!==2);

console.log('Removed 2', filteredArray);


const userState={
    name:"John",
    role:"Developer"
}
const updatedUserState={...userState,role:"Manager"};
console.log('original sae', userState);

console.log("Updated state", updatedUserState);



//Map function 



// const names = ["Alice", "Bob", "Charlie"];
// const nameLengths = names.map(name => name.length);
// console.log(nameLengths); // Output: [5, 3, 7]


const names = ["Alice", "Bob", "Charlie"];
const userCards = names.map(name => {
    return `<Card name="${name}" />`;
});
console.log(userCards); // Output: ["<Card name='Alice' />", "<Card name='Bob' />", "<Card name='Charlie' />"]

