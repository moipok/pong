let game = document.getElementById("canvas");
let ob = game.getContext("2d");



let ground = new Image();
let ball = new Image();
let left = new Image();
let right = new Image();

ball.src = "img/2.png";
left.src = "img/1.png";
right.src = "img/1.png";
ground.src = "img/groung.png";


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


let Yball = 100;
let Xball = 300;
let Yright = 100;
let Yleft = Yball - 20;
let size_of_desk = 60;
let ball_status = false;
let vectorx = 2;
let vectory = 2.5;

function touchBall()
{
    if (Xball >= 10 + 10 + 1 && Xball <= 600 - 10 - 10 - 1 - 20)
        return false;
    if (Xball <= 10 + 10 && ball_status)
    {
        if (Yleft <= Yball + 10 && Yleft + size_of_desk >= Yball + 10)
        {
            ball_status = !ball_status;
            return true;
        }
    }
    else if (Xball >= 600 - 10 - 10 - 20 && !ball_status)
    {
        if (Yright <= Yball + 10 && Yright + size_of_desk >= Yball + 10)
        {
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
    if (Yball >= 300 - 20)
        vectory *= -1;
    Xball += (vectorx);
    Yball += (vectory);
}

function draw() {
    // alert("qw");
    ob.drawImage(ground, 0, 0, 600, 300);
    ob.drawImage(left, 10, Yleft, 10, size_of_desk);
    ob.drawImage(right, 580, Yright, 10, size_of_desk);
    ob.drawImage(ball, Xball, Yball, 20, 20);
    Nextball();
    Yleft = Yball - 30
    requestAnimationFrame(draw);
}

ground.onload =  draw;