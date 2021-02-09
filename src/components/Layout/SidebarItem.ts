// https://www.youtube.com/watch?v=hSm2q6u542M&t=733s
import palette from "../../lib/palette";
import { router } from "../../routes/Router";
import { categories } from "./category";


export default function SidebarItem () {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebarStyle';
    sidebar.appendChild(logo());
    sidebar.appendChild(menu()); 
    
    return sidebar;
}

function logo() {
    const logo = document.createElement('div');
    logo.innerText = 'MY WEB';
    logo.className = 'logoStyle';
    logo.style.color = palette.blueGrey[900];

    logo.addEventListener('click', _ => {
        router.push({ title: 'main!!!', path: '/' });
    });
    
    return logo;
}

function menu() {
    const menu = document.createElement('ul');
    menu.className = 'menuStyle';

    categories.map((c: object, index) => {
        const item = document.createElement('li');
        item.className = `itemStyle`;
        item.style.color = palette.blueGrey[600];
        item.innerHTML = categories[index].icon;

        const category = document.createElement('span');
        category.className = 'categoryStyle';
        category.style.color = `${palette.blueGrey[600]}`;
        category.innerText = categories[index].category;

        item.appendChild(category);
        menu.appendChild(item);
    });

    // item 클릭 시, 페이지 이동
    let oldTarget: any = null;
    menu.addEventListener('click', e => {
        const currentTarget: HTMLElement | null = (<HTMLElement>e.target).closest('li');
        const currentName = (<HTMLElement>currentTarget).innerText;
        const currentCategory = categories.find((c) => {
            return c.category === currentName;
        });

        router.push({ title: currentCategory.category, path: currentCategory.to });

        if(oldTarget) (<HTMLElement>oldTarget).classList.remove('itemStyleActive');
        (<HTMLElement>currentTarget).classList.add('itemStyleActive');
        oldTarget = currentTarget;        
    });

    return menu;
}



