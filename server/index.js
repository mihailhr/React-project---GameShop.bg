const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { User, Game } = require("./mongooseModels");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const secret = "dsajioadsniodasioadsisda  sadasd";
const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true // Allow cookies to be sent and received
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/register",async (req,res)=>{
    console.log("point")
    try {
        const newPass=await bcrypt.hash(req.body.password,10)
        req.body.password=newPass
        console.log(req.body)
        const creatingUser=await User.create(req.body)
        if(!creatingUser){
            console.log("Problem ocurred")
            res.status(400).send("Problem")
            
        }
        const token=jwt.sign(req.body.username,secret)
        const creatingCookie=await res.cookie("token",token)
        if(!creatingCookie){
            res.status(400).send("Couldnt create cookie")
            
        }
        res.status(200).send("Alright, user created, token attached")
    } catch (error) {
        res.status(400).send(error)
    }
})
app.post("/login",async (req,res)=>{
    const findingUser=await User.findOne({username:req.body.username})
    if(!findingUser){
        return res.status(404).send("No such user")
    }
    const checkingPassword=await bcrypt.compare(req.body.password,findingUser.password)
    if(!checkingPassword){
        return res.status(404).send("Wrong username or password")
    }
    const token=jwt.sign(req.body.username,secret)
        const creatingCookie=await res.cookie("token",token)
        if(!creatingCookie){
            res.status(400).send("Couldnt create cookie")
            
        }
        res.status(200).send("Alright, user logged in, token attached")
})

app.post("/auth",async (req,res)=>{
    const token=req.cookies.token
    if(!token){
        return res.status(404)
    }
    const verifyingCookie=jwt.verify(token,secret)
    if(!verifyingCookie){
        return res.status(404)
    }
    
    const findingUser=await User.find({username:verifyingCookie})
    if(!findingUser){
        return res.status(404).send("No such user")
    }
    res.status(200).send(verifyingCookie)

})
app.post("/publishGame",async (req,res)=>{
    console.log(req.body)
})


app.post("/createNewGame",async (req,res)=>{
    try {
        const creatingGame=await Game.create(req.body)
        if(!creatingGame){
            return res.status(404).send("Problem")
        }
        return res.status(200).send("Game created")
    } catch (error) {
        return res.status(404).send(error)
    }
})
mongoose.connect("mongodb://localhost:27017/gameShop")
    .then(() => {
        app.listen(port, () => {
            console.log(`Successfully connected and listening on port ${port}`);
        });
    })
    .catch(error => {
        console.log(`Error connecting to MongoDB: ${error}`);
    });