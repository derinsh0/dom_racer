////////////////////////////////////////////////////////////////////////////////
//                                 Dom Racer                                 //
///////////////////////////////////////////////////////////////////////////////

// Globals
let doc = document;
let b;
let d;

// State
window.mobs = new Set([]);
window.score = 0;

// Game settings
let start = 0;
let t = 0;
let difficulty = 0.02;


// Init document
//
let init = () => {
  b = doc.createElement("body");
  b.id = "BODDAY";
  doc.body = b;
  d = doc.createElement("div");
  d.id = "main";
  d.style.minWidth = "99vw";
  d.style.minHeight = "99vh";
  d.style.overflow = "clip";
  d.style.position = "absolute";
  b.appendChild(d);

  let scoreEl = doc.createElement("div");
  scoreEl.id = "score";
  scoreEl.style.position = "relative";
  scoreEl.style.bottom = "5%";
  scoreEl.style.left = "50%";
  scoreEl.innerHTML = window.score;

  d.appendChild(scoreEl);

  create();
  main();
}

// Create mob
//
let create = () => {

  let r = Math.random();

  if (r < 0.6)
    import('./mobs/squareOkBtn.js').then((mod) => {let newEl = mod.create(Math.round(Math.random() * d.clientWidth), d.clientHeight)});
  else if (r < 0.9)
    import('./mobs/decrement.js').then((mod) => {let newEl = mod.create(Math.round(Math.random() * d.clientWidth), d.clientHeight)});
  else
    import('./mobs/textBox.js').then((mod) => {let newEl = mod.create(Math.round(Math.random() * d.clientWidth), d.clientHeight)});
}

// Main loop
//
window.main = (ts) => {

  if (start == undefined) {
    start = ts;
  }

  if (t == undefined) {
    t = ts;
  }

  if ((ts - t) * difficulty > 100) {
    create();
    t = ts;
  }

  if ((ts - start) * difficulty > 1000) {
    difficulty = difficulty * 2;
    start = ts;
  }

  doc.getElementById("score").innerHTML = window.score;

  frame = window.requestAnimationFrame(main);

  for (id of window.mobs) {

    el = document.getElementById(id);

    x = el.style.left;
    y = parseInt(el.style.top.split("px")[0])

    if (y > 0) {
      y = y - 1;
      el.style.top = y + "px";
    }

    else if (y == 0) {
      window.cancelAnimationFrame(frame);
      alert("YOU LOST!!!!!!!!");
      document.body.style.pointerEvents = "none";
    }
  }
}

doc.onload = init();
