import Component from './Component.js';

class Sort extends Component {
    renderTemplate() {
        return /*html*/`
        <form class="sort-form">
            <select name="property">
                <option value="height">Height</option>
                <option value="weight">Weight</option>
            </select>
            <select name="property">
                <option value="1">Ascending</option>
                <option value="-1">Descending</option>
            </select>
        </form>
    `;
    }
}

export default Sort;