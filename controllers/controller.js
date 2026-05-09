// controller.js
const memoryData = [
  {
    text: "Our First concert",
    audio: "../music/pehlidafa.mp3",
    image: "concert.png",
  },
  {
    text: "Our first date",
    audio: "../music/sadka.mp3",
    image: "firstdate.png",
  },
  {
    text: "Double Decker bus",
    audio: "../music/doubledeckerbus.mp3",
    image: "doubledeckerBus.png",
  },
  {
    text: "Photobooth fun",
    audio: "../music/heyshona.mp3",
    image: "photobooth.png",
  },
  {
    text: "Veggies i love you",
    audio: "../music/yunhi.mp3",
    image: "veggies.png",
  },
];
const jar = document.getElementById("main-jar");
const note = document.getElementById("memory-note");
let currentAudio = null;

jar.addEventListener("click", () => {
  jar.classList.remove("shake");
  void jar.offsetWidth;
  jar.classList.add("shake");

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const randomSelection =
    memoryData[Math.floor(Math.random() * memoryData.length)];

  currentAudio = new Audio(`/music/${randomSelection.audio}`);
  currentAudio.play().catch(() => {});

  note.innerHTML = `
    <img src="/images/${randomSelection.image}" alt="Memory">
    <p>${randomSelection.text}</p>
  `;

  note.classList.remove("hidden", "animate-note");
  void note.offsetWidth;
  note.classList.add("animate-note");
});
