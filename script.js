// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx bx-x');
    navbar.classList.toggle('active');
};



// scroll section active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('action');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);

// remove toggle icon and navbar when 
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

// scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '88px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' }); 
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });


//  type js
const typed = new Typed('.multi-text',{
    strings: ['Frontend Developer', 'C++ Developer', 'Web Developer'],

    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

console.log("JS file loaded");
