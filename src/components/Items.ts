// import Component from "../core/Component";
// //https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_2-%E1%84%8E%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AA

// export default class App extends Component {
//     // private $state: any = { items: [] };
//     // constructor($target: any) {
//     //     // super($target);
//     // }
//     setup() {
//       console.log('child: setup');
      
//       this.$state = { items: ['item1', 'item2'] };
//     }
//     template() {
//       console.log('child: temp');
//         const { items } = this.$state;
//         return `
//         <ul>
//         ${items.map((item: any, key: number) => `
//             <li>
//                 ${item}
//                 <button class="deleteBtn" data-index="${key}">삭제</button>
//             </li>
//         `).join('')}
//         </ul>
//         <button class="addBtn">추가</button>
//       `
//     }
//     // event는 각 하위요소에 다는것이 아니라, 컴포넌트의 target을 통해 지정한다
//     // 따라서 render 할때마다 등록하지 않고, 컴포넌트가 생성되는 시점에만 이벤트를 등록하면 된다
//     setEvent() {
//       console.log('child: eve');
//         this.$target.addEventListener('click', (e: any) => {
//             const items = [ ...this.$state.items];
//             if(e.target.classList.contains('addBtn')) {
//                 this.setState({ items: [ ...items, `item${items.length + 1}` ]});
//             }

//             if(e.target.classList.contains('deleteBtn')) {
//                 items.splice(e.target.dataset.index, 1);
//                 this.setState({ items });
//             }
//         });
//     }


//     // 이벤트 버블링 추상화 이후 사용.
//     // setEvent2() {
//     //     this.addEvent('click', '.addBtn', (e: any) => {
//     //         const { items } = this.$state;
//     //         this.setState({ items: [...items, `item${items.length+1}`]});
//     //     });
//     //     this.addEvent('click', '.addBtn', (e: any) => {
//     //         const items = [ ...this.$state.items ];
//     //         items.splice(e.target.dataset.index, 1);
//     //         this.setState({ items });
//     //     });
//     // }
// }