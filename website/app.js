/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=bec0344e6a513c7bd014f38d1e0e9e44&units=imperial';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// get generate element
document.getElementById('generate').addEventListener('click', doAction);

// make fucntion called do action
function doAction(e) {
    // get value
    const zipcode = document.getElementById("zip").value;
    const content = document.getElementById("feelings").value
    
    // combine all
    const fullUrl = `${baseURL}${zipcode}${apiKey}`;
    // condition no zip added
    if (!zipcode) {
        alert("Enter zip code, please!")
    }
    // add the value to get the data
    getWeatherData(fullUrl)
    .then(result => {
        const temp = result;    
        return postData('/setData',temp, content)
    })
    .then( result => {
        retrieveData(result);
    })
}

//fetch the data 
const getWeatherData = async (fullURL) => {
    const res = await fetch(fullURL)
    //const response = await fetch("/fakeData")
    try {
        // get the response
        const data = await res.json();//we will use it in updating the ui
        console.log(data);
        return data.main.temp;
    }
    catch(error) {
        console.log('error', error);
        // handling error properly
    }
    
}
/* post Data*/ 
const postData = async (url = '' , temp, content) =>{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
        'Content-Type' : 'application/json',
    },
    body: JSON.stringify({
        date: newDate,
        temp: temp,     
        content: content
    }),// to match content type in header
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
    const response = await fetch('/getData');
    try {
        // transform into json
        const alldata = await response.json()
        console.log(alldata);
         // Write updated data to DOM elements
        document.getElementById('temp').innerHTML = Math.round(alldata.temp)+ ' degrees';
        document.getElementById('content').innerHTML = alldata.content;
        document.getElementById('date').textContent =alldata.date;
    }
    catch(error) {
        console.log("error",  error);
        // handling error porperly
    }
}