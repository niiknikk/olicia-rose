const navBtn = document.getElementById('navBtn');
const navLinks = document.querySelector('nav');

navBtn.addEventListener('click', function(e){
    e.preventDefault()
    navLinks.classList.toggle('active');
    navBtn.classList.toggle('open');

});

