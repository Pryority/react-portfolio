import Nav from './navigation/Navbar.js';
import Footer from './navigation/Footer.js';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (<>
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
    <Footer /></>
  );
}

export default App;
