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
        // console.log(err)
        console.log("City does not exist.")
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
        console.log(response.data.main.temp)
        const current_temp = response.data.main.temp; // in kelvin
        let tempNumber = document.getElementById("temp-number");

        const celsius = document.querySelector('#celsius')
        const fahrenheit = document.querySelector('#fahrenheit')
        if (celsius.classList.contains('active')) {
            celsius.classList.remove('active');
            fahrenheit.classList.add('active');
        }
        
        state.tempNumber = Math.floor(current_temp);
        console.log("This is my temp:", state.tempNumber)
        tempNumber.textContent = state.tempNumber;
        changeColorTemp()
        changeLandscape()
    } catch (error) {
        // console.log(error, "Temperature could not be found.")
    }
}

const state = {
    tempNumber: null,
    cityName: "Atlanta",
}

const initialTemp = async () => {
    const temp = document.getElementById("temp-number")
    temp.textContent = state.tempNumber;
    await findTemp()
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
    const celsius = document.querySelector('#celsius')
    const fahrenheit = document.querySelector('#fahrenheit')
    
    let tempF = 0;    
    if (celsius.classList.contains('active')) {
        tempF = Math.floor((state.tempNumber * 9/5) + 32);
    } 
    
    if (fahrenheit.classList.contains('active')) {
        tempF = state.tempNumber;
    }

    if (tempF >= 80) {
        temp.classList = ["red"]
    } else if (tempF >= 70 && tempF <= 79) {
        temp.classList = ["orange"]
    } else if (tempF >= 60 && tempF <= 69) {
        temp.classList = ["yellow"]
    } else if (tempF >= 50 && tempF <= 59) {
        temp.classList = ["green"]
    } else if (tempF <= 49) {
        temp.classList = ["teal"]
    }
};

const resetCityToAtlanta = () => {
    const reset_city = document.getElementById("city-title")
    reset_city.textContent = "Atlanta"
};

const changeLandscape = () => {
    // const temp = document.querySelector("#temp-number")
    const celsius = document.querySelector('#celsius')
    const fahrenheit = document.querySelector('#fahrenheit')
    
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

const convertCelsius = () => {
    console.log("Converting to Celsius")
    state.tempNumber = Math.floor(5 / 9 * (state.tempNumber - 32));
    const tempNumber = document.getElementById("temp-number")
    tempNumber.textContent = state.tempNumber
}

const convertFahrenheit = () => {
    state.tempNumber = Math.floor((state.tempNumber * 9/5) + 32);
    const tempNumber = document.getElementById("temp-number")
    tempNumber.textContent = state.tempNumber
}

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
// // const axios = require('axios');

// console.log('Axios')

// //========= LocationIQ API =========\\
// const findLatitudeAndLongitude = async (city) => {
//     let latitude, longitude;
//     try {
//         const response = await axios.get('https://weather-report-proxy-server-jk7z.onrender.com/location',
//         {
//             params: {
//                 q: city,
//             }
//         });

//         latitude = response.data[0].lat;
//         longitude = response.data[0].lon;
//         console.log("Got the coordinates")
//         return { latitude, longitude };
//     } catch (err) {
//         console.log(err)
//     }
// }


// //========= OpenWeather API =========\\
// const findTemp = async () => {
//     const cityname = state.cityName
//     const {latitude, longitude} = await findLatitudeAndLongitude(cityname)
    
//     try {
//         const response = await axios.get('https://weather-report-proxy-server-jk7z.onrender.com/weather', {
//             params: {
//                 "lat": latitude,
//                 "lon": longitude,
//             }
//         })
//         console.log("Finding temp")
//         console.log(response.data.main.temp)
//         let current_temp = response.data.main.temp; // in kelvin
//         let tempNumber = document.getElementById("temp-number");
//         tempNumber.textContent = convertFahrenheit(current_temp);
//         state.tempNumber = convertFahrenheit(current_temp);
//         changeColorTemp();
//         changeLandscape();
//     } catch (error) {
//         console.log(error, "Temperature could not be found.")
//     }
// }

// const changeColorTemp = () => {
//     const temp = document.querySelector("#temp-number")
//     celsius = document.querySelector('#celsius')
//     fahrenheit = document.querySelector('#fahrenheit')
    
//     let tempF = 0;    
//     if (celsius.classList.contains('active')) {
//         tempF = Math.floor((state.tempNumber * 9/5) + 32);
//     } 
    
//     if (fahrenheit.classList.contains('active')) {
//         tempF = state.tempNumber;
//     }

//     if (tempF >= 80) {
//         temp.classList = ["red"]
//     } else if (tempF >= 70 && tempF <= 79) {
//         temp.classList = ["orange"]
//     } else if (tempF >= 60 && tempF <= 69) {
//         temp.classList = ["yellow"]
//     } else if (tempF >= 50 && tempF <= 59) {
//         temp.classList = ["green"]
//     } else if (tempF <= 49) {
//         temp.classList = ["teal"]
//     }
// };

// const convertFahrenheit = (temp) => {
//     return Math.floor((temp - 273.15) * 9/5 + 32);
// }

// //========= State =========\\
// const state = {
//     tempNumber: null,
//     cityName: "Atlanta",
// }

// //========= Select City Tile =========\\
// const changeCityName = () => {
//     let cityNameBox = document.getElementById("city-title")
//     let cityInput = document.getElementById("city-input")
//     let cityInputContent = cityInput.value
//     state.cityName = cityInputContent
//     cityNameBox.textContent = cityInputContent
// };

// const resetCityToAtlanta = () => {
//     const reset_city = document.getElementById("city-title")
//     reset_city.textContent = "Atlanta"
// };


// //========= Temperature Tile =========\\
// const initialTemp = () => {
//     const temp = document.getElementById("temp-number")
//     temp.textContent = state.tempNumber;
//     changeColorTemp()
//     changeLandscape()
// }

// const decreaseTemp = () => {
//     const temp = document.getElementById("temp-number")
//     temp.textContent = state.tempNumber -= 1;
//     changeColorTemp()
//     changeLandscape()
// }

// const increaseTemp = () => {
//     const temp = document.getElementById("temp-number")
//     temp.textContent = state.tempNumber += 1;
//     changeColorTemp()
//     changeLandscape()
// }

// let celsius = document.querySelector('#celsius')
// let fahrenheit = document.querySelector('#fahrenheit')
// let tempF = 0;    




// //========= Weather Garden =========\\
// const changeLandscape = () => {

//     if (celsius.classList.contains('active')) {
//         tempF = Math.floor((state.tempNumber * 9/5) + 32);
//     } else if (fahrenheit.classList.contains('active')) {
//         tempF = state.tempNumber;
//     }
    
//     const landscape = document.getElementById("landscape")
//     if (tempF >= 80) {
//         landscape.textContent = "🌵  🐍 🦂 🌵🌵  🐍 🏜 🦂"
//     } else if (tempF >= 70 && tempF <= 79) {
//         landscape.textContent = "🌸🌿🌼 🌷🌻🌿 ☘️🌱 🌻🌷"
//     } else if (tempF >= 60 && tempF <= 69) {
//         landscape.textContent = "🌾🌾 🍃 🪨  🛤 🌾🌾🌾 🍃"
//     } else if (tempF <= 59) {
//         landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
//     }
// };

// const changeSky = ({ target: { value } }) => {
//     const sky = document.getElementById("sky")
//     const skyBackground = document.getElementById("sky-gradient")
//     if (value == "Sunny") {
//         sky.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
//         skyBackground.classList = ['sunny']
//     } else if (value == "Cloudy") {
//         sky.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
//         skyBackground.classList = ['cloudy']
//     } else if (value == "Rainy") {
//         sky.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
//         skyBackground.classList = ['rainy']
//     } else if (value == "Snowy") {
//         sky.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
//         skyBackground.classList = ['snowy']
//     }
// };

// //========= Registered Events =========\\
// const registerEvents = () => {
//     initialTemp();
//     //========= Select City Tile =========\\
//     const cityTitle = document.querySelector("#city-input")
//     cityTitle.addEventListener("input", changeCityName)
//     const resetButton = document.getElementById("reset-button")
//     resetButton.addEventListener("click", resetCityToAtlanta)
//     //========= Temperature Tile =========\\
//     const decreaseButton = document.getElementById("decrease-button");
//     decreaseButton.addEventListener("click", decreaseTemp)
//     const increaseButton = document.getElementById("increase-button");
//     increaseButton.addEventListener("click", increaseTemp)
//     const searchCity = document.getElementById("real-temp-button")
//     searchCity.addEventListener("click", findTemp)
//     const celsius = document.getElementById('celsius')
//     const fahrenheit = document.getElementById('fahrenheit')
//     celsius.addEventListener('click', () => {    
//         if (celsius.classList.contains('active')) {
//             return
//         }
//         fahrenheit.classList.remove('active')
//         celsius.classList.add('active')
//         convertCelsius()
//     });
//     fahrenheit.addEventListener('click', () => {
//         if (fahrenheit.classList.contains('active')) {
//             return
//         }
//         celsius.classList.remove('active')
//         fahrenheit.classList.add('active')
//         convertFahrenheit()
//     });    
//     //========= Select Sky Tile =========\\
//     const skySelect = document.getElementById("sky-selector")
//     skySelect.addEventListener("change", changeSky)
// }

// document.addEventListener("DOMContentLoaded", registerEvents)
