const express = require('express');
const jobRoutes = require('./router/Job');
const mongoose = require('mongoose')

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/jobApp")
.then(() =>{
    console.log('database connected')
})
.catch((err) => {
    console.log('database not connect', err)
})

app.use(express.json())

app.use("/api/v1/job/",jobRoutes);

app.listen(5000, () => {
    console.log('server is up and running')
})
