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
    // etc.
  ];
// import {} from './questions';
// console.log(questions);

var score = 0; //start score is 0
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

//start the quiz: start timer and hide the start button
startBtn.addEventListener('click', () => {
    controlsEL.style.display = "None";
    displayQuestion();      
    setTime();
});  

//click go back will reload the quiz, not ideal, better action should be go back to last question
resetBtn.addEventListener('click', () => {
    window.location.reload(true);
 });
    
 linkBtn.addEventListener('click', () => {
    doneMessage();
});
    



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

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      doneMessage();
    }

  }, 1000);
}

function doneMessage() {
    controlsEL.style.display = "None";
    inputsEl.style.display = "None";
    scoresEl.style.display = "block";
}