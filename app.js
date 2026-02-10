// ====== EDIT THESE ======
const CONTENT = {
  introLetter: `Corley,

I wanted to make you something that’s “ours.”
Not something bought. Something built.
A little book you can open anytime — even offline.

Thank you for being you.
Thank you for being patient with me.
And thank you for making life feel lighter.

Happy Valentine’s Day ❤️
— Oliver`,
  chapterUs: `I still catch myself smiling at small moments with you. The way you react to things, the way you care, the way you make a normal day feel like a good day.`,
  chapterPeru: `Peru is going to be special. New memories, new photos, and me being ridiculously happy just walking next to you.`,
  loveBullets: [
    "Your laugh (it resets my whole mood).",
    "How you care about people — even when you’re tired.",
    "You make me want to be better without forcing it.",
    "Your eyes. Dangerous.",
    "How safe it feels to be with you."
  ],
  timeline: [
    { date: "Moment 1", title: "When I realized I like you a lot", detail: "I remember thinking: oh… this one is different." },
    { date: "Moment 2", title: "A simple day that felt perfect", detail: "No crazy plan. Just us. And it felt right." },
    { date: "Moment 3", title: "When I missed you", detail: "That’s when I knew you’re not just a ‘part’ of my life. You’re in it." },
    { date: "Next", title: "More adventures", detail: "More photos, more laughs, more ‘us’." }
  ],
  notes: [
    "I’m proud of you.",
    "You’re my favorite person.",
    "I love your mind.",
    "You’re so loved.",
    "You feel like home.",
    "I choose you."
  ],
  finalMessage: `Corley,

I love you — genuinely.
And I’m grateful I get to do life with you.

Happy Valentine’s Day ❤️`,
  // List your photos here (must exist in /photos)
  photos: [
    { src: "photos/p1.jpg", caption: "Us — my favorite." },
    { src: "photos/p2.jpg", caption: "This day was perfect." },
    { src: "photos/p3.jpg", caption: "I look at this and smile." },
    { src: "photos/p4.jpg", caption: "More of this, please." },
    { src: "photos/p5.jpg", caption: "You. Always you." },
    { src: "photos/p6.jpg", caption: "Core memory." },
    { src: "photos/p7.jpg", caption: "I love this." },
    { src: "photos/p8.jpg", caption: "❤️" }
  ]
};
// =========================

const panels = Array.from(document.querySelectorAll(".panel"));

function showPanel(id){
  panels.forEach(p => p.classList.toggle("active", p.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (e) => {
  const next = e.target.closest("[data-next]");
  const prev = e.target.closest("[data-prev]");
  const go = e.target.closest("[data-go]");

  if(next) showPanel(next.getAttribute("data-next"));
  if(prev) showPanel(prev.getAttribute("data-prev"));
  if(go) showPanel(go.getAttribute("data-go"));
});

// Fill text content
document.getElementById("introLetter").textContent = CONTENT.introLetter;
document.getElementById("chapterUs").textContent = CONTENT.chapterUs;
document.getElementById("chapterPeru").textContent = CONTENT.chapterPeru;

const loveList = document.getElementById("loveList");
CONTENT.loveBullets.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  loveList.appendChild(li);
});

// Timeline
const timelineEl = document.getElementById("timeline");
CONTENT.timeline.forEach(m => {
  const div = document.createElement("div");
  div.className = "moment";
  div.innerHTML = `
    <div class="date">${escapeHtml(m.date)}</div>
    <div class="title">${escapeHtml(m.title)}</div>
    <div class="detail">${escapeHtml(m.detail)}</div>
  `;
  div.addEventListener("click", () => div.classList.toggle("open"));
  timelineEl.appendChild(div);
});

// Notes reveal
const notesEl = document.getElementById("notes");
CONTENT.notes.forEach((msg, idx) => {
  const card = document.createElement("div");
  card.className = "note";
  card.innerHTML = `
    <div class="front">Tap to reveal #${idx+1}</div>
    <div class="back">${escapeHtml(msg)}</div>
  `;
  card.addEventListener("click", () => card.classList.toggle("revealed"));
  notesEl.appendChild(card);
});

// Gallery grid
const grid = document.getElementById("photoGrid");
CONTENT.photos.forEach((p, idx) => {
  const div = document.createElement("div");
  div.className = "photo";
  div.innerHTML = `<img src="${p.src}" alt="Photo ${idx+1}">`;
  div.addEventListener("click", () => openLightbox(idx));
  grid.appendChild(div);
});

// Final reveal
document.getElementById("finalMessage").textContent = CONTENT.finalMessage;

const revealBtn = document.getElementById("revealBtn");
const revealBox = document.getElementById("revealBox");
revealBtn.addEventListener("click", () => {
  revealBox.classList.add("show");
  revealBox.setAttribute("aria-hidden", "false");
  popConfetti(70);
});

// Restart
document.getElementById("restartBtn").addEventListener("click", () => {
  // close reveal
  revealBox.classList.remove("show");
  revealBox.setAttribute("aria-hidden", "true");
  // reset notes
  document.querySelectorAll(".note").forEach(n => n.classList.remove("revealed"));
  // reset timeline
  document.querySelectorAll(".moment").forEach(m => m.classList.remove("open"));
  showPanel("cover");
});

// Confetti
document.getElementById("confettiBtn").addEventListener("click", () => popConfetti(40));

function popConfetti(n=40){
  for(let i=0;i<n;i++){
    const s = document.createElement("span");
    s.style.position = "fixed";
    s.style.left = Math.random()*100 + "vw";
    s.style.top = "-10px";
    s.style.width = (6 + Math.random()*8) + "px";
    s.style.height = (6 + Math.random()*10) + "px";
    s.style.borderRadius = "3px";
    s.style.background = `hsl(${Math.random()*360}, 90%, 70%)`;
    s.style.zIndex = 9999;
    s.style.opacity = "0.95";
    s.style.transform = `rotate(${Math.random()*180}deg)`;
    document.body.appendChild(s);

    const duration = 900 + Math.random()*900;
    const x = (Math.random()*2 - 1) * 140;

    s.animate([
      { transform: s.style.transform, top: "-10px", opacity: 1 },
      { transform: `translateX(${x}px) rotate(${Math.random()*360}deg)`, top: "110vh", opacity: 0.1 }
    ], { duration, easing: "cubic-bezier(.2,.8,.2,1)" });

    setTimeout(() => s.remove(), duration + 50);
  }
}

// Lightbox
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCaption = document.getElementById("lbCaption");
let currentIndex = 0;

function openLightbox(idx){
  currentIndex = idx;
  renderLightbox();
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox(){
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
}

function renderLightbox(){
  const p = CONTENT.photos[currentIndex];
  lbImg.src = p.src;
  lbCaption.textContent = p.caption || "";
}

document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + CONTENT.photos.length) % CONTENT.photos.length;
  renderLightbox();
});
document.getElementById("lbNext").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % CONTENT.photos.length;
  renderLightbox();
});

lightbox.addEventListener("click", (e) => {
  if(e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if(!lightbox.classList.contains("show")) return;
  if(e.key === "Escape") closeLightbox();
  if(e.key === "ArrowLeft") document.getElementById("lbPrev").click();
  if(e.key === "ArrowRight") document.getElementById("lbNext").click();
});

// Small helper to avoid accidental HTML injection in strings
function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
