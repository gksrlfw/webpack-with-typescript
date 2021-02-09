import { html } from "lit-html";
import Page from "../../core/Page";
import { router } from "../Router";


export default class LabView extends Page {
    constructor($target: HTMLElement) {
        super($target);
    }

    template() {
        return (html`
            <div>Post</div>
            <button type="button" class="main-button">Go to Music</button>
        `);
    }

    _setInit() {
        const btn = document.querySelector('.main-button');    
        btn?.addEventListener('click', () => {    
            router.push({ title: 'Music', path: '/music' });
        });
    }
}