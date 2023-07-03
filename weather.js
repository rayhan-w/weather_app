const inputBox= document.getElementById(`getinput`);
const serchBtn=document.getElementById(`serchBtn`);
const temperature=document.getElementById(`temperature`);


 async function checkWeather(city){
    const api_key="7aefde31cb15f77caec1a39b6547c180";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

//     const weather_data= await fetch(`${url}`).then(response =>response.json());
//     temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

const response = await fetch(`${url}`);
if (response.ok) {
  const weather_data = await response.json();
  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
} else {
  temperature.innerHTML = " Weather data not found for " + city;
}
   

}

serchBtn.addEventListener(`click`,()=>{
    checkWeather(inputBox.value);
});

