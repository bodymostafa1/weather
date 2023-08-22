var highdeg=document.querySelector(".highdeg")
var findbtn=document.querySelector(".find-btn")
var condition=document.querySelector(".condition")
var prec = document.querySelector(".prec")
var windspeed = document.querySelector(".wind-speed")
var direction = document.querySelector(".direction")
var todayimg = document.getElementById("today-img")
var thirdtemp= document.querySelector(".thirdtemp")
var thirdtempsm= document.querySelector(".thirdtemp-sm")
var thirdcondition= document.querySelector(".third-condition")
var nexttemp= document.querySelector(".next-temp")
var nexttempsm= document.querySelector(".next-temp-sm")
var nextcondition= document.querySelector(".next-condition")
var todayday = document.querySelector(".todayday")
var todaydate= document.querySelector(".todaydate")
var nextday = document.querySelector(".nextday")
const date = new Date();
const options = {
    month: 'long',
    day: 'numeric',
}
const option = {
  weekday: 'long',
};

todayday.innerText = date.toLocaleString('en-IN', option);
todaydate.innerText = date.toLocaleString('en-IN', options)
getweather("cairo")
findbtn.addEventListener("click",function(e){
mycity = document.querySelector(".city-input").value
getweather(mycity)
})
async function getweather(city){
 var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=45bd1a269106451e89c121232230408&q=${city}&days=3`)
 var weather = await response.json()
 console.log(weather)
 highdeg.innerText= weather.current.temp_c+" C"
 condition.innerText=weather.current.condition.text
 prec.innerText = weather.current.humidity+"%"
 windspeed.innerText=weather.current.gust_kph+"Km/h"
 direction.innerText=weather.current.wind_dir
 todayimg.src = weather.current.condition.icon
 thirdtemp.innerText = weather.forecast.forecastday[2].day.maxtemp_c+" C"
 thirdtempsm.innerText = weather.forecast.forecastday[2].day.mintemp_c+" C"
 thirdcondition.innerText = weather.forecast.forecastday[2].day.condition.text
 nexttemp.innerText = weather.forecast.forecastday[1].day.maxtemp_c+" C"
 nexttempsm.innerText = weather.forecast.forecastday[1].day.mintemp_c+" C"
 nextcondition.innerText = weather.forecast.forecastday[1].day.condition.text
}
