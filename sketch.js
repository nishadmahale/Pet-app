//Create variables here
var dogImage1;
var dogImage2;
var chickenImage;
var database=firebase.database();
var foodstock;
var Dog;
var foodS;


function preload()
{
  //load images here
  dogImage1=loadImage("Dog.png");
  dogImage2=loadImage("happydog.png");
  chickenImage=loadImage('Chicken.png')
}

function setup() {
  createCanvas(1000, 500);
  Dog = createSprite(550,250,10,10);
  Dog.addImage(dogImage1);
  Dog.scale=0.2;
  
  database=firebase.database();
  foodstock=database.ref('Food');
  foodstock.on("value",readStock);
  

  
}


function draw() {  
background(46,139,87);


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  Dog.addImage(dogImage2);
}
stroke("black");
text("Food remaining : "+foodS,170,200);
  //add styles here
stroke("Red");
textSize(20);

text("Now press Up_Arrow key to feed Chicken",40,40);
drawSprites();

}
  



function readStock (data){


  foodS=data.val();

}

function writeStock(x) {

if(x<=0){
x=0;
}else{
x=x-1;


}

  database.ref('/').update({
    Food: x
  })
}












