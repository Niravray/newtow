class bob {
  constructor(x,y) {
    var options = {
        isStatic: true,
        restitution: 0.3,
        friction: 0.5,
        density: 0
    }
    this.body = Bodies.rectangle(x,y,30,30,options);
    this.width = 30;
    this.height = 30;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    stroke ("black")
    fill("blue");
    ellipse(pos.x, pos.y, this.width, this.height);
  }
};