const url = "./audio/gods-plan.mp3";
const audio = new Audio(url);
const playBtn = document.querySelector("#play img");
const progressEl = document.querySelector('input[type="range"]');
const video = document.querySelector('video');
let mouseDownOnSlider = false;
let videoIndex = 0;

const playPauseVideo = function() {
    if (audio.paused) {
        audio.play();
        video.play();
    } else {
        audio.pause();
        video.src = `video/${(videoIndex++) % 3 + 1}.mp4`;
        video.pause();
    }
    playBtn.src = audio.paused ? playBtn.src = "icons/play.png" : playBtn.src = "icons/pause.png";
};

audio.addEventListener("loadeddata", () => {
    progressEl.value = 0;
    video.src = `video/${(videoIndex++) % 3 + 1}.mp4`;
});
audio.addEventListener("timeupdate", () => {
    if (!mouseDownOnSlider) {
        progressEl.value = audio.currentTime / audio.duration * 100;
    }
});
audio.addEventListener("ended", () => {
    playBtn.src = "icons/play.png";
    video.src = `video/${(videoIndex++) % 3 + 1}.mp4`;
    video.pause();
});

playBtn.addEventListener("click", playPauseVideo);

progressEl.addEventListener("change", () => {
    const pct = progressEl.value / 100;
    audio.currentTime = (audio.duration || 0) * pct;
});
progressEl.addEventListener("mousedown", () => {
    mouseDownOnSlider = true;
});
progressEl.addEventListener("mouseup", () => {
    mouseDownOnSlider = false;
});

const audios = [];

for (let index = 0; index < 9; index++) {
    audios[index] = new Audio(`./audio/${index + 1}.mp3`);
};

const bassButtons = document.querySelectorAll(".bass_button img");

for (let index = 0; index < bassButtons.length; index++) {
    bassButtons[index].addEventListener("click", () => {
        audios[index].play();
    });
};

document.addEventListener('keydown', function(e) {
    if (e.key == "1") {
        audios[0].play();
    } else if (e.key == "2") {
        audios[1].play();
    } else if (e.key == "3") {
        audios[2].play();
    } else if (e.key == "4") {
        audios[3].play();
    } else if (e.key == "5") {
        audios[4].play();
    } else if (e.key == "6") {
        audios[5].play();
    } else if (e.key == "7") {
        audios[6].play();
    } else if (e.key == "8") {
        audios[7].play();
    } else if (e.key == "9") {
        audios[8].play();
    } else if (e.key == "Enter") {
        playPauseVideo();
    }
});