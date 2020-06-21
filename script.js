
$(document).ready(function () {

    // Set initial countdown timer, set it to the corner of the screen, & set empty finalScore variable.
    var secondsLeft = 75;
    var cornerTimer = $("#cornerTimer");
    cornerTimer.text("Time: " + secondsLeft);
    var finalScore = '';
    
    // On start button click, start timer countdown
    function startTime() {
      var timerInterval = setInterval(function() {
        secondsLeft--;
        cornerTimer.text("Time: " + secondsLeft);
    
        if(secondsLeft <= 0) {
          clearInterval(timerInterval);
          allDone();
        }
    
      }, 1000);
    } 

    // Click event listeners for the start button & high scores button
    $("#highScores").click(highScores);
    $("#start").click(questionOne);


    function questionOne() {

        // Start the timer function & adjust/create the elements for Q1
        startTime();
        $("#title").text("Commonly used data types DO NOT include______");
        $("#title").removeClass("text-center");
        $("#introduction").remove();
        $("#start").remove();
        var buttonGroup = $("<div>");
        buttonGroup.addClass("button-group");
        $("#quiz-box").append(buttonGroup);
        buttonGroup.append('<button type="button" id="answer1" class="btn btn-primary answer-button" id="start">1. Strings</button>');
        buttonGroup.append('<button type="button" id="answer2" class="btn btn-primary answer-button" id="start">2. Booleans</button>');
        buttonGroup.append('<button type="button" id="answer3" class="btn btn-primary answer-button" id="start">3. Alerts</button>');
        buttonGroup.append('<button type="button" id="answer4" class="btn btn-primary answer-button" id="start">4. Numbers</button>');

        $(".button-group").on("click", "button", function() {
            // Listen for button click on the right answer, flash response function, turn off event listener so next question works, and proceed to next question's function
            if(this.id === 'answer3') {
                console.log("CORRECT")
                rightAnswer();
                $(".button-group").off();
                questionTwo();
            } else {
                //console.log("WRONG")
                wrongAnswer()
                secondsLeft -= 10;
                $(".button-group").off();
                questionTwo();
            }
        });
    }

    function questionTwo() {

        // Answer buttons were created in Q1, so they just need to be updated with the question title.
        $("#title").text("The condition in an if/else statement is enclosed within_______");
        $("#answer1").text("1. Quotes");
        $("#answer2").text("2. Curly Brackets");
        $("#answer3").text("3. Parentheses");
        $("#answer4").text("4. Square Brackets");

        $(".button-group").on("click", "button", function() {
            //console.log(this.id);
            if(this.id === 'answer3') {
                console.log("CORRECT")
                rightAnswer();
                $(".button-group").off();
                questionThree();
            } else {
                console.log("WRONG")
                wrongAnswer()
                secondsLeft -= 10;
                $(".button-group").off();
                questionThree();
            }
        });
    }

    function questionThree() {
        $("#title").text("Arrays in JavaScript can be used to store_____");
        $("#answer1").text("1. Numbers & Strings");
        $("#answer2").text("2. Other Arrays");
        $("#answer3").text("3. Booleans");
        $("#answer4").text("4. All of the above");

        $(".button-group").on("click", "button", function() {
            if(this.id === 'answer4') {
                console.log("CORRECT");
                rightAnswer();
                $(".button-group").off();
                questionFour();
            } else {
                console.log("WRONG");
                wrongAnswer()
                secondsLeft -= 10;
                $(".button-group").off();
                questionFour();
            }
        });
    }

    function questionFour() {
        $("#title").text("String values must be enclosed within_____ when being assigned to variables");
        $("#answer1").text("1. Commas");
        $("#answer2").text("2. Curly Brackets");
        $("#answer3").text("3. Quotes");
        $("#answer4").text("4. Parentheses");

        $(".button-group").on("click", "button", function() {
            if(this.id === 'answer3') {
                console.log("CORRECT");
                rightAnswer();
                $(".button-group").off();
                questionFive();
            } else {
                console.log("WRONG");
                wrongAnswer()
                secondsLeft -= 10;
                $(".button-group").off();
                questionFive();
            }
        });
    }

    function questionFive() {
        $("#title").text("A very useful tool used during development and debugging for printing content to the debugger is_____");
        $("#answer1").text("1. JavaScript");
        $("#answer2").text("2. Terminal/Bash");
        $("#answer3").text("3. For Loops");
        $("#answer4").text("4. console.log");

        $(".button-group").on("click", "button", function() {
            if(this.id === 'answer4') {
                console.log("CORRECT");
                rightAnswer();
                $(".button-group").off();
                allDone();
            } else {
                console.log("WRONG");
                wrongAnswer()
                secondsLeft -= 10;
                $(".button-group").off();
                allDone();
            }
        });
    }

    function allDone() {
        
        // Rearrange for the final score screen. Set score, add input to submit initials.
        $("#title").text("Quiz Complete!");
        $("#answer1").remove();
        $("#answer2").remove();
        $("#answer3").remove();
        $("#answer4").remove();
        $("#quiz-box").append('<p><span></span><span id="finalScore"></span></p>');
        $("#quiz-box").append('<form class="form-inline"><div class="form-group"><label for="enter_initials" class="col-sm-2 col-form-label display-contents">Enter Initials: </label><div class="col-md-6"><input type="text" class="form-control" id="enter_initials"></div></div><button type="button" class="btn btn-primary" id="submitButton">Submit</button></form>');
        finalScore = secondsLeft;
        $("#finalScore").text("Your final score is: " + finalScore);
        cornerTimer.remove();

        // Save initials & score to localstorage and proceed to highscore function/page
        $("#submitButton").on("click", function() {
            var initials = $("#enter_initials").val();
            localStorage.setItem(initials, finalScore);
            highScores();
        });
        
    }

    function highScores() {

        // Rearrange for highscore screen. loop through localstorage to retrieve all entries & create html to place them.
        $("#quiz-box").empty();
        $("#quiz-box").append('<div class="col-md-12 home-div" id="div-container"></div>');
        $("#div-container").append('<h3 class="text-center hs-title"  id="title">High Scores</h3>');

        for(var i=0, len=localStorage.length; i<len; i++) {
            var key = localStorage.key(i);
            var value = localStorage[key];

            $("#quiz-box").append('<div class="row" id="hsRow"></div>');
            $("#hsRow").append('<div class="col-xs-6 col-md-6 hs-initials">' + key + '</div><div class="col-xs-6 col-md-6 hs-score">' + value + '</div>');
        }

        // Add clear & start screen buttons
        $("#quiz-box").append('<button type="button" class="btn btn-primary div-center hs-clear-start" id="clear">Clear High Scores</button>');

        $("#quiz-box").append('<button type="submit" class="btn btn-primary div-center hs-clear-start" id="beginning">Start Screen</button>');

        $("#beginning").on("click", function() {
            location.reload();
        });

        $("#clear").on("click", function() {
            localStorage.clear();
            highScores();
        });
    }


    // Functions that flash answer response for each question.
    function rightAnswer() {
        $("body").append('<div class="response-right" id="correct">CORRECT</div>');

        $("#correct").animate({ opacity: "0" });
        
        setTimeout(function(){
            $("#correct").remove();
        }, 400);
    }
    
    function wrongAnswer() {
        $("body").append('<div class="response-wrong" id="wrong">WRONG</div>');

        $("#wrong").animate({ opacity: "0" });
        
        setTimeout(function(){
            $("#wrong").remove();
        }, 400);
    }
    

});

