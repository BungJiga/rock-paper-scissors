// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

var userChoice;
var computerChoice;
var winner;
var randomNumber = 0;

$(document).ready(function(){
    

$("#shoot").click(function(){    
userChoice = $("#input").val();
$("#userChoice").text(userChoice);

    }); 
});