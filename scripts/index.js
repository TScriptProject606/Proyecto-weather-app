const API_KEY = "d259231717b64231d253b337f7c034cd";

const weatherInfo = document.getElementById("weather-info");
const countriesOptions = document.getElementById("countries");

const getCountryData = async () => {
  const countriesResponse = await fetch("https://restcountries.com/v3.1/all");
  const countries = await countriesResponse.json();

  return countries;
};

const countries = getCountryData();

countries.then((data) => {
  let optionsHTML = "";
  data.forEach((country) => {
    const { name, capital, cca2 } = country;
    optionsHTML += `<option value="${cca2}" capital="${capital}">${name.common}</option>`;
  });
  countriesOptions.innerHTML = optionsHTML;
});

navigator.geolocation.getCurrentPosition(
  ({ coords: { latitude, longitude } }) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang="sp, es"&appid=${API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const regionNames = new Intl.DisplayNames(["es"], { type: "region" });

        const name = data.name;
        const country = data.sys.country;
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;

        const countryName = regionNames.of(country);

        weatherInfo.innerHTML = `
          <h2>Ciudad: ${name}, ${countryName}</h2>
          <p>Temperatura: ${temp}°C</p>
          <p>Descripción: ${description}</p>
          <p>Humedad: ${humidity}%</p>
          <p>Viento: ${wind} km/h</p>
        `;
      })
      .catch((err) => {
        weatherInfo.innerHTML = `${err}`;
      });
  }
);

countriesOptions.addEventListener("change", (event) => {
  const capital = event.target.selectedOptions[0].getAttribute("capital");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&lang="sp, es"&appid=${API_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const regionNames = new Intl.DisplayNames(["es"], { type: "region" });

      const name = data.name;
      const country = data.sys.country;
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const wind = data.wind.speed;

      const countryName = regionNames.of(country);

      weatherInfo.innerHTML = `
        <h2>Ciudad: ${name}, ${countryName}</h2>
        <p>Temperatura: ${temp}°C</p>
        <p>Descripción: ${description}</p>
        <p>Humedad: ${humidity}%</p>
        <p>Viento: ${wind} km/h</p>
      `;
    })
    .catch((err) => {
      weatherInfo.innerHTML = `${err}`;
    });
});
