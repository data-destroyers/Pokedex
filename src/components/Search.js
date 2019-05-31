import Component from './Component.js';
import hashStorage from '../hash-storage.js';

class Search extends Component {
    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');

        dom.addEventListener('submit', event => {
            event.preventDefault();
            const search = input.value;
            hashStorage.set({ 'pokemon': search, page: 1 });
        });

        function setInputFromHash() {
            const queryProps = hashStorage.get();
            input.value = queryProps.search;
            if(queryProps.search === undefined) {
                input.value = '';
            }
            else {
                input.value = queryProps.search;
            }
        }
        setInputFromHash();

        window.addEventListener('hashchange', () => {
            setInputFromHash();
        });
        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <form id="input-button">
                <input>
                <button>Submit</button>
            </form>
        `;
    }
}

export default Search;