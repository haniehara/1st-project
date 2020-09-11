const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("error");
    // x.innerHTML = "Geolocation is not supported by this browser.";
  }
};

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
}

// let currentCity = {
//   currentCit: getLocation,
// };

function getResults() {
  fetch(
    `${api.baseurl}onecall?lat=${lat}&lon=${lon}&units=metric&APPID=${api.key}`
  )
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

let d = document.querySelector(".default-city");
d.innerText = `${weather.name}, ${weather.sys.country}`;
