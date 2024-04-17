const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb+srv://gautamsanghrakshit:9pgqhb0ZCuGDFGnG@cluster0.epbc3ke.mongodb.net/tellme");

const User = mongoose.model("User", { fname: String, email: String });

const newUser = new User({ fname: "bablu", email: "aaa@gmail.com" });

newUser.save();
