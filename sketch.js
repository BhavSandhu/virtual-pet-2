//Create variables here
var dog, dog1img
var dog2img
var database
var foodS
var foodStock
var fedTime
var foodOBJ

function preload() {

  //load images here
  dog1img = loadImage("images/Dog.png")
  dog2img = loadImage("images/happydog.png")
}

function setup() {
  createCanvas(800, 500);

  dog = createSprite(600, 400)
  dog.addImage("hungryDog", dog1img)

  dog.scale = 0.2

  foodOBJ=new Food()



  foodStock = database.ref('food');
  foodStock.on("value", readStock);

  //fedTime = database.ref('feedTime')
  //fedTime.on("value", function (data) {
    //lastFed = data.val();


  //})

}

function draw() {
  background(46, 139, 87)


  drawSprites();
  //add styles here
  text("press the UP_ARROW key to feed drago!")
foodOBJ.display()

}

function readStock(data){

foodS=data.val()
console.log(foodS)





}


