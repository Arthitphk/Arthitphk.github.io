/*function toggleHamburgerIcon(el) {
  el.classList.toggle("change");
}

const MyMenu = document.getElementById("MyMenu");
const hamicon = document.getElementById("hamicon");


hamicon.addEventListener("click", function() {
    if (MyMenu.style.display === "block") {
        MyMenu.style.display = "none";
    } else {
        MyMenu.style.display = "block";
    }
})
*/


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


