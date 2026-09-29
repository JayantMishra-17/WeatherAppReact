import { useState, useRef, useEffect } from "react";
import Weather from "./weather";
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSearch() {
    fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.results) {
          alert("City Not Found");
          return;
        }
        const latitude = data.results[0].latitude;
        const longitude = data.results[0].longitude;
        return fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`,
        )
          .then((res) => {
            if (!res) return;
            return res.json();
          })
          .then((data) => {
            setWeather(data);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }
  return (
    <>
      <Weather
        weather={weather}
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
        inputRef={inputRef}
      />
    </>
  );
}
export default App;
