import { useState } from 'react'
import botLogo from './assets/download.png'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './Projects';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <Link to="/projects">
                  <img src={botLogo} className="logo react" alt="React logo" />
                </Link>
              </div>
              <h1>Jase Dohn</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Hello what are you doing here? This is a personal website for Jase Dohn.
                </p>
              </div>
              <p className="read-the-docs">
                In development...
              </p>
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App
