class Launcher{
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length: 10,
            stiffness: 0.01
            
        }

        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);
      }
      fly(){
        this.paper.bodyA = null;
      }
      display(){
        
        if(this.paper.bodyA){
          var pointA = this.paper.bodyA.position;
          var pointB = this.pointB;
          strokeWeight(4);
          line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
      }
}