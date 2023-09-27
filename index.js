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


const addRectangleButton = document.getElementById("addRectangleButton");
const rectangleContainer = document.getElementById("rectangleContaner")
addRectangleButton.addEventListener("click", () => {
  const rectangle = document.createElement("div");
  rectangle.classList.add("rectangle");
  rectangle.style.display = "inline-block";
  rectangle.style.marginTop = "60px";
  rectangle.style.marginRight = "10px";
  rectangleContainer.appendChild(rectangle);
  if (rectangle) {
    rectangle.addEventListener("click", () => {
      color = rectangle.style.backgroundColor;
      color === "red"
        ? (rectangle.style.backgroundColor = "blue")
        : (rectangle.style.backgroundColor = "red");
    });
  } else {
    console.error('Element with class "rectangle" not found.');
  }
  
})


// const createRectangle = (parent) => {
//   const rectangle = document.createElement("div");
//   rectangle.classList.add("rectangle");
//   rectangle.style.display = "inline-block";
//   rectangle.style.marginTop = "60px";
//   rectangle.style.marginRight = "10px";
//   parent.appendChild(rectangle);
//   if (rectangle) {
//     rectangle.addEventListener("click", () => {
//       color = rectangle.style.backgroundColor;
//       color === "red"
//         ? (rectangle.style.backgroundColor = "blue")
//         : (rectangle.style.backgroundColor = "red");
//     });
//   } else {
//     console.error('Element with class "rectangle" not found.');
//   }
// }

