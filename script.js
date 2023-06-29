//----------WAVEFORMS-----------
import WaveSurfer from "https://unpkg.com/wavesurfer.js@beta";

//

// ---------- ELEMENTS ----------

//

const survivorsVideo = document.getElementById("survivorsVideo");
survivorsVideo.src =
  "https://res.cloudinary.com/dzq7b6tce/video/upload/v1688080209/Projet_SoundDesigner/Les_Survivants_BOB_1_upwbqx.mp4";
// "./assets/montSon/Survivants BOB 1/Les_Survivants_BOB_1.mp4";

// survivors All
// const waveSurvivorsAll = WaveSurfer.create({
//   container: ".waveformAll",
//   waveColor: "rgba(221, 244, 12, 0.4)",
//   progressColor: "rgba(221, 244, 12, 1)",
//   cursorColor: "red",
//   height: "auto",
// barHeight: 3,
//   url: "https://res.cloudinary.com/dzq7b6tce/video/upload/v1688080466/Projet_SoundDesigner/Stem_All_olixgj.wav"
// "./assets/montSon/Survivants BOB 1/AudioFiles/Stem All.wav",
// });

//survivors Directs
const waveSurvivorsDirects = WaveSurfer.create({
  container: ".waveformDirects",
  waveColor: "rgb(244, 12, 171, 0.4)",
  progressColor: "rgb(244, 12, 171, 1)",
  cursorColor: "rgb(255,0,0, 0.9)",
  height: "auto",
  barHeight: 1.2,
  barWidth: 1.5,
  url: "https://res.cloudinary.com/dzq7b6tce/video/upload/v1688080462/Projet_SoundDesigner/Stem_Directs_koi2qp.wav",
  // "./assets/montSon/Survivants BOB 1/AudioFiles/Stem Directs.wav",
});

//survivors Post-Synchro
const waveSurvivorsPs = WaveSurfer.create({
  container: ".waveformPs",
  waveColor: "rgb(195, 28, 228, 0.4)",
  progressColor: "rgb(195, 28, 228, 1)",
  cursorColor: "rgb(255,0,0, 0.9)",
  height: "auto",
  barHeight: 1.6,
  barWidth: 1.5,
  url: "https://res.cloudinary.com/dzq7b6tce/video/upload/v1688080466/Projet_SoundDesigner/Stem_Post-Synchros_c8rt4t.wav",
  // "./assets/montSon/Survivants BOB 1/AudioFiles/Stem Post-Synchros.wav",
});

//survivors Ambiances
const waveSurvivorsAmb = WaveSurfer.create({
  container: ".waveformAmb",
  waveColor: "rgb(79, 246, 255, 0.4)",
  progressColor: "rgb(79, 246, 255, 1)",
  cursorColor: "rgb(255,0,0, 0.9)",
  height: "auto",
  barHeight: 5,
  barWidth: 1.5,
  url: "https://res.cloudinary.com/dzq7b6tce/video/upload/v1688080463/Projet_SoundDesigner/Stem_Ambiances_kbimov.wav",
  // "./assets/montSon/Survivants BOB 1/AudioFiles/Stem Ambiances.wav",
});

//survivors Effets
const waveSurvivorsFx = WaveSurfer.create({
  container: ".waveformFx",
  waveColor: "rgb(70, 245, 21, 0.4)",
  progressColor: "rgb(70, 245, 21, 1)",
  cursorColor: "rgb(255,0,0, 0.9)",
  height: "auto",
  barHeight: 1.7,
  barWidth: 1.5,
  url: "https://res.cloudinary.com/dzq7b6tce/video/upload/v1688080464/Projet_SoundDesigner/Stem_Effets_tlygaa.wav",
  // "./assets/montSon/Survivants BOB 1/AudioFiles/Stem Effets.wav",
});

// survivors Bruitages
const waveSurvivorsFoley = WaveSurfer.create({
  container: ".waveformFoley",
  waveColor: "rgb(236, 145, 18, 0.4",
  progressColor: "rgb(236, 145, 18, 1)",
  cursorColor: "rgb(255,0,0, 0.9)",
  height: "auto",
  barHeight: 1.7,
  barWidth: 1.5,
  url: "https://res.cloudinary.com/dzq7b6tce/video/upload/v1688080467/Projet_SoundDesigner/Stem_Bruitages_aea2sm.wav",
  // "/assets/montSon/Survivants BOB 1/AudioFiles/Stem Bruitages.wav",
});

//survivors Musique
const waveSurvivorsMusic = WaveSurfer.create({
  container: ".waveformMusic",
  waveColor: "rgba(221, 244, 12, 0.4)",
  progressColor: "rgba(221, 244, 12, 1)",
  cursorColor: "rgb(255,0,0, 0.9)",
  height: "auto",
  barHeight: 3,
  barWidth: 1.5,
  url: "https://res.cloudinary.com/dzq7b6tce/video/upload/v1688080464/Projet_SoundDesigner/Stem_Musique_bdfapt.wav",
  // "./assets/montSon/Survivants BOB 1/AudioFiles/Stem Musique.wav",
});

// ---------- PLAY / PAUSE / STOP ----------

//Play
async function playAudio() {
  survivorsAll.play();
}

async function playVideo() {
  survivorsVideo.play();
}

// async function delay() {
//   setTimeout(
//     (survivorsVideo.currentTime = survivorsVideo.currentTime - 0.12),
//     200
//   );
// }

async function playVideoAudio() {
  // survivorsAll.currentTime = survivorsVideo.currentTime;
  // await playAudio();
  await playVideo();
  // await delay();
  // waveSurvivorsAll.play();
  waveSurvivorsDirects.play();
  waveSurvivorsAmb.play();
  waveSurvivorsPs.play();
  waveSurvivorsFx.play();
  waveSurvivorsFoley.play();
  waveSurvivorsMusic.play();
}

//Pause
function pauseVideoAudio() {
  survivorsVideo.pause();
  // waveSurvivorsAll.pause();
  waveSurvivorsDirects.pause();
  waveSurvivorsPs.pause();
  waveSurvivorsAmb.pause();
  waveSurvivorsFx.pause();
  waveSurvivorsFoley.pause();
  waveSurvivorsMusic.pause();
  // setTimeout((waveSurvivorsAll.currentTime = survivorsVideo.currentTime), 1000);
}

//Stop
function stopAudioVideo() {
  survivorsVideo.pause();
  survivorsVideo.currentTime = 0;
  waveSurvivorsDirects.stop();
  waveSurvivorsPs.stop();
  waveSurvivorsAmb.stop();
  waveSurvivorsFx.stop();
  waveSurvivorsFoley.stop();
  waveSurvivorsMusic.stop();
}

// ---------- AUDIO VIDEO SYNC CORRECTION ----------

// const adjustTime = async () => {
//   let latency = survivorsVideo.currentTime - survivorsAll.currentTime;
//   let correctTime = latency;
//   if (Math.abs(latency > 0.1)) {
//     survivorsAll.currentTime += correctTime;
//   }
//   console.log(latency);
// };

// Check sync
// const noAdjustTime = () => {
//   let latency = survivorsVideo.currentTime - waveSurvivorsAll.currentTime;
//   console.log(latency);
// };

// setInterval(noAdjustTime, 2000);

//

// ---------- CONTROLS ----------

//

const play = document.getElementById("btnPlay");
const pause = document.getElementById("btnPause");
const stop = document.getElementById("btnStop");

const muteDirects = document.querySelector(".directsMute");
const mutePs = document.querySelector(".psMute");
const muteAmb = document.querySelector(".ambMute");
const muteFx = document.querySelector(".fxMute");
const muteFoley = document.querySelector(".foleyMute");
const muteMusic = document.querySelector(".musicMute");
const mTextDirects = document.querySelector(".mTextDirects");
const mTextPs = document.querySelector(".mTextPs");
const mTextAmb = document.querySelector(".mTextAmb");
const mTextFx = document.querySelector(".mTextFx");
const mTextFoley = document.querySelector(".mTextFoley");
const mTextMusic = document.querySelector(".mTextMusic");

const soloDirects = document.querySelector(".soloDirects");
const soloPs = document.querySelector(".soloPs");
const soloAmb = document.querySelector(".soloAmb");
const soloFx = document.querySelector(".soloFx");
const soloFoley = document.querySelector(".soloFoley");
const soloMusic = document.querySelector(".soloMusic");

//play
play.addEventListener("click", () => {
  playVideoAudio();
  play.innerHTML =
    '<i class="fa-solid fa-play fa-xl" style="color: rgb(111, 147, 111)"></i>';
  pause.innerHTML =
    '<i class="fa-solid fa-pause fa-xl" style="color: #f8f9fc"></i>';
});

//pause
pause.addEventListener("click", () => {
  pauseVideoAudio();
  play.innerHTML =
    '<i class="fa-solid fa-play fa-xl" style="color: #ffffff"></i>';
  pause.innerHTML = pause.innerHTML =
    '<i class="fa-solid fa-pause fa-xl" style="color: red"></i>';
});

//stop
stop.addEventListener("click", () => {
  stopAudioVideo();
  play.innerHTML =
    '<i class="fa-solid fa-play fa-xl" style="color: #ffffff"></i>';
  pause.innerHTML =
    '<i class="fa-solid fa-pause fa-xl" style="color: #f8f9fc"></i>';
});

//

// -------------------- MUTE --------------------

//

// Muted & Unmuted ELEMENTS

//
const unmutedDirects = () => {
  muteDirects.innerHTML =
    '<i class="fa-solid fa-volume-high fa-lg" style="color:rgb(111, 147, 111)"></i>';
  mTextDirects.innerHTML = "active";
  mTextDirects.style = "rgb(167, 211, 167)";
  document.querySelector(".waveformDirects").style = "opacity:1";
};
const mutedDirects = () => {
  muteDirects.innerHTML =
    '<i class="fa-solid fa-volume-xmark fa-lg" style="color: #ff0000;"></i>';
  mTextDirects.innerHTML = "muted";
  mTextDirects.style = "color:red";
  document.querySelector(".waveformDirects").style = "opacity:0.3";
};

const unmutedPs = () => {
  mutePs.innerHTML =
    '<i class="fa-solid fa-volume-high fa-lg" style="color:rgb(111, 147, 111)"></i>';
  mTextPs.innerHTML = "active";
  mTextPs.style = "rgb(167, 211, 167)";
  document.querySelector(".waveformPs").style = "opacity:1";
};
const mutedPs = () => {
  mutePs.innerHTML =
    '<i class="fa-solid fa-volume-xmark fa-lg" style="color: #ff0000;"></i>';
  mTextPs.innerHTML = "muted";
  mTextPs.style = "color:red";
  document.querySelector(".waveformPs").style = "opacity:0.3";
};

const unmutedAmb = () => {
  muteAmb.innerHTML =
    '<i class="fa-solid fa-volume-high fa-lg" style="color:rgb(111, 147, 111)"></i>';
  mTextAmb.innerHTML = "active";
  mTextAmb.style = "rgb(167, 211, 167)";
  document.querySelector(".waveformAmb").style = "opacity:1";
};
const mutedAmb = () => {
  muteAmb.innerHTML =
    '<i class="fa-solid fa-volume-xmark fa-lg" style="color: #ff0000;"></i>';
  mTextAmb.innerHTML = "muted";
  mTextAmb.style = "color:red";
  document.querySelector(".waveformAmb").style = "opacity:0.3";
};

const unmutedFx = () => {
  muteFx.innerHTML =
    '<i class="fa-solid fa-volume-high fa-lg" style="color:rgb(111, 147, 111)"></i>';
  mTextFx.innerHTML = "active";
  mTextFx.style = "rgb(167, 211, 167)";
  document.querySelector(".waveformFx").style = "opacity:1";
};
const mutedFx = () => {
  muteFx.innerHTML =
    '<i class="fa-solid fa-volume-xmark fa-lg" style="color: #ff0000;"></i>';
  mTextFx.innerHTML = "muted";
  mTextFx.style = "color:red";
  document.querySelector(".waveformFx").style = "opacity:0.3";
};

const unmutedFoley = () => {
  muteFoley.innerHTML =
    '<i class="fa-solid fa-volume-high fa-lg" style="color:rgb(111, 147, 111)"></i>';
  mTextFoley.innerHTML = "active";
  mTextFoley.style = "rgb(167, 211, 167)";
  document.querySelector(".waveformFoley").style = "opacity:1";
};
const mutedFoley = () => {
  muteFoley.innerHTML =
    '<i class="fa-solid fa-volume-xmark fa-lg" style="color: #ff0000;"></i>';
  mTextFoley.innerHTML = "muted";
  mTextFoley.style = "color:red";
  document.querySelector(".waveformFoley").style = "opacity:0.3";
};

const unmutedMusic = () => {
  muteMusic.innerHTML =
    '<i class="fa-solid fa-volume-high fa-lg" style="color:rgb(111, 147, 111)"></i>';
  mTextMusic.innerHTML = "active";
  mTextMusic.style = "rgb(167, 211, 167)";
  document.querySelector(".waveformMusic").style = "opacity:1";
};
const mutedMusic = () => {
  muteMusic.innerHTML =
    '<i class="fa-solid fa-volume-xmark fa-lg" style="color: #ff0000;"></i>';
  mTextMusic.innerHTML = "muted";
  mTextMusic.style = "color:red";
  document.querySelector(".waveformMusic").style = "opacity:0.3";
};

//

// Muted & Unmuted FUNCTIONS

//mute Directs
muteDirects.addEventListener("click", () => {
  const muteState = waveSurvivorsDirects.getMuted();
  if (muteState === false) {
    waveSurvivorsDirects.setMuted(true);
    mutedDirects();
  } else {
    waveSurvivorsDirects.setMuted(false);
    unmutedDirects();
  }
});

//mute Post-Sync
mutePs.addEventListener("click", () => {
  const muteState = waveSurvivorsPs.getMuted();
  if (muteState === false) {
    waveSurvivorsPs.setMuted(true);
    mutedPs();
  } else {
    waveSurvivorsPs.setMuted(false);
    unmutedPs();
  }
});

//mute Ambiances
muteAmb.addEventListener("click", () => {
  const muteState = waveSurvivorsAmb.getMuted();
  if (muteState === false) {
    waveSurvivorsAmb.setMuted(true);
    mutedAmb();
  } else {
    waveSurvivorsAmb.setMuted(false);
    unmutedAmb();
  }
});

//mute FX
muteFx.addEventListener("click", () => {
  const muteState = waveSurvivorsFx.getMuted();
  if (muteState === false) {
    waveSurvivorsFx.setMuted(true);
    mutedFx();
  } else {
    waveSurvivorsFx.setMuted(false);
    unmutedFx();
  }
});

//mute Foley
muteFoley.addEventListener("click", () => {
  const muteState = waveSurvivorsFoley.getMuted();
  if (muteState === false) {
    waveSurvivorsFoley.setMuted(true);
    mutedFoley();
  } else {
    waveSurvivorsFoley.setMuted(false);
    unmutedFoley();
  }
});

//mute Music
muteMusic.addEventListener("click", () => {
  const muteState = waveSurvivorsMusic.getMuted();
  if (muteState === false) {
    waveSurvivorsMusic.setMuted(true);
    mutedMusic();
  } else {
    waveSurvivorsMusic.setMuted(false);
    unmutedMusic();
  }
});

//

// ---------- SOLO ----------

//

//solo Directs
let clickedSoloDirects = 1;
let clickedSoloPs = 1;
let clickedSoloAmb = 1;
let clickedSoloFx = 1;
let clickedSoloFoley = 1;
let clickedSoloMusic = 1;

soloDirects.addEventListener("click", () => {
  clickedSoloDirects++;
  if (clickedSoloDirects % 2 === 0) {
    waveSurvivorsDirects.setMuted(false);
    waveSurvivorsPs.setMuted(true);
    waveSurvivorsAmb.setMuted(true);
    waveSurvivorsFx.setMuted(true);
    waveSurvivorsFoley.setMuted(true);
    waveSurvivorsMusic.setMuted(true);
    unmutedDirects();
    mutedPs();
    mutedAmb();
    mutedFx();
    mutedFoley();
    mutedMusic();
  } else {
    waveSurvivorsPs.setMuted(false);
    waveSurvivorsAmb.setMuted(false);
    waveSurvivorsFx.setMuted(false);
    waveSurvivorsFoley.setMuted(false);
    waveSurvivorsMusic.setMuted(false);
    unmutedPs();
    unmutedAmb();
    unmutedFx();
    unmutedFoley();
    unmutedMusic();
  }
  clickedSoloPs = 1;
  clickedSoloAmb = 1;
  clickedSoloFx = 1;
  clickedSoloFoley = 1;
  clickedSoloMusic = 1;
});

//solo Ps
soloPs.addEventListener("click", () => {
  clickedSoloPs++;
  if (clickedSoloPs % 2 === 0) {
    waveSurvivorsPs.setMuted(false);
    waveSurvivorsDirects.setMuted(true);
    waveSurvivorsAmb.setMuted(true);
    waveSurvivorsFx.setMuted(true);
    waveSurvivorsFoley.setMuted(true);
    waveSurvivorsMusic.setMuted(true);
    unmutedPs();
    mutedDirects();
    mutedAmb();
    mutedFx();
    mutedFoley();
    mutedMusic();
  } else {
    waveSurvivorsDirects.setMuted(false);
    waveSurvivorsAmb.setMuted(false);
    waveSurvivorsFx.setMuted(false);
    waveSurvivorsFoley.setMuted(false);
    waveSurvivorsMusic.setMuted(false);
    unmutedDirects();
    unmutedAmb();
    unmutedFx();
    unmutedFoley();
    unmutedMusic();
  }
  clickedSoloDirects = 1;
  clickedSoloAmb = 1;
  clickedSoloFx = 1;
  clickedSoloFoley = 1;
  clickedSoloMusic = 1;
});

//solo Ambiances
soloAmb.addEventListener("click", () => {
  clickedSoloAmb++;
  if (clickedSoloAmb % 2 === 0) {
    waveSurvivorsAmb.setMuted(false);
    waveSurvivorsDirects.setMuted(true);
    waveSurvivorsPs.setMuted(true);
    waveSurvivorsFx.setMuted(true);
    waveSurvivorsFoley.setMuted(true);
    waveSurvivorsMusic.setMuted(true);
    unmutedAmb();
    mutedDirects();
    mutedPs();
    mutedFx();
    mutedFoley();
    mutedMusic();
  } else {
    waveSurvivorsDirects.setMuted(false);
    waveSurvivorsPs.setMuted(false);
    waveSurvivorsFx.setMuted(false);
    waveSurvivorsFoley.setMuted(false);
    waveSurvivorsMusic.setMuted(false);
    unmutedDirects();
    unmutedPs();
    unmutedFx();
    unmutedFoley();
    unmutedMusic();
  }
  clickedSoloDirects = 1;
  clickedSoloPs = 1;
  clickedSoloFx = 1;
  clickedSoloFoley = 1;
  clickedSoloMusic = 1;
});

//solo FX
soloFx.addEventListener("click", () => {
  clickedSoloFx++;
  if (clickedSoloFx % 2 === 0) {
    waveSurvivorsFx.setMuted(false);
    waveSurvivorsDirects.setMuted(true);
    waveSurvivorsPs.setMuted(true);
    waveSurvivorsAmb.setMuted(true);
    waveSurvivorsFoley.setMuted(true);
    waveSurvivorsMusic.setMuted(true);
    unmutedFx();
    mutedDirects();
    mutedPs();
    mutedAmb();
    mutedFoley();
    mutedMusic();
  } else {
    waveSurvivorsDirects.setMuted(false);
    waveSurvivorsPs.setMuted(false);
    waveSurvivorsAmb.setMuted(false);
    waveSurvivorsFoley.setMuted(false);
    waveSurvivorsMusic.setMuted(false);
    unmutedDirects();
    unmutedPs();
    unmutedAmb();
    unmutedFoley();
    unmutedMusic();
  }
  clickedSoloDirects = 1;
  clickedSoloPs = 1;
  clickedSoloAmb = 1;
  clickedSoloFoley = 1;
  clickedSoloMusic = 1;
});

//solo Foley
soloFoley.addEventListener("click", () => {
  clickedSoloFoley++;
  if (clickedSoloFoley % 2 === 0) {
    waveSurvivorsFoley.setMuted(false);
    waveSurvivorsDirects.setMuted(true);
    waveSurvivorsPs.setMuted(true);
    waveSurvivorsAmb.setMuted(true);
    waveSurvivorsFx.setMuted(true);
    waveSurvivorsMusic.setMuted(true);
    unmutedFoley();
    mutedDirects();
    mutedPs();
    mutedAmb();
    mutedFx();
    mutedMusic();
  } else {
    waveSurvivorsDirects.setMuted(false);
    waveSurvivorsPs.setMuted(false);
    waveSurvivorsAmb.setMuted(false);
    waveSurvivorsFx.setMuted(false);
    waveSurvivorsMusic.setMuted(false);
    unmutedDirects();
    unmutedPs();
    unmutedAmb();
    unmutedFx();
    unmutedMusic();
  }
  clickedSoloDirects = 1;
  clickedSoloPs = 1;
  clickedSoloAmb = 1;
  clickedSoloFx = 1;
  clickedSoloMusic = 1;
});

//solo Music
soloMusic.addEventListener("click", () => {
  clickedSoloMusic++;
  if (clickedSoloMusic % 2 === 0) {
    waveSurvivorsMusic.setMuted(false);
    waveSurvivorsDirects.setMuted(true);
    waveSurvivorsPs.setMuted(true);
    waveSurvivorsAmb.setMuted(true);
    waveSurvivorsFx.setMuted(true);
    waveSurvivorsFoley.setMuted(true);
    unmutedMusic();
    mutedDirects();
    mutedPs();
    mutedAmb();
    mutedFx();
    mutedFoley();
  } else {
    waveSurvivorsDirects.setMuted(false);
    waveSurvivorsPs.setMuted(false);
    waveSurvivorsAmb.setMuted(false);
    waveSurvivorsFx.setMuted(false);
    waveSurvivorsFoley.setMuted(false);
    unmutedDirects();
    unmutedPs();
    unmutedAmb();
    unmutedFx();
    unmutedFoley();
  }
  clickedSoloDirects = 1;
  clickedSoloPs = 1;
  clickedSoloAmb = 1;
  clickedSoloFx = 1;
  clickedSoloFoley = 1;
});
