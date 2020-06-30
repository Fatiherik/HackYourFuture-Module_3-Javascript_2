"use strict";
//get all element
const upArrow = document.getElementById("arrow-up");
const downArrow = document.getElementById("arrow-down");
const arrangeTime = document.getElementById("session");
const minCounter = document.getElementById("minCounter");
const secCounter = document.getElementById("secCounter");
const timerDisplay = document.querySelector(".timerDisplay");
const endTimeDisplay = document.querySelector(".endTimer");
const finsh = document.querySelector(".finsh");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const form = document.custom;

//sounds
const audioClick = document.getElementById("on");
const finishAudio = document.getElementById("end");

//setInternal variable
let countDown;

function timer(seconds) {
  clearInterval(countDown);
  const now = Date.now();
  const then = now + seconds * 1000;

  countDown = setInterval(function () {
    if (seconds > 0) {
      seconds--;
      finsh.innerText = "";
      displayTimerLeft(seconds);
    } else {
      finsh.innerText = "Time's Up";
      clearInterval(countDown);
      finishAudio.play();
    }
  }, 1000);
  displayEndTime(then);
}

//display remain min and sec
function displayTimerLeft(seconds) {
  const leftMinutes = Math.floor(seconds / 60);
  const leftSeconds = seconds % 60;
  minCounter.textContent = `${leftMinutes < 10 ? "0" : ""}${leftMinutes}`;
  secCounter.textContent = `${leftSeconds < 10 ? "0" : ""}${leftSeconds}`;
  //display them in html title
  document.title = `Timer ${minCounter.textContent} :${secCounter.textContent}`;
}

// more mints
function more() {
  audioClick.play();
  clearInterval(countDown);
  let leftMinutes = +session.textContent;
  if (leftMinutes < 60) {
    session.textContent = leftMinutes + 1;
    displayTimerLeft(+session.textContent * 60);
  } else {
    alert("60 is the max value");
  }
}

function less() {
  audioClick.play();
  clearInterval(countDown);
  let leftMinutes = +session.textContent;
  if (leftMinutes >= 1) {
    session.textContent = leftMinutes - 1;
    displayTimerLeft(+session.textContent * 60);
  } else {
    alert("must be more than 0");
  }
}

function stopTimer() {
  clearInterval(countDown);
  audioClick.play();
}

//update seconds when back play it
function upToDate() {
  const upDateSeconds =
    parseInt(minCounter.innerText) * 60 + parseInt(secCounter.innerText);
  return upDateSeconds;
}

function startTimer() {
  form.minutes.value = "";
  const seconds = upToDate();
  timer(seconds);
  audioClick.play();
}

//submit to play in the same number we pause
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (this.minutes.value > 0 && this.minutes.value <= 60) {
    const seconds = this.minutes.value * 60;
    clearInterval(countDown);
    displayTimerLeft(seconds);
    session.textContent = this.minutes.value;
  }
});

//addEventListeners for all clicks we need
upArrow.addEventListener("click", more);
downArrow.addEventListener("click", less);
play.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
