const express = require("express");
const jwt = require("jsonwebtoken")
const x = express();
x.use(express.json())

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];
function userExists(user, pwd) {
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username == user && ALL_USERS[i].password == pwd) {
            return 1;
        }
    }
    return 0;
}
x.post("/signup", (req, res) => {
    const username = req.body.username;
    const pwd = req.body.pwd;
    if (!userExists(username, pwd)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }
    const token = jwt.sign({username:username}, "1234");
    res.json({ token });
})

x.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try {
        const s = jwt.verify(token, "1234")
        const username = s.username;
        res.json({ user: username})
    }
    catch (err) {
        res.status(403).json({ msg: "Fuck Off" })
    }

})

x.use(function (err, req, res, next) {
    res.send("Something wrong with server");
})
x.listen(3000);