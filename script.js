// let btn = document.getElementById('menu');
// let del = document.getElementById('del');
// let menu = document.querySelector('section');

// function show(){
//  menu.style.display = 'static';
// }
// function hide(){
//     menu.style.display = 'none';
// }

// btn.addEventListener('click', show);
// del.addEventListener('click',hide);

// nav bar configuration

document.getElementById('service').addEventListener('mouseover', () =>{
    document.getElementById('nav_container').style.display = 'none';
    document.getElementById('scroll-nav').style.display = 'flex';
});
document.getElementById('mouse-e').addEventListener('mouseover', () =>{
    document.getElementById('nav_container').style.display = 'none';
    document.getElementById('scroll-nav').style.display = 'flex';
});
document.getElementById('hero').addEventListener('mouseover', () => {
    document.getElementById('nav_container').style.display = 'flex';
    document.getElementById('scroll-nav').style.display = 'none';
})


                            
                                //phone

document.getElementById('service').addEventListener('ontouchmove', () =>{
    document.getElementById('nav_container').style.display = 'none';
    document.getElementById('scroll-nav').style.display = 'flex';
});
document.getElementById('hero').addEventListener('ontouchmove', () => {
    document.getElementById('nav_container').style.display = 'flex';
    document.getElementById('scroll-nav').style.display = 'none';
})


// burger menu