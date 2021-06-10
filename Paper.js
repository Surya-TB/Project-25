class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2,
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
        this.Paperimage=loadImage("paper.png")
	}
	display()
	{
			
			var groundPos=this.body.position;		
            var angle=this.body.angle;
			push()
			translate(groundPos.x, groundPos.y);
            rotate(angle)
			rectMode(CENTER)
			//strokeWeight(4);
			fill("grey")
			image(this.Paperimage,0,0,this.w, this.h);
			pop()
			
	}

}