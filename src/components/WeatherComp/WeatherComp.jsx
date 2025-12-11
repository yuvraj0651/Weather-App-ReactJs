import { useState } from "react";
import { WiHumidity, WiStrongWind, WiDaySunny } from "react-icons/wi";

const WeatherComp = () => {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const API_KEY = "1645dab9d26b9173fe40d41a47725df3";

    const getWeather = async () => {
        if (!city) {
            alert("Please Enter Your City Name");
            return;
        }

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found");
            setWeather(null);
            return;
        }

        setWeather(data);
        setCity("")
    };

    return (
        <>
            <div className="weather-app-section mt-10">
                <div className="weather-section__inner">
                    <div className="max-w-md w-full mx-auto flex items-center gap-3">
                        <input
                            type="text"
                            placeholder="Search city..."
                            className="w-full px-4 py-3 rounded-[7px] bg-white/20 backdrop-blur-lg text-white placeholder-gray-300 outline-none border border-white/30"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && getWeather()}
                        />
                        <button
                            className="px-5 py-3 bg-slate-500 hover:bg-slate-600 text-white rounded-[5px] shadow-md"
                            onClick={getWeather}
                        >
                            Search
                        </button>
                    </div>
                    {weather && (
                        <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-lg text-white transition-all duration-300 mt-8 w-[50rem] mx-auto">
                            <h2 className="text-[1.4rem] font-[500] text-center tracking-wide capitalize">
                                {weather.name}, {weather.sys.country}
                            </h2>
                            <div className="flex justify-center my-4">
                                <WiDaySunny className="text-7xl text-yellow-300 drop-shadow-lg" />
                            </div>
                            <p className="text-center text-4xl font-bold mb-2 capitalize">
                                {weather.main.temp}°C
                            </p>
                            <p className="text-center text-lg tracking-wide capitalize text-gray-200">
                                {weather.weather[0].description}
                            </p>
                            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-lg border border-white/10">
                                    <p className="text-sm text-gray-300">Feels Like</p>
                                    <p className="text-xl font-semibold">{weather.main.feels_like}°</p>
                                </div>
                                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-lg border border-white/10">
                                    <WiHumidity className="text-3xl mx-auto mb-1" />
                                    <p className="text-xl font-semibold">{weather.main.humidity}%</p>
                                </div>

                                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-lg border border-white/10">
                                    <WiStrongWind className="text-3xl mx-auto mb-1" />
                                    <p className="text-xl font-semibold">{weather.wind.speed} m/s</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default WeatherComp