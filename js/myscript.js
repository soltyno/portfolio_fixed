// Navigation
let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateX(100%)';
        nav.style.transition = 'transform 0.2s ease-out';
        document.querySelector('.portfolio-box').style.animation = "slideToDown 0.5s forwards";
        document.querySelector('.main-menu').style.animation = "slideToRight_main 1s forwards";
        document.querySelector('.portfolio-menu').style.animation = "slideToRight_port 1s forwards";
    }
});


// Menu Icon 
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});


// Portfolio button

let portfolio_btn = document.querySelector('#portfolio-btn');
let back_btn = document.querySelector('.icon-back');

portfolio_btn.addEventListener('click', show_port_menu);
back_btn.addEventListener('click', close_port_menu);

function show_port_menu() {
    document.querySelector('.main-menu').style.animation = "slideToLeft_main 1s forwards";
    document.querySelector('.portfolio-menu').style.animation = "slideToLeft_port 1s forwards";
    document.querySelector('.portfolio-box').style.animation = "slideToTop 1s forwards";
}

function close_port_menu() {
    document.querySelector('.main-menu').style.animation = "slideToRight_main 1s forwards";
    document.querySelector('.portfolio-menu').style.animation = "slideToRight_port 1s forwards";
    document.querySelector('.portfolio-box').style.animation = "slideToDown 1s forwards";
}

// Portfolio menu

let web_btn = document.querySelector('#web');
let content_btn = document.querySelector('#content');
let animation_btn = document.querySelector('#animation');
let ux_btn = document.querySelector('#ux');

web_btn.addEventListener('mouseover', web);
content_btn.addEventListener('mouseover', content);
animation_btn.addEventListener('mouseover', animation);
ux_btn.addEventListener('mouseover', ux);

function web() {
    document.querySelector('.portfolio-box').style.background = "rgba(47, 75, 153, 0.979)";
    document.querySelector('.web-box').style.display = "block";
    document.querySelector('.content-box').style.display = "none";
    document.querySelector('.animation-box').style.display = "none";
    document.querySelector('.ux-box').style.display = "none";
    document.querySelector('.number').style.animation = "slideToLeft_number 0.5s forwards";
    document.querySelector('.portfolio-box-text').style.animation = "slideToRight_text 0.5s forwards";
    document.querySelector('.title').style.animation = "slideToRight_text 0.5s forwards";
    document.querySelector('.pic_left').style.animation = "slideToTop 0.6s forwards";
    document.querySelector('.pic_middle').style.animation = "slideToTop 0.4s forwards";
    document.querySelector('.pic_right').style.animation = "slideToTop 0.9s forwards";
}

function content() {
    document.querySelector('.portfolio-box').style.background = "#e7661a";
    document.querySelector('.web-box').style.display = "none";
    document.querySelector('.content-box').style.display = "block";
    document.querySelector('.animation-box').style.display = "none";
    document.querySelector('.ux-box').style.display = "none";

    document.querySelector('.number-2').style.animation = "slideToLeft_number 0.5s forwards";
    document.querySelector('.portfolio-box-text-2').style.animation = "slideToRight_text 0.5s forwards";
    document.querySelector('.title-2').style.animation = "slideToRight_text 0.5s forwards";
    document.querySelector('.video_left').style.animation = "slideToTop 0.6s forwards";
    document.querySelector('.video_pic_middle').style.animation = "slideToTop 0.4s forwards";
    document.querySelector('.video_right').style.animation = "slideToTop 0.9s forwards";
}

function animation() {
    document.querySelector('.portfolio-box').style.background = "rgba(59, 133, 49, 0.979)";
    document.querySelector('.web-box').style.display = "none";
    document.querySelector('.content-box').style.display = "none";
    document.querySelector('.animation-box').style.display = "block";
    document.querySelector('.ux-box').style.display = "none";

    document.querySelector('.number-3').style.animation = "slideToLeft_number 0.5s forwards";
    document.querySelector('.portfolio-box-text-3').style.animation = "slideToRight_text 0.5s forwards";
    document.querySelector('.title-3').style.animation = "slideToRight_text 0.5s forwards";
    document.querySelector('.pic_left_2').style.animation = "slideToTop 0.6s forwards";
    document.querySelector('.pic_middle_2').style.animation = "slideToTop 0.4s forwards";
    document.querySelector('.pic_right_2').style.animation = "slideToTop 0.9s forwards";
}

function ux() {
    document.querySelector('.portfolio-box').style.background = "rgba(234, 80, 69, 0.979)";
    document.querySelector('.web-box').style.display = "none";
    document.querySelector('.content-box').style.display = "none";
    document.querySelector('.animation-box').style.display = "none";
    document.querySelector('.ux-box').style.display = "block";

    document.querySelector('.number-4').style.animation = "slideToLeft_number 0.5s forwards";
    document.querySelector('.portfolio-box-text-4').style.animation = "slideToRight_text 0.5s forwards";
    document.querySelector('.title-4').style.animation = "slideToRight_text 0.5s forwards";
    document.querySelector('.video_left_2').style.animation = "slideToTop 0.6s forwards";
    document.querySelector('.video_middle_2').style.animation = "slideToTop 0.4s forwards";
    document.querySelector('.video_right_2').style.animation = "slideToTop 0.9s forwards";
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}