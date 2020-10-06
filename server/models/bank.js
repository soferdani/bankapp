const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const BankSchema = new Schema ({
    amount: Number,
    vendor: String,
    category: String
})

const Bank = mongoose.model("bank",BankSchema)
module.exports = Bank