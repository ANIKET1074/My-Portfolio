window.addEventListener("scroll", () => {
  var timeline = document.getElementById("notimeline");
  if (window.scrollY > 1500) {
    // console.log("HI");

    timeline.classList.add("timeline");
  } else {
    timeline.classList.remove("timeline");
  }
});

function darkTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var contact = document.getElementById("contact");
  contact.classList.toggle("dark-contact");
  contact.classList.toggle("contact");
}
