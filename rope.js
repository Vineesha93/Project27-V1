  
class Rope
{
    constructor(bA,bB, offsetX, offsetY)
    {

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: bA,
            bodyB: bB,
            pointB: {x: this.offsetX, y:this.offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);

    }
    display()
    {

        var a = this.rope.bodyA.position;
        var b = this.rope.bodyB.position;

        var P1X = a.x;
        var P1Y = a.y;

        var P2X = b.x+this.offsetX;
        var P2Y = b.y+this.offsetY;

        line(P1X, P1Y, P2X, P2Y);
    }
}