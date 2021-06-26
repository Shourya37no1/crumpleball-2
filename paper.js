 class Paper {
    constructor(x, y,r) {
      var options = {
          isStatic : false,
          restitution:0.3,
          friction:0.5,
          density:1.5,
      }
      this.y=y;
      this.x=x;
      this.r=r;
      this.body = Bodies.circle(this.x, this.y, this.r/3, options);
      this.image= loadImage("Images/paper.png");
     
       World.add(world, this.body);
    }
    display(){
      
      
      var pos= this.body.position;
      imageMode(CENTER)
      fill("white")
      image(this.image,pos.x, pos.y, this.r,60)
  
    }
  };
  