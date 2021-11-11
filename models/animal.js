const mongoose = require("mongoose")
const animalSchema = mongoose.Schema({
    ctype: String,
    cnum: Number,
    location: String
})
module.exports = mongoose.model("animal", animalSchema)