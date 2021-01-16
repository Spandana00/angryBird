class Bird{
    constructor(x,y)
    {
        this.body=Bodies.rectangle(x,y,50,50);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    }
    display()
    {
       var pos=this.body.position ;
       pos.x=mouseX;
       pos.y=mouseY;
       var angle=this.body.angle;
       push();
       rectMode(CENTER);
       translate(pos.x,pos.y);
       rotate(angle);
       fill("red");
       rect(0,0,this.width,this.height);
       pop();
    }
}