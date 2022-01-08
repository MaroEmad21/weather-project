// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors  = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
// added the port
const port = 8080;
// run the server
app.listen(port, () => {
    console.log(`running on http://localhost:${port}`)
});
// intialize all route
app.get('/all' , getprojectData)
// fucntion to complete get all
function getprojectData(req, res){
    res.send(projectData)
    console.log(projectData);
}
// POST route
app.post('/hey', addData)

function addData(req, res){
    projectData = {...req.body}
    console.log(req.body)
    res.send(projectData)
}
