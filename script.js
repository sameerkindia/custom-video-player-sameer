const video = document.querySelector("#video");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const timestamp = document.querySelector("#timestamp");

// Play And Pause Video

function toogleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  } else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
  }
}

function updateProgress() {
  console.log(progress.value);
  progress.value = (video.currentTime / video.duration) * 100;
  console.log("       hijhios " + progress.value);

  let min = Math.floor(video.currentTime / 60);
  if (min < 10) {
    min = "0" + String(min);
  }

  let sec = Math.floor(video.currentTime % 60);
  if (sec < 10) {
    sec = "0" + String(sec);
  }

  timestamp.innerHTML = `${min}:${sec}`;
}

function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
  console.log(video.currentTime);
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// EVENT LISTNER
video.addEventListener("click", toogleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toogleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
