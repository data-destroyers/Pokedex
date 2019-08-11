import Component from './Component.js';
import hashStorage from '../hash-storage.js';

class Search extends Component {
    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');
        const inputForm = dom.querySelector('#input-form');

        inputForm.addEventListener('submit', event => {
            const formData = new FormData(inputForm);
            event.preventDefault();
            const search = input.value;
            const property = formData.get('property');
            hashStorage.set({ [property]: search, page: 1 });
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
        <div>
            
        
            <form id="input-form">
                <select name="property">
                    <option value="pokemon">Name</option>
                    <option value="type_1">Type</option>
                </select>
                <input>
                <button>Submit</button>
            </form>
        </div>    
        `;
    }
}

export default Search;