import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId) ? prev.filter((id) => id !== movieId) : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header />

        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/watchlist">Watchlist</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<MoviesGrid watchlist={watchlist} toggleWatchlist={toggleWatchlist} />} />
            <Route path="/watchlist" element={<Watchlist watchlist={watchlist} toggleWatchlist={toggleWatchlist} />} />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
