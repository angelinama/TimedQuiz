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

var score = 0; //start score is 0
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
var formEL = document.getElementById("single");
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
        var q = questions[i];
        var title = document.createElement('p');
        title.textContent = q.title;
        console.log(formEL.lastChild);
        formEL.removeChild(formEL.lastChild); //TODO... delete after select option
        formEL.appendChild(title);
    }
    // radios = document.getElementsByName("exampleRadios");
    //     console.log(radios);
    //     for (var i = 0; i < radios.length; i++) {
    //         console.log(radios[i].checked);
        //     if (radios[i].value === "option1") {
        //     console.log(radios[i].value);
        //     break;
        // }
    // }
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
    //remove question forms
    inputsEl.removeChild(formEL);
    //add a text node to dispay user score
    var textEL = document.createTextNode("Your final score is " + score);
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
            initial:initial, score: score
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