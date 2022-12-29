let select = (selector) => document.querySelector(selector);
let menu = select('#menu');
let dropdown = select('#drop-down');
let nav = select('nav');
alert(window.innerWidth)
menu.addEventListener('click', () => {
    if(window.innerWidth > 700) return;
    menu.style.visibility = 'hidden'
    dropdown.style.visibility = 'visible';
})

nav.addEventListener('mouseleave',()=>{
    if(window.innerWidth > 700) return;
    menu.style.visibility = 'visible'
    dropdown.style.visibility = 'hidden';
});

window.addEventListener('resize', () =>{
    if(window.innerWidth > 700){
        dropdown.style.visibility = 'visible';
    }
    else{
        dropdown.style.visibility = 'hidden';
        menu.style.visibility = 'visible';
    }
});
