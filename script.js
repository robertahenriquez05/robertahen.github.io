// Photo / thermal comparison slider
document.querySelectorAll(".compare").forEach((compare) => {
  const range = compare.querySelector(".compare-range");
  if (!range) return;
  const update = () => compare.style.setProperty("--pos", range.value + "%");
  range.addEventListener("input", update);
  update();
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form: send without leaving the page
const form = document.querySelector(".contact-form");
if (form) {
  const status = form.querySelector(".form-status");
  const button = form.querySelector("button[type=submit]");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.classList.remove("is-error");
    status.textContent = "Sending...";
    button.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      status.textContent = "Message sent. Thanks for reaching out.";
    } catch (error) {
      status.classList.add("is-error");
      status.textContent = "Your message didn't send. Check your connection and try again, or email roberta.henriquez04@gmail.com.";
    } finally {
      button.disabled = false;
    }
  });
}
