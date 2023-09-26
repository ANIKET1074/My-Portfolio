function darkTheme() {
  var element = document.body;
  var mover = document.getElementById("img1");
  element.classList.toggle("dark-mode");

  var contact = document.getElementById("contact");
  contact.classList.toggle("dark-contact");
  contact.classList.toggle("contact");
  mover.classList.toggle("mover");
}

function sidebarActivate() {
  var sidebartoggle = document.querySelector(".navb");
  sidebartoggle.classList.add("navb_activate");
}
function sidebarDeActivate() {
  var sidebartoggle = document.querySelector(".navb");
  sidebartoggle.classList.remove("navb_activate");
}

// Remove Menu Mobile

// const navLink = document.querySelectorAll(".nav__link");

// function linkAction() {
//    navMenu = document.getElementById("nav-menu");
//   // When we click on each nav__link, we remove the show-menu class
//   navMenu.classList.remove("show-menu");
// }
// navLink.forEach((n) => n.addEventListener("click", linkAction));
