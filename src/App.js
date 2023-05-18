import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Pedigree from './components/Pedigree';
import Interior from './components/Interior';


function App() {
  return (
    <div className='App'>
      <Hero />
      <About />
      <Pedigree />
      <Interior />
    </div>
  );
}

export default App;
