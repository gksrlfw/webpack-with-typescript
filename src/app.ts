//https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_2-%E1%84%8E%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AA

import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import MainPage from './routes/MainPage';
import Items from './views/nav';



export default class App {
    
    layout: Layout;
    mainPage: Main;
    // musicView: MusicView;
    
    constructor(private $target: any) {
        this.$target = $target;

        const layout = document.createElement('div');
        this.layout = new Layout(layout);
        this.layout.renderer();

        const main = document.createElement('div');
        main.className = 'main';        
        
        this.mainPage = new Main(main);
        this.mainPage.renderer();
        this.$target.appendChild(layout);
        this.$target.appendChild(main);
        
    }
}