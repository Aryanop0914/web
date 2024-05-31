let content = document.querySelectorAll("content");

window.addEventListener("scroll", () => {
  content.forEach((sec) => {
    let top = window.screenY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    console.log(top, offset, height);
    if (top >= offset && top < offset + height) {
      sec.classList.add("invisible");
    } else {
      sec.classList.remove("invisible");
    }
  });
});
