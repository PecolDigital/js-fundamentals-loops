let size = 10;
let orderElement = 1;

const init = () => {
  // Tworzenie przycisku
  const btn = document.createElement("button");
  window.document.body.appendChild(btn);
  btn.innerText = "Dodaj 10 elementów";
  // Tworzymy liste ul
  const ulElement = document.createElement("ul");
  window.document.body.appendChild(ulElement);

  btn.addEventListener("click", createLiElement);
};

const createLiElement = () => {
  for (let i = 0; i < 10; i++) {
    const liElement = document.createElement("li");

    liElement.innerText = `Element nr ${orderElement}`;
    liElement.style.color = "white";
    liElement.style.fontSize = size + "px";
    liElement.style.display = "block";
    orderElement += 1;
    size += 2;
    window.document.querySelector("ul").appendChild(liElement);
  }
};

init();
