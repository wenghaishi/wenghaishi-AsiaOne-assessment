import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Pedigree from './components/Pedigree';
import Interior from './components/Interior';
import Dance from './components/Dance';


function App() {
  return (
    <div className='App'>
      <Hero />
      <About />
      <Pedigree />
      <Interior />
      <Dance />
    </div>
  );
}

export default App;
