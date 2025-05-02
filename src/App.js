import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import SummaryPreview from './components/SummaryPreview';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shortcuts from './components/Shortcuts';
import Control from './components/Control';
import Footer from './components/Footer';

import NotFound from './components/NotFound';

function App() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState(() => {
    // Get mode from localStorage or default to light
    return localStorage.getItem('mode') || 'light';
  });

   // Sync body style and localStorage whenever mode changes
   useEffect(() => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    localStorage.setItem('mode', mode); // Save mode to localStorage
  }, [mode]);

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    toast.success(`${mode === 'light' ? 'Dark' : 'Light'} mode has been enabled`);
  };

  return (
    <>
      <Router>
        <Navbar title='TTM' about='About' mode={mode} toggleMode={toggleMode} />
        <ToastContainer position="top-center" autoClose={2000} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Textform
                  heading='Unleash Your Words - Analyze, Transform & Perfect !'
                  text={text}
                  setText={setText}
                  mode={mode}
                />
                <SummaryPreview
                  heading='Your Text Summary'
                  text={text}
                  mode={mode}
                />
                <Footer mode={mode} />
              </>
            }
          />

          <Route path="/control" element={<Control mode={mode} />} />
          <Route path="/shortcuts" element={<Shortcuts mode={mode} />} />

          <Route path="/about" element={
            <>
              <About mode={mode} />
              <Footer mode={mode} />
            </>
          } />

          <Route path="*" element={
            <>
            <NotFound mode={mode} />
            <Footer mode={mode} />
          </>} />

        </Routes>
        
      </Router>

    </>
  );
}

export default App;
