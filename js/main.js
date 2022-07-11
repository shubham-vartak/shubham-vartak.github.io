// navigation bar effects on scroll 
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll",function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500)
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// navigation menu items active on page scroll 

window.addEventListener("scroll",() =>{
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

// responsive navigation menu toggle 
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () =>{
    navigation.classList.add("active");
});
closeBtn.addEventListener("click", () =>{
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

// common reveal 
ScrollReveal({ 
    reset: true, 
    distance: '60px',
    duration: 2500,
    delay: 100

});

ScrollReveal().reveal('.home .info h2 , .section-title-01, .section-title-02', {delay: 100, origin: 'left'});
ScrollReveal().reveal(' ', {delay: 100, origin: 'right'});
ScrollReveal().reveal('.home .info .btn , .about-info .btn', {delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', {delay: 100, origin: 'left', interval: 100});
ScrollReveal().reveal('.home-img, .about-img', {delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .contact-right', {delay: 100, origin: 'right'});
ScrollReveal().reveal('.skills-description, .contact-left h2', {delay: 100, origin: 'left'});
ScrollReveal().reveal('.project-card, .education', {delay: 100, origin: 'bottom',interval: 100});
ScrollReveal().reveal('footer .group', {delay: 100, origin: 'top',interval: 200});

