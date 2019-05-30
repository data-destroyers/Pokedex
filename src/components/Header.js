import Component from './Component.js';

class Header extends Component {

    renderTemplate() {
        return /*html*/`
            <h1>
                Pokemon
            </h1>
        `;
    }
}

export default Header;