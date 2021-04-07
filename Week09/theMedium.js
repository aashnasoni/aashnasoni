console.log("the message is here!");

let theBody;
let theTxt;

// pass the body of the DOM into a variable
theBody = document.querySelector("body");
// GET ELEMENT BY ID
// pass the button into a variable using it's id propety
let theButton = document.getElementById("myButton");
theTxt = document.querySelector('h2');
// EVENT LISTENER
// add an event listener and function to trigger to that variable
theButton.addEventListener('click', myGreatFunction);

function myGreatFunction(){
    console.log("clicked!");
    //jay lays it down
   theBody.style.backgroundColor = "grey";
   theTxt.textContent = "you pressed the button!";
}

function changeBackground()
{
console.log("changed")

}

document.addEventListener('keydown', theEvent => {
    console.log("key pressed!");
 
  

})
document.getElementById('button').innerHTML = new Date().toDateString();

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }