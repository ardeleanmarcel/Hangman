String.prototype.replaceAt = function(index, replacement) {
  if (index >= this.length) {
    return this.valueOf();
  }
  return this.substring(0, index) + replacement + this.substring(index + 1);
}

String.prototype.removeCharAt = function(i) {
  let tmp = this.split('');
  tmp.splice(i - 1, 1);
  return tmp.join('');
}

const wordList = ['helicopter', 'facebook', 'script', 'actor', 'behavior', 'cognitive', 'comedy', 'heaven', 'historical', 'holiday', 'originally', 'package', 'shopping', 'significantly'];
const randomNumber = Math.floor(Math.random() * wordList.length);
let guessedWord = wordList[randomNumber];
for (let i = 1; i < wordList[randomNumber].length - 1; ++i) {
  guessedWord = guessedWord.replaceAt(i, '_');
}
wordDisplayed.innerHTML = guessedWord;
let lifes = 7;
let lettersIntroduced = "";
let lettersCounter = 2;

function searchForTheLetter() {
  let currentLetter = document.getElementById("letterInserted").value;
  lettersIntroduced += currentLetter + " ";
  lettersDisplayed.innerHTML = lettersIntroduced;
  const letterFound = wordList[randomNumber].includes(currentLetter);
  if (letterFound) {
    verificationMessage.innerHTML = "This letter is in the word"
    for (let i = 1; i < wordList[randomNumber].length - 1; ++i) {
      if (wordList[randomNumber].charAt(i) == currentLetter) {
        ++lettersCounter;
        guessedWord = guessedWord.replaceAt(i, currentLetter);
      }
    }
    wordDisplayed.innerHTML = guessedWord;
  } else {
    verificationMessage.innerHTML = "This letter is NOT in the word";
    life.innerHTML = --lifes;
  }
  if (lettersCounter == wordList[randomNumber].length) {
    alert(`You WIN! Congratulations! The word is "${wordList[randomNumber]}".`);
    location.reload();
  }
  if (!(lifes)) {
    alert(`You DIED! The word was "${wordList[randomNumber]}".`);
    location.reload();
  }
}
