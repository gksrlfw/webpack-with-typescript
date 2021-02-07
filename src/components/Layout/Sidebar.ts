import SidebarItem from "./SidebarItem";

export default function Sidebar () {
    const side = document.createElement('aside');
    side.className = 'sideStyle';
    side.style.cssText = sideStyle;    
    side.appendChild(SidebarItem());
    return side;
}

// 48px -> 3rem
const sideStyle = `
    width: 16.25rem;
    height: 100%;
    position: fixed;
    display: fixed;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 3rem;
`;

// export default class Sidebar extends Component {
//     private router: Router;
//     constructor($target: any) {
//         super($target);
//         this.router = new Router(this.$target);
//         this.$target.className = 'sidebarStyle';
//         this.$target.style.cssText = sidebarStyle;
//     }

//     template() {        
//         return (html
//         `   
//             <aside>sidebar</aside>
//         `);
//     } 
// }