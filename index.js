let select = (selector) => document.querySelector(selector);
let selectAll = (selector) => document.querySelectorAll(selector);
let menu = select('#menu');
let dropdown = select('#drop-down');
let nav = select('nav');
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

let showMore = selectAll('.faq-card img');
showMore.forEach(obj =>{
    obj.addEventListener('click', () =>{
        let direction = getComputedStyle(obj).transform;
        let paragraph = obj.parentElement.children[1];
        if(direction == 'matrix(1, 0, 0, 1, 0, 0)') {
            obj.style.transform = 'rotate(180deg)';
            paragraph.style.display = 'none'
        }
        else{
            obj.style.transform = 'rotate(0deg)'
            paragraph.style.display = 'block';
        }
    
    })
})

/*showMore.addEventListener('click', () => {
    let direction = getComputedStyle(showMore).transform
    let paragraph = selectAll('.faq-card p');
    console.log(paragraph)
    if(direction == 'matrix(1, 0, 0, 1, 0, 0)') {
        showMore.style.transform = 'rotate(180deg)';
        paragraph.style.display = 'none'
    }
    else{
        showMore.style.transform = 'rotate(0deg)';
        paragraph.style.display = 'block';

    }
})*/
