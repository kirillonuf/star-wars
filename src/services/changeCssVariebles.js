export const changeCssVariebles = (theme)=>{
    const cssVariables = ['header', 'bgimage'];

    const root = document.querySelector(':root');

    cssVariables.forEach(item=>{
        root.style.setProperty(`--theme-default-${item}`, 
        `var(--theme-${theme}-${item})`);
    });
}