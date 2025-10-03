const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


document.querySelectorAll('.navbar a').forEach(link =>
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    })
);
