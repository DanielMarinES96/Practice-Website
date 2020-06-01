const navSlide = () => {
  const menu = document.querySelector(".menu-icon");
  const nav = document.querySelector(".nav_links");

  menu.addEventListener("click", () => {
    nav.classList.toggle(".showing");
  });
};

navSlide();
