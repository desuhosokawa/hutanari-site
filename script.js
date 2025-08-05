const quotes = [
  "「性とは連続体である」― Judith Butler",
  "「我々の存在は、構築される身体の表象の中にある」― 高橋昌志",
  "「性別とはもはや二元論ではない」",
  "「ふたなりこそ、ジェンダー流動性の最前線だ」",
  "「境界を超えることこそ、真の学問である」"
];

function toggleMusic() {
  const audio = document.getElementById('bgm');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const q = document.getElementById("wisdom");
  q.textContent = quotes[Math.floor(Math.random() * quotes.length)];
});
