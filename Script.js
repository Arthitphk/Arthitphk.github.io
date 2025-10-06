

let darktheme = localStorage.getItem('darktheme');
const darkthemeToggle = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darktheme');
    localStorage.setItem('darktheme', 'active');
}
 
const disableDarkMode = () => {
    document.body.classList.remove('darktheme');
    localStorage.setItem('darktheme', null);
}

if (darktheme === 'active') enableDarkMode();

darkthemeToggle.addEventListener("click", () => {
    darktheme = localStorage.getItem("darktheme");
    darktheme !== 'active' ? enableDarkMode() : disableDarkMode();
});






const hamburger  = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.menu-item')
.forEach(n => n.addEventListener('click', ()=> {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))



