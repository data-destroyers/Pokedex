import QUERY from './QUERY.js';

const hashStorage = {
    get() {
        const hash = window.location.hash.slice(1);
        return QUERY.parse(hash);
    },
    set(queryProps) {
        const target = this.get();
        const query = Object.assign(target, queryProps);
        window.location.hash = QUERY.stringify(query);
    },
    remove(key) {
        const hash = this.get();
        delete hash[key];
        window.location.hash = QUERY.stringify(hash);
    }
};

export default hashStorage;