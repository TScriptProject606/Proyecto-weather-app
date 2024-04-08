// API Key para acceder a los datos meteorológicos
const API_KEY = "d259231717b64231d253b337f7c034cd";

// Elemento HTML donde se mostrará la información del clima
const weatherInfo = document.getElementById("weather-info");

// Elemento HTML para seleccionar países
const countriesOptions = document.getElementById("countries");

// Función asincrónica para obtener datos de todos los países
const getCountryData = async () => {
  // Realiza una solicitud a la API de países para obtener datos
  const countriesResponse = await fetch("https://restcountries.com/v3.1/all");
  // Parsea la respuesta como JSON
  const countries = await countriesResponse.json();

  return countries;
};

// Obtiene los datos de todos los países
const countries = getCountryData();

// Cuando los datos de los países están disponibles
countries.then((data) => {
  let optionsHTML = "";
  // Itera sobre los datos de cada país
  data.forEach((country) => {
    const { name, capital, cca2 } = country;
    // Crea opciones de selección para cada país
    optionsHTML += `<option value="${cca2}" capital="${capital}">${name.common}</option>`;
  });
  // Inserta las opciones de selección en el elemento HTML correspondiente
  countriesOptions.innerHTML = optionsHTML;
});

// Obtiene la ubicación actual del usuario mediante geolocalización
navigator.geolocation.getCurrentPosition(
  ({ coords: { latitude, longitude } }) => {
    // Realiza una solicitud a la API de OpenWeatherMap para obtener datos del clima basados en la ubicación
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang="sp, es"&appid=${API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Crea un objeto Intl.DisplayNames para obtener el nombre del país en español
        const regionNames = new Intl.DisplayNames(["es"], { type: "region" });

        // Extrae los datos relevantes del objeto de respuesta
        const name = data.name;
        const country = data.sys.country;
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;

        // Obtiene el nombre del país en español
        const countryName = regionNames.of(country);

        // Muestra la información del clima en el elemento HTML correspondiente
        weatherInfo.innerHTML = `
          <h2>Ciudad: ${name}, ${countryName}</h2>
          <p>Temperatura: ${temp}°C</p>
          <p>Descripción: ${description}</p>
          <p>Humedad: ${humidity}%</p>
          <p>Viento: ${wind} km/h</p>
        `;
      })
      .catch((err) => {
        // En caso de error, muestra el mensaje de error en el elemento HTML correspondiente
        weatherInfo.innerHTML = `${err}`;
      });
  }
);

// Escucha eventos de cambio en el selector de países
countriesOptions.addEventListener("change", (event) => {
  // Obtiene la capital del país seleccionado
  const capital = event.target.selectedOptions[0].getAttribute("capital");
  // Realiza una solicitud a la API de OpenWeatherMap para obtener datos del clima basados en la capital seleccionada
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&lang="sp, es"&appid=${API_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Crea un objeto Intl.DisplayNames para obtener el nombre del país en español
      const regionNames = new Intl.DisplayNames(["es"], { type: "region" });

      // Extrae los datos relevantes del objeto de respuesta
      const name = data.name;
      const country = data.sys.country;
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const wind = data.wind.speed;

      // Obtiene el nombre del país en español
      const countryName = regionNames.of(country);

      // Muestra la información del clima en el elemento HTML correspondiente
      weatherInfo.innerHTML = `
        <h2>Ciudad: ${name}, ${countryName}</h2>
        <p>Temperatura: ${temp}°C</p>
        <p>Descripción: ${description}</p>
        <p>Humedad: ${humidity}%</p>
        <p>Viento: ${wind} km/h</p>
      `;
    })
    .catch((err) => {
      // En caso de error, muestra el mensaje de error en el elemento HTML correspondiente
      weatherInfo.innerHTML = `${err}`;
    });
});