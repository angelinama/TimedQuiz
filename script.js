//TODO... remove this and put in questions.js
var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts'
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses'
    }
  ];
// import {} from './questions';
// console.log(questions);

var initial = 'defaultUser';
var secondsLeft = 15 * questions.length; //15 second per question
var timeEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start");
var resetBtn = document.getElementById("reset");
var linkBtn = document.getElementById("linkBtn");
var controlsEL = document.getElementById("controls");
var inputsEl = document.getElementById("inputs");
var scoresEl = document.getElementById("scores");
// var formEL;
var clearEl = document.getElementById("clear");

/* Event listeners */
//start the quiz: start timer and hide the start button
startBtn.addEventListener('click', () => {
    controlsEL.style.display = "None";
    displayQuestion();      
    setTime();
    localStorage.setItem("userList", "sth");
});  

//click go back will reload the quiz, not ideal, better action should be go back to last question
resetBtn.addEventListener('click', () => {
    window.location.reload(true);
 });

//view highscores link listener
linkBtn.addEventListener('click', () => {
    displayScores();
});

//clear button listener to clear user score history
clearEl.addEventListener('click', () => {
    window.localStorage.clear();
});
    
/* Helper functions*/
//To display a single question in form
function displayQuestion() {
    for (var i = 0; i < questions.length; i++) { 
        var formEl = document.createElement('form');
        inputsEl.removeChild(inputsEl.lastChild);
        inputsEl.appendChild(formEl);

        var q = questions[i];
        var title = document.createTextNode(q.title);
        formEl.appendChild(title);
        var choices = q.choices;
        console.log(choices);
        // var selected = "";
        for (var j = 0; j < choices.length; j ++) {
            /* create radio inputs as the following:
            <div class="form-check">
                <input class="form-check-input" type="radio" name="radios" id="exampleRadios1" value="option1">
                <label class="form-check-label" for="exampleRadios1">
                    Default radio
                </label>
            </div>
            */
            var optionDiv = document.createElement('div');
            optionDiv.className = 'form-check';

            var optionInput = document.createElement('input');
            optionInput.className = "form-check-input";
            optionInput.setAttribute('type', "radio");
            optionInput.setAttribute('name', "radios");
            optionInput.id = choices[j];
            optionInput.setAttribute('value', choices[j]);
            
            var optionLabel = document.createElement('label');
            optionLabel.className = "form-check-label";
            optionLabel.setAttribute("for", optionInput.id);
            optionLabel.textContent = optionInput.value;
            
            optionDiv.appendChild(optionInput);
            optionDiv.appendChild(optionLabel);
            
            formEl.appendChild(optionDiv);

            optionInput.addEventListener('click', () => {
                console.log(optionDiv);
                formEl.removeChild(optionDiv);
            });
        }
            
    }
    
}

// Main timer count down function
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            endQuiz();
            clearInterval(timerInterval);
        }

    }, 1000);
}

//TODO...need one form submit to go to this page
function endQuiz() {
    //add a text node to dispay user score
    var textEL = document.createTextNode("Your final score is " + secondsLeft);
    inputsEl.appendChild(textEL);
    
    //add new form for user initial inputs
    var newformEl = document.createElement('form');
    /* create the following div using js
        <div class="form-group">
        <label for="init">Enter Initials</label>
        <input type="text" class="form-control" id="init">
        </div> 
    */
    var formGroup = document.createElement('div');
    formGroup.setAttribute('class', 'form-group');
    var formlabel = document.createElement('label');
    var formInput = document.createElement('input');
    formInput.setAttribute("type", "text");
    formInput.className =  "form-control";
    formInput.id = "init";

    formlabel.textContent = "Enter Initials";
    formlabel.setAttribute("for", "init");

    formGroup.appendChild(formlabel);
    formGroup.appendChild(formInput);

    //create submit button
    var submitEl = document.createElement('button');
    submitEl.textContent = "Submit";
    submitEl.setAttribute("class", "btn my-btn");
    submitEl.setAttribute("type", "button"); //always set button type so that it's working the same cross different browers
    newformEl.appendChild(formGroup);
    newformEl.appendChild(submitEl);
    inputsEl.appendChild(newformEl);

    //if user click submit button, go to the page of display all local user scores
    submitEl.addEventListener('click', () => {
        initial = formInput.value;
        var curUser = {
            initial:initial, score: secondsLeft
        };
        alert(curUser.initial + "'s score is: " + curUser.score);
        displayScores();
    });
}


//the end page with the rank of all user scores and buttons to clear user scores as well as to restart the quiz
function displayScores() {
    controlsEL.style.display = "None";
    inputsEl.style.display = "None";
    scoresEl.style.display = "block";
    
    
}