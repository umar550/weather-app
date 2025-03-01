function weather() {
    let temp = document.querySelector(".city")
    let humidity = document.querySelector(".humidity")
    let pressure = document.querySelector(".pressure")
    let wind = document.querySelector(".wind")
    let cityName = document.querySelector(".input").value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8ff25391eba9c6a59c6a6fd15d962375&units=metric`)
        .then(function (response) {
            // handle success
            // console.log(response.data.main);
            temp.innerHTML = `The current Temperature in ${cityName} is ${response.data.main.temp}	&#8451;,`
            humidity.innerHTML = `Humidity ${response.data.main.humidity}%,`
            pressure.innerHTML = `Pressure ${response.data.main.pressure} hPa,`
            wind.innerHTML = `Wind Speed ${response.data.wind.speed}km.`
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}