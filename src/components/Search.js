import Component from './Component.js';
import hashStorage from '../hash-storage.js';
import QUERY from '../QUERY.js';

class Search extends Component {
    render() {
        const dom = this.renderDOM();
        
        const input = dom.querySelector('input');

        dom.addEventListener('submit', event => {
            event.preventDefault();
            const search = input.value;
            hashStorage.set({ 'pokemon': search });
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <form>
                <input>
                <button>Submit</button>
            </form>
        `;
    }
}

export default Search;