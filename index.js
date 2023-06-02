//for clicking on buttons

var no_of_buttons=document.querySelectorAll(".drum").length;

for( var i=0;i<no_of_buttons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    
   makesound(this.innerHTML);
   timedelay(this.innerHTML);
})
}

//for pressing on keys.
document.addEventListener("keypress",function(event){
    makesound(event.key);
    timedelay(event.key);
}
);


//for making sound on both ways.
function makesound(key){
    switch (key) {
        case "s":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
             var crash=new Audio("sounds/tom-4.mp3");
             crash.play();
             break;
        case "l":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;     
        case "w":
            var tom4=new Audio("sounds/crash.mp3");
            tom4.play();
            break;     
        case "a":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;
       }
    
}


function timedelay(currentkey){
    var buttonclicked=document.querySelector("."+currentkey);
    
    buttonclicked.classList.add("pressed");

    setTimeout(function() {
        buttonclicked.classList.remove("pressed");

    },100);
   
}