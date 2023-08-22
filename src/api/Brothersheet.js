const mongoose = require('mongoose')

const BrotherSchema = new mongoose.Schema({
    item: String,
    price: Number,
    availability: String
})

const BrotherApi = mongoose.api("Brother", BrotherSchema)
module.exports = BrotherApi