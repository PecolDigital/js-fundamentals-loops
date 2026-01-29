const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const liItems = ul.querySelectorAll("li");

let size = 10;
let grow = true;

function forEachLoop() {
  liItems.forEach((li) => {
    li.style.display = "block";
    li.style.fontSize = size + "px";
  });
  if (grow) {
    size++;
  }
}

btn.addEventListener("click", forEachLoop);
