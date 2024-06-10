const mongoose= require('mongoose');


const menuSchema=new mongoose.Schema({
    item:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:["sweet","spicy","sour"],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false,
        required:true
    },
    ingredients:{
        type:[String],
        default:[],
        required:true
    },
    num_sales:{
        type:Number,
        default:0,
        required:true
    }
})
const Menu= mongoose.model("Menu",menuSchema);
module.exports=Menu;