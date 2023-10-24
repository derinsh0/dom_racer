import { newMob } from "./mob.js";

export function create (x, y) {

  let w = 90;
  let h = 90;
  x = x - w;

  let newEl = newMob(x, y, w, h);

  let string = [...Array(5)].map(() => Math.random().toString(36)[2]).join('');

  let text = document.createElement("div");
  text.id = "text"
  text.innerHTML = string;
  text.style.margin = "auto";
  newEl.appendChild(text);

  let input = document.createElement("textarea");
  input.style.height = "60px";
  input.style.width = "80px";
  input.style.margin = "auto";

  input.addEventListener("input", e => {if (input.value === string) {window.mobs.delete(newEl.id);newEl.remove();window.score++;}});

  newEl.appendChild(input);

  document.getElementById("main").appendChild(newEl);
  return newEl;
}
