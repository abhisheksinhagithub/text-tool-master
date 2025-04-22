import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import SummaryPreview from './components/SummaryPreview';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  return (
    <>
      <Navbar title='TTM' about='About' />
      <Textform heading='Unleash Your Words - Analyze, Transform & Perfect !' text={text} setText={setText} />
      <SummaryPreview heading='Your Text Summary' text={text} />
    </>
  );
}

export default App;
