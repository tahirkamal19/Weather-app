import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Main = ({city}) => {
    const [weather, setWeather] = useState(null)

    const apiKey='b920e03419610a8aecf2529f7eb65e56'
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    const getWeather =async()=>{
        try {
            const res = await axios.get(url)
            setWeather(res.data)
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
      getWeather()
    }, [city])
    

  return (
    <div className="border-2 bg-blue-800 my-10 border-blue-950 rounded-2xl">
      <div className="my-8 bg- border-2  border-blue-950  w-fit p-7 rounded-3xl mx-auto">
        <h1 className="font-bold text-blue-400 text-3xl">{city}</h1>
      </div>
      <div className="my-20 flex flex-row gap-9 justify-center">
        <div className="rounded-3xl border-2 border-blue-950 p-12">
        <h1>{weather?.main?.temp}<sup>o</sup>C</h1>
        </div>
        <div className="border-2 rounded-3xl border-blue-950 p-12">
    <h1>{weather?.weather[0]?.description}</h1>
        </div>
      </div>
    </div>
  );
};
