const mongoose = require('mongoose')

const jobSchema = {
    Title:{
        type: String,
        required: true
    },
    Description:{
        type:String,
        required: true
    },
    Company:{
        type:String,
        required: true
    },
    Location:{
        type:String,
        required: true
    },
    Salary:{
        type:String,
        required: true,
        default: 0

    }
}

const jobModel = mongoose.model("jobs", jobSchema);
module.exports = jobModel;