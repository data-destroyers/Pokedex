const URL = 'https://cors-anywhere.herokuapp.com/https://alchemy-pokedex.herokuapp.com/api/pokedex';

const pokedexApi = {
    getPokemon(search) {
        let url = URL;

        const searchParams = new URLSearchParams();
        
        if(search) {
            searchParams.set('search', search);
            const query = searchParams.toString();
            url = `${URL}?${query}`;
        }

        return fetch(url)
            .then(response => response.json());
    }
};

export default pokedexApi;