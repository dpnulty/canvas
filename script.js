document.addEventListener('DOMContentLoaded', function() {
    var mobileMenuToggle = document.getElementById('mobile-menu');
    var navList = document.getElementById('nav-list');

    mobileMenuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});

function changeHeaderColor() {
    var header = document.querySelector('header');
    header.style.backgroundColor = '#f4f4f4'; // Change to your desired color
}
