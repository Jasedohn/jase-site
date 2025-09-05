import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import homeLogo from './assets/25694.png';

const Projects: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <div>
              <Link to ="/">
                <img src={homeLogo} className="logo react" alt="Home logo" />
              </Link>
            </div>
              <div>
                <h2>Projects</h2>
              </div>
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default Projects;


