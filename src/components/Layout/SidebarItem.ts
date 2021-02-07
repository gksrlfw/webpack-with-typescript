import palette from "../../lib/palette";
import { flask } from "../Icons/icon";

export default function SidebarItem () {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebarStyle';
    sidebar.style.cssText = sidebarStyle;    
    sidebar.appendChild(logo());
    sidebar.appendChild(menu());
    

    // render(menu2(), sidebar);
    return sidebar;
}

function logo() {
    const logo = document.createElement('div');
    logo.innerText = 'LOGO';
    logo.className = 'logoStyle';
    logo.style.cssText = logoStyle;    
    return logo;
}

function menu() {
    const menu = document.createElement('ul');
    menu.className = 'menuStyle';
    menu.style.cssText = menuStyle;

    const item = document.createElement('li');
    item.className = 'itemStyle';
    item.style.cssText = itemStyle;
    item.innerHTML = flask;

    const category = document.createElement('span');
    category.className = 'categoryStyle';
    category.style.cssText = categoryStyle;
    category.innerText = 'Lab';
    
    item.appendChild(category);
    menu.appendChild(item);
    return menu;
}

const sidebarStyle = `
    flex: 1;
`;

const logoStyle = `
    font-weight: bold;
    font-size: 1.5rem;
    color: ${palette.blueGrey[900]};
`;

const menuStyle = `
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 5.625rem; // 여백을 90정도로 -> 90/16 ?? 
`;

const itemStyle = `
    color: ${palette.cyan[600]};
`;

const categoryStyle = `
    margin-left: 1rem;
    color: black;
`;