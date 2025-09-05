
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
        <h2>Discord Bot Project</h2>
      </div>
      <div>
        <p>This Project is for adding a discord bot to my server - going to look into AI chat bot integration</p>
      </div>
    </>
  );
};

export default Projects;


