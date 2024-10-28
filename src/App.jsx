import { useState } from "react";
import "./App.css";
import { Main } from "./assets/components/Main";
import { Searchbar } from "./assets/components/searchbar";


function App() {
  const [city, setCity] = useState('');
  return (
    <>
    <div className="bg-blue-700 border-2 border-blue-950 rounded-xl w-64 m-auto mb-16 h-20">
      <h1 className="text-3xl font-light mt-5 text-white">Weather Up!</h1>
    </div>
      <Searchbar setCity={setCity}/>
      <Main city={city}/>
    </>
  );
}

export default App;
