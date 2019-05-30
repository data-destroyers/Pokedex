import Component from './Component.js';

class PokemonItem extends Component {

    renderTemplate() {
        return /*html*/`
            <li class="pokemon-item">
                <h2>Pichu</h2>
                <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
            </li>
        `;
    }
}

export default PokemonItem;