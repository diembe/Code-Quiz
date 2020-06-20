
$(document).ready(function () {



    var cornerTimer = $("#cornerTimer");
    
    var secondsLeft = 0;
    
    function startTime() {
      var timerInterval = setInterval(function() {
        secondsLeft--;
        cornerTimer.text("Time: " + secondsLeft);
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          allDone();
        }
    
      }, 1000);
    }
    


    $("#start").click(questionOne);


    function questionOne() {
        secondsLeft = 75;
        startTime();
        $("#title").text("Commonly used data types DO NOT include______");
        $("#title").removeClass("text-center");
        $("#introduction").remove();
        $("#start").remove();
        var buttonGroup = $("<div>");
        buttonGroup.addClass("button-group");
        $("#quiz-box").append(buttonGroup);
        buttonGroup.append('<button type="button" id="answer1" class="btn btn-primary" style="display:block; padding: 5px 20px; margin-bottom:20px;" id="start">1. Strings</button>');
        buttonGroup.append('<button type="button" id="answer2" class="btn btn-primary" style="display:block; padding: 5px 20px; margin-bottom:20px;" id="start">2. Booleans</button>');
        buttonGroup.append('<button type="button" id="answer3" class="btn btn-primary" style="display:block; padding: 5px 20px; margin-bottom:20px;" id="start">3. Alerts</button>');
        buttonGroup.append('<button type="button" id="answer4" class="btn btn-primary" style="display:block; padding: 5px 20px; margin-bottom:20px;" id="start">4. Numbers</button>');

        $(".button-group").on("click", "button", function() {
            if(this.id === 'answer3') {
                console.log("Clicked 3. Alerts")
                questionTwo();
            } else {
                console.log("DID NOT click 3. Alerts")
                // Subtract 10 seconds
                questionTwo();
            }
        });
    }

    function questionTwo() {
        $("#title").text("The condition in an if/else statement is enclosed within_______");
        $("#answer1").text("1. Quotes");
        $("#answer2").text("2. Curly Brackets");
        $("#answer3").text("3. Parentheses");
        $("#answer4").text("4. Square Brackets");

        $(".button-group").on("click", "button", function() {
            if(this.id === 'answer3') {
                console.log("Clicked 3. Alerts")
                questionThree();
            } else {
                console.log("DID NOT click 3. Alerts")
                // Subtract 10 seconds
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
                console.log("Clicked 3. Alerts")
                questionFour();
            } else {
                console.log("DID NOT click 3. Alerts")
                // Subtract 10 seconds
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
                console.log("Clicked 3. Alerts")
                questionFive();
            } else {
                console.log("DID NOT click 3. Alerts")
                // Subtract 10 seconds
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
                console.log("Clicked 3. Alerts")
                allDone();
            } else {
                console.log("DID NOT click 3. Alerts")
                // Subtract 10 seconds
                allDone();
            }
        });
    }

    function allDone() {
        $("#title").text("Quiz Complete!");
        $("#answer1").remove();
        $("#answer2").remove();
        $("#answer3").remove();
        $("#answer4").remove();
        $("#quiz-box").append('<p><span>Your final score is: </span><span id="finalScore"></span></p>');
        $("#quiz-box").append('<form class="form-inline"><div class="form-group"><label for="enter_initials" class="col-sm-2 col-form-label" style="display:contents;">Enter Initials: </label><div class="col-md-6"><input type="text" class="form-control" id="enter_initials"></div></div><button type="submit" class="btn btn-primary">Submit</button></form>');
        
    }












});

