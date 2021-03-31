const logoToggle = document.querySelector('.logo');
const nav = document.querySelector('.nav');

logoToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

