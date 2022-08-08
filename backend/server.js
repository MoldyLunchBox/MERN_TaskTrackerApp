require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const workoutsRoutes = require('./routes/workouts')

//express app
const app = express()
app.use((req, res, next)=>{
    console.log(req.path, req.method, req.body)
    next()
})

app.use(express.json())
app.use(cors())

//routes
app.use('/api/workouts',workoutsRoutes)

// connect to db

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongodb connected")
    // listen for requests
    app.listen(process.env.PORT, ()=>{
    console.log("listening on port 4000\nhttp://localhost:" + process.env.PORT)
})
})
.catch((err)=>{
    console.log(err)
})


