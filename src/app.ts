//https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_2-%E1%84%8E%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AA


import Items from "./components/Items";
import { pages } from "./routes/Router";
import RouterUtil from "./utils/Router.util";

export default class App {
    routerUtil: RouterUtil;
    items: Items;
    constructor(private $target: any) {
        this.$target = $target;

        this.routerUtil = new RouterUtil(this.$target, pages);
        this.items = new Items(this.$target, this.routerUtil);

        this.items.render();
    }
}