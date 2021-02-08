import Component from "../core/Component";
import Router from "../utils/Router.util";

import {html, render} from 'lit-html';
//https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_2-%E1%84%8E%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AA

export default class Items extends Component {
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
        <nav class="navbar navbar-expand-lg navbar-transparent fixed-top rgba-black-light">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div id="home" class="_home navbar-brand" >HOME</div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <div id="download" class="_download nav-link" href="#">DOWNLOAD <span class="sr-only">(current)</span></div>
                        </li>
                        <li class="nav-item">
                            <div id="rank" class="_rank nav-link" href="#">RANK</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
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