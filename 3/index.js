document.querySelectorAll("button").forEach((button, i) => {
  button.addEventListener("click", (e) => {
    if (e.target.parentElement.parentElement.classList.contains("open")) {
      e.target.parentElement.parentElement.classList.remove("open");
    } else {
      e.target.parentElement.parentElement.classList.add("open");
    }
  });
});
