const JobModel = require("../model/Model");

const createJob = async (req, res) => {
  try {
    const newJob = new JobModel(req.body);
    const newlyInsertedJob = await newJob.save();
    res.json({
      message: "Job added successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Something went wrong.",
    });
  }
};

const getJob = async (req, res) => {
  const jobList = await JobModel.find({});
  res.json({
    result: jobList,
  });
};

const editJob = async (req, res) => {
const updatedRecord = await JobModel.updateOne(
    {
      _id: req.body._id,
    },
    {
      $set: req.body,
    }
  );
  res.json({
    mes: "success",
  });
};

const deleteJob = async (req, res) => {
    console.log(req.body)
 
    try {
        JobModel.deleteOne({_id: req.body._id})
        res.json({
          success: true,
          message: "Job deleted successfully",
        });
      } catch (err) {
        res.status(500).json({
          success: false,
          message: "Something went wrong, please try again after some time",
        });
      }
  };

module.exports = {
  createJob,
  getJob,
  editJob,
  deleteJob
};
