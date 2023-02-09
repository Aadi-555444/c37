class Form {
  constructor() {
    this.input = createInput('').attribute('placeholder','Enter Your Name');
    this.playButton = createButton('PLAY');
    this.titleImg = createImg('./assets/title.png','Game Title');
    this.greeting = createElement('h2');

  }
setElementPosition(){
this.input.position(width/2-110,height/2+80);
this.playButton.position(width/2-90,height/2+120);
this.greeting.position(width/2-300,height/2+100);
this.titleImg.position(120,100);


}
hide(){
  this.greeting.hide();
  this.playButton.hide();
  this.input.hide();
}
handleMousePressed(){
  this.playButton.mousePressed(()=>{
  this.playButton.hide();
  this.input.hide();
  var message = `Hello ${this.input.value()}</br>Waiting for another player to join`;
  this.greeting.html(message);
  player.name = this.input.value();
  player.index = 1;
 });
}
display(){
  this.setElementPosition();
  this.handleMousePressed();

}
}
