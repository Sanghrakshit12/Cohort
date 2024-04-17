const express = require("express");
const port = 3000;
const zod = require("zod")
const val = express();
val.use(express.json())

const sc = zod.array(zod.number())

val.post('/a', function (req, res) {
    const x = req.body.x;
    const response = sc.safeParse(x);
    res.send(response);
});

// val.use((err, req, res, next) => {
//     res.status(500).json({ msg: "Something wrong with server" });
// })
val.listen(port);