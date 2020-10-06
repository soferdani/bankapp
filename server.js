const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('./server/Routes/api')
// const path = require('path')

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/bank", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', api)


// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

//     next()
// })


const port = 3001
app.listen(port, function (req,res) {
    console.log(`running on port ${port}`);
})