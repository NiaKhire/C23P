class PlayerArrow {
  constructor(x, y, width, height, angle) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("assets/arrow.png");
    this.angle = angle;
    this.velocity = 0;
    World.add(world, this.body);
  }

  display() {
    
    
    }
  }
   
  

