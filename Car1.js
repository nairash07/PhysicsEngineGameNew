class Car1 extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("car1.png");
    

  }
  update(){
    if(this.car1.position.y>height){
        Matter.Body.setPosition(this.car1,{x:random(1200,0),y:0})
    }
    
}

};
