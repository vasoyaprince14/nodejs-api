// console.log("hello");
// const { read } = require('fs')
// const readline=require('readline')

// const r1=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// r1.question("Please enter your name:", (name)=>{
//     console.log(name+" your name");
//     r1.close();
// })
// const readline = require('readline');
// let rl = readline.createInterface(
// 	process.stdin, process.stdout);

// rl.setPrompt(`What is your age? `);
// rl.prompt()
// const readline = require('readline');

// const rl = readline.createInterface(
// 		process.stdin, process.stdout);

// rl.setPrompt(`What is your age? `);
// rl.prompt();
// rl.on('line', (age) => {
// 	console.log(`Age received by the user: ${age}`);
// 	rl.close();
// });
// const m=[];
//  m.map((todp)=>{
//     console.log("mapcal");
//  })
// function final(someInput, callback) {
//     callback(`${someInput} and terminated by executing callback `);
//   }
  
//   function middleware(someInput, callback) {
//     return final(`${someInput} touched by middleware `, callback);
//   }
  
//   function initiate() {
//     const someInput = 'hello this is a function ';
//     middleware(someInput, function (result) {
//       console.log(result);
//       // requires callback to `return` result
//     });
//   }
  
//   initiate();

//   const {unlink}= require('fs');
// //   console.log(unlink)
//   (async function(path){
//     try{
//         await unlink(path);
//         console.log(` hello ${path} deleted this file`);
//     }
//     catch(err){
//         console.log(err.message)
//     }
//   })('./temp.js');

// // this code is to delete a file
// unlink("./temp.js",(err)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("done");
//     }
// })
// const {open } =require('node:fs/promises');

// (async function(){
//     let filehandle;
// try {
//   filehandle = await open('./index.html', 'r');
//   filehandle.then((data)=>{
//     console.log(data);
//   })
// } finally {
//   await filehandle?.close();
// }
// })()
// const firstNumber = parseInt(process.argv[2]); // Assuming they are numbers
// const secondNumber = parseInt(process.argv[3]);

// console.log("First number:", firstNumber);
// console.log("Second number:", secondNumber);

// Use these numbers in your program logic
// ...
console.log(parseInt(process.argv[2]));