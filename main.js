var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
bimgwidth=30;
bimgheight=30;
var player_object="";
var bimgobject="";
function player_update() 
{ fabric.Image.fromURL("player.png", function(Img) { player_object = Img;
     player_object.scaleToWidth(150); 
     player_object.scaleToHeight(140); 
     player_object.set({ top:player_y, left:player_x });
 canvas.add(player_object);
 }); 
}

 function new_image_update(get_image) 
 { fabric.Image.fromURL(get_image, function(Img) { bimgobject=Img; 
    bimgobject.scaleToWidth(bimgwidth); 
    bimgobject.scaleToHeight(bimgheight); 
    bimgobject.set({ top:player_y, left:player_x }); 
 canvas.add(bimgobject); }); 
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
   keyPressed=e.keyCode;
   console.log(keyPressed);
   if(e.shiftKey==true && keyPressed=='80')
   {bimgwidth=bimgwidth+10;bimgheight=bimgheight+10;
   document.getElementById("cw").innerHTML=bimgwidth;
   document.getElementById("ch").innerHTML=bimgheight;
   }
   if(e.shiftKey==true&&keyPressed=='77')
   {bimgwidth=bimgwidth-10;bimgheight=bimgheight-10;
   document.getElementById("cw").innerHTML=bimgwidth;
   document.getElementById("ch").innerHTML=bimgheight;
   }
   if(keyPressed=='38')
   {
      up();
      console.log("up arrow key");
   }
   if(keyPressed=='40')
   {
      down();
      console.log("down arrow key");
   }
   if(keyPressed=='37')
   {
      left();
      console.log("left arrow key");
   }
   if(keyPressed=='39')
   {
      right();
   }
   if(keyPressed=='67')
   {
      new_image_update("cloud.jpg");
      console.log("up arrow key");
   }
   if(keyPressed=='68')
   {
      new_image_update("dark_green.png");
      console.log("down arrow key");
   }
   if(keyPressed=='71')
   {
      new_image_update("ground.png");
      console.log("left arrow key");
   }
   if(keyPressed=='76')
   {
      new_image_update("light_green.png");
   }
   if(keyPressed=='82')
   {
      new_image_update("roof.jpg");
   }
   if(keyPressed=='89')
   {
      new_image_update("yellow_wall.png");
   }
   if(keyPressed=='87')
   {
      new_image_update("wall.jpg");
   }
   if(keyPressed=='85')
   {
      new_image_update("unique.png");
   }
   if(keyPressed=='84')
   {
      new_image_update("trunk.jpg");
   }
}
function up(){
   if(player_y>=0){
      player_y=player_y-bimgheight;
      canvas.remove(player_object);
      player_update();
   }
}
function down(){
   if(player_y<=500){
      player_y=player_y+bimgheight;
      canvas.remove(player_object);
      player_update();
   }
}
function left(){
   if(player_x>=0){
      player_x=player_y-bimgwidth;
      canvas.remove(player_object);
      player_update();
   }
}
function right(){
   if(player_x<=900){
      player_x=player_x+bimgwidth;
      canvas.remove(player_object);
      player_update();
   }
}