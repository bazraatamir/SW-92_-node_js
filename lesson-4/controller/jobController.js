const JobModel = require("../model/jobModel");

exports.postJob = async (req, res) => {
  const { jobName, jobDescription, jobDeadline, salary, jobStatus } = req.body;
  console.log(jobStatus);
  try {
    let jobData = await JobModel.create({
      JobName: jobName,
      jobDescription: jobDescription,
      jobDeadline: jobDeadline,
      salary: salary,
      JobStatus: jobStatus,
    });
    res.status(200).json({
      message: "амжилтай",
      data: jobData,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.getJob = async (req, res) => {
  try {
    let data = await JobModel.findAll();
    res.status(200).json({
      message: "амжилтай",
      data: data,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.UpdateJob = async (req, res) => {
  const id = req.params.id;
  const { jobName, jobDescription, jobDeadline, salary, jobStatus } = req.body;
  try {
    const updateData = await JobModel.update(
      {
        JobName: jobName,
        jobDescription: jobDescription,
        jobDeadline: jobDeadline,
        salary: salary,
        JobStatus: jobStatus,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({
      message: "амжилтай",
      data: updateData,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.deleteJob = async (req, res) => {
  const id = req.params.id;
  try {
    let deleteData = await JobModel.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      message: "амжилтай",
      data: deleteData,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
