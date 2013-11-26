codegame
========

One of those "guess the combination" games written in vanilla JavaScript.

##How To Play
In the console, you can run `game.guess([1,2,3,4])` to guess the combination `1,2,3,4`. This will return

* The number of items you got right in the code
* The number of items that were in the correct place in the code

You have twenty tries to get it right, after which the code will reset.

##Todos
* Allow the user to pass the number of tries, length of the code, possible numbers in the code, perhaps a certain difficulty number from 1-10 that sets all these values.
* Return a score based on the difficulty and number of attempts.
* Allow guesses without using the `game.guess()` method, eventually move out of the console.
* Build a custom user interface for the game.
