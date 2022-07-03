import './App.css';
import './index.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import API from './pages/API';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <div className="TopMenu">SPACEFLIGHT NEWS</div>
      <nav className="nav">
        <Link to="/" className="nav-item">
          Home
        </Link>

        <Link to="/profile" className="nav-item">
          Profile
        </Link>

        <Link to="/API" className="nav-item">
          News
        </Link>

        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="API" element={<API />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
