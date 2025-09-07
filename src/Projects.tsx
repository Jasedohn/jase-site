
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import homeLogo from './assets/25694.png';

const Projects: React.FC = () => {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => res.json())
      .then(data => setPokemonNames(data.results.map((p: { name: string }) => p.name)))
      .catch(err => setError(err));
  }, []);

  return (
    <>
      <div>
        <Link to="/"> 
          <img src={homeLogo} className="logo react" alt="Home logo" />
        </Link>
      </div>
      <div>
        <h2>Pokemon Project</h2>
      </div>
      <div>
        <p>This is going to give a list of pokemon that is searchable</p>
      </div>
      <ul>
        {pokemonNames.map((name: string) => <li key={name}>{name}</li>)}
        {error && <li>Error fetching data</li>}
      </ul>
    </>
  );
};

export default Projects;