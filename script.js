const apikey ="be1ffde94000ba4832c3628eafaa3f32";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search Button");
const imges = document.querySelector(".Weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl+ city +`&appid=${apikey}`);
  var data = await response.json();   
  
   if(response.status== 404){
    document.querySelector('.error').style.display="block";
    document.querySelector(".Weather").style.display="none";
   }else {

    console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
  document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
  document.querySelector(".wind").innerHTML = data.wind.speed +" m/s";

  if(data.weather[0].main=="Clouds"){
    imges.src="image/clouds.png";
  }else   if(data.weather[0].main=="Clear"){
    imges.src="image/clear.png";
  }else  if(data.weather[0].main=="Drizzle"){
    imges.src="image/drizzle.png";
  }else  if(data.weather[0].main=="Smoke"){
    imges.src="image/mist.png";
  }else  if(data.weather[0].main=="Rain"){
    imges.src="image/rain.png";
  }else  if(data.weather[0].main=="Snow"){
    imges.src="image/snow.png";
  }

 document.querySelector(".Weather").style.display="block";
 document.querySelector('.error').style.display="none";

   }

  
}

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
