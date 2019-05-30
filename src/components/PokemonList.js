import Component from './Component.js';

class PokemonList extends Component {

    renderTemplate() {
        return /*html*/`
            <ul class="pokemon-list">
                <li class="pokemon-item">
                    <h2>Pichu</h2>
                    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
                </li>
                <li class="pokemon-item">
                    <h2>Pichu</h2>
                    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
                </li>
                <li class="pokemon-item">
                    <h2>Pichu</h2>
                    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
                </li>
            </ul>
        `;
    }
}

export default PokemonList;