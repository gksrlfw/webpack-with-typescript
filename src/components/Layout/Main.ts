export default function main () {
    const main = document.createElement('aside');
    main.innerText = 'main';
    main.className = 'mainStyle';
    main.style.cssText = mainStyle;
    return main;
}

const mainStyle = `
    padding-left: 2rem;
    margin-left: 16.25rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
`;

