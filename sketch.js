var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
  bgImg = loadImage("assets/bg.png")

  balloonImg = loadAnimation("assets/balloon1.png","assets/balloon1.png","assets/balloon1.png")
}

function setup(){

//imagem de fundo
  bg = createSprite(165,485,1,1);
  bg.addImage(bgImg);
  bg.scale = 1.3

  //criar o solo superior e inferior
  bottomGround = createSprite(200,390,800,20);
  bottomGround.visible = false;

  topGround = createSprite(200,10,800,20);
  topGround.visible = false;
        
  //criar o balão     
  balloon = createSprite(100,200,20,50);
  balloon.addAnimation("balloon",balloonImg);
  balloon.scale = 0.2;



}

function draw() {
  //colocando seta no balao
  background(bg.png);

  if(keyDown(LEFT_ARROW)){
    updateHeight(-10,0);
    balloon1.png.addAnimation("balloon1.png",balloo1.png);
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(10,0);
    balloon1.png.addAnimation("balloon1.png",balloon1.png);
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    balloon1.png.addAnimation("balloon1.png",balloon1.png);
    balloon1.png.scale=balloon.scale -0.005;
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,+10);
    balloon1.png.addAnimation("balloon1.png",balloon1.png);
    balloon1.png.scale=balloon.scale+0.005;
  }

  
  
  
  background("black");
        
          //faça o balão de ar quente pular
          if(keyDown("space")) {
            balloon.velocityX= -6 ;
            
          }

          //adicione gravidade
           balloon.velocityY = balloon.velocityX+2;
           balloon.velocityX = balloon.velocityY-2;   

             
        drawSprites();
        //criando a legenda

        fill(0);
        stroke("white");
        textSize(25);
        text("Use as setas para mover o balão!",1,20);
      
        
}
