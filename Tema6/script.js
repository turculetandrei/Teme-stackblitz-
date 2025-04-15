function setup() {

    createCanvas(1900, 1000)

}

function draw() {

    drawHouse()
    drawSun(450, 350)
    drawTree(250, 500)

    drawTree(1200, 600)

    drawTreeGroup(1500, 540)
    drawTreeGroup(1470, 530)
    drawTreeGroup(1530, 530)
    drawTreeGroup(1570, 520)
}

function drawHouse() {

    //body
    fill(230, 210, 220)
    rect(500, 600, 400, 280)

    //roof
    fill(209, 109, 106)
    triangle(700, 350, 450, 600, 950, 600)
    fill("black")
    textSize(30)
    text("ROOF", 660, 530)

    //door
    fill(67, 151, 152)
    rect(550, 730, 70, 150)

    //chimney
    rect(820, 420, 50, 100)

    //window1
    fill(204, 218, 246)
    rect(700, 680, 60, 80)
    //window2
    rect(765, 680, 60, 80)

    //round window
    circle(700, 420, 40)
    line(700, 400, 700, 440)
    line(680, 420, 720, 420)

    noFill()

}

function drawSun(x, y) {

    fill(233, 196, 81)
    circle(x, y, 100)

    //N
    triangle(x + 0, y - 95, x - 10, y - 65, x + 10, y - 65)
    //NE
    triangle(x + 70, y - 70, x + 40, y - 55, x + 55, y - 40)
    //E
    triangle(x + 95, y + 0, x + 65, y - 10, x + 65, y + 10)
    //SE
    triangle(x + 70, y + 70, x + 40, y + 55, x + 55, y + 40)
    //S
    triangle(x + 0, y + 95, x - 10, y + 65, x + 10, y + 65)
    //SW
    triangle(x - 70, y + 70, x - 40, y + 55, x - 55, y + 40)
    //W
    triangle(x - 95, y + 0, x - 65, y + 10, x - 65, y - 10)
    //NW
    triangle(x - 70, y - 70, x - 40, y - 55, x - 55, y - 40)
}

function drawTree(x, y) {

    fill(167, 125, 88)
    rect(x, y + 100, 30, 150)


    fill(157, 195, 132)
    beginShape();
    vertex(x - 5, y + 10)
    vertex(x + 20, y + 40)
    vertex(x + 45, y + 10)
    vertex(x + 50, y + 50)
    vertex(x + 90, y + 40)
    vertex(x + 70, y + 70)
    vertex(x + 110, y + 90)
    vertex(x + 70, y + 100)
    vertex(x + 90, y + 130)
    vertex(x + 50, y + 120)
    vertex(x + 45, y + 160)
    vertex(x + 20, y + 130)
    vertex(x - 5, y + 160)
    vertex(x - 10, y + 120)
    vertex(x - 50, y + 130)
    vertex(x - 30, y + 100)
    vertex(x - 70, y + 90)
    vertex(x - 30, y + 70)
    vertex(x - 50, y + 40)
    vertex(x - 10, y + 50)
    endShape(CLOSE)
}

function drawTreeGroup(x, y) {

    fill(167, 125, 88)
    rect(x - 7, y - 7, 12, 80)
    fill(72, 116, 44)
    triangle(x - 30, y + 20, x, y - 90, x + 30, y + 20)
}