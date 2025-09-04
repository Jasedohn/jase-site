import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Projects: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
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


