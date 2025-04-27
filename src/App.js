import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import SummaryPreview from './components/SummaryPreview';
import React, { useState } from 'react';

function App() {

  const [text, setText] = useState('');
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      alert('Dark mode has been enabled');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      alert('Light mode has been enabled');
    }
  }

  return (
    <>
      <Navbar title='TTM' about='About' mode={mode} toggleMode={toggleMode} />
      <Textform heading='Unleash Your Words - Analyze, Transform & Perfect !' text={text} setText={setText} mode={mode} />
      <SummaryPreview heading='Your Text Summary' text={text} mode={mode} />
      <About mode={mode} />
    </>
  );
}

export default App;
