import Component from './Component.js';
import hashStorage from '../hash-storage.js';

function getPage() {
    const queryProps = hashStorage.get();
    let page = queryProps.page ? parseInt(queryProps.page) : 1;
    return page;
}

class Paging extends Component {
    render() {
        const dom = this.renderDOM();
        const previousButton = dom.querySelector('.previous');
        const nextButton = dom.querySelector('.next');

        previousButton.addEventListener('click', () => {
            const queryProps = hashStorage.get();
            let page = queryProps.page ? parseInt(queryProps.page) : 1;
            page--;
            hashStorage.set({ page });
        });
        nextButton.addEventListener('click', () => {
            const queryProps = hashStorage.get();
            let page = queryProps.page ? parseInt(queryProps.page) : 1;
            page++;
            hashStorage.set({ page });
        });

        return dom;
    }

    renderTemplate() {
        const currentPage = getPage();
        const totalCount = this.props.totalCount;
        const perPage = 20;
        const lastPage = Math.ceil(totalCount / perPage);

        return /*html*/`
            <div class="paging">
                <button class="previous" ${currentPage === 1 ? 'disabled' : ''}>⇦</button>
                <span>${currentPage} of ${lastPage}</span>
                <button class="next" ${currentPage === lastPage ? 'disabled' : ''}>⇨</button>
            </div>
        `;
    }
}

export default Paging;