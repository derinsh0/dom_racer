import { uuidv4 } from "/lib/uuid.js";

export function newMob (x, y, w, h) {

  let newEl = document.createElement("div");

  newEl.id = uuidv4();

  x < 0 && (x = 0);

  newEl.style.left = x + "px";
  newEl.style.top = y + "px";

  newEl.style.width = w + "px";
  newEl.style.height = h + "px";

  newEl.style.borderStyle = "solid";
  newEl.style.borderWidth = "2px";

//  newEl.style.display = "flex";
  newEl.style.alignContent = "center";
  newEl.style.justifyContent = "center";

  newEl.style.position = "absolute";

  window.mobs.add(newEl.id);
  return newEl;
}
