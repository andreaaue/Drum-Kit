//.drum to access the drum class of buttons

var numofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0 ; i < numofDrumButtons ; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click" , function ()
  {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}


document.addEventListener("keydown" , function(event) {

 makeSound(event.key);
 buttonAnimation(event.key);

})

function makeSound(key){
  switch (key)
  {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;

      case "s":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
      break;

      case "d":
        var tom1 = new Audio ('sounds/tom-1.mp3');
        tom1.play();
      break;

      case "j":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
      break;

      case "k":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
      break;

      case "l":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
      break;

  default: console.log(key);
  }
}

//added animation to show when the button has been pressed 
function buttonAnimation(currentKey){

var activeButton = document.querySelector("." + currentKey);

//darkens the button to look pressed
activeButton.classList.add("pressed");

//puts it in a set time to remove the press button
setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);

}
