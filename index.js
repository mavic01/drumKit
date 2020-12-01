// document.querySelector("button").addEventListener("click", handleClick)

//SECTION: DETECTING BUTTON PRESS

for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML; //Checks d inner html of the button dat was pressed
        makeSound(buttonInnerHTML)// the (key) variable here, is the buttonInnerHTML   and sends that to makeSound() in order to play the relevant sound ie. makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML) // the (currentKey) variable in this case will be the buttonInnerHTML

});
}

// SECTION: DETECTING KEYBOARD PRESS
document.addEventListener("keypress", function(event){ //d function passes d event dat triggered the keypress. and that event contains a property "key", that tells us which keyboard key was pressed.
    makeSound(event.key); //and then we send that over to our function "makeSound()"
    buttonAnimation(event.key); 
}) // so when u type the relevant keys defined on ur makeSound function, it plays the appropriate sound.

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3'); 
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3'); 
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3'); 
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3'); 
            tom4.play();
        break;

        case "j":
            var crash = new Audio('sounds/crash.mp3'); 
            crash.play();
        break;

        case "k":
            var snare = new Audio('sounds/snare.mp3'); 
            snare.play();
        break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3'); 
            kick.play();
        break;
      
        default: console.log(buttonInnerHTML)
           break;
      }
}

function buttonAnimation(currentKey){
   var activeButton = document.querySelector("." + currentKey).classList.add("pressed"); // for eg.  .l to select the button with the class of l
   setTimeout(function (){
    var activeButton = document.querySelector("." + currentKey).classList.remove("pressed");// google timeout function in javascript

   }, 100) //milliseconds
   }



// we can figure out which button triggered the event by tapping into sth called "this" 
//This which is the identity of the button that triggered the event listener
// if we do a console.log(this) and refresh d site n click a button, the particular button i clicked will be logged in the console


// var audio = new Audio("sounds/tom-1.mp3"); // new Audio("sounds/tom-1.mp3") - means we're writing an html element. new here is a constructor cos it constructs a new html audio element
// audio.play();

 
// document.querySelector("button")[].addEventListener("click", function(){alert("I got clicked!")})
// the addEventListener() takes 2 parameters as seen ind documentation. 
// 1. the even type ie. eg. click 2.
// 2. the fucnction that's gonna be triggered once the "click" event is run eg. (handleClick) without parentheses.
// this is bx=cos you're passing a function as an input so that it can be called at a later time
//----------------------------------------------------
// So this fimnds the first button whic is the w drum button, and it adds an event listener to dat button, so thnat it
// listens for clicks that happens on that button. And when it does, it ri=uns the code inside the function, handleClick()


// or,we include the function in the DOM as an annonymous function. see up
// function handleClick() {
//     alert("i got clicked")
// } 
// we basically want our button to trigger this function when it receives a click. In order to do dat,
  // we first have to select our button inside the html n adds an event listener that listens when it its clicked
  //and when it does, to call this function "handleClick()"


