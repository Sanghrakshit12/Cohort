const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) {
        return console.log("fuck");
    }
    console.log(data)
})