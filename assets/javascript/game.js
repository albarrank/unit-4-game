//  GLOBAL VARIABLES
var computerNumberChoices = [];

//var randomComputerNubmer = 
var gemValues = [];

// jQuery
$(document).ready(function(){

    //GENERATES NUMBERS FOR CLICKS
    
        randomComputerNubmer();
        randomGemValues();

    function randomComputerNubmer() {
        console.log("hello");
        for (var i = 19; i <= 120; i++) {
            computerNumberChoices.push(i);
        }
        console.log(computerNumberChoices);
    }
    
    function randomGemValues() {
        for (var j =1; j <= 12; j++) {
            gemValues.push(j);
        }
        console.log(gemValues);
    
    }

});




