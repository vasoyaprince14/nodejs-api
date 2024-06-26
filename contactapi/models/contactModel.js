const mongoose=require("mongoose");
const { timestamp } = require("rxjs");


const contactSchema= mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type:String,
        required:[true,"Please add the contact name"]
    },
    email:{
        type:String,
        required:[true,"Please add the contact email addres"]
    },
    phone:{
        type:Number,
        required:[true, "Please add the phone number"]
    }

},
{
    timestamps:true
})

const Contact=mongoose.model('Contact',contactSchema);
module.exports=Contact