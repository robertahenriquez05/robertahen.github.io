// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

// Close menu after clicking a link (mobile)
navLinks?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Demo form button
document.getElementById("fakeSend")?.addEventListener("click", () => {
  const note = document.getElementById("formNote");
  note.textContent = "Sent (demo)! If you want, we can connect this to Formspree or Netlify Forms.";
});
