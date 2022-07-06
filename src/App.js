import Navbar from './navigation/Navbar.js';
import Footer from './navigation/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Portfolio' component={Portfolio} />
          <Route path='/Contact' component={Contact} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
