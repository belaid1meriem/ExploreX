import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Stands from "./components/Stands/Stands";
import PopUp from "./components/PopUp/PopUp";
import { useState } from "react";
import Speakers from "./components/Speakers/Speakers";
import CalendarPage from "./components/Calender/Calender";

function App() {
  const [popUp, setPopUp] = useState(false);
  return (
    <div className="app-wrap">
      <Header />
      <Hero />
      <Stands openPopUp={() => setPopUp(true)} />
      {popUp && <PopUp closePopUp={() => setPopUp(false)} />}
      <Speakers />
      <CalendarPage />
    </div>
  );
}

export default App;
