
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

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("uSN57bB3O17wP2azq");
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            emailjs.sendForm("service_f7hv6kv", "template_zw8qvh6", this)
                .then(function () {
                    alert("Message sent successfully!");
                    form.reset();
                }, function (error) {
                    alert("Failed to send message. Please try again.");
                    console.error(error);
                });
        });
    }
});
