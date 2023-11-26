document.addEventListener("scroll", function () {
  let navbar = document.getElementById("logo");
  let getButton = document.getElementById("Startbutton");
  if (window.scrollY > 400) {
    navbar.style.backgroundColor = "white";
    getButton.style.backgroundColor = "#198917";
  } else {
    navbar.style.backgroundColor = "#ffc017";
    getButton.style.backgroundColor = "black";
  }
});
