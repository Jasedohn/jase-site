using PokeApiNet;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

public class PokeApi
{
    private readonly PokeApiClient _client;

    public PokeApi()
    {
        _client = new PokeApiClient();
    }

    public async Task<List<string>> GetPokemonNamesAsync()
    {
        var pokemonList = await _client.GetPokemonListAsync();
        return pokemonList.Select(p => p.Name).ToList();
    }

    public async Task<Pokemon> GetPokemonDetailsAsync(string name)
    {
        return await _client.GetPokemonAsync(name);
    }
}
