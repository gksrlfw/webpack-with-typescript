import Page from "../core/Page";
import Router from "../utils/Router.util";

export default class OtherPage extends Page {
    private router: Router;
    constructor(private $target: HTMLElement) {
        super($target);
        this.$target = $target;
        this.router = new Router(this.$target);
    }
    template() {
        return (
        `
            <div>다른 페이지</div>
            <button type="button" class="other-button">Go Main Page</button>
        `
        );
    }

    _render() {        
        const btn = document.querySelector('.other-button');        

        btn?.addEventListener('click', () => {    
            console.log('click');
            this.router.push({ path: '/main' });
        });
    }
}