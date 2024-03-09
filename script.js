const express = require('express');
const jobRoutes = require('./router/Job');
const mongoose = require('mongoose')

const app = express();

mongoose.connect("mongodb+srv://Trisha:DapBhWPyZwI471R1@cluster0.oaywa5b.mongodb.net/")
.then(() =>{
    console.log('database connected')
})
.catch((err) => {
    console.log('database not connect', err)
})

app.use(express.json())

app.use("/api/v1/job/",jobRoutes);

app.listen(10000, () => {
    console.log('server is up and running')
})
