
//the background
var backgroundI;
var bg;
//np or npc
var player;
var playerF1,playerF2;
var playerB1,playerB2;
var playerR1,playerR2;
var playerL1,playerL2;


function preload(){
    //the background image
    backgroundI = loadImage("images/background.png");

   //the players images facing forward
  playerF1  = loadAnimation("images/stanstill_torwards.png");
  playerF2  = loadAnimation("images/walking_torwards.png","images/torwards_player.png","images/walkings_torwards.png");

  //the player going backswards facing
  playerB1  = loadAnimation("images/backwards_manacin.png");
  playerB2  = loadAnimation("images/walking_backwards.png","images/backwards_standstill.png","images/backwards_walking.png");

  //the player is going to the right
  playerR1  = loadAnimation("images/right_manacin.png");
  playerR2  = loadAnimation("images/right_walking.png","images/right_stanstill.png","images/right_walkings.png");

  //the player is going to the left
  playerL1  = loadAnimation("images/left_manacin.png");
  playerL2  = loadAnimation("images/left_walking.png","images/left_standstill.png","images/left_walkings.png");


}


function setup() {
  createCanvas(800,400);

  //bg = createSprite(400,200,400,800);
  //bg.addImage("it's the background for proto",backgroundI);
  //bg.scale = 8;

    player = createSprite(400,200,20,20);

    //facing torwards the screen animation
    player.addAnimation("facing forward standstill",playerF1);
    player.addAnimation("moving",playerF2);

    //facing the opposite of original text
    player.addAnimation("facing backwards standstill",playerB1);
    player.addAnimation("backwords moving",playerB2);

    //player facing to the right
    player.addAnimation("facing right standstill",playerR1);
    player.addAnimation("right moving",playerR2);

    //player facing to the left
    player.addAnimation("facing left standstill",playerL1);
    player.addAnimation("left moving",playerL2);


}

function draw() {
  background(backgroundI);
  imageMode(CENTER);


  keyFunctions();

  
  drawSprites();
}

function keyFunctions(){
  var IDK = SAD
   switch ()  {
    //going torwards oposite of you going up
    case 1: upMoving();
    break;
    //going torwards you!! going down
    case 2: downMoving();
    break;
    //going torwards the right
    case 3: rightMoving();
    break;
      //going torwards left
    case 4: leftMoving();
    break;
    default: break;
    }
}

function upMoving(){
    if(keyIsDown(UP_ARROW)){
      player.y -=3;
      player.changeAnimation("backwords moving",playerB2);
    }else{
      player.changeAnimation("facing backwards standstill",playerB1);
    }
}

function downMoving(){
  if(keyIsDown(DOWN_ARROW)){
      player.y +=3;
      player.changeAnimation("moving",playerF2);
    }else{
      player.changeAnimation("facing forward standstill",playerF1);
    }
}

function rightMoving(){
  if(keyIsDown(RIGHT_ARROW)){
      player.x +=3;
      player.changeAnimation("right moving",playerR2);
    }else{
      player.changeAnimation("facing right standstill",playerR1);
    }
}
function leftMoving(){
  if(keyIsDown(LEFT_ARROW)){
      player.x -=3;
      player.changeAnimation("left moving",playerL2);
    }else{
      player.changeAnimation("facing left standstill",playerL1);
    }
}
function keyPressed(){
  
}
