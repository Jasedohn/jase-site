
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import homeLogo from './assets/25694.png';
import { SearchBar } from './searchBar';

const Projects: React.FC = () => {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=400')
      .then(res => res.json())
      .then(data => setPokemonNames(data.results.map((p: { name: string }) => p.name)))
      .catch(err => setError(err));
  }, []);

  const filteredNames = pokemonNames.filter(name =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <SearchBar onSearch={setSearchQuery} placeholder="Search Pokémon..." />
      {error && <div>Error fetching data</div>}
      {filteredNames.length === 0 && !error ? (
        <div>No Pokémon found.</div>
      ) : (
          <ul>
              {filteredNames.map((name: string, index: number) => {
                  const number = index + 1; // Start counting from 1
                  return (
                      <li key={name}>
                          <a
                              href={`https://api.example.com/image/${number}`}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              {number}. {name}
                          </a>
                      </li>
                  );
              })}
          </ul>

      )}
    </>
  );
};

export default Projects;