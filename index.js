const express = require('express');
const app = express();
app.use(express.json())
const multer = require('multer');
const img = require('./img');
const connect = require("./db")


const store = multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

let upload = multer({
    storage: store
})

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html")
})

app.post("/",upload.single("img"),async(req, res) => {
    res.send("image uploaded successful")
    console.log(__dirname+"/"+req.file.path);

    await img.create({img:__dirname+"/"+req.file.path})
})

app.listen(8090,()=>{
    connect()
    console.log("listening on 8090");
})