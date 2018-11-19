// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

var userChoice;
var computerChoice ;
var winner = "";
var randomNumber = Math.floor((Math.random() * 3) + 1);

$(document).ready(function(){
    

$("#shoot").click(function(){    
userChoice = $("#input").val();
$("#userChoice").text(userChoice);

if (userChoice != "rock","paper","scissors"){
    
     $("#result").text("Not A Valid Answer. Try Again");
    
     
}
   
    
    if(randomNumber == 1 ){
        
        computerChoice = "rock";
        $("#computerChoice").text(computerChoice);
        
        
    }
    if(randomNumber == 2 ){
        
        computerChoice = "paper";
          $("#computerChoice").text(computerChoice);
        
    }
    if(randomNumber == 3 ){
        
        computerChoice = "scissors";
          $("#computerChoice").text(computerChoice);
        
    }
    
     if (computerChoice == "paper" && userChoice == "rock"){
        
        
        $("#result").text("You  Lose!");
        
    }
    
    if (computerChoice == "rock" && userChoice == "paper"){
        
        
        $("#result").text("You Win!");
        
    }
       if (computerChoice == "rock" && userChoice == "scissors"){
        
        
        $("#result").text("You Lose!");
        
    }
    
    if (computerChoice == "scissors" && userChoice == "rock"){
        
        
        $("#result").text("You Win!");
        
    }
       if (computerChoice == "scissors" && userChoice == "paper"){
        
        
        $("#result").text("You Lose!");
        
    }
    
    if (computerChoice == "paper" && userChoice == "scissors"){
        
        
        $("#result").text("You Win!");
        
    }
     if (computerChoice == "paper" && userChoice == "paper"){
        
        
        $("#result").text("Tie!");
        
    }
    
    if (computerChoice == "scissors" && userChoice == "scissors"){
        
        
        $("#result").text("Tie!");
        
    }
     if (computerChoice == "rock" && userChoice == "rock"){
        
        
        $("#result").text("Tie!");
        
    }
    
    $(".try").show();
}); 

$(".try").click(function(){
    
    
 window.location.reload();
    
    
});

});