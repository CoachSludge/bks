document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".toggle-header");

    headers.forEach(header => {
      header.style.cursor = "pointer";

      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.classList.toggle("collapsed");
      });
    });
  });