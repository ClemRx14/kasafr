import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Error from './Error';
import Logement from './Logement';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Logement" element={<Logement />} />
      <Route path="/Error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
