	
var answers = {
	correct: 0,
	wrong: 0,
	unanswered:5
};

var endgame;


$('#start-button').on('click', function(event){
	
	startGame();

	function startGame(){
		
	//sets a 20 second timer whichs runs endGame at 0 secs
		endGame = setInterval(results, 20000);

	//Creates and displays the countdown timer
	var counter = 20;
	var interval = setInterval(function() {
    	counter--;
    		$('#timer').text(counter);
	}, 1000);

	//hides the start button
		$('#start-button').addClass('hidden');

	//shows the trivia questions
		$('#questions').addClass('visible');
	};

//Run the logic and display the quiz results on final page
	function results(){

	//clears timer
		clearInterval(endGame);

	//selects element based on 'name':checked and retreives data-value
		var answer1 = $('[name="planets"]:checked').attr('data-value');
		var answer2 = $('[name="moons"]:checked').attr('data-value');
		var answer3 = $('[name="mass"]:checked').attr('data-value');
		var answer4 = $('[name="closest"]:checked').attr('data-value');
		var answer5 = $('[name="biggest"]:checked').attr('data-value');

	//tabulate correct answers
		if( answer1 === "correct"){
				answers.correct++;
				answers.unanswered--;
		};
		if( answer2 === "correct") {
				answers.correct++;
				answers.unanswered--;			
		};
		if ( answer3 === "correct" ){
				answers.correct++;
				answers.unanswered--;
		}
		if ( answer4 === "correct" ) {
				answers.correct++;
				answers.unanswered--;			
		}
		if ( answer5 === "correct" ) {
				answers.correct++;
				answers.unanswered--;			
		};

	//tabulate wrong answers
		if( answer1 === "incorrect"){
				answers.wrong++;
				answers.unanswered--;			
		};
		if( answer2 === "incorrect") {
				answers.wrong++;
				answers.unanswered--;			
		};
		if ( answer3 === "incorrect" ){
				answers.wrong++;
				answers.unanswered--;			
		}
		if ( answer4 === "incorrect" ) {
				answers.wrong++;
				answers.unanswered--;			
		}
		if ( answer5 === "incorrect" ) {
				answers.wrong++;
				answers.unanswered--;			
		};

	//Create HTML Total score output
		var score = '<p>Your Score:<br>Questions answered correctly: ' + answers.correct + '<br>Questions answered incorrectly: ' + answers.wrong + '<br>Unanswered questions: ' + answers.unanswered + '</p>';
			
		$('#trivia-game').html(score);
	
	}; //end results()
});
