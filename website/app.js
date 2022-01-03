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
    const zip = document.getElementById('zip').value;
    getWeatherData(baseURL, zip, apiKey);
}


const getWeatherData = async (baseURL, zipcode, key) => {
    const res = await fetch(baseURL+zipcode+key)
    try {
        const data = res.json();
        return data
    }
    catch(error) {
        console.log('error', error);
    }
}


