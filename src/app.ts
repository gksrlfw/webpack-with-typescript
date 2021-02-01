//https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_2-%E1%84%8E%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AA

import Router from "./routes/Router";

export default class App {
    private router: Router;
    constructor(private $target: any) {
        this.$target = $target;

        this.router = new Router(this.$target);
    }
}