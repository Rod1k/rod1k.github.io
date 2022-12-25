let canvas = document.getElementById('game-space');
let ctx = canvas.getContext('2d');

ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

const hero_img = new Image();
hero_img.src = "../images/Characters/BasicCharakter.png";
let hero = new Hero(
    hero_img,
    16,
    16,
    32,
    32,
    0,
    0,
    64,
    64
);

let objects =[];

const object_img = new Image();
object_img.src = "../images/Objects/BasicGrassBiom.png";
let object = new SolidObject(
    object_img,
    0,
    0,
    16,
    32,
    64,
    0,
    32,
    64
)

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    object.draw();
    hero.draw();
}

const Move = (event) => {
    if (event.key == "ArrowDown")
        hero.move(0, 1);
    if (event.key == "ArrowUp")
        hero.move(0, -1);
    if (event.key == "ArrowLeft")
        hero.move(-1, 0);
    if (event.key == "ArrowRight")
        hero.move(1, 0);
}

const StopMove = () => {
    hero.move(0,0);
}

const StartGame = () => {
    let s = setInterval(draw, 25);
    document.addEventListener('keydown', Move);
    document.addEventListener('keyup', StopMove);

}

StartGame()