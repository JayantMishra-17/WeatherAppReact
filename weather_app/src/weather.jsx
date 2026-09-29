function Weather({ weather, city, setCity, handleSearch, inputRef }) {
  return (
    <>
      <div className="w-full h-screen bg-cyan-900 flex justify-center items-center">
        <div className="w-96 h-auto rounded-md bg-gray-900 p-4">
          <div className="w-full flex justify-center gap-4">
            <input
              className="w-full shadow-xl mx-2 my-2 px-2 text-sm rounded py-2 outline-none"
              type="text"
              placeholder="Weather Search"
              value={city}
              ref={inputRef}
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className=" mx-2 px-2 my-2 rounded font-bold text-[#ffffff] shadow-xl bg-cyan-800"
            >
              Search
            </button>
          </div>
          <div className="w-full text-white px-2">
            <div className="p-2">
              {weather && <p> 🌡️ {weather.current.temperature_2m} °C</p>}
              {weather && <p> 💧 {weather.current.relative_humidity_2m} </p>}
              {weather && <p> 🌬️ {weather.current.wind_speed_10m} </p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Weather;
