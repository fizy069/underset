const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const authMiddleware = require("../middleware/auth");

router.post("/jobs", authMiddleware(['recruiter']), async (req, res) => {
  try {
    const { title, description, eligibilityCriteria, rounds } = req.body;
    const recruiterId = req.user.id;

    const newJob = new Job({
      title,
      description,
      eligibilityCriteria,
      recruiter: recruiterId,
      company: req.user.company,
      rounds,
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/jobs", authMiddleware(['recruiter']), async (req, res) => {
  try {
    const recruiterId = req.user.id;
    const jobs = await Job.find({ recruiter: recruiterId }).populate(
      "applicants",
      "name email"
    );
    res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.patch(
  "/jobs/:id/applicants",
  authMiddleware(['recruiter']),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { applicantId, action } = req.body;

      const job = await Job.findById(id);

      if (!job) return res.status(404).json({ error: "Job not found" });

      if (job.recruiter.toString() !== req.user.id)
        return res.status(403).json({ error: "Unauthorized" });

      if (action === "accept") {
        if (!job.applicants.includes(applicantId))
          return res
            .status(400)
            .json({ error: "Applicant not found in applied list" });

        job.applicants = job.applicants.filter(
          (id) => id.toString() !== applicantId
        );
      } else if (action === "reject") {
        job.applicants = job.applicants.filter(
          (id) => id.toString() !== applicantId
        );
      } else {
        return res.status(400).json({ error: "Invalid action" });
      }

      await job.save();
      res.status(200).json(job);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

module.exports = router;
