document.addEventListener("DOMContentLoaded", function () {
  const revealElement = document.querySelector(".reveal");
  const revealText = document.getElementById("revealText");

  // Wrap each character in a span
  revealText.innerHTML = revealText.textContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  const spans = revealText.querySelectorAll("span");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const elementTop = revealElement.getBoundingClientRect().top;
    const elementBottom = revealElement.getBoundingClientRect().bottom;
    const elementHeight = revealElement.getBoundingClientRect().height;

    // Calculate the percentage of the element that is visible
    let revealPercentage =
      (windowHeight - elementTop) / (windowHeight + elementHeight);
    revealPercentage = Math.max(0, Math.min(1, revealPercentage)); // Clamp between 0 and 1

    // Calculate the number of characters to reveal based on the percentage
    const charsToReveal = Math.floor(revealPercentage * spans.length);

    // Reveal characters up to the calculated index
    spans.forEach((span, index) => {
      if (index < charsToReveal) {
        span.classList.add("visible");
      } else {
        span.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // To reveal elements that are already in view
});
//changing from grey to white
document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.getElementById("color-changing-paragraph");
  const text = paragraph.textContent;
  const chars = text.split("");

  // Clear the original paragraph text and replace with spans
  paragraph.innerHTML = "";
  chars.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    paragraph.appendChild(span);
  });

  document.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight + 20;

    // Calculate scroll percentage
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

    // Calculate number of characters to change color
    const charsToChange = Math.floor((scrollPercent / 100) * chars.length);

    const spans = paragraph.querySelectorAll("span");
    spans.forEach((span, index) => {
      if (index < charsToChange) {
        span.style.color = "white";
        span.style.opacity = 0.8;
        span.classList.add("visible");
      } else {
        span.style.color = "grey";
        span.style.opacity = 1;
        span.classList.remove("visible");
      }
    });
  });
});

//changing direction
document.addEventListener("DOMContentLoaded", function () {
  const revealElement = document.querySelector(".reveal");
  const sentences = document.querySelectorAll(".text-left, .text-right");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const elementTop = revealElement.getBoundingClientRect().top;
    const elementBottom = revealElement.getBoundingClientRect().bottom;
    const elementHeight = revealElement.getBoundingClientRect().height;

    if (elementTop <= windowHeight && elementBottom >= 0) {
      const revealPercentage = Math.min(
        1,
        Math.max(
          0,
          (windowHeight - elementTop) / (windowHeight + elementHeight)
        )
      );
      const sentencesToReveal = Math.floor(revealPercentage * sentences.length);

      sentences.forEach((sentence, index) => {
        if (index < sentencesToReveal) {
          sentence.classList.add("visible");
        } else {
          sentence.classList.remove("visible");
        }
      });
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // To reveal elements that are already in view
});
