const state = {
    tempNumber: 70, //temporary num, make default current temp
    cityName: "",
}

const initialTemp = () => {
    const temp = document.getElementById("temp-number")
    temp.textContent = state.tempNumber;
    changeColorTemp()
    changeLandscape()
}

const decreaseTemp = () => {
    const temp = document.getElementById("temp-number")
    temp.textContent = state.tempNumber -= 1;
    changeColorTemp()
    changeLandscape()
}

const increaseTemp = () => {
    const temp = document.getElementById("temp-number")
    temp.textContent = state.tempNumber +=1;
    changeColorTemp()
    changeLandscape()
}

const changeColorTemp = () => {
    
    const temp = document.querySelector("#temp-number")
    // const currentColor = temp.classList
    
    if (state.tempNumber >= 80) {
        temp.classList = ["red"]
    } else if (state.tempNumber >= 70 && state.tempNumber <= 79) {
        temp.classList = ["orange"]
    } else if (state.tempNumber >= 60 && state.tempNumber <= 69) {
        temp.classList = ["yellow"]
    } else if (state.tempNumber >= 50 && state.tempNumber <= 59) {
        temp.classList = ["green"]
    } else if (state.tempNumber <= 49) {
        temp.classList = ["teal"]
    }
};

const changeLandscape = () => {
    const landscape = document.getElementById("landscape")
    if (state.tempNumber >= 80) {
        landscape.textContent = "🌵  🐍 🦂 🌵🌵  🐍 🏜 🦂"
    } else if (state.tempNumber >= 70 && state.tempNumber <= 79) {
        landscape.textContent = "🌸🌿🌼 🌷🌻🌿 ☘️🌱 🌻🌷"
    } else if (state.tempNumber >= 60 && state.tempNumber <= 69) {
        landscape.textContent = "🌾🌾 🍃 🪨  🛤 🌾🌾🌾_🍃"
    } else if (state.tempNumber <= 59) {
        landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲" 
    }
};

const changeSky = ({target: {value}}) => {
    const sky = document.getElementById("sky")
    const skyBackground = document.getElementById("sky-gradient")
    if (value == "Sunny") {
        sky.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
        skyBackground.classList = ['sunny']
    } else if (value == "Cloudy") {
        sky.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
        skyBackground.classList = ['cloudy']
    } else if (value == "Rainy") {
        sky.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
        skyBackground.classList = ['rainy']
    } else if (value == "Snowy") {
        sky.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨" 
        skyBackground.classList = ['snowy']
    }
};

const changeCityName = () => {
    let cityNameBox = document.getElementById("city-title")
    let cityInput = document.getElementById("city-input")
    let cityInputContent = cityInput.value
    cityNameBox.textContent = cityInputContent
};


const registerEvents = () => {
    initialTemp()
    const decreaseButton = document.getElementById("decrease-button");
    decreaseButton.addEventListener("click", decreaseTemp)
    const increaseButton = document.getElementById("increase-button");
    increaseButton.addEventListener("click", increaseTemp)
    const cityTitle = document.querySelector("#city-input")
    cityTitle.addEventListener("input",changeCityName)
    const skySelect = document.getElementById("sky-selector")
    skySelect.addEventListener("change", changeSky)
    const searchCity = document.querySelector("#city-input")
    searchCity.addEventListener("click", findLatitudeAndLongitude)
}

document.addEventListener("DOMContentLoaded", registerEvents)

// Location API
const axios = require('axios');

const LOCATIONIQ_KEY = process.env['locationIQ_key'];

const findLatitudeAndLongitude = (city) => {
    let latitude, longitude;
    
    axios.get('https://us1.locationiq.com/v1/search.php',
    {
        params: {
            key: LOCATIONIQ_KEY,
            q: city,
            format: 'json'
        }
    })
    .then(response => {
        latitude = response.data[0].lat;
        longitude = response.data[0].lon;
        findTemp(latitude, longitude);
    })
    .catch(error => {
        console.log(error, 'error in findLatitudeAndLongitude!');
    });
}

// OpenWeather API
const OPENWEATHER_KEY = process.env['openWeather_key']

const findTemp = (lat, lon) => {
    
    axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_KEY}`)
    .then(response => {
        return response.data.current.temp
    })
    .catch(error => {
        console.log(error, "Temperature could not be found.")
    })
}