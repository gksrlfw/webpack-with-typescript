import { html } from "lit-html";
import Page from "../../core/Page";
import { router } from "../Router";

export default class MusicView extends Page {
    constructor($target: HTMLElement, private data: any) {
        super($target);
        this.data = data;
    }

    template() {
        return (html`
            <div>${this.data.title}</div>
            <div>뮤직 페이지</div>
            <button type="button" class="main-button">Go to Post</button>
        `
        );
    }

    _setInit() {
        const btn = document.querySelector('.main-button');    
        btn?.addEventListener('click', () => {    
            router.push({ title: 'Post', path: '/post' });
        });
    }
}