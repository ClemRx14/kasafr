import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Error from './Error';
import Logement from './Logement';
import Header from './Composants/Header';
import Footer from './Composants/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Logement" element={<Logement />} />
      <Route path="/Error" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
