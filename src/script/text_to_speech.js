export function requestSpeak(inputStr, callback){
  let utterance = new SpeechSynthesisUtterance(inputStr);
  // debugger;
  utterance.onend = callback;
  speechSynthesis.speak(utterance);
}