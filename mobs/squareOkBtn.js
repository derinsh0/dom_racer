import { uuidv4 } from "/lib/uuid.js";

export function create (x, y) {

  let newEl = document.createElement("div");

  newEl.id = uuidv4();
  window.mobs.add(newEl.id);

  newEl.style.position = "absolute";

  newEl.style.left = x + "px";
  newEl.style.top = y + "px";

  newEl.style.width = "60px";
  newEl.style.height = "120px";
  newEl.style.borderStyle = "solid";
  newEl.style.borderWidth = "2px";

  newEl.style.display = "flex";
  newEl.style.alignContent = "center";
  newEl.style.justifyContent = "center";

  let newBtn = document.createElement("button");
  newBtn.style.height = "20px";
  newBtn.style.width = "50px";
  newBtn.style.margin = "auto";
  newBtn.innerHTML = "Click";
  newBtn.addEventListener("click", () => {window.mobs.delete(newEl.id);newEl.remove();window.score++;})

  newEl.appendChild(newBtn);

  document.getElementById("main").appendChild(newEl);
  return newEl;

}


console.log(uuidv4());
