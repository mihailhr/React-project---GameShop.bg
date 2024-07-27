const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    username:{type:String,required:true,minlength:5},
   
    email:{type:String,required:true,minlength:8},
    password:{type:String,required:true,minlength:8}
    
})

const User=new mongoose.model("User",UserSchema)

const GameSchema=new mongoose.Schema({
    name:{type:String,required:true,minlength:2},
    category:{type:String,required:true,enum: ["sports","action","adventure","kids","other","horror"]},
    mainImage:{type:String,required:true,minlength:10},
    secondaryImage:{type:String,required:true,minlength:10},
    trailer:{type:String,required:true,minlength:10},
    description:{type:String,required:true,minlength:20},
    price:{type:Number,required:true,min:0},
    creator:{type:String},
    buyers:{type:Array}
})

const Game=new mongoose.model("Game",GameSchema)

module.exports={User,Game}