import 'regenerator-runtime/runtime';
import axios from 'axios';

// // Location API
const findLatitudeAndLongitude = async (city) => {
    let latitude, longitude;
    try {
        const response = await axios.get('https://weather-report-proxy-server-jk7z.onrender.com/location',
        {
            params: {
                q: city,
            }
        });

    latitude = response.data[0].lat;
    longitude = response.data[0].lon;
    return { latitude, longitude };
    } catch (err) {
        console.log(err)
    }
}

// OpenWeather API
const findTemp = async () => {
    const cityname = state.cityName
    const {latitude, longitude} = await findLatitudeAndLongitude(cityname)
    
    try {
        const response = await axios.get('https://weather-report-proxy-server-jk7z.onrender.com/weather', {
            params: {
                "lat": latitude,
                "lon": longitude,
            }
        })
        current_temp = response.data.main.temp; // in kelvin
        tempNumber = document.getElementById("temp-number");
        tempNumber.textContent = convertFahrenheit(current_temp);
        state.tempNumber = convertFahrenheit(current_temp);
        changeColorTemp()
        changeLandscape()
    } catch (error) {
        console.log(error, "Temperature could not be found.")
    }
}

const state = {
    tempNumber: null, //temporary num, make default current temp
    cityName: "Atlanta",
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
    temp.textContent = state.tempNumber += 1;
    changeColorTemp()
    changeLandscape()
}

const changeColorTemp = () => {
    const temp = document.querySelector("#temp-number")
    celsius = document.querySelector('#celsius')
    fahrenheit = document.querySelector('#fahrenheit')
    
    let tempF = 0;    
    if (celsius.classList.contains('active')) {
        tempF = Math.floor((state.tempNumber * 9/5) + 32);
    } 
    
    if (fahrenheit.classList.contains('active')) {
        tempF = state.tempNumber;
    }

    if (tempF >= 80) {
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

const resetCityToAtlanta = () => {
    const reset_city = document.getElementById("city-title")
    reset_city.textContent = "Atlanta"
};

const changeLandscape = () => {
    celsius = document.querySelector('#celsius')
    fahrenheit = document.querySelector('#fahrenheit')
    
    let tempF = 0; 
    if (celsius.classList.contains('active')) {
        tempF = Math.floor((state.tempNumber * 9/5) + 32);
    } 
    
    if (fahrenheit.classList.contains('active')) {
        tempF = state.tempNumber;
    }
    const landscape = document.getElementById("landscape")
    if (tempF >= 80) {
        landscape.textContent = "🌵  🐍 🦂 🌵🌵  🐍 🏜 🦂"
    } else if (tempF >= 70 && tempF <= 79) {
        landscape.textContent = "🌸🌿🌼 🌷🌻🌿 ☘️🌱 🌻🌷"
    } else if (tempF >= 60 && tempF <= 69) {
        landscape.textContent = "🌾🌾 🍃 🪨  🛤 🌾🌾🌾 🍃"
    } else if (tempF <= 59) {
        landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    }
};

const changeSky = ({ target: { value } }) => {
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
    state.cityName = cityInputContent
    cityNameBox.textContent = cityInputContent
};


const registerEvents = () => {
    initialTemp()
    const decreaseButton = document.getElementById("decrease-button");
    decreaseButton.addEventListener("click", decreaseTemp)
    const increaseButton = document.getElementById("increase-button");
    increaseButton.addEventListener("click", increaseTemp)
    const cityTitle = document.querySelector("#city-input")
    cityTitle.addEventListener("input", changeCityName)
    const skySelect = document.getElementById("sky-selector")
    skySelect.addEventListener("change", changeSky)
    const searchCity = document.getElementById("real-temp-button")
    searchCity.addEventListener("click", findTemp)
    const resetButton = document.getElementById("reset-button")
    resetButton.addEventListener("click", resetCityToAtlanta)
    const celsius = document.getElementById('celsius')
    const fahrenheit = document.getElementById('fahrenheit')
    celsius.addEventListener('click', () => {    
        if (celsius.classList.contains('active')) {
            return
        }
        fahrenheit.classList.remove('active')
        celsius.classList.add('active')
        convertCelsius()
    });

    fahrenheit.addEventListener('click', () => {
        if (fahrenheit.classList.contains('active')) {
            return
        }
        celsius.classList.remove('active')
        fahrenheit.classList.add('active')
        convertFahrenheit()
    });
}

document.addEventListener("DOMContentLoaded", registerEvents)
