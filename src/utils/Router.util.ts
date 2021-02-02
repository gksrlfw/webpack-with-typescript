// https://tigger.dev/m/entry/Javascript%EB%A1%9C-%EB%9D%BC%EC%9A%B0%ED%84%B0%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4-%EA%B0%84%EB%8B%A8%ED%95%9C-SPA%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EA%B8%B0
import Page from "../core/Page";

export default class RouterUtil {
    nowPage = ''; pages: Array<{ page: Page, path: string }>;
    constructor(private target: HTMLElement, pages: Array<{ page: Page, path: string }>) {
        this.target = target;
        this.pages = pages;
        
        if(this.target && this.pages) { this._routing(); }
    }

    private _routing() {
        // 라우터 객체가 생성되면 항상 해쉬 변화를 인지해서 특정 페이지를 렌더링해야한다
        window.onhashchange = () => {
            this.nowPage = window.location.hash.replace('#/', '');
            
            const currentPageInfo = this.pages.find(page => page.path === this.nowPage);
            let currentPage;
            if(currentPageInfo && currentPageInfo.page) {
                const page: any = currentPageInfo.page;
                currentPage = new page(this.target, this);
            }

            // 현재 선택된 페이지를 target에 넣어주면 페이지가 바뀌는 것처럼 된다
            if(currentPage) currentPage.render();
            
        }
    }

    // history api 이용
    //
    push({ data={}, title='', path }: { data?: Object, title?: string, path: string }) {
        history.pushState(data, title, path);
        const currentPageInfo = this.pages.find(page => page.path === path);
        
        const page: any = currentPageInfo?.page;
        const currentPage = new page(this.target, this);
        currentPage.render();
    }

    push2(pageName: string) {
        window.location.hash = pageName;        
    }
}