var started = false;
var currentUser = 'Betel'; 
var currentOpponent = 'Luna'; 

var characters = [
    'Betel', 
    'Luna', 
    'Halley', 
    'Meep', 
]

function findOpponent(currUser){
    var opponentOptions = []; 
    //console.log("Curr User: " + currUser); 

    for (i = 0; i < characters.length; i++){
        if (characters[i] != currUser){
            opponentOptions.push(characters[i]); 
            //console.log("Curr Looped Character: " + characters[i]); 
        }
    }

    var randPosition = Math.floor(Math.random()*characters.length); 

    // console.log("Position: " + randPosition); 
    // console.log("Opponent: " + opponentOptions[randPosition]); 

    return opponentOptions[randPosition];  
}

function selection(id){
    if (started == false){
        currentUser = id; 
        currentOpponent = findOpponent(id); 
        //console.log("CurrUser: " + id); 
        //console.log("Current Opponent: " + currentOpponent); 
    }
    else{
        alert("Game In Progress, you must stay as " + currentUser + "!");
    }
}

function computerTurn() {
    var choose = $(".tile:not(.marked)");
      randChoice = choose[Math.floor(Math.random() * choose.length)];
      $(randChoice).addClass('marked');
      $(randChoice).addClass(currentOpponent);
      trackTicTac(randChoice, currentOpponent);
 }

 function resetTicTacToe() {
         $(".tile").removeClass("marked");
         $(".tile").removeClass(currentOpponent);
         $(".tile").removeClass(currentUser);
         $("#game-result").hide();
         $("#game-result").html("");
         $("#game-result").removeClass("win");
         $("#game-result").removeClass("lost");
         finished = false;
         started = false; 
 }

 function trackTicTac(obj,mark) {
     var winning_probability = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]]; 
     
     var markedPosition = $(obj).data("position");
     $.each(winning_probability, function(key, winning_probability_index) {
         if($.inArray(markedPosition, winning_probability_index) >= 0) {
             markedLength = 0;
             $.each(winning_probability_index, function(index,value) {
             var innerSquareClass = $("#tile-"+value).attr("class");
             if(innerSquareClass.indexOf(mark)>0) {
                    markedLength = markedLength+1;
                    if(markedLength == winning_probability_index.length) {
                        finished = true;
                        if(mark == currentUser) {
                            status = "Congratulations " + currentUser + "! You Win!";
                            className = "win";
                        } else {
                                status = "What a shame " + currentUser + "...You were defeated by " + currentOpponent + ".";
                                className = "lost";
                        }
                        $("#game-result").show();
                        $("#game-result").html(status);
                        $("#game-result").addClass(className);
                 }
                }
             });
          }
     });
     return finished;
 }
     
 $(document).ready(function() {
    //console.log("Status: " + started); 
     finished = false;
     $(".tile").on('click', function() {
         if(!finished) {
             started = true; 
             //console.log("New Status: " + started); 
             var squareClass = $(this).attr("class");
                 if(squareClass.indexOf("marked")<0) {
                 $(this).addClass('marked');
                 $(this).addClass(currentUser);
                 finished = trackTicTac(this, currentUser);
                 computerTurn();
             }  
         }
     });
 });