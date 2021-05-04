class Roof {
    constructor(x , y ,width, height , angle) 
    {
      var options = {
          isStatic : true
      }
      this.body = Bodies.rectangle(x, y, width , height, options);
      this.width = width;
      this.height = height;
      
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
     
      rectMode(CENTER);
      fill("blue");
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      
    }
  };