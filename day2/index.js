const db=require("./db");

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
app.listen(3000,()=>{
    console.log("listend on port 3000");
})