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
});

let scrollLeft = select('#reviews img:nth-of-type(1)');
let scrollRight = select('#reviews img:nth-of-type(2)');
let reviewsWrapper = select('#reviews-wrapper');

scrollRight.addEventListener('click', () =>{
    console.log('tapped!')
    reviewsWrapper.scrollBy({
        left: 350,
        behaviour: 'smooth'
    })
});

scrollLeft.addEventListener('click', () =>{
    console.log('clicked!')
    reviewsWrapper.scrollBy({
        left: -350,
        behaviour: 'smooth'
    })
})

