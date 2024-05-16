document.querySelectorAll(".fa-star").forEach((star, i) => {
  star.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
    }
  });
});
