const db=require("./db");
require('dotenv').config
const express= require("express");
const password=require('password');
const app= express();

const menuRouter=require("./routes/menuRoutes");
const Menu=require("./models/Menu");
const personRouter = require("./routes/personRoutes");

app.use(express.json());
const loqRequest=(req,res,next)=>{
    console.log(`${Date.now().toLocaleString()} Request Made to : ${req.originalUrl}`);
    next();
}
app.use(loqRequest);
app.get("/",(req,res)=>{
    console.log("helloo world");
    res.send("yes yout are connected man");
})

app.use("/person" ,personRouter);
app.use("/menu",menuRouter);
app.listen(process.env.PORT,()=>{
    console.log("listend on port 3000");
})
