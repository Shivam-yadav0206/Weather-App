const getWeatherData = async (city) => {
  const params = new URLSearchParams({
    q: `${city}`,
    appid: "4aa0af2ac26dad5a0f0d512c010de814",
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes();
const search = document.getElementById("search");

search.addEventListener("click", async (event) => {
  try {
    const value = document.getElementById("text").value;
      const res = await getWeatherData(value);
      const d = document.getElementById("main1");
      d.innerHTML = `
        <div class="card">
        <div class="gradient"></div>
        <div class="info">
            <div class="title">${res.name}, ${res.sys.country}</div>
            <div class="text">Temp: ${Math.floor(res.main.feels_like - 273)}°C</div>
            <div class="text">Weather: ${res.weather[0].main}</div>
            <div class="text">Precipitation: 20%</div>
            <div class="text">Wind: ${res.wind.speed}</div>
        </div>
        <div class="time">ASIA <span>${time}</span></div>
        </div>`;
    } catch (error) {
      console.error(error);
    }
});
