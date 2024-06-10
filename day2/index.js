const db=require("./db");
require('dotenv').config
const express= require("express");

const app= express();

const menuRouter=require("./routes/menuRoutes");
const Menu=require("./models/Menu");
const personRouter = require("./routes/personRoutes");

app.use(express.json());
app.get("/",(req,res)=>{
    console.log("helloo world");
    res.send("yes yout are connected man");
})

app.use("/person" ,personRouter);
app.use("/menu",menuRouter);
app.listen(process.env.PORT,()=>{
    console.log("listend on port 3000");
})