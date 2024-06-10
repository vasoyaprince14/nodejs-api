const mongoose=require('mongoose');
const url="mongodb+srv://princevasoya:9518139625@cluster0.vhwvlhd.mongodb.net/day2db?retryWrites=true&w=majority&appName=Cluster0"

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