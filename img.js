const mongoose = require("mongoose")

const imgSchema = new mongoose.Schema(
    {
        img:String
    }
);

let img = mongoose.model("img",imgSchema)

module.exports=img