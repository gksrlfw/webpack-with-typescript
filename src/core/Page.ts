// export default interface Page {
//     template(): any;
//     render(): void;
// }


export default abstract class Page {
    constructor(private target: HTMLElement) {
        this.target = target;
    }
    _routing(): void {}
    template() { return ''; }
    render() {
        this.target.innerHTML = this.template();
        this._routing();
    }
}


