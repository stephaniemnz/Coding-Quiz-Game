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

let currentQuestionIndex = 0; 
let time = questions.length * 15; 
let timerId; 

// Start quiz and hide homepage 
function quizStart() { 
	timerId = setInterval( 
		clockTick, 
		1000 
	); 
	timerEl.textContent = time; 
	let landingScreenEl = 
		document.getElementById( 
			"start-screen"
		); 
	landingScreenEl.setAttribute( 
		"class", 
		"hide"
	); 
	questionsEl.removeAttribute( 
		"class",
    "hide"
	); 
	getQuestion(); 
} 

// Loops through array of questions
function getQuestion() { 
	let currentQuestion = 
		questions[currentQuestionIndex]; 
	let promptEl = 
		document.getElementById( 
			"question-appears"
		); 
	promptEl.textContent = 
		currentQuestion.prompt; 
	choicesEl.innerHTML = ""; 
	currentQuestion.options.forEach( 
		function (choice, i) { 
			let choiceBtn = 
				document.createElement( 
					"button"
				); 
			choiceBtn.setAttribute( 
				"value", 
				choice 
			); 
      choiceBtn.setAttribute( 
				"class", 
				 "btn-options"
			); 
			choiceBtn.textContent = 
				i + 1 + ". " + choice; 
			choiceBtn.onclick = 
				questionClick; 
			choicesEl.appendChild( 
				choiceBtn 
			); 
		} 
	); 
} 

// Timer function
function questionClick() { 
	if ( 
		this.value !==
		questions[currentQuestionIndex] 
			.answer 
	) { 
		time -= 10; 
		if (time < 0) { 
			time = 0; 
		} 
		timerEl.textContent = time; 
	}; 

	currentQuestionIndex++; 
	if ( 
		currentQuestionIndex === 
		questions.length 
	) { 
		quizEnd(); 
	} else { 
		getQuestion(); 
	} 
} 

// End quiz and stop timer
function quizEnd() { 
	clearInterval(timerId); 
	let endScreenEl = 
		document.getElementById( 
			"quiz-end"
		); 
		endScreenEl.setAttribute( 
		  "class", 
		  "hide"
		); 
	endScreenEl.removeAttribute( 
		"class"
	); 
	let finalScoreEl = 
		document.getElementById( 
			"score-final"
		); 
	finalScoreEl.textContent = time; 
	questionsEl.setAttribute( 
		"class", 
		"hide"
	); 
  } 

  // End quiz if timer reaches 0 
function clockTick() { 
	time--; 
	timerEl.textContent = time; 
	if (time <= 0) { 
		quizEnd(); 
	} 
} 

// Save score in local storage with users initials
function saveHighscore() { 
	let initials = initialsEl.value.trim(); 
	if (initials !== "") { 
		let highscores = 
			JSON.parse( 
				window.localStorage.getItem( 
					"highscores"
				) 
			) || []; 
		let newScore = { 
			score: time, 
			initials: initials, 
		}; 
		highscores.push(newScore); 
		window.localStorage.setItem( 
			"highscores", 
			JSON.stringify(highscores) 
		); 
		alert( 
			"Your Score has been Submitted"
		); 
	} 
} 

//save score after clicking submit button and restart quiz
submitBtn.onclick = saveHighscore; 
startBtn.onclick = quizStart;


//highscore page
let scoresBtn = document.querySelector( 
	"#view-high-scores"
); 

// Rank scores in order
function printHighscores() { 
	let highscores = 
		JSON.parse( 
			window.localStorage.getItem( 
				"highscores"
			) 
		) || []; 
	highscores.sort(function (a, b) { 
		return b.score - a.score; 
	}); 
	highscores.forEach(function ( 
		score 
	) { 
		let liTag = 
			document.createElement( 
				"li"
			); 
		liTag.textContent = 
			score.initials + 
			" - " + 
			score.score; 
		let olEl = 
			document.getElementById( 
				"highscores"
			); 
		olEl.appendChild(liTag); 
	}); 
} 

// Clear previous scores 
function clearHighscores() { 
	window.localStorage.removeItem( 
		"highscores"
	); 
	window.location.reload(); 
} 
document.getElementById( 
	"clear"
).onclick = clearHighscores; 

printHighscores();