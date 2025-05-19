let dim = 60;
let tabla;

function setup() {
  createCanvas(8 * dim, 8 * dim);
  tabla = new Tabla();
}

function draw() {
  background(255);
  tabla.deseneaza();
}

class Piesa {
  constructor(tip) {
    this.tip = tip;
  }

  afiseaza(x, y) {
    let cx = x + dim / 2;
    let cy = y + dim / 2;
    fill(255, 255, 0);
    ellipse(cx, cy, dim * 0.8);
    
    fill(0);
    ellipse(cx - 10, cy - 10, 5);
    ellipse(cx + 10, cy - 10, 5);
    noFill();
    arc(cx, cy + 5, 20, 10, 0, PI);
  }
}

class Tabla {
  constructor() {
    this.matrice = [];
    this.creeazaTabla();
  }

  creeazaTabla() {
    for (let i = 0; i < 8; i++) {
      this.matrice[i] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 1 && i < 3) {
          this.matrice[i][j] = new Piesa('negru');
        } else if ((i + j) % 2 === 1 && i > 4) {
          this.matrice[i][j] = new Piesa('alb');
        } else {
          this.matrice[i][j] = null;
        }
      }
    }
  }

  deseneaza() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let x = j * dim;
        let y = i * dim;

        if ((i + j) % 2 === 0) {
          fill(255);
        } else {
          fill(0);
        }
        rect(x, y, dim, dim);

        let piesa = this.matrice[i][j];
        if (piesa) {
          piesa.afiseaza(x, y);
        }
      }
    }
  }
}
