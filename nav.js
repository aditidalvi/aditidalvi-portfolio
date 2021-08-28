const toggle_button = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggle_button.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active');
})

