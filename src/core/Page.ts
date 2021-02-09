// export default interface Page {
//     template(): any;
//     render(): void;
// }

import { html, render } from "lit-html";


export default abstract class Page {
    constructor(private $target: HTMLElement) {
        this.$target = $target;
    }
    template() { return html``; }
    renderer() {
        // this.$target.innerHTML = this.template();
        if(this.$target) render(this.template(), this.$target);
        this._setInit();        
    }

    _setInit(): void {}
}


