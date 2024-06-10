const { BadRequestException } = require('@nestjs/common');
const mongoose=require('mongoose');


const personSchema= new mongoose.Schema({
    name:{
    type:String,
    required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['cheif',"waiter", 'manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }


})
const Person = mongoose.model('Person',personSchema);
module.exports=Person;
