// Backend: routes/jobRoutes.js
const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

router.get('/home', async (req, res) => {
    let jobs = await Job.find();
    console.log(jobs);
    res.render("index.ejs", {jobs})
    })

router.get('/create', async(req, res) => {
    res.render("new.ejs");
})

router.get('/login', (req, res) => {
  res.render('login.ejs');
});

router.get('/search', async (req, res) => {
    try {
        const { title, location } = req.query; 
        let query = {};

        if (title) query.title = { $regex: new RegExp(title, 'i') };  
        if (location) query.location = { $regex: new RegExp(location, 'i') }; 

        const jobs = await Job.find(query);

        if (jobs.length === 0) {
            return res.render('search', { allJobs: [], title, location, message: "No jobs found matching your search criteria." });
        }

        res.render("search.ejs", { allJobs: jobs, title, location, message: null });
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router;
