document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.querySelector(".menu-button-container");
    const firstSlideGeneralContainer = document.querySelector(".general-container");
  
    hamburgerButton.addEventListener("click", function () {
      if (firstSlideGeneralContainer.classList.contains("header-menu-open")) {
        firstSlideGeneralContainer.classList.remove("header-menu-open");
      } else {
        firstSlideGeneralContainer.classList.add("header-menu-open");
      }
    });
  });