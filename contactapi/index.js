const express= require("express")
require('dotenv').config();
const contactRoutes=require("./route/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const userRoutes=require("./route/userRoutes")
const connectDb=require('./config/db');
const port=process.env.PORT||3000
const app=express();

app.use(express.json());
app.use("/api",contactRoutes);
app.use("/api/user",userRoutes)
app.use(errorHandler);

connectDb();
app.listen(port,()=>{
console.log(`server is live on port ${port}`);
})