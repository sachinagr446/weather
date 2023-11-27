const input =document.getElementById("input");
const search_btn=document.getElementById("search-btn");
const time=document.getElementById("time");
const date=document.getElementById("date");
const temp=document.querySelector(".temp");
const weather=document.querySelector(".describe");
const humid_data=document.getElementById("humid-data");
const wind_data=document.getElementById("wind-data");
const image=document.querySelector(".images");
let calendar =new Date();
let day = calendar.getDate();
let month = calendar.getMonth();
let din = calendar.getDay();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months=['jan','feb','march','april','may','june','july','august','september','oct','nov','dec'];

console.log(`${day} ${months[month]}`);
date.innerText=`${days[din]}, ${day} ${months[month]}`;


 let times = calendar.getHours();
 let min = calendar.getMinutes();

let timeo=parseInt(times);
console.log(timeo);
 const timeog=timeo%12;
 let ampm= (time>12)?"pm":"am";

time.innerText=`${timeog}:${min} ${ampm} `; 




//
async function checkweather(city){
    const api_key='2b5868311a102a8b902d376840cd71a3';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data= await fetch(`${url}`).then(response=>
        response.json());
        console.log(weather_data);
        temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
        weather.innerHTML = `${weather_data.weather[0].description}`;

        humid_data.innerHTML = `${weather_data.main.humidity}%`;
        wind_data.innerHTML = `${weather_data.wind.speed}Km/hr`;
        switch(weather_data.weather[0].main){
            case 'Clouds':
                image.src = "/image/cloud.png";
                break;
            case 'Clear':
                image.src = "/image/sun.png";
                break;
            case 'Rain':
                image.src = "/image/rain.png";
                break;
            case 'Mist':
                image.src = "/image/mist.png";
                break;
            case 'Snow':
                image.src = "/image/snow.png";
                break;
    
            case "Smoke":
                image.src ="/image/smoke.png";
                break;
                case "Haze":
                image.src ="/image/smoke.png";
                break;
    
    
        }
}
search_btn.addEventListener("click", ()=>{
    checkweather(input.value);
}
)