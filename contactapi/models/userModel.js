const mongoose=require('mongoose');




const userSchema= mongoose.Schema({
    username:{
        type:String,
        required:[true,"please add the user name"]
    },
    email:{
        type:String,
        required:[true,"please add the email"]
    },
    password:{
        type:String,
        required:[true,"please add the user password"]
    }
},
{
    timestamps:true 
});

const User=mongoose.model("User",userSchema);

module.exports=User;