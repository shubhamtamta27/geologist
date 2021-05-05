class PaperBall{
    constructor(x,y,r)
	{
	    var options = {	
		restitution:0.3,
		friction:5,
		density:1	
		}
		this.x=x;
		this.y=y;
		this.r=r;
        this.image=loadImage("images/paper.png")
		this.body=Bodies.circle(this.x, this.y, (this.r-10)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(1);
			stroke("white");
			fill("black");
            //ellipse(this.image, 0,0,this.r, this.r)
			imageMode(CENTER)
			image(this.image, 0, 0,this.r, this.r)

			pop()
	}
}