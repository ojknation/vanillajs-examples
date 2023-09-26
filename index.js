const rectangleElement = document.querySelector(".rectangle");

if (rectangleElement) {
  rectangleElement.addEventListener("click", () => {
    color = rectangleElement.style.backgroundColor;
    color === "red"
      ? (rectangleElement.style.backgroundColor = "blue")
      : (rectangleElement.style.backgroundColor = "red");
  });
} else {
  console.error('Element with class "rectangle" not found.');
}
