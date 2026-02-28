const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/pugsley")

const user_schema = new mongoose.Schema({
    name: String,
    password: String,
})

module.exports = mongoose.model("users", user_schema)