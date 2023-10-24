import { newMob } from "./mob.js";

export function create (x, y) {

  let width = 60;
  let height = 120;
  x = x - width;

  let newEl = newMob(x, y, width, height);

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
