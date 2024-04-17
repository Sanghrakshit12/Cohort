const express = require("express");
const jwt=require("jsonwebtoken")
const mongoose = require("mongoose");
const { string } = require("zod");
const port = 2000;
const pwd = "xxx";

mongoose.connect("mongodb+srv://gautamsanghrakshit:9pgqhb0ZCuGDFGnG@cluster0.epbc3ke.mongodb.net/myapp");


const app = express();
app.use(express.json());
const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);


app.post("/signup", async (req, res) => {
    try {
        const { username, password, name } = req.body;
        const nums = await User.find({ username: username, password: password })
        if (nums.length != 0) {
            return res.status(401).send('Username already exists')
        }

        const myuser = new User({ username: username, password: password, name: name })
        await myuser.save();
    }
    catch (err) {
        res.status(500).json({ msg: "Something wrong with server" })
    }
    res.json({ msg: "Successful" })
})

app.post("/signin",async (req, res) => {
    const { username, password } = req.body;
    const nums = await User.find({ username: username, password: password })
    if(nums.length==0)
        return res.status(401).send('User dosent exists')
    
    const token = jwt.sign({ username: username, password: password }, pwd)
    res.status(200).send(token);
})

app.get("/users",async(req,res)=>{
const token=req.headers.authorization;
try{
const x=jwt.verify(token,pwd);
const nums=await User.find();
res.status(200).send(nums)
}
catch(er){
    return res.status(404).send("authorization Revolked")
}
})

app.listen(port);

