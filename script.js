// script.js

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("night-mode-toggle");
  const body = document.body;
  // const section = document.section;

  // Check for night mode preference in localStorage
  // if (localStorage.getItem("night-mode") === "enabled") {
  //   body.classList.add("night-mode");
  //   // body.classList.add("night-mode-section");
  // }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("night-mode");

    // Save preference in localStorage
    // if (body.classList.contains("night-mode")) {
    //   localStorage.setItem("night-mode", "enabled");
    //   // localStorage.setItem("night-mode-section", "enabled");
    // } else {
    //   localStorage.setItem("night-mode", "disabled");
    //   // localStorage.setItem("night-mode-section", "disabled");
    // }
  });
});

// CODE FOR BURGER NAV BTNS
document.getElementById("burger").addEventListener("click", function () {
  const navLinks = document.getElementById("nav_btns");
  navLinks.classList.toggle("active");
});
