document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footerText = document.querySelector(".footer-inner p:first-child");

  if (footerText) {
    footerText.textContent = `© ${year} Your Name`;
  }
});
