let grado = Math.PI/180
let r = grado

function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800,800)
  rectMode(CENTER)
  background(255)
  noCursor()
}

function dibujo(x,y,grados) {
  push()
  translate(x, y)
  rotate(grados)
  rect(0,0,100,100)
  pop()
}

function draw() {
  // put drawing code here
  textSize(42)
  for (let i = 0; i < 20; i++) {
    let x = random(0, width)
    let y = random(0, height)
    let rojo = random(0, 255)
    let verde = random(0, 255)
    let azul = random(0, 255)
    fill(rojo, verde, azul, )
    dibujo(x,y,r)
    //dibujo(300,300,r)
    r += grado
  }
  text("🍟", mouseX, mouseY)
}
