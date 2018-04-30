


import regexparam from 'regexparam';

class Dep_b {
    constructor() {
        this.router = regexparam('dep_b/*').pattern;
    }

    render () {
        const div = document.createElement('div');
        div.innerHTML = 'dep_b';
        return div;
    };
}

export default Dep_b;