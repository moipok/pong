let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let start = document.getElementsByClassName('start');



let ground = new Image();
let ground2 = new Image();
let ball = new Image();
let left = new Image();
let right = new Image();
let game_over = new Image();
let sound1 = new Audio();

sound1.src = "img/fly.mp3";
ball.src = "img/ball.png";
left.src = "img/pink_board.png";
right.src = "img/blue_board.png";
ground2.src = "img/ground2.png";
ground.src = "img/ground.png";
game_over.src = "img/game_over.png";

[].forEach.call(start, function(el){
    el.addEventListener('click', start_click)
});
function start_click(event){
    setDefault();
    draw();
}
document.addEventListener("keydown", function(event){
    
    if (event.keyCode == 40)
    {
        if (Yright < 300 - size_of_desk)
            Yright += 10;
    }
    else if (event.keyCode == 38)
    {
        if (Yright > 0)
            Yright -=10;
    }
});



// document.addEventListener("keyW", moveUp)
let lscore = 0;
let rscore = 0;
let speed = 1.5;
let Yball = 100;
let Xball = 300;
let Yright = 100;
let Yleft = Yball - 20;
let size_of_desk = 60;
let ball_status = false;
let vectorx = 2;
let vectory = 2.5;

function setDefault()
{
    lscore = 0;
    rscore = 0;
    Yball = 100;
    Xball = 300;
    Yright = 100;
    Yleft = Yball - 20;
    size_of_desk = 60;
    ball_status = false;
    vectorx = 2;
    vectory = 2.5;
}

function newGame()
{
    vectorx *= -1.4;
    vectory *= -1.4;
    Yball = 100;
    Xball = 300;
    ball_status = !ball_status;
}

function touchBall()
{
    if (Xball >= 10 + 10 + 1 && Xball <= 600 - 10 - 10 - 1 - 20)
        return false;
    if (Xball <= 10 + 10 && ball_status)
    {
        if (Yleft <= Yball + 10 && Yleft + size_of_desk >= Yball + 10)
        {
            sound1.play();
            ball_status = !ball_status;
            return true;
        }
    }
    else if (Xball >= 600 - 10 - 10 - 20 && !ball_status)
    {
        if (Yright <= Yball + 10 && Yright + size_of_desk >= Yball + 10)
        {
            sound1.play();
            ball_status = !ball_status;
            return true;
        }
    }
    return false;
}

function Nextball()
{
    if (touchBall())
        vectorx *= -1;
    if (Yball <= 0)
        vectory *= -1;
    else if (Yball >= 300 - 20)
        vectory *= -1;
    Xball += (vectorx);
    Yball += (vectory);
    if (Xball >= 580 || Xball <= 0)
    {
        if (Xball >= 580)
            lscore++;
        else if (Xball <= 0)
            rscore++;
        speed += 0.8;
        newGame();
    }
}
function drawstart() {
    // alert("qw");
    ctx.drawImage(ground, 0, 0, 600, 300);
    ctx.drawImage(left, 10, Yleft, 10, size_of_desk);
    ctx.drawImage(right, 580, Yright, 10, size_of_desk);
    ctx.drawImage(ball, Xball, Yball, 20, 20);
    ctx.drawImage(ground2, 0, 300, 600, 100);
}



function draw() {
    // alert("qw");
    ctx.drawImage(ground, 0, 0, 600, 300);
    ctx.drawImage(left, 10, Yleft, 10, size_of_desk);
    ctx.drawImage(right, 580, Yright, 10, size_of_desk);
    ctx.drawImage(ball, Xball, Yball, 20, 20);
    ctx.drawImage(ground2, 0, 300, 600, 100);
    Nextball();
    if (Yleft > Yball - 30)
        Yleft -=speed;
    else
        Yleft +=speed; 
    ctx.fillText(lscore, 10, 330);
    ctx.fillText(rscore, 570, 330);
    if (lscore == 2 || rscore == 2) 
    {
        ctx.drawImage(game_over, 0, 0, 600, 300);
    }
    else
        requestAnimationFrame(draw);
}
 ctx.fillStyle = "#000";
 ctx.font = "24px Verdana";


canvas.addEventListener("mousedown",function(e){
       if(checkCollision(e.offsetX,e.offsetY,btnRetry ))
       alert("Retrying!")
},false);

 
 function checkCollision(x,y,obj){//Проверяет входит ли точка в  прямоугольник
     return x >= obj.x && x <= obj.x + obj.w &&
   y >= obj.y && y <= obj.y + obj.h ;
 }

ground.onload = drawstart;
