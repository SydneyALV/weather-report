const state = {
    tempNumber: 70, //temporary num, make default current temp
    landscape: "",
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
    temp.textContent = state.tempNumber--;
    changeColorTemp()
    changeLandscape()
}

const increaseTemp = () => {
    const temp = document.getElementById("temp-number")
    temp.textContent = state.tempNumber++;
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
        landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    } else if (state.tempNumber >= 70 && state.tempNumber <= 79) {
        landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    } else if (state.tempNumber >= 60 && state.tempNumber <= 69) {
        landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    } else if (state.tempNumber <= 59) {
        landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲" 
    }
};

const changeCityName = () => {
    let citynamebox = document.getElementById("city-title")
    let citynameboxContent = citynamebox.textContent
    let cityinput = document.getElementById("city-input")
    let cityinputContent = cityinput.textContent
    console.log(cityinputContent)
    citynameboxContent = cityinputContent
};

const registerEvents = () => {
    initialTemp()
    const decreaseButton = document.getElementById("decrease-button");
    decreaseButton.addEventListener("click", decreaseTemp)
    const increaseButton = document.getElementById("increase-button");
    increaseButton.addEventListener("click", increaseTemp)
    const citytitle = document.querySelector("#city-input")
    citytitle.addEventListener("type",changeCityName)
}

document.addEventListener("DOMContentLoaded", registerEvents)



// Location API

// OpenWeather API