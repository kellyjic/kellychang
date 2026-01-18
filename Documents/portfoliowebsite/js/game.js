const player = document.getElementById("player");

let x = 200;
let y = 150;
const speed = 50;

// set initial position
player.style.left = x + "px";
player.style.top = y + "px";

document.addEventListener("keydown", (e) => {
  switch (e.key.toLowerCase()) {
    case "w":
      y -= speed;
      break;
    case "s":
      y += speed;
      break;
    case "a":
      x -= speed;
      break;
    case "d":
      x += speed;
      break;
  }

  player.style.left = x + "px";
  player.style.top = y + "px";
});
