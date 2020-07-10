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