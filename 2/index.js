document.querySelector(".fas").addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-moon")) {
    e.target.classList.add("fa-sun");
    e.target.classList.remove("fa-moon");
    document.body.classList.add("dark");
  } else {
    e.target.classList.remove("fa-sun");
    e.target.classList.add("fa-moon");
    document.body.classList.remove("dark");
  }
});
