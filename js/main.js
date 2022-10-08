//LOADER ANIMATIONo
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.style.display = "none";
    }, 1500);
  }, 2000);

  //SCROLL ANIMATION
  window.addEventListener("scroll", reveal);

  function reveal() {
    let reveals = document.querySelectorAll(".main__tent--reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
});
