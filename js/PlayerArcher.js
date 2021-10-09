class PlayerArcher {
  constructor(x, y, width, height) {
    const options = {
      isStatic: true
    };
    this.x = x;
    this.y = y; 
    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    this.collapse = false;
    this.image = loadImage("assets/playerArcher.png");

    World.add(world, this.body);
    Matter.Body.setAngle(this.body, -90); 
  }

  display() {
   
    var angle = this.body.angle;
    
    push();
    translate(this.x, this.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

   shoot(){
    if(keyIsDown(UP_ARROW) && this.angle<73 ){
      angle += 1 ;
      Matter.Body.setAngle(this.body, angle);
 
    }
    if(keyIsDown(DOWN_ARROW) && this.angle> -103 ){
      angle -= 1;
      Matter.Body.setAngle(this.body, angle);
      
    }
   }
}


