class Bob{
    constructor(x , y ,radius) 
    {
      var options = {
      density:0.5

      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
     
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(this.body.position.x, this.body.position.y, this.radius,this.radius);
      
    }
  };