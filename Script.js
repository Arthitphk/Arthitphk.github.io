function toggleHamburgerIcon(el) {
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