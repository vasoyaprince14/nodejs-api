const mongoose=require('mongoose');
require("dotenv").config();
const url=process.env.MONGO_URL;

mongoose.connect(url).then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log(`err occuered ${err}`);
});

const db=mongoose.connection;
// console.log(db);

db.on('connected',()=>{
    console.log("this is called through db method and this is saying db is connected");
})


db.on('error',(err)=>{
    console.log("this is called through db method and this is saying db was error in it");
})


db.on('disconnected',()=>{
    console.log("this is called through db method and this is saying db is disconnected");
})

module.exports=db