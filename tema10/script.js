let test;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  test = new TestReactie();
}

function draw() {
  test.update();
  test.display();
}

function mousePressed() {
  test.handleClick();
}

function keyPressed() {
  if (key === ' ') {
    test.startTest();
  } else if (key === 'r' || key === 'R') {
    test.resetTest();
  }
}

class TestReactie {
  constructor() {
    this.stare = 'start';
    this.mesaj = 'Apasa SPACE pentru a incepe testul';
    this.rezultat = '';
    this.putemClick = false;
    this.timpStart = 0;
    this.asteptare = null;
  }

  startTest() {
    this.stare = 'asteapta';
    this.mesaj = 'Asteapta culoarea verde...';
    this.rezultat = '';
    this.putemClick = false;
    const timpAleatoriu = random(2000, 5000);
    this.asteptare = setTimeout(() => {
      this.stare = 'gata';
      this.mesaj = 'ACUM! CLICK!';
      this.timpStart = millis();
      this.putemClick = true;
    }, timpAleatoriu);
  }

  resetTest() {
    if (this.asteptare) clearTimeout(this.asteptare);
    this.stare = 'start';
    this.mesaj = 'Apasa SPACE pentru a incepe testul';
    this.rezultat = '';
    this.putemClick = false;
  }

  handleClick() {
    if (this.stare === 'gata' && this.putemClick) {
      let timpFinal = millis();
      let diferenta = floor(timpFinal - this.timpStart);
      this.rezultat = `Ai reactionat in ${diferenta} ms`;
      this.mesaj = 'Bravo!';
      this.putemClick = false;
      this.stare = 'rezultat';
    } else if (this.stare === 'asteapta') {
      clearTimeout(this.asteptare);
      this.stare = 'preaDevreme';
      this.mesaj = 'Prea devreme! Incearca din nou (R)';
      this.putemClick = false;
    }
  }

  update() {
  }

  display() {
    if (this.stare === 'gata') {
      background('green');
    } else if (this.stare === 'preaDevreme') {
      background('red');
    } else {
      background('gray');
    }
    fill('white');
    text(this.mesaj, width / 2, height / 2);
    if (this.rezultat) {
      text(this.rezultat, width / 2, height / 2 + 60);
    }
  }
}
