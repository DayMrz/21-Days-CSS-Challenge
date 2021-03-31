const catToggle = document.querySelector('.fas');
const nav = document.querySelector('.nav');


catToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})
