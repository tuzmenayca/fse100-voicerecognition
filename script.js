
// Speech Object
let speech;
let said = "hi";
let textInCanvas;
let fontsize = 32

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  // Create a Speech Recognition object with callback
  speechRec = new p5.SpeechRec('en-US', gotSpeech);
  // "Continuous recognition" (as opposed to one time only)
  let continuous = true;
  // If you want to try partial recognition (faster, less accurate)
  let interimResults = false;
  // This must come after setting the properties
  speechRec.start(continuous, interimResults);
  // Set text characteristics
  textSize(fontsize);
  fill(0)
  textAlign(LEFT, TOP);

}

function draw() {
  removeAll();
  textInCanvas = text (said, 50, 50)

}
function removeAll() {
  background(255);
}
// Speech recognized event
function gotSpeech() {
  // Something is there
  // Get it as a string, you can also get JSON with more info
  console.log(speechRec);
  if (speechRec.resultValue) {
   
    said = speechRec.resultString;
    // Show user
    //output.html(said);
    console.log(said)
    
  }
}