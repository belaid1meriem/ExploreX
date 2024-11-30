import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Stands from './components/Stands/Stands';
import PopUp from './components/PopUp/PopUp';
import { useState } from 'react';

function App() {
 const [popUp,setPopUp] = useState(false);
  return (
    <div className='app-wrap'>
      <Header />
      <Hero/>
      <Stands openPopUp={()=>setPopUp(true)}/>
      {popUp && <PopUp closePopUp={()=>setPopUp(false)} />}
    </div>
  )
}

export default App
