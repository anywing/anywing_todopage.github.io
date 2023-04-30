const API_KEY = "746765a1c9c21b3ba97d84896228491f";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weatherCon = document.querySelector('#weather');
        const city = document.querySelector('#weather span:first-child');
        const weather = document.querySelector('#weather span:nth-child(2)');
        city.innerHTML = data.name;
        weather.innerHTML = `${data.weather[0].main} / ${Math.floor(data.main.temp)}&#8451;`;
    });
}

function onGeoError() {
    alert("죄송합니다. 위치를 찾지 못했습니다...");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);