class box{    
    constructor(x,y,w,h){
      var options = {
          restitution: 0.4
      }
       this.body = Bodies.rectangle(x,y,w,h,options)
       World.add(world,this.body)
       this.width = w 
       this.height = h
    }    
    display(){
        var p = this.body.position
        var a = this.body.angle
        push()
        rectMode(CENTER)
        translate(p.x,p.y)
        Matter.Body.setStatic(this.body, false);
        fill("red")
        rect(0,0,this.width,this.height)
        pop()
    }
   }