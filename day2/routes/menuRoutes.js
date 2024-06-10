const express= require('express');
const router=express.Router();
const Menu=require("../models/Menu");

router.post("/",async(req,res)=>{
    try{
        const data=req.body;
        const menu= new Menu(data);
        await menu.save();
        res.status(201).json(menu);
    }
    catch (err){
        res.status.json(err)
    }
})

router.get("/",async(req,res)=>{
    try{
        const data= await Menu.find();
        res.status(200).json({data,kam:"done"});
    }
    catch(err){
        res.status(401).json({err});
    }
})
router.get('/:taste',async(req,res)=>{
    try{
        const taste=req.params.taste;
        if(taste==='sweet'|| taste==='spicy'|| taste==='sour'){
            const data=await Menu.find({taste:taste});
            res.status(200).json(data);
        }
        else{
            res.status(500).send("you are on wrong route");
        }
    }
    catch (err){
        res.status(404).json(err);
    }
})





module.exports=router;