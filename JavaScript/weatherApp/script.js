const apikey="6008ba3af0b8bc1943198c704a308e48";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serchBox = document.querySelector(".search input");
const serchBtn =document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkweather(city){
     const response = await fetch(apiurl+ city + `&appid=${apikey}`);
    
     if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
     }

    else{
    var data= await response.json();
    const name=data.name;
        const enter=serchBox.value;
        const lowerText = name.toLowerCase();
        const lower = enter.toLowerCase();
    if(lowerText!=lower){
        alert("Please enter more specific location");
    }
    else{
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
    document.querySelector(".weather").style.display="block";
    
    document.querySelector(".error").style.display="none";
}
}}
serchBtn.addEventListener("click", ()=>{
    checkweather(serchBox.value);
})