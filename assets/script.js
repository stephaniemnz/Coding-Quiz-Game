let questions = [ 
	{ 
		prompt: 'The condition in an if / else statement is enclosed within ____.',
		options: [ 
			"quotes", 
			"curly brackets", 
			"parenthesis", 
			"square brackets" 
		], 
		answer: "curly brackets",
	}, 

	{ 
		prompt: `Arrays in JavaScript can be used to store _____.`, 
		options: [ 
			"numbers and strings",
			"other arrays()", 
			"boolean", 
			"all the above"
		], 
		answer: "all the above", 
	}, 

	{ 
		prompt: `String values must be enclosed within _____ when being assigned to variables.`, 
		options: [ 
			"commas", 
			"curly brackets",
			"quotes",
			"parenthesis" 
		], 
		answer: "quotes", 
	}, 

	{ 
		prompt: `A very useful tool used during development and debugging for printing content to the debugger is:`, 
		options: [
      "JavaScript",
      "terminal/bash",
      "for loops",
      "console.log"
    ], 
		answer: "console.log", 
	}, 
]; 

let questionsEl = 
	document.querySelector("#questions"); 

let timerEl = 
	document.querySelector("#timer"); 

let choicesEl = 
	document.querySelector("#options"); 

let submitBtn = 
document.querySelector("#submit-score"); 

let startBtn = 
document.querySelector("#start"); 

let initialsEl = 
	document.querySelector("#initials"); 

let reStartBtn = 
	document.querySelector("#restart"); 
