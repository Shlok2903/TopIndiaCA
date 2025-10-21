import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";

// Backend test component
import AnyComponent from "./components/AnyComponent";

// Pages
import Home from "./components/Home";
import Directory from "./components/Directory";
import Blog from "./components/Blog";
import Events from "./components/Events";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import About from "./components/About";

function Navigation({ isDarkMode, toggleDarkMode, toggleSearch }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M8 6C8 4.89543 8.89543 4 10 4H30C31.1046 4 32 4.89543 32 6V34C32 35.1046 31.1046 36 30 36H10C8.89543 36 8 35.1046 8 34V6Z"
                stroke="black"
                strokeWidth="2"
                fill="white"
              />
              <path d="M8 6H32" stroke="black" strokeWidth="2" />
              <path d="M8 20H32" stroke="black" strokeWidth="1" />
              <path d="M24 12L28 8L32 12L28 16L24 12Z" fill="black" />
              <path d="M28 8L28 16" stroke="black" strokeWidth="1" />
            </svg>
          </div>
          <div className="logo-text">
            <div className="logo-top">Top CA</div>
            <div className="logo-bottom">India</div>
          </div>
        </Link>
      </div>

      <div className="divider-line"></div>

      <nav className="navigation">
        <div className="nav-center">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          <Link
            to="/directory"
            className={`nav-link ${isActive("/directory") ? "active" : ""}`}
          >
            Directory
          </Link>
          <Link
            to="/blog"
            className={`nav-link ${isActive("/blog") ? "active" : ""}`}
          >
            Blog/News
          </Link>
          <Link
            to="/events"
            className={`nav-link ${isActive("/events") ? "active" : ""}`}
          >
            Events
          </Link>
          <Link
            to="/resources"
            className={`nav-link ${isActive("/resources") ? "active" : ""}`}
          >
            Resources
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
          >
            About Us
          </Link>
        </div>

        <div className="nav-right">
          <button className="nav-icon" onClick={toggleDarkMode}>
            {isDarkMode ? "☀️" : "🌙"}
          </button>
          <button className="nav-icon" onClick={toggleSearch}>
            🔍
          </button>
        </div>
      </nav>

      <div className="divider-line"></div>
    </header>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((v) => !v);
  const toggleSearch = () => setIsSearchOpen((v) => !v);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
        <Navigation
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          toggleSearch={toggleSearch}
        />

        {isSearchOpen && (
          <div className="search-overlay">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search here..."
                className="search-input"
                autoFocus
              />
              <button className="search-close" onClick={toggleSearch}>
                ×
              </button>
            </div>
          </div>
        )}

        <Routes>
          {/* Home now renders your original Home plus the backend test */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <div style={{ padding: 16 }}>
                  <h3>Backend health</h3>
                  <AnyComponent />
                </div>
              </>
            }
          />
          <Route path="/directory" element={<Directory />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
