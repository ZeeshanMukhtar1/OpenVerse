const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorDisplay = document.querySelector(".error");
const weatherDisplay = document.querySelector(".weather");
const cityName = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");

async function checkWeather(city) {
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.status === 404) {
            errorDisplay.style.display = "block";
            weatherDisplay.style.display = "none";
        } else {
            const data = await response.json();
            const enteredCity = searchBox.value.toLowerCase();
            const fetchedCity = data.name.toLowerCase();

            if (enteredCity !== fetchedCity) {
                alert("Please enter a more specific location");
                return;
            }

            cityName.innerHTML = data.name;
            temperature.innerHTML = Math.round(data.main.temp) + "°C";
            humidity.innerHTML = data.main.humidity + "%";
            windSpeed.innerHTML = data.wind.speed + " km/hr";

            const weatherCondition = data.weather[0].main;
            switch (weatherCondition) {
                case "Clouds":
                    weatherIcon.src = "images/clouds.png";
                    break;
                case "Clear":
                    weatherIcon.src = "images/clear.png";
                    break;
                case "Rain":
                    weatherIcon.src = "images/rain.png";
                    break;
                case "Drizzle":
                    weatherIcon.src = "images/drizzle.png";
                    break;
                case "Mist":
                    weatherIcon.src = "images/mist.png";
                    break;
                default:
                    weatherIcon.src = "images/default.png";
            }

            weatherDisplay.style.display = "block";
            errorDisplay.style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

searchBtn.addEventListener("click", () => {
    errorDisplay.style.display = "none";
    weatherDisplay.style.display = "none";
    checkWeather(searchBox.value);
});
