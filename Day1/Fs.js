const fs=require('fs');
const text=fs.readFileSync("./app.js",'utf-8')
console.log(text);