
import React from 'react';
import { Link } from 'react-router-dom';
import homeLogo from './assets/25694.png';

const Projects: React.FC = () => {
  return (
    <>
      <div>
        <Link to="/">
          <img src={homeLogo} className="logo react" alt="Home logo" />
        </Link>
      </div>
      <div>
        <h2>Projects</h2>
      </div>
    </>
  );
};

export default Projects;


