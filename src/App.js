import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import SummaryPreview from './components/SummaryPreview'

function App() {
  return (
    <>
      <Navbar title='TTM' about='About' />
      <Textform heading='Unleash Your Words - Analyze, Transform & Perfect !'/>
      <SummaryPreview heading='Your Text Summary'/>
    </>
  );
}

export default App;