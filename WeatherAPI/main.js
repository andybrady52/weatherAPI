let form = document.getElementById('form');
let iconUrl;
let city = "London"

getJSON(city);
function getJSON(city){
   $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=dc200ec85aa6ae970a4978634308c9a5', weatherData); 
}



function weatherData(data){
    let temp, iconUrl, weather ;
    
    
    temp = Math.floor(data.main.temp);
    iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon +".png";
    weather = data.weather[0].description;
    
    
    //Output information to DOM
    document.querySelector('.city').innerHTML = city;
    document.querySelector('.icon').src = iconUrl;
    document.querySelector('.temp').innerHTML = temp +" ºC";
    document.querySelector('.weather').innerHTML = weather;
    
}

//When submit button is clicked 
form.onsubmit = function(e){
    let formInput;
    e.preventDefault();
    
    
    formInput = form.city.value;
    //capitalise the user input
    city = formInput.charAt(0).toUpperCase() + formInput.substr(1);
    getJSON(city);
    //clear form
    form.reset();
    //call weatherData and send it the city variable
    
}