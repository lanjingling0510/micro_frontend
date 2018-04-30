import regexparam from 'regexparam';

class Dep_a {
    constructor() {
        this.router = regexparam('dep_a/*').pattern;
    }

    render () {
        const div = document.createElement('div');
        div.innerHTML = 'dep_a';
        return div;
    };
}

export default Dep_a;