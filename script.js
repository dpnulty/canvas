document.addEventListener('DOMContentLoaded', function() {
    var mobileMenuToggle = document.getElementById('mobile-menu');
    var navList = document.getElementById('nav-list');

    mobileMenuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});
