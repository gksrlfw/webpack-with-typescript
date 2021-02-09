import { html } from 'lit-html';
import Component from "../../core/Component";
import main from './Main';
import Side from './Sidebar';


export default class Layout extends Component {
    side: HTMLElement;
    constructor($target: any) {
        super($target);
        this.side = Side();
    }

    template() {        
        return (html
        `
            ${this.side}
            ${main.getMain()}
        `);
    } 
}