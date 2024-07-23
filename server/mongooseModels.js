const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    username:{type:String,required:true,minlength:5},
    age:{type:Number,required:true,min:5,max:125},
    email:{type:String,required:true,minlength:8},
    password:{type:String,required:true,minlength:8}
})

const User=new mongoose.model("User",UserSchema)

module.exports={User}