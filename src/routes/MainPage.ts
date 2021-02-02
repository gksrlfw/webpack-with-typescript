import Page from "../core/Page";
import RouterUtil from "../utils/Router.util";

export default class MainPage extends Page {
    constructor($target: HTMLElement, private routerUtil: RouterUtil) {
        super($target);
        this.routerUtil = routerUtil;
    }

    template() {
        return (
        `
            <div>메인 페이지</div>
            <button type="button" class="main-button">Go Other Page</button>
        `
        );
    }

    _routing() {
        console.log('mount');
        
        const btn = document.querySelector('.main-button');    
        
        btn?.addEventListener('click', () => {    
            console.log('click');
            this.routerUtil.push({ path: '/other' });
        });
    }
}