import { html, render } from 'lit-html';

export default abstract class Component {
    public $state: any = {};
    constructor(public $target: any|null) {
        this.$target = $target;
        this.setup();
        this.setEvent();
        // this.render();
    }

    setup() {}
    template() { return html``; }
    setEvent() {}

    // state가 변경되면 항상 render가 되어 더이상 dom을 다룰필요없다
    setState(newState: {}) {
        console.log(this.$state, newState);
        
        this.$state = { ...this.$state, ...newState };
        this.$state = newState;
        
        this._render();
    }

    renderer() {
        this._render();
    }

    private _render() {
        // if(this.$target) this.$target.innerHTML = this.template();
        if(this.$target) render(this.template(), this.$target);
    }

    // // 이벤트 버블링 추상화
    // addEvent(eventType: string, selector: string, callback: Function) {
    //     const children = [ ...this.$target.querySelectorAll(selector) ];
    //     const isTarget = (target: HTMLElement) => children.includes(target) || target.closest(selector);
    //     this.$target.addEvent(eventType, (e: any) => {
    //         if(!isTarget(e.target)) return false;
    //         callback(e);
    //     });
    // }
}