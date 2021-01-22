class Sand{
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1.0
      }

      this.body = Bodies.circle( x,y,2,options)
    this.radius = 5
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      ellipse(56, 46, 10, 10);

      fill("red");
     // rect(0, 0, this.width, this.height);
      pop();
    }
  };
  