
var VoiceOutput = document.getElementsByClassName('VoiceOutput')[0];

function Welcome(){
  VoiceOutput.src = "https://translate.google.com/translate_tts?ie=UTF-8&tl=en-GB&client=tw-ob&q=Hello%20My%20name%20is%20Myagi";
  VoiceOutput.play();
}

const recognition = new webkitSpeechRecognition();
recognition.interimResults = true;

var p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results).
  map(result => result[0]).
  map(result=> result.transcript).join('');

  p.textContext = transcript;
  console.log(transcript);

  if (e.results[0].isFinal){
    p = document.createElement('p');
    words.appendChild(p);
  }

  //if(transcript.includes('')){
  //
  //}

});

recognition.addEventListener('end', recognition.start);

recognition.start();
