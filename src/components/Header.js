import Component from './Component.js';
import Search from './Search.js';
import Sort from './Sort.js';

class Header extends Component {

    render() {
        const header = this.renderDOM();
        const search = new Search();
        header.appendChild(search.render());

        const sort = new Sort();
        header.appendChild(sort.render());
        
        return header;
    }

    renderTemplate() {
        return /*html*/`
            <header>
                <h1>
                    Pokemon
                </h1>
            </header>
        `;
    }
}

export default Header;