// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

//nodemon
const nodemon = require('nodemon');

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
const server = app.listen(port,()=>{console.log(`app listening in port ${port}.`)});

//adding a ge route
app.get('/data', (req,res)=>{
 res.send(projectData)
});

//adding post route
app.post('/save', (req,res)=>{
    projectData = req.body;
    res.send()
})