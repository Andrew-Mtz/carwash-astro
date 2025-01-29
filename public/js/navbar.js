function updateNavbar() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Detectar el scroll y actualizar el navbar
window.addEventListener("scroll", updateNavbar);

// Ejecutar el script al cargar la página para corregir el problema
window.addEventListener("DOMContentLoaded", updateNavbar);

// --------------------
// 🔹 Resaltar la Sección Activa en el Navbar
// --------------------
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".modern-nav a");
  const sections = document.querySelectorAll("section");

  function highlightActiveLink() {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 50) {
        current = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  }

  // Detectar scroll para cambiar la sección activa
  window.addEventListener("scroll", highlightActiveLink);

  // Ejecutar al cargar la página
  highlightActiveLink();
});
