import { useState } from "react";
import "./App.css";
import { Main } from "./assets/components/Main";
import { Searchbar } from "./assets/components/searchbar";


function App() {
  const [city, setCity] = useState('');
  return (
    <>
      <h1 className="text-3xl font-light  text-white">Weather Up!</h1>
      <Searchbar setCity={setCity}/>
      <Main city={city}/>
    </>
  );
}

export default App;
