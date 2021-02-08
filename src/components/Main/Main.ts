
import {html, render} from 'lit-html';
import Component from '../../core/Component';
import Router from '../../utils/Router.util';
//https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_2-%E1%84%8E%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AA

export default class Main extends Component {
    $state: any = { items: [] };
    private router: Router;
    constructor($target: any) {
        super($target);
        this.router = new Router(this.$target);
    }
    setup() {
    }

    template() {        
        return html`
        <button class="_home">home</button>
        <button class="_music">music</button>
        <button class="_lab">lab</button>
        `
    }

    setEvent() {
        this.$target.addEventListener('click', (e: any) => {
            if(e.target.classList.contains('_home')) {
                this.router.push({ path: '/' });
            }

            if(e.target.classList.contains('_download')) {
                this.router.push({ path: '/main' });
            }

            if(e.target.classList.contains('_rank')) {
                this.router.push({ path: '/other' });
            }
        });
    }
}