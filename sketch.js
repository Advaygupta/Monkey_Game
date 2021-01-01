 //declaring all the variables
      var monkey,monkey_running;
      var banana ,bananaImage
      var obstacle,obstacleImage;
      var foodGroup,obstacleGroup;
      var score;
      var ground;
      var survivalTime = 0;
      


function preload(){

             monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

             
              bananaImage = loadImage("banana.png");
              obstacleImage = loadImage("obstacle.png");

              
                 }



function setup() {
            
            createCanvas(400,400);

            monkey= createSprite(80,315,20,20);
            monkey.addAnimation("moving",monkey_running);
            monkey.scale=0.1;

            
            ground= createSprite(400,370,900,50);
            ground.visible=true;
            ground.velocityX=-4;

        
           obstacleGroup = new Group();
           foodGroup= new Group();

           }


function draw() {
  
          
          background("green");
           
          
         
         
          monkey.collide(ground);

 

          
          ground.x=ground.width/2;       

         
     if(monkey.isTouching(foodGroup)){
       foodGroup.destroyEach();
     }
         

 
  
           
                if(keyDown("space")&& monkey.y >= 225 ) {
                monkey.velocityY=-12;
                }
                
                
                monkey.velocityY=monkey.velocityY+0.8;


                
                spawnObstacles();
                spawnFood();
 
            
           
           drawSprites();
  
        

        stroke("white");
        textSize(20);
        fill("white");
        survivalTime= survivalTime+ Math.round(getFrameRate()/60);
        text("Survival Time:"+survivalTime,140,50);
        }
        


function spawnObstacles() {
  
          if(frameCount%300===0) {

            
            obstacle=createSprite(375,330,20,20);
            obstacle.addAnimation("rocks",obstacleImage);
            obstacle.scale=0.1;
            obstacle.lifetime=200;
            obstacle.velocityX=-7;


           
            obstacleGroup.add(obstacle);
          }
          }


function spawnFood() {
  
      
      if(frameCount%80===0) {

        
        banana=createSprite(375,330,20,20);
        banana.addImage("yum",bananaImage);
        banana.scale=0.1; 
        banana.lifetime=300;
        banana.velocityX=-5;
         

        
        banana.y =Math.round(random(100,200));

        
        foodGroup.add(banana);
      }
      }

