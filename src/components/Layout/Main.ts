import busForTitle from "../../utils/Bus.title";

class Main {
    private main: HTMLElement;
    constructor() {
        this.main = document.createElement('aside');
        this.main.innerText = `Main!!!!`;
        this.main.className = 'mainStyle';
    }

    getMain() {
        return this.main;
    }

    setMainTitle() {
        this.main.innerText = `${busForTitle.getData()}`;
    }
}
const main = new Main();
export default main;