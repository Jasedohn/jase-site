
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import homeLogo from './assets/25694.png';
import { SearchBar } from './searchBar';

const Projects: React.FC = () => {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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
        <SearchBar onSearch={setSearchQuery} placeholder="Search Pokémon..." />
        {pokemonNames
          .filter(name => name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((name: string) => <li key={name}>{name}</li>)}
        {error && <li>Error fetching data</li>}
      </ul>
    </>
  );
};

export default Projects;