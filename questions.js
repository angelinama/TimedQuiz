const jsQuestions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts'
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses'
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above'
    },
    {
        title: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes'
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['Javascript', 'terminal / bash', 'for loops', 'console log'],
        answer: 'console log'
    }
    // etc.
];
  
const cssQuestions = [
    {
        title: 'What does CSS stand for?',
        choices: ['Colorful Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets', 'Cascade Style Sheets'],
        answer: 'Cascade Style Sheets'
    },

    {
        title: 'What is the correct HTML for referring to an external style sheet?',
        choices: ['<stylesheet>mystyle.css</stylesheet>', ' <link rel="stylesheet" type="text/css" href="mystyle.css">', '<style src="mystyle.css">'],
        answer: ' <link rel="stylesheet" type="text/css" href="mystyle.css">'
      },
    
    {
        title: 'Which HTML attribute is used to define inline styles?',
        choices: ['class', 'font', 'styles', 'style'],
        answer: 'style'
     }
];

export { jsQuestions, cssQuestions };