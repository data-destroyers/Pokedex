import Component from './Component.js';
import hashStorage from '../hash-storage.js';

class Sort extends Component {
    render() {
        const form = this.renderDOM();

        form.addEventListener('input', () => {
            const formData = new FormData(form);

            const sortOptions = {
                sort: formData.get('sort'),
                direction: formData.get('direction')
            };
            hashStorage.set(sortOptions);
        });

        return form;
    }
    
    renderTemplate() {
        return /*html*/`
        <form class="sort-form">
            <select name="sort">
                <option value="height">Height</option>
                <option value="weight">Weight</option>
            </select>
            <select name="direction">
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </form>
    `;
    }
}

export default Sort;