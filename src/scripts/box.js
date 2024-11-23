function generateBox() {
  let boxContainer = document.querySelector(".box-container");
  const hero = document.querySelector(".hero");

  if(!boxContainer) {
    boxContainer = document.createElement("div");
    boxContainer.classList.add("box-container");
    hero.appendChild(boxContainer);
  }

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
      box.style.background = "transparent";

      box.addEventListener("mouseover", () => {
        box.style.background = "repeating-radial-gradient(circle at 0 0, #eee, #ccc 50px)";
        setTimeout(() => {
          box.style.background = "transparent";
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
window.addEventListener("resize", () => {
  if (window.innerWidth >= 800) {
    removeBoxes();
    generateBox();
  }
}
);
