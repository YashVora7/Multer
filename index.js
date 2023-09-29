const express = require('express');
const app = express();
const multer = require('multer');

let upload = multer({
    dest: "images"
})

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html")
})

app.post("/",upload.single("img"),(req, res) => {
    res.send("image uploaded successful")
})

app.listen(8090,()=>{
    console.log("listening on 8090");
})