/* Global Variables */
let baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=c6aef926523d47d5e027b20e30bacfbc&units=imperial';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// get generate element
document.getElementById('generate').addEventListener('click', doAction);

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
const postData = async (url = '' ,data ={}) =>{
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers:{
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(data),// to match content type in header
})

    try {
        // getting data
        const newData = await response.json();
        return newData
    }
    catch(error) {
        // handling errors properly
        console.log("error", error);
    }



}
/*FUNCTION TO GET project Data */ 
const returnData = async () => {
    const response = await fetch('/all');
    try {
        // transfor
        const alldata = response.json()
        console.log(alldata);
    }
    catch(error) {
        console.log("error",  error);
        // handling error porperly
    }
}