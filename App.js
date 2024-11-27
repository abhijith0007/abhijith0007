import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import React, { useState } from "react";
import TextForm from './component/TextForm';
import {
  BrowserRouter as Router,

  Route,
  Routes,

} from "react-router-dom";





function App() {
  const [mode, setmode] = useState('light')
  const modechange = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "gray"
      document.title = "ract js"
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white"
      document.title = "REACT-js light"
    }
  }
  return (
    <>
      <Navbar aboutText="aboutMe" mode={mode} modechange={modechange} />

      <div className="container ">

        <Router>

          <Routes>

            <Route path="/" element={<TextForm />} />

            <Route path="/about" element={<About />} />
          </Routes>
        </Router>


      </div >





    </>
    /*
    <TextForm />
      <About />
      */
  );

}

export default App;

