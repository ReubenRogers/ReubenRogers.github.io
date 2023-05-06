//////////////////// set var's to indicate which scene to load
let scene1 = true;
let scene2 = false;
let scene3 = false;
let scene4 = false;
let scene5 = false;
let scene6 = false;

////////////////// set var's for sounds + images + font 
let beat;
let songVirtual;
let keyPress;
let songTitleScreen;
let songTheWave;
/////// images
let perfectImg;
let greatImg;
let okImg;
let badImg;
let missedImg;
let gameBannerImg;
/////// fonts
let scoreFont;

//////////////////////////// var's related to the rating
let ratingXpos = 270;
let ratingYpos = 350;
let ratingFade = 0;
let ratingFadeSpeed = 3;

/////////////////////////////// set rating to default state
let rating = 0;

///////////////////////////// create rating timing variables / distance from center of note for each rating in pixels
let perfect = 12;
let great = 26;
let ok = 46;
let bad = 70;
let missed = 80;

let perfectCount = 0;
let greatCount = 0;
let okCount = 0;
let badCount = 0;
let missedCount = 0;

/////// default initial spawn and beat intervals of ring and 
let ringPosX = 270;
let ringPosY = 480;
let ringSpawn;
let nextBeat = 500;
let ringFade = 255;
let ringFadeRate = 5;

////////// scene 1 opening fade var's
let openingFade = 255;
let openingFadeRate = 10;

///////////////////// title screen start time
let titleStart = 0;


////////////// var for the start time of scene 2
let scene3StartTime;

let scene4StartTime;

///////////////////////  button positions
let buttonStartX = 950;
let buttonStartY = 550;

let buttonTutorialX = 540;
let buttonTutorialY = 180;

let buttonSong1X = 360;
let buttonSong1Y = 360;

let buttonTitleScreenX = 540;
let buttonTitleScreenY = 540;

let buttonMainMenuX = 540;
let buttonMainMenuY = 540;


let completionMenuY = 360;
let completionScoreX = 540;
let completionScoreY = 180;

let perfectResultX = 220;
let perfectResultY = 170;
let greatResultX = 220;
let greatResultY = 350;
let okResultX = 220;
let okResultY = 530;
let badResultX = 850;
let badResultY = 230;
let missedResultX = 850;
let missedResultY = 470;

let completionMenuFall = 5;


///////////////////////vars for the changing colour background
let backchange = 60;
let backchangedir = 0.2;



/////////////////// spawn point for notes, noteEnd - where the ring needs to end on beat
let noteStart = 1080;
let noteEnd = 270;
////////// diestance the note needs to travel
let noteDist = noteStart - noteEnd;
///////// time for the note to reach noteEnd in milliseconds, (1000  = 1s, 2000 = 2s, etc.)
let noteMove = noteDist / 2000;

///////////////////////var's related to notes spawn, creation, movement, collision
let noteNum;
let noteNO;
let noteSpawn = 1000;
let x;
let y;
let r;
let d;
let missD;
let noteSize = 70;
let xDir;
let noteDelay;
let detectMiss;

////////////////////// no. notes that spawn in the batch of notes
let tutorialNotes1 = 33;
let tutorialNotes2 = 7;
let tutorialNotes3 = 9;

///////////////////////// Timing - which beat number notes spawn in after delay
///////////////////////// Delay - the amount of time since the scene loads in seconds that the notes spawn
let tutNotes1Timing = 4;
let tutNotes1Delay = 36;

let tutNotes2Timing = 16;
let tutNotes2Delay = 67;

let tutNotes3Timing = 8;
let tutNotes3Delay = 81;


let song1NotesNum1 = 20;
let song1NotesNum2 = 16;
let song1NotesNum3 = 57;
let song1NotesNum4 = 15;
let song1NotesNum5 = 10;


let song1Notes1Timing = 4;
let song1Notes1Delay = 4;

let song1Notes2Timing = 4;
let song1Notes2Delay = 21;

let song1Notes3Timing = 2;
let song1Notes3Delay = 85;

let song1Notes4Timing = 4;
let song1Notes4Delay = 120;

let song1Notes5Timing = 4;
let song1Notes5Delay = 150;

//////////////arrays for each set of notes
let tutNotes1 = [];
let tutNotes2 = [];
let tutNotes3 = [];

let song1Notes1 = [];
let song1Notes2 = [];
let song1Notes3 = [];
let song1Notes4 = [];
let song1Notes5 = [];

//////////////////////////// var for score value
let score = 0;

/////////////////////////vars for position of collision detectors for hitting the notes and missing
detectorX = ringPosX;
detectorY = 0;
missDetectorX = ringPosX - missed;
missDetectorY = ringPosY;

//////////////////////////////////// preload neccesary files 
function preload() {
  /////////////// preload sounds
  beat = loadSound("sounds/metronome.wav");
  songVirtual = loadSound("sounds/virtual.wav");
  keyPress = loadSound("sounds/tambourine.wav");
  songTitleScreen = loadSound("sounds/titlescreen.wav");
  songTheWave = loadSound("sounds/thewave.wav");
  /////////////// preload images
  perfectImg = loadImage("images/PERFECT.png");
  greatImg = loadImage("images/GREAT.png");
  okImg = loadImage("images/OK.png");
  badImg = loadImage("images/BAD.png");
  missedImg = loadImage("images/MISSED.png");
  gameBannerImg = loadImage("images/gamebanner.png")
  //////////////// preload fonts
  scoreFont = loadFont("heygorgeous.ttf");
}

/////////////////////////////////////////////////// initial setup
function setup() {
  createCanvas(1080, 720);
  background(0);
  frameRate(60);
  imageMode(CENTER);
  ////////////////////////////////// Set Volume for sounds
  beat.setVolume(0.02);
  keyPress.setVolume(0.2);
  songVirtual.setVolume(0.1);
  songTitleScreen.setVolume(0.1);
  songTheWave.setVolume(0.2);
  ///////////// play title screen music
  songTitleScreen.loop();
  textAlign(CENTER, CENTER);
}


function draw() {
  if (scene1 == true) {
    titleScreen();

  }
  else if (scene2 == true) {
    selectScreen();
  }

  else if (scene3 == true) {
    tutorialScene();

  }
  else if (scene4 == true) {
    song1Scene();
  }
  else if (scene5 == true) {

  }
  else if (scene6 == true) {
    songCompleteScene();

  }
}

//////////////////////////// functions to run at the start of each scene change
function loadScene1() {
  scene1 = true;
  scene2 = false;
  scene3 = false;
  scene4 = false;
  scene5 = false;
  scene6 = false;
  songTitleScreen.stop();
  songTitleScreen.loop();
  titleStart = 0;
  titleStart = titleStart + millis();
  openingFade = 255;
}

function loadScene2() {
  scene1 = false;
  scene2 = true;
  scene3 = false;
  scene4 = false;
  scene5 = false;
  scene6 = false;

}


function loadScene3() {
  scene1 = false;
  scene2 = false;
  scene3 = true;
  scene4 = false;
  scene5 = false;
  scene6 = false;
  score = 0;
  perfectCount = 0;
  greatCount = 0;
  okCount = 0;
  badCount = 0;
  missedCount = 0;
  songTitleScreen.stop();
  scene3StartTime = millis();
  ringSpawn = scene3StartTime;
  songVirtual.play();
  createTutorialNotes();


}

function loadScene4() {
  scene1 = false;
  scene2 = false;
  scene3 = false;
  scene4 = true;
  scene5 = false;
  scene6 = false;
  score = 0;
  perfectCount = 0;
  greatCount = 0;
  okCount = 0;
  badCount = 0;
  missedCount = 0;
  songTitleScreen.stop();
  scene4StartTime = millis();
  ringSpawn = scene4StartTime;
  songTheWave.play();
  createSong1Notes();




}

function loadScene5() {
  scene1 = false;
  scene2 = false;
  scene3 = false;
  scene4 = false;
  scene5 = true;
  scene6 = false;
  score = 0;
  songTitleScreen.stop();


}

function loadScene6() {
  scene1 = false;
  scene2 = false;
  scene3 = false;
  scene4 = false;
  scene5 = false;
  scene6 = true;
  clearNotes();
  songTheWave.stop();
  songVirtual.stop();
  songTitleScreen.loop();
  completionMenuY = completionMenuY - height;
  buttonMainMenuY = buttonMainMenuY - height;
  completionScoreY = completionScoreY - height;
  perfectResultY = perfectResultY - height;
  greatResultY = greatResultY - height;
  okResultY = okResultY - height;
  badResultY = badResultY - height;
  missedResultY = missedResultY - height;

}

function titleScreen() {
  if (millis() < titleStart + 4000) {
    background(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255, openingFade);
    textFont(scoreFont);
    text('A p5.js rhythm game by Reuben Rogers', width / 2, height / 2);
  }
  else {
    tint(255, 255)
    image(gameBannerImg, width / 2, height / 2);
    buttonStart();
  }
  if (millis() > titleStart + 2500) {
    openingFade = openingFade - openingFadeRate;
  }
}

function selectScreen() {
  gradientBackground();
  songSelectMenu();

}


function tutorialScene() {
  gradientBackground();
  noteBoard();
  textAlign(LEFT, CENTER);
  textSize(30);
  fill(255);
  noStroke();
  textFont(scoreFont);
  text('Score = ' + score, 20, 50);
  ratingImg();
  tutorialText();

  if (millis() > ringSpawn) {
    beat.play();
    ringFade = 255;
    ringSpawn = nextBeat + ringSpawn;
  }
  tutorialNoteMovement();

  if (millis() > scene3StartTime + (songVirtual.duration() * 1000)) {
    loadScene6();
  }
}

function song1Scene() {
  gradientBackground();
  noteBoard();
  textAlign(LEFT, CENTER);
  textSize(30);
  fill(255);
  noStroke();
  textFont(scoreFont);
  text('Score = ' + score, 20, 50);
  ratingImg();


  if (millis() > ringSpawn) {
    beat.play();
    ringFade = 255;
    ringSpawn = nextBeat + ringSpawn;
  }
  song1NoteMovement();

  if (millis() > scene4StartTime + (songTheWave.duration() * 1000)) {
    loadScene6();
  }
}

function songCompleteScene() {
  rectMode(CENTER);
  fill(220, 140, 220);
  stroke(220, 160, 240);
  strokeWeight(40);
  rect(width / 2, completionMenuY, width, height);
  buttonMainMenu();
  textAlign(CENTER, CENTER);
  textFont(scoreFont);
  textSize(50);
  fill(255);
  text('SCORE\n\n' + score, completionScoreX, completionScoreY);
  tint(255, 255);
  image(perfectImg, perfectResultX, perfectResultY);
  image(greatImg, greatResultX, greatResultY);
  image(okImg, okResultX, okResultY);
  image(badImg, badResultX, badResultY);
  image(missedImg, missedResultX, missedResultY);
  textSize(30);
  text(perfectCount, perfectResultX, perfectResultY + 60);
  text(greatCount, greatResultX, greatResultY + 60);
  text(okCount, okResultX, okResultY + 60);
  text(badCount, badResultX, badResultY + 60);
  text(missedCount, missedResultX, missedResultY + 60);




  if (completionMenuY <= 360) {
    completionMenuY = completionMenuY + completionMenuFall;
    buttonMainMenuY = buttonMainMenuY + completionMenuFall;
    completionScoreY = completionScoreY + completionMenuFall;
    perfectResultY = perfectResultY + completionMenuFall;
    greatResultY = greatResultY + completionMenuFall;
    okResultY = okResultY + completionMenuFall;
    badResultY = badResultY + completionMenuFall;
    missedResultY = missedResultY + completionMenuFall;
  }

}




////////////////////////////////////function for tutorial text
function tutorialText() {
  textAlign(CENTER, CENTER);
    textFont(scoreFont);
    textSize(20);
    fill(255);
  if (millis() < scene3StartTime + (2 * 1000)) {
    
    text('Welcome to\nStill The Beat',  width/2, height/3);
  }
  else if (millis() > scene3StartTime + (2 * 1000) && millis() < scene3StartTime + (6 * 1000)) {
    text("when the notes align to the blue ring\nthat's your que to hit the beat", width/2, height/3);
  }
  else if (millis() > scene3StartTime + (6 * 1000) && millis() < scene3StartTime + (11 * 1000)) {
    text('to hit the beat, tap the screen or alternatively press\nthe spacebar or any other letter on the keyboard', width/2, height/3);
  }
  else if (millis() > scene3StartTime + (11 * 1000) && millis() < scene3StartTime + (14 * 1000)) {
    text('the better your timing,\nthe better your rating will be', width/2, height/3);
  }
  else if (millis() > scene3StartTime + (14 * 1000) && millis() < scene3StartTime + (18 * 1000)) {
    text('higher ratings will earn you more points,\n missing the beat will reduce your score', width/2, height/3);
  }
  else if (millis() > scene3StartTime + (18 * 1000) && millis() < scene3StartTime + (19.5 * 1000)) {
    text('Enjoy!', width/2, height/3);
  }

}











//////////////////////////created the start button on the main screen
function buttonStart() {
  if (dist(buttonStartX, buttonStartY, mouseX, mouseY) < 75) {
    strokeWeight(5);
    fill(153, 255, 255);
    stroke(180, 255, 255);
    textSize(22);
  }
  else {
    textSize(20);
    fill(240);
    strokeWeight(2);
    stroke(200);
  }

  ellipse(buttonStartX, buttonStartY, 150, 150);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textFont(scoreFont);
  text('START', buttonStartX, buttonStartY);

}
////////////////////////create menu for the song selection
function songSelectMenu() {
  fill(230);
  stroke(200);
  strokeWeight(10);
  ellipse(width / 2, height / 2, 600);
  buttonTutorial();
  buttonSong1();
  buttonSong2();
  buttonTitleScreen();
}

function buttonTutorial() {
  if (dist(buttonTutorialX, buttonTutorialY, mouseX, mouseY) < 75) {
    strokeWeight(5);
    fill(153, 255, 255);
    stroke(180, 255, 255);
    textSize(22);
  }
  else {
    textSize(20);
    fill(240);
    strokeWeight(2);
    stroke(200);
  }
  ellipse(buttonTutorialX, buttonTutorialY, 150, 150);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textFont(scoreFont);
  text('Tutorial', buttonTutorialX, buttonTutorialY);
}

function buttonSong1() {
  if (dist(buttonSong1X, buttonSong1Y, mouseX, mouseY) < 75) {
    strokeWeight(5);
    fill(153, 255, 255);
    stroke(180, 255, 255);
    textSize(22);
  }
  else {
    textSize(20);
    fill(240);
    strokeWeight(2);
    stroke(200);
  }
  ellipse(buttonSong1X, buttonSong1Y, 150, 150);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textFont(scoreFont);
  text('Track 1', buttonSong1X, buttonSong1Y);
}

function buttonSong2() {


}

function buttonTitleScreen() {
  if (dist(buttonTitleScreenX, buttonTitleScreenY, mouseX, mouseY) < 75) {
    strokeWeight(5);
    fill(153, 255, 255);
    stroke(180, 255, 255);
    textSize(22);
  }
  else {
    textSize(20);
    fill(240);
    strokeWeight(2);
    stroke(200);
  }
  ellipse(buttonTitleScreenX, buttonTitleScreenY, 150, 150);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textFont(scoreFont);
  text('Title\nScreen', buttonTitleScreenX, buttonTitleScreenY);
}

function buttonMainMenu() {
  if (dist(buttonMainMenuX, buttonMainMenuY, mouseX, mouseY) < 75) {
    strokeWeight(5);
    fill(153, 255, 255);
    stroke(180, 255, 255);
    textSize(22);
  }
  else {
    textSize(20);
    fill(240);
    strokeWeight(2);
    stroke(200);
  }
  ellipse(buttonMainMenuX, buttonMainMenuY, 150, 150);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textFont(scoreFont);
  text('Main\nMenu', buttonMainMenuX, buttonMainMenuY);
}


function gradientBackground() {
  background(200, 60, 235);
  rectMode(CENTER);
  if (backchange < 1) {
    backchangedir = backchangedir * -1;
  }
  else if (backchange > 255) {
    backchangedir = backchangedir * -1;
  }
  fill(230, 190, 230, backchange);
  backchange = backchange + backchangedir;
  rect(width / 2, height / 2, width, height);
}




//////////////////////////// creates the note board on screen
function noteBoard() {
  ringFade = ringFade - ringFadeRate;
  rectMode(CENTER);
  noStroke();
  fill(20);
  rect(width / 2, ringPosY, width, 100);
  fill(70);
  rect(width / 2, ringPosY, width, 5);
  stroke(153, 255, 255, ringFade);
  strokeWeight(5);
  noFill();
  ellipse(ringPosX, ringPosY, 70);
}

//////////////// input for key press
function keyTyped() {
  if (scene3 == true) {
    detectorY = ringPosY;
    keyPress.play();
    tutorialNoteCollision();
  }
  else if (scene4 == true) {
    detectorY = ringPosY;
    keyPress.play();
    song1NoteCollision();
  }
}

////////////////////////////////// input for mouse
function mousePressed() {
  if (scene1 == true && millis() > 4000) {
    if (dist(buttonStartX, buttonStartY, mouseX, mouseY) < 50) {
      loadScene2();
    }
  }
  else if (scene2 == true) {
    if (dist(buttonTutorialX, buttonTutorialY, mouseX, mouseY) < 50) {
      loadScene3();
    }
    else if (dist(buttonSong1X, buttonSong1Y, mouseX, mouseY) < 50) {
      loadScene4();
    }
    else if (dist(buttonTitleScreenX, buttonTitleScreenY, mouseX, mouseY) < 50) {
      loadScene1();
    }

  }
  else if (scene6 == true) {
    if (dist(buttonMainMenuX, buttonMainMenuY, mouseX, mouseY) < 50) {
      loadScene2();
    }
  }
}

///////////// input for touch screen
function touchStarted() {
  if (scene1 == true && millis() > 4000) {
    if (dist(buttonStartX, buttonStartY, mouseX, mouseY) < 50) {
      loadScene2();
    }
  }
  else if (scene2 == true) {
    if (dist(buttonTutorialX, buttonTutorialY, mouseX, mouseY) < 50) {
      loadScene3();
    }
    else if (dist(buttonSong1X, buttonSong1Y, mouseX, mouseY) < 50) {
      loadScene4();
    }
    else if (dist(buttonTitleScreenX, buttonTitleScreenY, mouseX, mouseY) < 50) {
      loadScene1();
    }
  }
  else if (scene3 == true) {
    detectorY = ringPosY;
    keyPress.play();
    tutorialNoteCollision();
  }
  else if (scene4 == true) {
    detectorY = ringPosY;
    keyPress.play();
    song1NoteCollision();
  }
  else if (scene6 == true) {
    if (dist(buttonMainMenuX, buttonMainMenuY, mouseX, mouseY) < 50) {
      loadScene2();
    }
  }
  return false;
}

function ratingImg() {
  if (rating == 1) {
    tint(255, ratingFade)
    image(perfectImg, ratingXpos, ratingYpos);
  }
  else if (rating == 2) {
    tint(255, ratingFade)
    image(greatImg, ratingXpos, ratingYpos);
  }
  else if (rating == 3) {
    tint(255, ratingFade)
    image(okImg, ratingXpos, ratingYpos);
  }
  else if (rating == 4) {
    tint(255, ratingFade)
    image(badImg, ratingXpos, ratingYpos);
  }
  else if (rating == 5) {
    tint(255, ratingFade)
    image(missedImg, ratingXpos, ratingYpos);
  }
  ratingFade = ratingFade - ratingFadeSpeed;

}

////////////////////////Creating the notes for the beat
function createTutorialNotes() {
  for (let noteNum = 0; noteNum < tutorialNotes1; noteNum++) {
    tutNotes1.push(new TutorialMovingNote(noteStart, ringPosY, noteNum, tutNotes1Timing, tutNotes1Delay));
  }
  for (let noteNum = 0; noteNum < tutorialNotes2; noteNum++) {
    tutNotes2.push(new TutorialMovingNote(noteStart, ringPosY, noteNum, tutNotes2Timing, tutNotes2Delay));
  }
  for (let noteNum = 0; noteNum < tutorialNotes3; noteNum++) {
    tutNotes3.push(new TutorialMovingNote(noteStart, ringPosY, noteNum, tutNotes3Timing, tutNotes3Delay));
  }
}



function createSong1Notes() {
  for (let noteNum = 0; noteNum < song1NotesNum1; noteNum++) {
    song1Notes1.push(new Song1MovingNote(noteStart, ringPosY, noteNum, song1Notes1Timing, song1Notes1Delay));
  }
  for (let noteNum = 0; noteNum < song1NotesNum2; noteNum++) {
    song1Notes2.push(new Song1MovingNote(noteStart, ringPosY, noteNum, song1Notes2Timing, song1Notes2Delay));
  }
  for (let noteNum = 0; noteNum < song1NotesNum3; noteNum++) {
    song1Notes3.push(new Song1MovingNote(noteStart, ringPosY, noteNum, song1Notes3Timing, song1Notes3Delay));
  }
  for (let noteNum = 0; noteNum < song1NotesNum4; noteNum++) {
    song1Notes4.push(new Song1MovingNote(noteStart, ringPosY, noteNum, song1Notes4Timing, song1Notes4Delay));
  }
  for (let noteNum = 0; noteNum < song1NotesNum5; noteNum++) {
    song1Notes5.push(new Song1MovingNote(noteStart, ringPosY, noteNum, song1Notes5Timing, song1Notes5Delay));
  }
}

function clearNotes() {
  tutNotes1.length = 0;
  tutNotes2.length = 0;
  tutNotes3.length = 0;
  song1Notes1.length = 0;
  song1Notes2.length = 0;
  song1Notes3.length = 0;
  song1Notes4.length = 0;
  song1Notes5.length = 0;
}

function tutorialNoteMovement() {
  for (let i = 0; i < tutorialNotes1; i++) {
    tutNotes1[i].move();
    tutNotes1[i].display();
    tutNotes1[i].fullMiss();
  }
  for (let i = 0; i < tutorialNotes2; i++) {
    tutNotes2[i].move();
    tutNotes2[i].display();
    tutNotes2[i].fullMiss();
  }
  for (let i = 0; i < tutorialNotes3; i++) {
    tutNotes3[i].move();
    tutNotes3[i].display();
    tutNotes3[i].fullMiss();
  }
}
function tutorialNoteCollision() {
  for (let i = 0; i < tutorialNotes1; i++) {
    tutNotes1[i].collisionRating();
  }
  for (let i = 0; i < tutorialNotes2; i++) {
    tutNotes2[i].collisionRating();
  }
  for (let i = 0; i < tutorialNotes3; i++) {
    tutNotes3[i].collisionRating();
  }
}


function song1NoteMovement() {
  for (let i = 0; i < song1NotesNum1; i++) {
    song1Notes1[i].move();
    song1Notes1[i].display();
    song1Notes1[i].fullMiss();
  }
  for (let i = 0; i < song1NotesNum2; i++) {
    song1Notes2[i].move();
    song1Notes2[i].display();
    song1Notes2[i].fullMiss();
  }
  for (let i = 0; i < song1NotesNum3; i++) {
    song1Notes3[i].move();
    song1Notes3[i].display();
    song1Notes3[i].fullMiss();
  }
  for (let i = 0; i < song1NotesNum4; i++) {
    song1Notes4[i].move();
    song1Notes4[i].display();
    song1Notes4[i].fullMiss();
  }
  for (let i = 0; i < song1NotesNum5; i++) {
    song1Notes5[i].move();
    song1Notes5[i].display();
    song1Notes5[i].fullMiss();
  }
}
function song1NoteCollision() {
  for (let i = 0; i < song1NotesNum1; i++) {
    song1Notes1[i].collisionRating();
  }
  for (let i = 0; i < song1NotesNum2; i++) {
    song1Notes2[i].collisionRating();
  }
  for (let i = 0; i < song1NotesNum3; i++) {
    song1Notes3[i].collisionRating();
  }
  for (let i = 0; i < song1NotesNum4; i++) {
    song1Notes4[i].collisionRating();
  }
  for (let i = 0; i < song1NotesNum5; i++) {
    song1Notes5[i].collisionRating();
  }
}

////////////////////////////Creat the class for the moving notes
class TutorialMovingNote {

  constructor(startX, startY, noteNO, noteTiming, noteDelay) {
    this.noteDelay = noteDelay * 500;
    this.x = startX;
    this.y = startY;
    this.noteSize = noteSize;
    this.xDir = -1;
    this.noteSpawn = scene3StartTime + this.noteDelay + (noteNO * (noteTiming * 500));
    this.detectMiss = 10;
  }

  move() {
    if (millis() > this.noteSpawn) {
      this.x = this.x + ((noteMove * this.xDir) * deltaTime);
    }
  }

  display() {
    if (millis() > this.noteSpawn) {
      strokeWeight(2);
      stroke(200);
      if (this.x < (1080 / 4) - 70) {
        fill(255, 20);

      }
      else {
        fill(255, 255);
      }

      ellipse(this.x, this.y, this.noteSize);
    }
  }

  collisionRating() {
    this.perfect = perfect;
    this.great = great;
    this.ok = ok;
    this.bad = bad;
    this.d = dist(this.x, this.y, detectorX, detectorY);
    if (this.d <= this.perfect) {
      this.y = -100;
      ratingFade = 255
      score = score + 200;
      perfectCount = perfectCount + 1;
      rating = 1;
    }
    else if (this.d <= this.great && this.d > this.perfect) {
      this.y = -100;
      ratingFade = 255
      score = score + 150;
      greatCount = greatCount + 1;
      rating = 2;

    }
    else if (this.d <= this.ok && this.d > this.great) {
      this.y = -100;
      ratingFade = 255
      score = score + 75;
      okCount = okCount + 1;
      rating = 3;
    }
    else if (this.d <= this.bad && this.d > this.ok) {
      this.y = -100;
      ratingFade = 255;
      score = score + 10;
      badCount = badCount + 1;
      rating = 4;
    }
  }

  fullMiss() {
    this.missD = dist(this.x, this.y, missDetectorX, missDetectorY);
    if (this.missD < this.detectMiss) {
      this.detectMiss = 0;
      ratingFade = 255;
      score = score - 100;
      missedCount = missedCount + 1;
      rating = 5;
    }
  }
}


class Song1MovingNote extends TutorialMovingNote {
  constructor(startX, startY, noteNO, noteTiming, noteDelay) {
    super();
    this.noteDelay = noteDelay * 500;
    this.x = startX;
    this.y = startY;
    this.noteSize = noteSize;
    this.xDir = -1;
    this.noteSpawn = scene4StartTime + this.noteDelay + (noteNO * (noteTiming * 500));
    this.detectMiss = 10;
  }
  move() {
    super.move();
  }
  display() {
    super.display();

  }
  collisionRating() {
    super.collisionRating();
  }
  fullMiss() {
    super.fullMiss();
  }
}
