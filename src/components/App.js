import Component from './Component.js';
import Header from './Header.js';
import PokemonList from './PokemonList.js';
import Loading from './Loading.js';
import pokedexApi from '../services/pokedex-api.js';
import Paging from './Paging.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const loading = new Loading({ loading: true });
        main.appendChild(loading.render());

        const pokemonList = new PokemonList({ pokemon: [] });
        main.appendChild(pokemonList.render());

        pokedexApi.getPokemon()
            .then(response => {
                const pokemon = response.results;
                pokemonList.update({ pokemon });
            })
            .finally(() => {
                loading.update({ loading: false });
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