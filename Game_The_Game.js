
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const RandomRGB = () => {
    R = randomIntFromInterval(0, 255)
    G = randomIntFromInterval(0, 255)
    B = randomIntFromInterval(0, 255)
    return "rgb(" + R + "," + G + "," + B + ")"
}

const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let color = RandomRGB()

function Square(MoveX, MoveY, MoveXspeed, MoveYspeed, Size, Color) {
    this.MoveX = MoveX;
    this.MoveY = MoveY;
    this.MoveXspeed = MoveXspeed;
    this.MoveYspeed = MoveYspeed;
    this.Size = Size;
    this.Color = Color;
    this.draw = function () {
        c.fillStyle = this.Color;
        c.fillRect(this.MoveX, this.MoveY, this.Size, this.Size);

    }

    this.update = function () {
        let boom
        if (this.MoveX > innerWidth - this.Size|| this.MoveX < 0) {
            this.MoveXspeed = - this.MoveXspeed
        }

        if (this.MoveY > innerHeight - this.Size || this.MoveY < 0) {
            this.MoveYspeed = - this.MoveYspeed
        }
        this.MoveX += this.MoveXspeed
        this.MoveY += this.MoveYspeed
        this.draw();
        
    }
    if(stop === true){
        return reset()
    }
}

let square
let squareArray = []
let stop = false

const Start = (squares,greitis) => {
    document.getElementById('Restart').style.display = 'block'
    for(i = 0; i < squares; i++){
    let Size = randomIntFromInterval(20,100)
    let x = randomIntFromInterval(0, innerWidth - Size)
    let y = randomIntFromInterval(0, innerHeight - Size)
    let Speed = randomIntFromInterval(-greitis, greitis) + 0.5
    let Color = RandomRGB()
    square = new Square(x, y, Speed, Speed, Size, Color);
    squareArray.push(square)
}
bounce(0)
console.log(squareArray)
}

const bounce = (times) => {
    requestAnimationFrame(bounce)
    c.clearRect(0, 0, innerWidth, innerHeight)
    for(i = 0; i < squareArray.length;i++){
    squareArray[i].update()     
}
    if (this.MoveX > innerWidth - this.Size || this.MoveX < 0) {
        this.MoveXspeed = -this.MoveXspeed
        color = RandomRGB()
    }
    if (this.MoveY > innerHeight - this.Size || this.MoveY < 0) {
        this.MoveYspeed = - this.MoveYspeed
        color = RandomRGB()
    }
    this.MoveX += this.MoveXspeed
    this.MoveY += this.MoveYspeed
    // if(stop === true){
    //     return reset()
    // }
}

const BOOP = () =>{
    const Ammount = document.getElementById('Ammount').value
    const Speed = document.getElementById('Speed').value
    Start(Ammount,Speed)
    document.getElementById('kvadratas').style.display = "none"
}

// const Stop = () =>{
//     stop = true
// }

// const reset = () =>{
//     stop = false
//     console.log('Boink Stopped')
//     document.getElementById('kvadratas').style.display = "flex"
// }