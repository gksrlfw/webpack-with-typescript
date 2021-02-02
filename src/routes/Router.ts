import RouterUtil from "../utils/Router.util";
import MainPage from "./MainPage";
import OtherPage from "./OtherPage";


export const pages: Array<{ page: any, path: string }> = [
    { page: MainPage, path: '/main' },
    { page: OtherPage, path: '/other' }
];

export class Router {
    private routerUtil: RouterUtil;
    constructor(private $target: RouterUtil) {
        // this.$target = $target;
        // this.routerUtil = new RouterUtil($target, pages);
        this.routerUtil = $target;
        this._routing();
    }

    _routing() {
        // const page = document.createElement('div');
        // const otherpage = document.createElement('div');

        // page.className = 'page';
        // otherpage.className = 'otherpage';
        

        // 이벤트 등록

        // this.$target.appendChild(page);
        // this.$target.appendChild(otherpage);
    }
}