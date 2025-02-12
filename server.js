// Backend: server.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Job = require('./models/Job');
const jobRoutes = require('./routes/jobRoutes');


// Middleware
app.use(express.json());
app.use('/', jobRoutes);

main().then(() => {console.log("connection successful");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/job_portal');
}

app.get("/", (req, res) => {
    res.send("root is working")
})

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
