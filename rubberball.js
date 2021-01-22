class RubberBall{
    constructor(x, y,radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':2.0
      }

      this.body = Bodies.circle(x, y, radius, options)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      strokeWeight(2);
      stroke ("black");
      fill("blue");
      //rect(0, 0, this.width, this.height);
      ellipse(56, 46, 55, 55);
      pop();
    }
  };
  