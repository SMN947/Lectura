// Import stylesheets
import './style.css';
function randIndex(array) {
  return Math.floor(Math.random() * array.length);
}
var cons = ['d', 's', 'd', 't', 'n', 'l', 'd'];
var vowels = ['a', 'e', 'i', 'o', 'u'];
const intervalTime = 4000;
let progressBarWidth = 100;

// Write Javascript code!
const appDiv = document.getElementById('app');
const progressBar = document.getElementById('progress-bar');

let textSpeaked = '';
function changeText() {
  speeched = false;
  let randCons = randIndex(cons);
  let randVowel = randIndex(vowels);
  // speak(text);
  speak(`la ${cons[randCons]} con la ${vowels[randVowel]}`);
  textSpeaked = `${cons[randCons]}${vowels[randVowel]}`;
  let text = `${cons[randCons]}${vowels[randVowel]}`;
  appDiv.innerHTML = text;
}

let speeched = false;
setInterval(() => {
  // Reduce the width of the progress bar
  progressBarWidth -= 100 / (intervalTime / 50);

  progressBar.style.width = `${progressBarWidth}%`;
  if (progressBarWidth < 0) {
    changeText();
    progressBarWidth = 100;
  }
  if (progressBarWidth < 20 && !speeched) {
    speak(textSpeaked);
    speeched = true;
  }
}, intervalTime / 50);

function speak(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  } else {
    console.log('Text-to-speech not supported.');
  }
}

changeText();
