/*
 * A game.
 * Author: Andrew Kostka (apkostka.com)
 */

;(function(window, undefined){
	"use strict";

	function Game() {

		var generate = function(){
			var self = this;

			var code = [];
			
			for (var i = 1; i < 5; i++) {
				code.push(Math.floor(Math.random() * 4) + 1);
			}

			return code;
		};

		var wins = 0;
		var losses = 0;
		this.getPercentage = function(){
			return Math.floor(100 * (wins / (wins + losses)));
		};
		
		var tries = 10;

		this.getTries = function(){
			return tries;
		};

		var decrementTries = function(){
			tries--;
		};

		var code = generate();

		this.guess = function(guess){
			var self = this;

			if (typeof guess !== "object" || guess.length !== 4) return "Your guess was not a 4-digit array!";
			if (this.getTries() == 0) {
				this.reset();
				losses++;
				return "You're out of tries! The code has been reset.\nYour record is " + wins + " wins and " + losses + " losses for a percentage of " + self.getPercentage() + "%.";			
			}

			var num = 0;
		        var place = 0;

			var copy = [];
			for (var y in code){
				copy.push(code[y]);
			}
			for (var x in guess) {
				if (copy.indexOf(guess[x]) >= 0) {
					copy.splice(copy.indexOf(guess[x]), 1);
					num++;
				}
			}

			for (var x in guess) {
				if (guess[x] == code[x]) place++;
			}

			if (place == 4) {
				wins++;
				console.log("You've won! The code was " + code + ". The code has been reset.\nYour record is " + wins + " wins and " + losses + " losses for a percentage of " + self.getPercentage() + "%.");			
				console.log("Feel free to play again!");
				this.reset();
				return "You've won! The code was " + code + ". The code has been reset.\nYour record is " + wins + " wins and " + losses + " losses for a percentage of " + self.getPercentage() + "%.";
			} else {
				console.log("Numbers right: " + num);
				console.log("Places right: " + place);
				decrementTries();
				console.log("Tries left: " + self.getTries());
				var response = guess.join(' ') + "&nbsp;&nbsp;&nbsp;&nbsp;Numbers right: " + num + ", Places right: " + place + ", Tries: " + self.getTries();
				return response;
			}
		};

		this.reset = function() {
			code = generate();
			tries = 10;
		}

		// Game Behavior

	};

	var game = new Game();
	window.game = game;

})(window);
