/* Global Variables */
const baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=c6aef926523d47d5e027b20e30bacfbc&units=imperial';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// get generate element
document.getElementById('generate').addEventListener('click', doAction)

// make fucntion called do action
function doAction(e) {
    // get value
    const zip = document.getElementById('zip').value;
    // add the value to get the data
    getWeatherData(baseURL, zip, apiKey);
}

//fetch the data 
const getWeatherData = async (baseURL, zipcode, key) => {
    const res = await fetch(baseURL+zipcode+key)
    try {
        // get the response
        const data = res.json();//we will use it in updating the ui
        console.log(data);
    }
    catch(error) {
        console.log('error', error);
        // handling error properly
    }
}
/* post Data*/ 

