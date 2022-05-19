const API_KEY = "c57e108f24cc66cf41312fc6e884bb52";

function onGeoOK(position) {
  const lat = position.coords.latitude; // 지역
  const lng = position.coords.longitude; // 경도
  console.log(lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].description} / ${data.main.temp}`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

// 브라우저에서 유저의 현재 위치를 알려줌
// getCurrentPosition은 argument로 2개가 필요로 함
// 성공적일 때 실행할 함수, 에러났을 때 실행할 함수
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
