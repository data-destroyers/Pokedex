import Component from './Component.js';
import Header from './Header.js';
import PokemonList from './PokemonList.js';
import Loading from './Loading.js';
import pokedexApi from '../services/pokedex-api.js';
import Paging from './Paging.js';
import hashStorage from '../hash-storage.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const paging = new Paging({ totalCount: 0 });
        main.appendChild(paging.render());

        const loading = new Loading({ loading: false });
        main.appendChild(loading.render());
        
        const pokemonList = new PokemonList({ pokemon: [] });
        main.appendChild(pokemonList.render());

        function loadPokemon() {
            loading.update({ loading: true });
            
            const queryProps = hashStorage.get();
            pokedexApi.getPokemon(queryProps)
                .then(response => {
                    const pokemon = response.results;
                    pokemonList.update({ pokemon });
                    paging.update({ totalCount: response.count });
                })
                .finally(() => {
                    loading.update({ loading: false });
                });
    
        }

        loadPokemon();
        
        window.addEventListener('hashchange', () => {
            loadPokemon();
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