import { newMob, killMob } from "./mob.js";

export function create (x, y) {

  let width = 60;
  let height = 90;
  x = x - width;

  let newEl = newMob(x, y, width, height);

  newEl.count = Math.round(Math.random() * 9 + 1);

  let disp = document.createElement("div");
  disp.innerHTML = newEl.count;
  disp.style.margin = "auto";
  newEl.appendChild(disp);

  let newBtn = document.createElement("button");
  newBtn.style.height = "20px";
  newBtn.style.width = "50px";
  newBtn.style.margin = "auto";
  newBtn.innerHTML = "<";
  newBtn.addEventListener("click", () => {newEl.count--;disp.innerHTML=newEl.count; if (newEl.count == 0) {killMob(newEl)}})

  newEl.appendChild(newBtn);

  document.getElementById("main").appendChild(newEl);
  return newEl;
}
