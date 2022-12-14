const cols = document.querySelectorAll(".col");

document.addEventListener("keydown", (event) => {
  event.preventDefault()
  if (event.code.toLowerCase() == "spase") {
    setRandomColors();
  }
});

document.addEventListener("click", (event) => {
  const type = event.target.dataset.type;
  if (type === "lock") {
    const node =
      event.target.tagName.toLowerCase() == "i"
        ? event.target
        : event.target.children[0];
    node.classList.toggle("fa-lock-open");
    node.classList.toggle("fa-lock");
  }
});

function gerenerateRandomColor() {
  const hexCodes = "123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
}

function setRandomColors() {
  cols.forEach((col) => {
    const text = col.querySelector("h2");
    const button = col.querySelector("button");
    const color = chroma.random();

    text.textContent = color;
    col.style.background = color;
    setTexstColor(text, color);
    setTexstColor(button, color);
  });
}

function setTexstColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? "black" : "white";
}

setRandomColors();
