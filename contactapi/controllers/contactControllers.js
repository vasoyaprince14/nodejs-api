const asyncHandler=require('express-async-handler');
const Contact=require("../models/contactModel")



const getContacts=async(req,res)=>{
    const contacts=await Contact.find();
    res.status(200).json(contacts);
}

const createContact=asyncHandler(async(req,res)=>{
    const {name, email,phone}=req.body;
    if(!name||!email||!phone){
        res.status(404);
        throw new Error("ALl field required")
    }

    const contact=new Contact(req.body)
     const data=await  contact.save();
    res.status(201).json({message:"contact created ", data:contact , returnvalue:data});
})

const getContactById=asyncHandler(async(req,res)=>{
    console.log(req.params.id);
    const id=req.params.id;
    const contact= await Contact.find({_id:id});
    const contactById= await Contact.findById(id);
    console.log(contact)
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(200).json({message:"get all ", data :contact,findByIdMethod:contactById});
})

const updateContact=asyncHandler(async(req,res)=>{
    const id=req.params.id;
    const contact= await Contact.find({_id:id});
    // const contactById= await Contact.findById(id);
    console.log(contact)
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    const updateContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}

    )
    res.status(200).json(updateContact);
})

const deleteContact=asyncHandler(async(req,res)=>{
    const id=req.params.id;
    const contact= await Contact.find({_id:id});
    // const contactById= await Contact.findById(id);
    console.log(contact)
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    console.log(Contact)
    await Contact.findByIdAndDelete(id);
    res.status(200).json({message:"delete all "});
}
)
module.exports={getContacts,createContact,getContactById,updateContact,deleteContact}