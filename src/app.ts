
export default class App {
    constructor(private $target: any) {
        this.$target = $target;
        this.$target.innerHTML = '<div>hello!!!!!</div>'
    }
}