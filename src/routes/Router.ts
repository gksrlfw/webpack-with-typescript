// https://tigger.dev/m/entry/Javascript%EB%A1%9C-%EB%9D%BC%EC%9A%B0%ED%84%B0%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4-%EA%B0%84%EB%8B%A8%ED%95%9C-SPA%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EA%B8%B0
import Page from "../core/Page";
import { main, pages } from "../utils/Router.util";

class Router {
    nowPage = ''; pages: Array<{ page: Page, path: string }>;
    target: HTMLDivElement;
    // constructor(private target: HTMLElement) {
    constructor() {
        this.target = main;
        this.pages = pages;        
    }

    // history api 이용
    push({ data={}, title='', path }: { data?: Object, title?: string, path: string }) {
        history.pushState(data, title, path);
        const currentPageInfo = this.pages.find(page => page.path === path);
                
        const page: any = currentPageInfo?.page;
        if(!page) return;
        const currentPage = new page(this.target, { data, title, path });
        currentPage.renderer();        
    }
}

export const router = new Router();