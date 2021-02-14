class Obstacle{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height);
        this.image = loadImage("Images/obstacle.png");
        this.Visiblity=255;
        World.add(world,this.body);
     }  
 
    display(){
        var pos=this.body.position;

        if(this.body.speed < 3){
        if (frameCount % 100 === 0){
            this.body.velocityX = -6;
            pos.x = Math.round(random(600,200));
            this.body.lifetime = 300;
            this.body.depth = monkey.depth;
            monkey.depth = monkey.depth + 1;
           } 
         } 
         else{
             World.remove(world,this.body);
             push();
             this.Visisblity = this.Visiblity-5;
             tint(255,this.Visiblity);
             image(this.image,this.x,this.y,this.width,this.height);
             pop();
         }
        }
         Point(){
            if(this.Visiblity<0 && this.Visiblity>-1005){
              otp++
            }
          }
       }   
     