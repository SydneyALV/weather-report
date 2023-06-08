const state = {
    tempNumber: 70 //temporary num, make default current temp
}

const initialTemp = () => {
    const temp = document.getElementById("temp-number")
    temp.textContent = state.tempNumber;
    changeColorTemp()
}

const decreaseTemp = () => {
    const temp = document.getElementById("temp-number")
    temp.textContent = state.tempNumber--;
    changeColorTemp()
}

const increaseTemp = () => {
    const temp = document.getElementById("temp-number")
    temp.textContent = state.tempNumber++;
    changeColorTemp()
}

const changeColorTemp = () => {
    
    const temp = document.querySelector("#temp-number")
    // const currentColor = temp.classList
    
    if (state.tempNumber >= 80) {
        temp.classList = ["red"]
        console.log("red")
    } else if (state.tempNumber >= 70 && state.tempNumber <= 79) {
        temp.classList = ["orange"]
        console.log("orange")
    } else if (state.tempNumber >= 60 && state.tempNumber <= 69) {
        temp.classList = ["yellow"]
        console.log("yellow")
    } else if (state.tempNumber >= 50 && state.tempNumber <= 59) {
        temp.classList = ["green"]
    } else if (state.tempNumber <= 49) {
        temp.classList = ["teal"]
    }
}



const registerEvents = () => {
    initialTemp()
    const decreaseButton = document.getElementById("decrease-button");
    decreaseButton.addEventListener("click", decreaseTemp)
    const increaseButton = document.getElementById("increase-button");
    increaseButton.addEventListener("click", increaseTemp)
}

document.addEventListener("DOMContentLoaded", registerEvents)



// Location API

// OpenWeather API