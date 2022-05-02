const $ = document;
const row = $.querySelector(".row");
const boxes = 600;
const color = [
  "#e74c3c",
  "#8e44ad",
  "#3498db",
  "#ff4e08",
  "#2ecc71",
  "#e40101",
  "#004471",
  "#ffd608",
  "#00ca18",
  "#ca0043",
  "#fff"
];

for (let i = 0; i < boxes; i++) {
  const element = $.createElement("div");
  element.classList.add("box");
  row.appendChild(element);
  element.addEventListener("mouseover", () => {
    const randomNumber = Math.floor(Math.random() * color.length)
    element.style.backgroundColor = color[randomNumber]
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  });
  element.addEventListener("mouseleave", () => {
    setTimeout(() => {
      element.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      element.style.boxShadow = "0 0 2px black";
    }, 500);
  })
}
