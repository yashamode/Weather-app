const api={
    key:'1324061d5632d019b9b8fe8a26c00da5',
    base: 'https://api.openweathermap.org/data/2.5/weather?',
};

const Input=document.getElementById('input');

Input.addEventListener('keypress',(event)=>{
    if(event.keyCode==13)
    {
        getWeather(Input.value);

        
        const date=moment();
        document.getElementById('date').innerHTML=date.format('Mo MMM YYYY dddd, h:mm:ss');
        document.querySelector('.main-weather').style.display='block';
    }
});

function getWeather(city)
{
    fetch(`${api.base}q=${city}&appid=${api.key}&units=metric`)
    .then((details)=>{
        return details.json();
    })
    .then(showWeather);
}

function showWeather(details)
{
    let city=document.getElementById('city');
    city.innerHTML=`${details.name}, ${details.sys.country}`;

    let temperature=document.getElementById('temp');
    temperature.innerHTML=`${Math.round(details.main.temp)}*c`;

    let minMax=document.getElementById('min-max');
    minMax.innerHTML=`${Math.round(details.main.temp_min)}*c(Min)
    and ${Math.round(details.main.temp_max)}*c(Max)`;

    let weatherType=document.getElementById('weather-type');
    weatherType.innerHTML=`${details.weather[0].main}`;



}