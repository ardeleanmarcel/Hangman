String.prototype.replaceAt = function(index, replacement) {
  if (index >= this.length) {
  	return this.valueOf();
  }
  return this.substring(0, index) + replacement + this.substring(index + 1);
}
String.prototype.removeCharAt = function (i) {
  let tmp = this.split('');
  tmp.splice(i - 1 , 1); 
  return tmp.join('');
}
const words = ['helicopter', 'facebook', 'script', 'actor', 'behavior', 'cognitive', 'comedy', 'heaven', 'historical', 'holiday', 'originally', 'package', 'shopping', 'significantly'];
let random = Math.floor(Math.random() * words.length);
const word = words[random];
const wordLength = word.length;
let guessedWord = word;
for (let i = 1; i < wordLength - 1; ++i) {
	guessedWord = guessedWord.replaceAt(i, '_');
}
final_word.innerHTML = guessedWord;
let letter;
let lifes = 7;
let lettersDisplayed = "";
let lettersCounter = 0;
function isInWord() {
  letter = document.getElementById("letter").value;
  lettersDisplayed += letter + " ";
  displayLetters.innerHTML = lettersDisplayed;
  let index = word.indexOf(letter);
  if (index < 0) {
  	life.innerHTML = --lifes;
  	isOrNotInTheWord.innerHTML = "Is NOT in the word";
    if (!(lifes)) {
      alert(`You DIED! The word was "${word}"`);
      location.reload();
    }
  } else {
    for (let i = 1; i < wordLength - 1; ++i) {
      if (word.charAt(i) == letter) {
        ++lettersCounter;
        guessedWord = guessedWord.replaceAt(i, letter);
      }
    }
    final_word.innerHTML = guessedWord;
    isOrNotInTheWord.innerHTML = "Is in the word";
    if (lettersCounter == wordLength - 2) {
    	alert(`You WIN! Congratulations! The word is "${word}"`);
    	location.reload();
    }
  }
}
