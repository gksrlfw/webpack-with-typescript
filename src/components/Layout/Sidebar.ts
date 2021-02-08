import palette from "../../lib/palette";
import SidebarItem from "./SidebarItem";

export default function Sidebar () {
    const side = document.createElement('aside');
    side.className = 'sideStyle';
    side.style.background = palette.blueGrey[50];
    side.appendChild(SidebarItem());
    return side;
}

// 48px -> 3rem

