document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.getElementsByClassName("questions-list-container");
  const rotatableElements = document.getElementsByClassName("vector-answer");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      const isActive = this.classList.contains("active");
      const activeElements = document.querySelectorAll(".active");
      const activeRotatableElements = document.querySelectorAll(".rotated");

      for (const activeElement of activeElements) {
        activeElement.classList.remove("active");
      }

      for (const rotatableElement of activeRotatableElements) {
        rotatableElement.classList.remove("rotated");
      }

      if (!isActive) {
        this.classList.add("active");
        rotatableElements[i].classList.add("rotated");
      }
    });
  }
});
