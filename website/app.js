/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=bec0344e6a513c7bd014f38d1e0e9e44&units=imperial';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// get generate element
document.getElementById('generate').addEventListener('click', doAction);

// make fucntion called do action
function doAction(e) {
    // get value
    const zipcode = document.getElementById("zip").value;
    // add the value to get the data
    getWeatherData(baseURL, zipcode, apiKey);
}

//fetch the data 
const getWeatherData = async (baseURL, zip, key) => {
    const res = await fetch(baseURL+zip+key)
    //const response = await fetch("/fakeData")
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
        method: 'POST',
        credentials: 'same-origin',
        headers:{
        'Content-Type' : 'application/json',
    },
    body: JSON.stringify(data),// to match content type in header
})

    try {
        // getting response
        const newData = await response.json();
        return newData;
    }
    catch(error) {
        // handling errors properly
        console.log("error", error);
    }



}
/*FUNCTION TO GET project Data */ 
const retrieveData = async () => {
    const response = await fetch('/all');
    try {
        // transform into json
        const alldata = response.json()
        console.log(alldata);
    }
    catch(error) {
        console.log("error",  error);
        // handling error porperly
    }
}