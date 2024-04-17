const express = require("express");
const port = 3000;
const val = express();

val.use(express.json());

val.use(userMiddleware);
val.use(mainMiddleware);

const nums = [{
    fname: "anita",
    sex: "female"
}, {
    fname: "bon",
    sex: "male"
}]

function userMiddleware(req, res, next) {
    const user = req.headers.username;
    const pwd = req.headers.password;
    if (user != "Bablu" || pwd != "lund") {
        res.status(403).json({msg:"Wrong Credentials"})
        return;
    }
    next();
}

function mainMiddleware(req, res, next) {
    let l = nums.length;
    for (let i = 0; i < l; i++) {
        if (nums[i].sex === "female") {
            next()
        }
    }
    res.status(400).json({msg:"Need to have females"});
}

val.get('/', function (req, res) {
    let l = nums.length;
    let hawas = 0;
    for (let i = 0; i < l; i++) {
        if (nums[i].sex == "female") {
            hawas++;
        }
    }
    res.json({ hawas, l })
});
val.post('/', function (req, res) {
    x = req.body.x;
    nums.push({ fname: "sexa", sex: x })
    res.json({ msg: "Done" });
});
val.put('/', function (req, res) {
    let l = nums.length;
    for (let i = 0; i < l; i++) {
        if (nums[i].sex == "male") {
            nums[i].sex = "female";
        }
    }

    res.json(nums);
});
val.delete('/', function (req, res) {
    const num = [];
    let l = nums.length;
    for (let i = 0; i < l; i++) {
        if (nums[i].sex != "male") {
            num.push(nums[i]);
        }
    }
    res.send(num);
});
val.listen(port);


