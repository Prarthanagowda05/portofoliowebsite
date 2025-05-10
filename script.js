const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'b2b44e5f58msh4911094e27e03ddp11e50cjsn4135bc8aa95b',
        'x-rapidapi-host': 'foreca-weather.p.rapidapi.com'
    }
};


const getWeather = (city) =>{
    cityName.innerHTML= city
fetch('https://foreca-weather.p.rapidapi.com/forecast/15minutely/102643743?alt=0&tempunit=C&windunit=MS&tz=Asia%2FBanglore&periods=8&dataset=full/city='+ city, options)
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        
        const forecastData = data.forecast;

        
        time.innerHTML = forecastData[0].time;
        symbol.innerHTML = forecastData[0].symbol;
        symbolPhrase.innerHTML = forecastData[0].symbolPhrase;
        temperature.innerHTML = forecastData[0].temperature; 
        feelsLikeTemp.innerHTML = forecastData[0].feelsLikeTemp; 
        relHumidity.innerHTML = forecastData[0].relHumidity;
        dewPoint.innerHTML = forecastData[0].dewPoint;
        windDir.innerHTML = forecastData[0].windDir;
        windSpeed.innerHTML = forecastData[0].windSpeed;
        windGust.innerHTML = forecastData[0].windGust;
        windDirString.innerHTML = forecastData[0].windDirString;
        precipProb.innerHTML = forecastData[0].precipProb;
        snowRate.innerHTML = forecastData[0].snowRate;
        precipRate.innerHTML = forecastData[0].precipRate;
        cloudiness.innerHTML = forecastData[0].cloudiness;
        thunderProb.innerHTML = forecastData[0].thunderProb;

    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e) =>{
    e.preventDefault()
    getWeather(city.value)
} )

getWeather("Delhi")