function generateBox() {
  const boxContainer = document.querySelector(".box-container");
  const hero = document.querySelector(".hero");

  const screenWidth = hero.clientWidth;
  const screenHeight = hero.clientHeight;
  const numberOfBoxes = 20;

  const boxWidthNum = screenWidth / numberOfBoxes;
  const boxHeightNum = screenHeight / numberOfBoxes;

  console.log(boxWidthNum, boxHeightNum);

  for (let i = 0; i < numberOfBoxes; ++i) {
    const boxCol = document.createElement("div");
    boxCol.classList.add("box-col");

    for (let j = 0; j < numberOfBoxes; ++j) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${boxWidthNum}px`;
      box.style.height = `${boxWidthNum}px`;

      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "#00ff0b";
        setTimeout(() => {
          box.style.backgroundColor = "transparent";
        }, 300);
      });

      boxCol.appendChild(box);
    }

    boxContainer.appendChild(boxCol);
  }
}

function removeBoxes() {
  const boxContainer = document.querySelector(".box-container");
  if (boxContainer) {
    boxContainer.remove();
  }
}

window.addEventListener("load", () =>
  window.innerWidth >= 800 ? generateBox() : null,
);
window.addEventListener("resize", () =>
  window.innerWidth < 800 ? removeBoxes() : null,
);
