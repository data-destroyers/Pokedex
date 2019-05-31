import QUERY from '../QUERY.js';
const URL = 'https://cors-anywhere.herokuapp.com/https://alchemy-pokedex.herokuapp.com/api/pokedex';

const pokedexApi = {
    getPokemon(queryProps) {

        const query = QUERY.stringify(queryProps);
        const url = `${URL}?${query}`;

        return fetch(url)
            .then(response => response.json());
    }
};

export default pokedexApi;