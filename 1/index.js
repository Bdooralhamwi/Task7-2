let index = 0;

document.querySelectorAll(".ip img").forEach((img, i) => {
  img.addEventListener("click", (e) => {
    index = i;
    console.log(img.getAttribute("data-color"));
    document.querySelector(".hero").style.backgroundColor =
      img.getAttribute("data-color");
    document
      .querySelector("#preview-img")
      .setAttribute("src", "/1/img/" + (i + 1) + ".jpeg");
    if (i == 2) {
      document.querySelector(".hero .title div h1").style.color = "#000";
      document.querySelector(".hero .title div p").style.color = "#000";
    } else {
      document.querySelector(".hero .title div h1").style.color = "#fff";
      document.querySelector(".hero .title div p").style.color = "#fff";
    }
  });
});
