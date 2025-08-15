console.log("SCRIPT START");

// Array.prototype.mapReplica = function (logic){
//     let output = []
//     for( var i =0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }

// let userData = [
//   {
//     firstName:"rudrakshi",
//     age: "21"
//   },
//   {
//     firstName:"samar",
//     age: "20"
//   },
//   {
//     firstName:"sakshi",
//     age: "23"
//   },

// ]

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// });

// const rudrakshiPromise = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     reject("I GOT PLACED");
//   }, 2000);
// })

// rudrakshiPromise
// .then((res)=>{
//   console.log("rudrakshi GETTING SALARY 1CR")
//    console.log(res);
// })
// .catch((err)=>{
//   console.log("ERROR FOUND1: ",err)
// })
// .then(()=>{
//   console.log("PARTY TIME");
// })
// .catch((err)=>{
//   console.log("ERROR FOUND:2 ",err)
// })
// .then(() =>{
//   console.log("WORKING WORKING WORKING");
// })
// .catch((err)=>{
//   console.log("ERROR FOUND:3 ",err)
// })
// .then(()=>{
//   console.log("LAYOFF");
// })
// .catch((err)=>{
//   console.log("ERROR FOUND:4 ",err)
// })
// console.log(rudrakshiPromise);

/////////////////////////////////////////////////////////

// const p1 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("Assignment Complete by rudrakshi");
//   }, 2000);
// })

// const p2 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("Assignment Complete by sakshi");
//   }, 3000);
// })

// const p3 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("Assignment Complete by samar");
//   }, 5000);
// })

// const p4 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     reject("Assignment Complete by rudraksh");
//   }, 4000);
// })

// Promise.all([p1,p2,p3,p4]).then((res)=> console.log(res)).catch((err)=> console.log("ERROR",err));
// //BEHAVIOR

// all - all api chal gyi to : ALL RESULT
// all reject -  first rejected
// ek hogyi to uska he error ayega

// allSettled =  array of object
// allSettled = array of reject
// ek do = array jo full fill or rject

// race == first winner
// reject == first reject

// any == any first which is resolved

///////////////////////////////////////////////////////////////////

// ASYNC await

// const p1 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("Assignment Complete by rudrakshi");
//   }, 2000);
// })

// async function checkAssignment(){
//   const dataAssignment =await p1;
//   console.log("CHECKING THE ASSIGNMENT: ", dataAssignment)
// }

// checkAssignment();

// 'https://dummyjson.com/products' from this fetch data and just do console.log(  )

async function fetchProducts() {
  try {
    const products = await fetch("https://dummyjson.com/products");
    const data = await products.json();
    console.log(data);
  } catch (err) {
    console.log("ERROR: ", err.message);
  }
}

fetchProducts();
