// https://www.youtube.com/watch?v=hSm2q6u542M&t=733s
import palette from "../../lib/palette";
import { flask, music } from "../Icons/icon";

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


    return menu;
}

const categories: Array<any> = [
    {
        icon: music,
        category: 'Music'
    },
    {
        icon: flask,
        category: 'Category'
    }
];

