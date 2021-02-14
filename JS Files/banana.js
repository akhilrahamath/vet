class Banana{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height);
        this.image = loadImage("Images/banana.png"); 
        this.Visiblity=255;
        World.add(world,this.body); 
    }

    display(){
        var sop=this.body.position;
        console.log(this.body.speed);
        if(this.body.speed < 3){
        if(frameCount % 130===0){
 
            sop.y = Math.round(random(80,120));
            this.body.scale = 0.1;
            this.body.velocityX = -3;
            
            var rand=Math.round(random(10,40));
            switch(rand){
              case 10:monkey.scale=0.12;
                break;
              case 20:monkey.scale=0.14;
                break;
                case 30:monkey.scale=0.16;
                break;
                case 40:monkey.scale=0.18;
                break;
                default: break;
            }
            
             //assign lifetime to the variable
            this.body.lifetime = 200;
            
            //adjust the depth
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

         Score(){
          if(this.Visiblity<0 && this.Visiblity>-1005){
            score++
          }
         }
        }
