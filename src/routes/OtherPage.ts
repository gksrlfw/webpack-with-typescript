import Page from "../core/Page";
import RouterUtil from "../utils/Router.util";

export default class OtherPage extends Page {
    constructor($target: HTMLElement, private routerUtil: RouterUtil) {
        super($target);
        this.routerUtil = routerUtil;
    }
    template() {
        return (
        `
            <div>다른 페이지</div>
            <button type="button" class="other-button">Go Main Page</button>
        `
        );
    }

    _routing() {        
        const btn = document.querySelector('.other-button');        

        btn?.addEventListener('click', () => {    
            console.log('click');
            this.routerUtil.push({ path: '/main' });
        });
    }
}