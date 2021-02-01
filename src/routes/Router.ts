import RouterUtil from "../utils/Router.util";
import MainPage from "./MainPage";
import OtherPage from "./OtherPage";
import Page from "../core/Page";

const pages: Array<{ page: any, path: string }> = [
    { page: MainPage, path: 'main' },
    { page: OtherPage, path: 'other' }
];

export default class Router {
    private routerUtil: RouterUtil;
    constructor(private $target: HTMLElement) {
        this.$target = $target;
        this.routerUtil = new RouterUtil($target, pages);

        this._routing();
    }

    _routing() {
        const page = document.createElement('div');
        const otherpage = document.createElement('div');
        // const mainPage = new MainPage(page, this.routerUtil);
        // const otherPage = new OtherPage(otherpage, this.routerUtil);

        page.className = 'page';
        otherpage.className = 'otherpage';

        // mainPage.render();
        // otherPage.render();
        // mainPage.mount();
        // otherPage.mount();
        

        // 이벤트 등록

        this.$target.appendChild(page);
        this.$target.appendChild(otherpage);
    }
}