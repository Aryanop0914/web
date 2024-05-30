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
        span.style.color = "grey";
      } else {
        span.style.color = "white";
      }
    });
  });
});
