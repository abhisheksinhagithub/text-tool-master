import React, { useState } from 'react';
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

function App() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';

      toast.success('Dark mode has been enabled');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

      toast.success('Light mode has been enabled');
    }
  }

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

        </Routes>

      </Router>

    </>
  );
}

export default App;
