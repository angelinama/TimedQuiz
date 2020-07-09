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

var secondsLeft = 15 * questions.length; //15 second per question
var timeEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start");
var resetBtn = document.getElementById("reset");
var linkBtn = document.getElementById("linkBtn");
var controlsEL = document.getElementById("controls");
var inputsEl = document.getElementById("inputs");
var scoresEl = document.getElementById("scores");
var radios;

function main() {
    //start the quiz: start timer and hide the start button
    startBtn.addEventListener('click', () => {
        controlsEL.style.display = "None";

        inputsEl.style.display = "block"; //TODO...change to add a new div
        radios = document.getElementsByName("exampleRadios");
        console.log(radios);
        for (var i = 0; i < radios.length; i++) {
            console.log(radios[i].checked);
        //     if (radios[i].value === "option1") {
        //     console.log(radios[i].value);
        //     break;
        // }
    }
        setTime();
    });  
    
    resetBtn.addEventListener('click', () => {
        window.location.reload(true);
    });
    
    linkBtn.addEventListener('click', () => {
        startBtn.style.display = "None";
        scoresEl.style.display = "block";
    });
    

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
//   timeEl.textContent = " ";

  var doneEl = document.createElement("div");
//   doneEl.setAttribute("class", "form-check");
doneEl.textContent = "hellow world";
  inputsEl.appendChild(doneEl);

}

main();