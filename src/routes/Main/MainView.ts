
import { html } from 'lit-html';
import Page from '../../core/Page';
import { router } from "../Router";
//https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_2-%E1%84%8E%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AA

export default class MainView extends Page {
    constructor($target: HTMLElement, private data: any) {
        super($target);
        this.data = data;
    }

    template() {
        return (html`
            <button class="_main">main</button>
            <button class="_music">music</button>
            <button class="_post">post</button>
        `);
    }

    _setInit() {
        // html이 처음에 빈상태라서, 태그들을 선택할 수 없다... 이걸 어떻게 해결해야될까??..
        setTimeout(() => {
            const _main = document.querySelector('._main');    
        
            _main?.addEventListener('click', () => {                    
                router.push({ title: 'main!!!', path: '/' });
            });

            const _music = document.querySelector('._music');    
            _music?.addEventListener('click', () => {    
                router.push({ title: 'Music', path: '/music' });
            });

            const _post = document.querySelector('._post');    
            _post?.addEventListener('click', () => {    
                router.push({ title: 'Post', path: '/post' });
            });
        }, 100);
    }
}

