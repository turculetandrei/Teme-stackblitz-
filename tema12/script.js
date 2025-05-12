let litere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let index = 0;
let litera = 'A';
let culoare;
let intervalID = null;

function setup() {
  createCanvas(400, 250);
  textAlign(CENTER, CENTER);
  textSize(48);
  culoare = randomColor();
}

function draw() {
  background(240);

  // cerc litera
  fill(culoare);
  ellipse(width / 2, height / 2 - 30, 100, 100);
  fill(0);
  text(litera, width / 2, height / 2 - 30);

  // buton start
  fill(0, 150, 255);
  rect(50, 180, 120, 40, 12);
  fill(255);
  textSize(18);
  text('PORNESTE', 110, 200);

  // buton stop
  fill(255, 100, 100);
  rect(230, 180, 120, 40, 12);
  fill(0);
  text('OPRESTE', 290, 200);

  textSize(48);
}

function mousePressed() {
  if (mouseX > 50 && mouseX < 170 && mouseY > 180 && mouseY < 220) {
    startAnimatie();
  }
  if (mouseX > 230 && mouseX < 350 && mouseY > 180 && mouseY < 220) {
    stopAnimatie();
  }
}

function startAnimatie() {
  schimbaLitera();
  if (!intervalID) {
    intervalID = setInterval(schimbaLitera, 500);
  }
}

function stopAnimatie() {
  clearInterval(intervalID);
  intervalID = null;
}

function schimbaLitera() {
  index = (index + 1) % litere.length;
  litera = litere[index];
  culoare = randomColor();
}

function randomColor() {
  return color(random(255), random(255), random(255));
}
