function search(event) {
    event.preventDefault();
    let cityState = document.querySelector("#placeholder");
    let cityInput = document.querySelector("#city-input");
    cityState.innerHTML = cityInput.value;

    let apiKey = "760e49a44965edfb62782472a1509131";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTemp);
}

let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", search);

//
//
//
//

function displayTemp(response) {
    console.log(response);
    let tempRound = Math.round(response.data.main.temp);

    let tempDisplay = document.querySelector("#display-temp");
    tempDisplay.innerHTML = `${tempRound}°`;
}

//
//
//
//

function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let dayList = date.getDay();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let day = days[dayList];
    return `${day} ${hours}:${minutes}`

}

let todayIs = document.querySelector("#day-time")
let date = new Date();

todayIs.innerHTML = formatDate(date);