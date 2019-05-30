import Component from './Component.js';
import Header from './Header.js';
import PokemonList from './PokemonList.js';
import pokedexApi from '../services/pokedex-api.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const pokemonList = new PokemonList({ pokemon: [] });
        main.appendChild(pokemonList.render());

        pokedexApi.getPokemon()
            .then(response => {
                const pokemon = response.results;
                pokemonList.update({ pokemon });
            });

        return dom;
    }

    renderTemplate() {
        return /*html*/` 
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;