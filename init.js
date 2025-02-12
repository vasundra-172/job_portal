const mongoose = require('mongoose');
const Job = require('./models/Job');

main().then(() => {console.log("connection successful");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/job_portal');
}

// Sample job posts
const sampleJobs = [
  { title: "Software Engineer", company: "Tech Corp", location: "New York", description: "Develop and maintain software applications." },
  { title: "Web Developer", company: "Web Solutions", location: "San Francisco", description: "Create and optimize web applications." },
  { title: "Data Analyst", company: "Data Insights", location: "Chicago", description: "Analyze and interpret complex datasets." }
];

// Insert sample jobs if database is empty
Job.insertMany(sampleJobs)