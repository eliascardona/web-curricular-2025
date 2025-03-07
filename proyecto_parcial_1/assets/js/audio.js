const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const progress = document.getElementById("progress");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");
const muteUnmuteBtn = document.getElementById("mute-unmute");
const volumeOnIcon = document.getElementById("volume-on");
const volumeOffIcon = document.getElementById("volume-off");
const volumeControl = document.getElementById("volume");

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
    } else {
        audio.pause();
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";
    }
});

audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
    progress.max = audio.duration;
    durationDisplay.textContent = formatTime(audio.duration);
});

progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
});

volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
    if (audio.volume === 0) {
        volumeOnIcon.style.display = "none";
        volumeOffIcon.style.display = "inline";
    } else {
        volumeOnIcon.style.display = "inline";
        volumeOffIcon.style.display = "none";
    }
});

muteUnmuteBtn.addEventListener("click", () => {
    if (audio.volume > 0) {
        audio.dataset.previousVolume = audio.volume;
        audio.volume = 0;
        volumeControl.value = 0;
        volumeOnIcon.style.display = "none";
        volumeOffIcon.style.display = "inline";
    } else {
        audio.volume = audio.dataset.previousVolume || 1;
        volumeControl.value = audio.volume;
        volumeOnIcon.style.display = "inline";
        volumeOffIcon.style.display = "none";
    }
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
}
