const express = require('express')
const router = express.Router()
const bank = require ('../models/bank')

router.get('/transactions', async (req, res) => { // good
    try {
        let allTransactions = await bank.find({})
        res.send(allTransactions)
    } catch (err) {
        res.send(err)
    }
})

router.post('/transaction', async (req, res) => { //good
    try{
        const transactionToDB = req.body
        const toSave = new bank(transactionToDB) 
        toSave.save()
        res.send('transaction saved')
    } catch (err) {
        res.send(err)
    }
})

router.delete('/transaction', async (req, res) => {
    const id = req.query.id
    await bank.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send("Successful deletion")
        }
    })
})

module.exports = router

