
// jQuery STARTS ALL LOGIC

$(document).ready(function() {

    //OUR VARIABLES 

    var computerNumberChoices = [];
    var gemValues = [];
    var numberToMatch = null;
    var blueValue = null;
    var pinkValue = null;
    var greenValue = null;
    var yellowValue = null;
    var gemTotal = 0;
    var wins = 0;
    var losses = 0;
    
    //GENERATES NUMBERS FOR RANDOM CHOICE
    
    
    function generateComputerNubmer() {
        for (var i = 19; i <= 120; i++) {
            computerNumberChoices.push(i);
        }

        numberToMatch = computerNumberChoices[Math.floor(Math.random() * computerNumberChoices.length)];
        $("#numberToMatch").html(numberToMatch);
    }

    function generateGemValues() {
        for (var j =1; j <= 12; j++) {
            gemValues.push(j);
        }
    }
    
    //ASSIGNS VALUES TO INDIVIDUAL GEMS
    
    function assignGemValues () {
        blueValue = gemValues[Math.floor(Math.random() * gemValues.length)];
        pinkValue = gemValues[Math.floor(Math.random() * gemValues.length)];
        greenValue = gemValues[Math.floor(Math.random() * gemValues.length)];
        yellowValue = gemValues[Math.floor(Math.random() * gemValues.length)];
    }
    
    //CALLS FUNCTIONS
    
    generateComputerNubmer();
    generateGemValues();
    assignGemValues();
    
    // RESPONDS TO CLICKS
    
    $(".blue").click(function() {
        gemTotal = gemTotal + blueValue;
        $("#scoreFromJewels").html(gemTotal);
        check();
    });

    $(".pink").click(function() {
        gemTotal = gemTotal + pinkValue;
        $("#scoreFromJewels").html(gemTotal);
        check();
    });

    $(".green").click(function() {
        gemTotal = gemTotal + greenValue;
        $("#scoreFromJewels").html(gemTotal);
        check();
    });

    $(".yellow").click(function() {
        gemTotal = gemTotal + yellowValue;
        $("#scoreFromJewels").html(gemTotal);
        check();
    });
    
    // RESTARTS THE GAME

    function restart() {
        gemTotal = 0;
        generateComputerNubmer();
        generateGemValues();
        assignGemValues();
    }
    
    // CHECKS AND RESETS VALUES AFTER WIN / LOSS
    
    function check() {
        if (gemTotal === numberToMatch) {
            alert("CONGRATS YOU WON! YOU MATH WIZARD YOU!");
            wins++;
            $("#wins").html("WINS = " + wins);
            restart();
        }
        if (gemTotal > numberToMatch) {
            alert("AWWW MAN BETTER ADDING NEXT TIME!");
            losses++;
            $("#losses").html("LOSSES = " + losses);
            restart();
        }
    }
});

    
    
    
