
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
    }
    else 
    {
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
    return (
    <BrowserRouter>
    <Navbar title="My App" about="About " mode={mode} toggleMode={toggleMode}/>
    <Routes>
    <Route path='/textForm' element={<TextForm mode={mode} heading={"Enter text Here"}/> }></Route>
    <Route path='/About' element={ <About/>   }></Route>
   </Routes>
      
  </BrowserRouter>
  );
}

export default App;
