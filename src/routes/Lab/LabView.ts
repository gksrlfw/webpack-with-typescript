import Page from "../../core/Page";
import Router from "../../utils/Router.util";


export default class LabView extends Page {
    private router: Router;
    constructor(private $target: HTMLElement) {
        super($target);
        this.$target=  $target;
        this.router = new Router(this.$target);
    }

    template() {
        return (
        `
            <div>Lab</div>
            <button type="button" class="main-button">Go Other Page</button>
        `
        );
    }

    _render() {
        console.log('mount');
        
        const btn = document.querySelector('.main-button');    
        
        btn?.addEventListener('click', () => {    
            console.log('click');
            this.router.push({ path: '/other' });
        });
    }
}