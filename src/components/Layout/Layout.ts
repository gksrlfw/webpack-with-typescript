import { html } from 'lit-html';
import Component from "../../core/Component";
import Main from './Main';
import Side from './Sidebar';


export default class Layout extends Component {
    side: HTMLElement;
    main: HTMLElement;
    constructor($target: any) {
        super($target);

        this.side = Side();
        this.main = Main();
        
    }

    template() {        
        return (html
        `
            ${this.side}
            ${this.main}
        `);
    } 
}