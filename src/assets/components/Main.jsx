import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Main = ({ city }) => {
  const [weather, setWeather] = useState(null);

  const apiKey = "b920e03419610a8aecf2529f7eb65e56";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const getWeather = async () => {
    try {
      const res = await axios.get(url);
      setWeather(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getWeather();
  }, [city]);

  return (
    <div>
      {weather ? (
        <div className="border-2 bg-blue-800 my-10 border-blue-950 rounded-2xl">
          <div className="my-8 bg- border-2  border-blue-950  w-fit p-7 rounded-3xl mx-auto">
            <h1 className="font-bold text-blue-50 text-3xl">{weather?.name}</h1>
          </div>

          <hr />

        <div className="flex flex-row items-baseline justify-center gap-5">
          <div className="  mt-5 w-fit rounded-3xl border-2 border-blue-950 h-fit p-12">
            <h1 className="text-blue-50 text-3xl">
              Temprature:{<br/>}
              {weather?.main?.temp}
              <sup>o</sup>C
            </h1>
          </div>

            <div className="border-2 w-fit rounded-3xl border-blue-950 p-12">
              <h1 className="text-blue-50 text-3xl">{weather?.weather[0]?.description}</h1>
              <div className="w-20 h-20 m-auto bg-black rounded-3xl">
                <img
                  src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                  alt=""
                />
              </div>
            </div>
        </div>
          <div className="my-20 flex flex-row gap-9 justify-center">

            <div className=" rounded-3xl border-2 border-blue-950 h-fit p-12">
              <h1 className="text-blue-50 text-3xl">
                Feels Like:{<br />} {weather?.main?.feels_like}
                <sup>o</sup>C
              </h1>
            </div>

            <div className="rounded-3xl border-2 border-blue-950 h-fit p-12">
              <h1 className="text-blue-50 text-3xl">Humidity: {weather?.main?.humidity}%</h1>
            </div>

          </div>
        </div>
      ) : (
        <div className="w-64 m-auto h-24 border-2 bg-blue-800 my-10 border-blue-950 rounded-2xl">
          <h1 className="mt-5 text-xl text-white">
            Search a City to find it's Weather!
          </h1>
        </div>
      )}
    </div>
  );
};
