//have event listener for search box
//click enter
//get results for city entered fetch api
//get date from browser
//add results for specified sections


const api = {
    key: "c97e19ff20ca416f8e5101801232506",
    base: "http://api.weatherapi.com/v1/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getresults(searchBox.value);

    }

}

function getresults(data) {
    //http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}
    fetch(`${api.base}current.json?key=${api.key}&q=${data}`).then(weather => {
        return weather.json()
    }).then(response => {
        displayResults(response)
    })
}

//const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

// //   fetch(apiUrl)
// //     .then((response) => {
// //       if (!response.ok) {
// //         throw new Error("City not found.");
// //       }
// //       return response.json();
// //     })
// //     .then((weatherData) => {
// //       const location = weatherData.location.name;
// //       const temperature = weatherData.current.temp_c;
// //       const humidity = weatherData.current.humidity;
// //       const description = weatherData.current.condition.text;
function displayResults(weatherInfo) {
    console.log(weatherInfo);
    let city = document.querySelector('.location .city');
    city.innerText = `${weatherInfo.location.name}, ${weatherInfo.location.country}`;

    let now = new Date();
    let dateInfo = document.querySelector('.location .date');
    dateInfo.innerText = dateBuilder(now);
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weatherInfo.current.temp_c)} <span> &#8451;</span>`;

    let weather = document.querySelector('.current .weather');
    weather.innerText = weatherInfo.current.condition.text;

    // let hilow = document.querySelector('.hi-low');
    // hilow.innerHTML = `${Math.round(weatherInfo.main.temp_min)}  <span> &#8451;</span> / ${Math.round(weatherInfo.main.temp_max)}  <span> &#8451;</span> `

}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednusday", "Thursday", "Friday", "Saturday"];
    let month = months[d.getMonth()]
    let day = days[d.getDay()];
    let date = d.getDate();
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
}
// //have event listener for search box
// //click enter
// //get results for city entered fetch api
// //get date from browser
// //add results for specified sections

// // const apiKey = "c97e19ff20ca416f8e5101801232506";
// // const city = "New York"; // Replace with the city you want to get weather information for

// // // Function to fetch weather data from the API
// // function getWeather() {
// //   const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

// //   fetch(apiUrl)
// //     .then((response) => {
// //       if (!response.ok) {
// //         throw new Error("City not found.");
// //       }
// //       return response.json();
// //     })
// //     .then((weatherData) => {
// //       const location = weatherData.location.name;
// //       const temperature = weatherData.current.temp_c;
// //       const humidity = weatherData.current.humidity;
// //       const description = weatherData.current.condition.text;

// //       console.log(`Weather in ${location}:`);
// //       console.log(`Temperature: ${temperature}°C`);
// //       console.log(`Humidity: ${humidity}%`);
// //       console.log(`Description: ${description}`);
// //     })
// //     .catch((error) => {
// //       console.log(error.message);
// //     });
// // }
