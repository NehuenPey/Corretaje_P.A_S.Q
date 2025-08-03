// Mostrar/Ocultar el menú lateral
const toggleBtn = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (toggleBtn && navbar) {
  toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Ocultar si se hace clic fuera del menú
  document.addEventListener("click", (e) => {
    if (
      navbar.classList.contains("active") &&
      !navbar.contains(e.target) &&
      e.target !== toggleBtn
    ) {
      navbar.classList.remove("active");
    }
  });
}

// Guardar contenido editable localmente por ID
document.querySelectorAll('[contenteditable][id^="nota-"]').forEach((caja) => {
  const id = caja.id;
  caja.innerHTML = localStorage.getItem(id) || "";

  caja.addEventListener("input", () => {
    localStorage.setItem(id, caja.innerHTML);
  });
});

// Marcar enlace activo en navbar
const currentUrl = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === currentUrl.split('/').pop()) {
    link.classList.add('active');
  }
});
