const express=require('express');
const router=express.Router();
const Person=require("../models/Person");

router.post("/",async(req,res)=>{
    const person=req.body;
    const newPerson = new Person(person);
    try{
        await newPerson.save();
        res.status(200).json({person,
            work:"done"
        });
    }
    catch(err){
        res.status(500).json({err:err.message});
    }
})


router.get('/', async(req,res)=>{
    try{
        const data= await Person.find();
        res.status(200).json({data,kam:"hogaya"});
    }
    catch (err){
        res.status(400).json({err:err.message});
    }
})

router.get("/:work", async(req,res)=>{
    try{
        const work=req.params.work;
    
    
    if(work==="manager"||work==="waiter"||work==="cheif"){
        const data=await Person.find({work:work});
        res.status(200).send(data);
    }
    else{
        res.status(505).send("you are searcing for wrong route");
    }
    }
    catch(Err){
        res.status(501).json({Err:Err});
    }
})
router.put("/:id", async(req,res)=>{
    try {
        
        const id= req.params.id;
        const data= req.body;
        const newData= await Person.findByIdAndUpdate(id,data);
        res.status(200).json(newData);
        
    } catch (error) {
        res.status(404).json(error);
    }
})
router.delete("/:id", async(req,res)=>{
    try {
        const id=req.params.id;
        const response=await Person.findOneAndDelete(id);
        if(!response){
            return res.status(404).json({error:"Person not found",response});
        }
        console.log("deleted");
        res.status(200).json({message:"person deleted"});

    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }

})

module.exports=router;