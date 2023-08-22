const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserApi = require('./api/Brothersheet')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Cluster21379:IXvpnMs1sADIfz3z@cluster21379.ygrme2n.mongodb.net/")

app.get('/getBrothersheet', (req, res) => {
  UserApi.find()
  .then(brothersheet => res.json(brothersheet))
  .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log("Server is Running")
})