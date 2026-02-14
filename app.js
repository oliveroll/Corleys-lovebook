// ====== EDIT THESE ======
const CONTENT = {
  introLetter: `Corley,

I wanted to make you something that's "ours."
Not something bought. Something built.
A little book you can open anytime — even offline.

Thank you for being you.
Thank you for being patient with me.
And thank you for making life feel lighter.

Happy Valentine's Day ❤️
— Oliver`,
  // Our 2025 Story — 4 Chapters
  gameChapters: [
    {
      id: "chapter1",
      number: "Chapter 1",
      title: "The First Smile",
      subtitle: "How It All Began",
      intro: "A week before Valentine's Day, we met at Cups. Two smiles. One brave moment. And everything changed.",
      nodes: [
        {
          id: "node1",
          title: "Cups Coffee Shop",
          subtitle: "The First Smile",
          icon: "☕",
          memory: "We met a week before Valentine's Day at Cups. You smiled at me when you walked out, and then again when you were about to leave. I was blushing like crazy.",
          questions: [
            { q: "Where did we first meet?", choices: ["Starbucks", "Cups", "Library", "Park"], answer: 1 },
            { q: "What made me notice you first?", choices: ["You dropped your keys", "You smiled at me", "You spilled coffee", "You asked for my number"], answer: 1 },
            { q: "How many times did you smile at me before we talked?", choices: ["1", "2", "3", "0"], answer: 1 }
          ],
          successNote: "Your smile started everything.",
          failNote: "Okay, replay this stop. Your smile deserves a second try."
        },
        {
          id: "node2",
          title: "The Number",
          subtitle: "The Brave Moment",
          icon: "📱",
          memory: "You smiled again when you were about to leave. After 2-3 minutes of deep thoughts, my heart was racing, but I talked to you and asked for your number.",
          questions: [
            { q: "After which smile did I finally talk to you?", choices: ["First smile", "Second smile", "Third smile", "Fourth smile"], answer: 1 },
            { q: "What did I ask for?", choices: ["Your Instagram", "Your number", "A photo", "Your email"], answer: 1 }
          ],
          successNote: "I was scared. I did it anyway. Best decision.",
          failNote: "No worries — courage is doing it on the second attempt too."
        },
        {
          id: "node3",
          title: "Flatbread Night",
          subtitle: "The 'Not a Date' Date",
          icon: "🫓",
          memory: "We met up and you ate flatbread — and you loved it. I was already so in love with your smile. You don't call it the first date… but it's still our fun fact.",
          questions: [
            { q: "What did you eat that night?", choices: ["Pizza", "Flatbread", "Pasta", "Tacos"], answer: 1 },
            { q: "What's the funny fact about this night?", choices: ["You were late", "You don't count it as a first date", "It rained", "We got lost"], answer: 1 },
            { q: "What was the vibe I felt the most?", choices: ["Nervous", "In love already", "Bored", "Confused"], answer: 1 }
          ],
          successNote: "Not a date… but it felt like one to me.",
          failNote: "Okay okay. Flatbread deserves a rematch."
        },
        {
          id: "node4",
          title: "Movie Evenings",
          subtitle: "Falling Again",
          icon: "🎬",
          memory: "We had movie evenings and talked about life and everything else. I learned how to talk to you. And I fell in love again and again.",
          questions: [
            { q: "What did we do a lot early on?", choices: ["Hiking", "Movies", "Gaming", "Dancing"], answer: 1 },
            { q: "How did those times make me feel?", choices: ["Bored", "Confused", "In love with learning you", "Sleepy"], answer: 2 }
          ],
          successNote: "I didn't just like you. I loved learning you.",
          failNote: "Try again — this part matters."
        },
        {
          id: "node5",
          title: "The Break",
          subtitle: "Beliefs + Goodbye",
          icon: "🕊️",
          memory: "Then it hurt: you said our beliefs didn't match and it couldn't work. We stopped. No communication. I still thought about you a lot.",
          questions: [
            { q: "Why did we pause/stop back then?", choices: ["Long distance", "Busy schedule", "Faith/beliefs difference", "Family issues"], answer: 2 },
            { q: "How did it feel for me?", choices: ["Fine", "Confusing", "Sad", "All of the above"], answer: 3 }
          ],
          successNote: "Even when it hurt, I still cared. A lot.",
          failNote: "That part was hard. Take your time and try again."
        },
        {
          id: "node6",
          title: "The Scooter Wave",
          subtitle: "God's Timing",
          icon: "🛴",
          memory: "Then God provided you on the street. No communication… and suddenly you waved at me while I was on an e-scooter. That night, I couldn't stop thinking about you.",
          questions: [
            { q: "Where did I see you again unexpectedly?", choices: ["In class", "At the gym", "On the street", "At Cups"], answer: 2 },
            { q: "Who was on the e-scooter?", choices: ["You", "Me", "Both of us", "Neither"], answer: 1 },
            { q: "What did you do that hit me right in the heart?", choices: ["Ignored me", "Waved", "Shouted", "Laughed"], answer: 1 }
          ],
          successNote: "I took it as a sign. And I still do.",
          failNote: "One more try — this wave is the bridge to Chapter 2."
        }
      ]
    },
    {
      id: "chapter2",
      number: "Chapter 2",
      title: "The Official Start & The Test",
      subtitle: "Love, Distance & Growth",
      intro: "We talked again. We chose us again. March 14 became the official start. Love made me faster, distance made it harder, and faith pulled me deeper.",
      nodes: [
        {
          id: "node7",
          title: "Back to Talking",
          subtitle: "Choosing Us Again",
          icon: "💬",
          memory: "After the scooter wave, we started talking again. Not just small talk — real talk. And we decided to continue.",
          questions: [
            { q: "What happened after the scooter wave?", choices: ["We stopped forever", "We talked again", "We moved cities", "We argued immediately"], answer: 1 },
            { q: "What kind of talking was it?", choices: ["Just casual", "Real and a lot", "Only texting once", "Mostly silence"], answer: 1 }
          ],
          successNote: "Some things don't end. They restart stronger.",
          failNote: "Try again. This was the comeback."
        },
        {
          id: "node8",
          title: "March 14",
          subtitle: "The Official Start",
          icon: "📅",
          memory: "March 14 is the official start of our relationship. Maybe our story began earlier… but this is the day we made it real.",
          questions: [
            { q: "What date became the official start of our relationship?", choices: ["February 14", "March 14", "April 14", "January 14"], answer: 1 },
            { q: "What makes this date special in the story?", choices: ["First time we met", "Official start of dating", "First long-distance call", "First fight"], answer: 1 }
          ],
          successNote: "That's where the chapter title changes: from 'maybe' to 'we are.'",
          failNote: "No stress — love stories don't need perfect memory, just a real heart."
        },
        {
          id: "node9",
          title: "Track Season",
          subtitle: "Love Made Me Faster",
          icon: "🏃‍♂️",
          memory: "During track season I was in the shape of my life. Being in love made me hungry. I went to the track to be the best for you. I ran PRs and broke school records because I wanted to prove I could be somebody for you.",
          questions: [
            { q: "How did love affect my training?", choices: ["I stopped training", "I felt more motivated", "I trained less", "I didn't care"], answer: 1 },
            { q: "What happened during that season?", choices: ["I got slower", "I ran PRs and broke school records", "I quit track", "Nothing changed"], answer: 1 }
          ],
          successNote: "Love is a crazy fuel. I ran like I had a reason.",
          failNote: "Replay it. This is the 'PR chapter.'"
        },
        {
          id: "node10",
          title: "Coffee Dates",
          subtitle: "The Good Season",
          icon: "☕",
          memory: "Things felt good. We went to coffee shops, did small everyday things, and it felt like peace. It was summer and everything was really good.",
          questions: [
            { q: "What were our simple, happy activities in this part?", choices: ["Nightclubs", "Coffee shops", "Road trips every weekend", "Concert tours"], answer: 1 },
            { q: "What season was it around then?", choices: ["Winter", "Spring", "Summer", "Fall"], answer: 2 }
          ],
          successNote: "Sometimes the magic is just… normal days with you.",
          failNote: "Try again — this node is the 'soft life' part."
        },
        {
          id: "node11",
          title: "Long Distance",
          subtitle: "Germany & The Hard Truth",
          icon: "✈️",
          memory: "Then long distance came. I traveled back to Germany. Things got rocky because I lied about my previous relationships. You found out, and it broke things down. I felt terrible. But it forced me to look inside and learn what honesty really means.",
          questions: [
            { q: "What big change happened around summer?", choices: ["We moved in together", "We had to do long distance", "We stopped talking again", "We got engaged"], answer: 1 },
            { q: "Where did I travel to?", choices: ["Peru", "Germany", "Canada", "Florida"], answer: 1 },
            { q: "What was the core lesson from the hard part?", choices: ["Hide more", "Honesty matters", "Avoid talking", "Give up quickly"], answer: 1 }
          ],
          successNote: "That was the painful chapter, but it shaped me.",
          failNote: "This one is heavy. Take a breath and try again."
        },
        {
          id: "node12",
          title: "Baptism & A New Start",
          subtitle: "Faith + Lafayette",
          icon: "🙏",
          memory: "After I came back from Germany, I got a job in Lafayette. I decided to get baptized and put my faith in God, because it felt like my life was changing and I wanted to become a better man.",
          questions: [
            { q: "What did I decide after coming back from Germany?", choices: ["Quit everything", "Get baptized", "Move to another country again", "Start ignoring faith"], answer: 1 },
            { q: "Where was my new job?", choices: ["Chicago", "Lafayette", "New York", "Dallas"], answer: 1 }
          ],
          successNote: "Not perfect. Just real growth. And a new start.",
          failNote: "Try again. This is the 'becoming' node."
        }
      ]
    },
    {
      id: "chapter3",
      number: "Chapter 3",
      title: "Coming Soon",
      subtitle: "The Next Chapter",
      intro: "Chapter 3 of our 2025 journey...",
      locked: true,
      nodes: []
    },
    {
      id: "chapter4",
      number: "Chapter 4",
      title: "Coming Soon",
      subtitle: "The Final Chapter",
      intro: "Chapter 4 of our 2025 journey...",
      locked: true,
      nodes: []
    }
  ],
  finalMessage: `Corley,

I love you — genuinely.
And I'm grateful I get to do life with you.

Happy Valentine's Day ❤️`,
  // List your photos here (must exist in /photos)
  photos: [
    { src: "photos/IMG_2748.jpg", caption: "Us. Just us. (And probably thinking about food.)" },
    { src: "photos/IMG_2760.jpg", caption: "POV: You, 5 minutes before asking 'Are you gonna eat that?'" },
    { src: "photos/IMG_2786.jpg", caption: "The face of someone who just stole my hoodie. Again." },
    { src: "photos/IMG_2793.jpg", caption: "Sleeping beauty (drool included? maybe)." },
    { src: "photos/IMG_2860.jpg", caption: "I love this one. Even if you were hangry." },
    { src: "photos/IMG_2882.jpg", caption: "Evidence: You claiming you weren't tired." },
    { src: "photos/IMG_2937.jpg", caption: "My favorite view (right next to me)." },
    { src: "photos/IMG_2956.jpg", caption: "❤️ (You, plotting your next snack heist)." },
    { src: "photos/IMG_2961.jpg", caption: "Caught in the act: Stealing my stuff." },
    { src: "photos/IMG_4777.jpg", caption: "Morning mood: Coffee first, Oliver second." },
    { src: "photos/IMG_4803.jpg", caption: "A rare photo of you NOT eating." },
    { src: "photos/IMG_4870.jpg", caption: "Sunset... and thinking about dinner." },
    { src: "photos/IMG_5088.jpg", caption: "You: 'I'm not sleepy.' Also you: 😴" },
    { src: "photos/IMG_5150.jpg", caption: "Professional hoodie thief at work." },
    { src: "photos/IMG_5171.jpg", caption: "Best travel buddy (mostly because you sleep on the plane)." },
    { src: "photos/IMG_5172.jpg", caption: "Flashback to when you realized my food is your food." },
    { src: "photos/IMG_5754.jpg", caption: "Another stolen hoodie? Really?" },
    { src: "photos/IMG_5774.jpg", caption: "Dreaming about fries." },
    { src: "photos/IMG_6320.jpg", caption: "The 'I'm innocent' face (after eating my leftovers)." },
    { src: "photos/IMG_6811.jpg", caption: "Just waking up and already perfect." },
    { src: "photos/IMG_6888.jpg", caption: "Safe place. Right here." },
    { src: "photos/IMG_8280.jpg", caption: "Adventure mode (snack breaks mandatory)." },
    { src: "photos/IMG_8438.jpg", caption: "You look cute when you're judging my driving." },
    { src: "photos/IMG_8453.jpg", caption: "Stolen heart. Stolen sweater. Stolen fries." },
    { src: "photos/IMG_8514.jpg", caption: "My favorite person to do nothing with." },
    { src: "photos/IMG_8572.jpg", caption: "Always." },
    { src: "photos/20250924_200631.jpg", caption: "September moments." },
    { src: "photos/20250926_111746.jpg", caption: "Morning light." },
    { src: "photos/20250926_185831.jpg", caption: "Golden hour." },
    { src: "photos/1495508955154340015.jpeg", caption: "Throwback." }
  ]
};
// =========================

/* ================================================
 *  Preferences
 * ================================================ */
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const PANEL_ORDER = ["cover", "intro", "chapters", "gallery", "final"];
const cacheBust = "?v=7";

/* ================================================
 *  DOM References
 * ================================================ */
const panels    = Array.from(document.querySelectorAll(".panel"));
const lightbox  = document.getElementById("lightbox");
const lbImg     = document.getElementById("lbImg");
const lbCaption = document.getElementById("lbCaption");
const revealBtn = document.getElementById("revealBtn");
const revealBox = document.getElementById("revealBox");

/* ================================================
 *  Theme
 * ================================================ */
const themeToggle = document.getElementById("themeToggle");
const savedTheme  = localStorage.getItem("lbTheme") || "romantic";

if (savedTheme === "minimal") {
  document.documentElement.setAttribute("data-theme", "minimal");
  themeToggle.textContent = "\u2665";              // ♥
  themeToggle.setAttribute("aria-label", "Switch to romantic theme");
}

themeToggle.addEventListener("click", () => {
  const isMinimal = document.documentElement.getAttribute("data-theme") === "minimal";
  if (isMinimal) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("lbTheme", "romantic");
    themeToggle.textContent = "\uD83C\uDF19";      // 🌙
    themeToggle.setAttribute("aria-label", "Switch to minimal theme");
  } else {
    document.documentElement.setAttribute("data-theme", "minimal");
    localStorage.setItem("lbTheme", "minimal");
    themeToggle.textContent = "\u2665";             // ♥
    themeToggle.setAttribute("aria-label", "Switch to romantic theme");
  }
});

/* ================================================
 *  Panel Transitions
 * ================================================ */
let transitioning = false;

function showPanel(id) {
  const next = document.getElementById(id);
  if (!next) return;
  const current = document.querySelector(".panel.active");
  if (current === next || transitioning) return;

  transitioning = true;
  updateNavHighlight(id);
  
  // Stop slideshows when leaving chapters panel
  if (current && current.id === "chapters" && id !== "chapters") {
    stopFloatingSlideshows();
  }

  if (current) {
    let cleaned = false;
    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      current.classList.remove("active", "panel-visible", "panel-exit");
      enterPanel(next);
    };
    current.classList.remove("panel-visible");
    current.classList.add("panel-exit");
    current.addEventListener("transitionend", cleanup, { once: true });
    setTimeout(cleanup, 340);
  } else {
    enterPanel(next);
  }
}

function enterPanel(el) {
  panels.forEach(p => {
    if (p !== el) p.classList.remove("active", "panel-visible", "panel-exit");
  });
  el.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.classList.add("panel-visible");
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        transitioning = false;
      };
      el.addEventListener("transitionend", finish, { once: true });
      setTimeout(finish, 540);
    });
  });
}

/* ================================================
 *  Navigation (click delegation)
 * ================================================ */
document.addEventListener("click", (e) => {
  const next = e.target.closest("[data-next]");
  const prev = e.target.closest("[data-prev]");
  const go   = e.target.closest("[data-go]");

  if (next) {
    const id = next.getAttribute("data-next");
    showPanel(id);
    // Hearts when opening the book
    if (id === "intro") {
      const r = next.getBoundingClientRect();
      emitParticles(r.left + r.width / 2, r.top, 8, "heart");
    }
  }
  if (prev) showPanel(prev.getAttribute("data-prev"));
  if (go)   showPanel(go.getAttribute("data-go"));
});

function updateNavHighlight(id) {
  document.querySelectorAll(".navBtn[data-go]").forEach(btn => {
    btn.classList.toggle("navActive", btn.getAttribute("data-go") === id);
  });
}

/* ================================================
 *  Content Population
 * ================================================ */
console.log("Populating content...", CONTENT);
document.getElementById("introLetter").textContent  = CONTENT.introLetter;

/* ================================================
 *  Love Map Game — 4 Chapter System
 * ================================================ */
const gameMapEl       = document.getElementById("gameMap");
const gameQuestionEl  = document.getElementById("gameQuestion");
const gameResultEl    = document.getElementById("gameResult");
const chaptersListEl  = document.getElementById("chaptersList");
const activeChapterTitleEl = document.getElementById("activeChapterTitle");
const floatingSlideshowsEl = document.getElementById("floatingSlideshows");
const slideshowsContainer = document.getElementById("slideshowsContainer");

let activeChapterId = null;
let completedChapters = JSON.parse(localStorage.getItem("lbCompletedChapters") || "[]");
let currentNodeIndex = 0;
let nodeStates = [];
let showingMemory = true;
let activeSlideshows = [];
let slideshowInterval = null;

function initGame() {
  console.log("Initializing game...");
  console.log("DOM elements:", {
    chaptersListEl: !!chaptersListEl,
    gameMapEl: !!gameMapEl,
    gameQuestionEl: !!gameQuestionEl,
    gameResultEl: !!gameResultEl
  });
  
  if (!chaptersListEl) {
    console.error("chaptersListEl not found");
    return;
  }
  
  renderChapterCards();
  
  // Auto-select first chapter or first incomplete
  if (!activeChapterId) {
    const firstIncomplete = CONTENT.gameChapters.find(ch => !completedChapters.includes(ch.id) && !ch.locked);
    console.log("First incomplete chapter:", firstIncomplete);
    if (firstIncomplete) {
      loadChapter(firstIncomplete.id);
    }
  }
}

/** Render chapter selection cards on the left */
function renderChapterCards() {
  if (!chaptersListEl) return;
  
  chaptersListEl.innerHTML = "";
  CONTENT.gameChapters.forEach((chapter, idx) => {
    const isCompleted = completedChapters.includes(chapter.id);
    const isActive = activeChapterId === chapter.id;
    const isLocked = chapter.locked || (idx > 0 && !completedChapters.includes(CONTENT.gameChapters[idx - 1].id));
    
    const card = document.createElement("div");
    card.className = "chapterCard";
    if (isActive) card.classList.add("active");
    if (isCompleted) card.classList.add("completed");
    if (isLocked) card.classList.add("locked");
    
    const nodeCount = chapter.nodes ? chapter.nodes.length : 0;
    const progressText = isCompleted ? "✓ Completed" : (isLocked ? "Locked" : `${nodeCount} stops`);
    
    card.innerHTML = `
      <div class="chapterNumber">${escapeHtml(chapter.number)}</div>
      <h4 class="chapterTitle">${escapeHtml(chapter.title)}</h4>
      <p class="chapterProgress">${progressText}</p>
      <div class="chapterCheckmark">✨</div>
    `;
    
    if (!isLocked) {
      card.addEventListener("click", () => loadChapter(chapter.id));
    }
    
    chaptersListEl.appendChild(card);
  });
}

/** Load a specific chapter */
function loadChapter(chapterId) {
  console.log("Loading chapter:", chapterId);
  const chapter = CONTENT.gameChapters.find(ch => ch.id === chapterId);
  if (!chapter || chapter.locked) {
    console.error("Chapter not found or locked:", chapterId);
    return;
  }
  
  activeChapterId = chapterId;
  const nodes = chapter.nodes || [];
  console.log("Chapter nodes:", nodes.length);
  currentNodeIndex = 0;
  nodeStates = nodes.map(() => ({ completed: false, score: 0, total: 0 }));
  showingMemory = true;
  
  if (gameResultEl) {
    gameResultEl.innerHTML = "";
    gameResultEl.classList.remove("show");
  }
  
  if (activeChapterTitleEl) {
    activeChapterTitleEl.textContent = `${chapter.number} — ${chapter.title}`;
  }
  
  renderChapterCards();
  
  // Start floating slideshows
  startFloatingSlideshows();
  
  if (nodes.length > 0) {
    console.log("Rendering map and showing intro for node 0");
    renderGameMap();
    showNodeIntro();
  } else {
    console.log("No nodes in chapter, showing coming soon");
    if (gameQuestionEl) {
      gameQuestionEl.innerHTML = `<div class="memoryCard show"><p class="memoryText">Coming soon...</p></div>`;
    }
    if (gameMapEl) {
      gameMapEl.innerHTML = "";
    }
  }
}

/* ================================================
 *  Floating Slideshows
 * ================================================ */
function startFloatingSlideshows() {
  // Clear existing slideshows
  stopFloatingSlideshows();
  
  if (!slideshowsContainer) return;
  
  // Create first slideshow after a short delay
  setTimeout(() => createMiniSlideshow(), 1000);
  
  // Create new small slideshows every 5-8 seconds
  slideshowInterval = setInterval(() => {
    if (activeSlideshows.length < 6) {
      createMiniSlideshow();
    }
  }, 5000 + Math.random() * 3000);
}

function stopFloatingSlideshows() {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
  }
  
  // Clear all intervals and remove elements
  activeSlideshows.forEach(s => {
    if (s.cycleInterval) clearInterval(s.cycleInterval);
    if (s.element && s.element.parentNode) {
      s.element.remove();
    }
  });
  activeSlideshows = [];
  
  if (slideshowsContainer) {
    slideshowsContainer.innerHTML = "";
  }
}

function createMiniSlideshow() {
  if (!slideshowsContainer || activeSlideshows.length >= 6) return;
  
  // Pick 3-4 random photos for this mini slideshow
  const photoCount = 3 + Math.floor(Math.random() * 2);
  const selectedPhotos = [];
  const usedIndices = new Set();
  
  while (selectedPhotos.length < photoCount && selectedPhotos.length < CONTENT.photos.length) {
    const idx = Math.floor(Math.random() * CONTENT.photos.length);
    if (!usedIndices.has(idx)) {
      usedIndices.add(idx);
      selectedPhotos.push(CONTENT.photos[idx]);
    }
  }
  
  if (selectedPhotos.length === 0) return;
  
  // Create slideshow element
  const slideshow = document.createElement("div");
  slideshow.className = "slideshow";
  
  // Random side (left or right)
  const fromLeft = Math.random() > 0.5;
  
  // Random vertical position (avoid overlapping too much)
  const usedPositions = activeSlideshows.map(s => {
    const top = parseInt(s.element.style.top) || 0;
    return top;
  });
  
  let topPosition;
  let attempts = 0;
  do {
    topPosition = 10 + Math.floor(Math.random() * 70); // 10% to 80% from top
    attempts++;
  } while (attempts < 10 && usedPositions.some(pos => Math.abs(pos - topPosition) < 15));
  
  slideshow.style.top = topPosition + "%";
  
  // Position based on side
  if (fromLeft) {
    slideshow.style.left = "12px";
    slideshow.style.animation = "slideInFromLeft 700ms cubic-bezier(.2,.8,.2,1) forwards";
  } else {
    slideshow.style.right = "12px";
    slideshow.style.animation = "slideInFromRight 700ms cubic-bezier(.2,.8,.2,1) forwards";
  }
  
  // Add first image
  const img = document.createElement("img");
  img.src = selectedPhotos[0].src + cacheBust;
  img.alt = selectedPhotos[0].caption || "Memory photo";
  slideshow.appendChild(img);
  
  // Add counter
  const counter = document.createElement("div");
  counter.className = "slideshowCounter";
  counter.textContent = `1/${selectedPhotos.length}`;
  slideshow.appendChild(counter);
  
  // Add caption
  const caption = document.createElement("div");
  caption.className = "slideshowCaption";
  caption.textContent = selectedPhotos[0].caption || "";
  slideshow.appendChild(caption);
  
  slideshowsContainer.appendChild(slideshow);
  
  // Cycle through photos slowly (every 4 seconds)
  let currentPhotoIdx = 0;
  const cycleInterval = setInterval(() => {
    currentPhotoIdx = (currentPhotoIdx + 1) % selectedPhotos.length;
    const photo = selectedPhotos[currentPhotoIdx];
    
    // Gentle fade transition
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = photo.src + cacheBust;
      caption.textContent = photo.caption || "";
      counter.textContent = `${currentPhotoIdx + 1}/${selectedPhotos.length}`;
      setTimeout(() => {
        img.style.opacity = "1";
      }, 100);
    }, 350);
  }, 4000);
  
  // Click to open in lightbox
  slideshow.addEventListener("click", () => {
    const photoIdx = CONTENT.photos.findIndex(p => p.src === selectedPhotos[currentPhotoIdx].src);
    if (photoIdx !== -1) {
      openLightbox(photoIdx);
    }
  });
  
  // Store reference
  const slideshowData = {
    element: slideshow,
    photos: selectedPhotos,
    cycleInterval: cycleInterval
  };
  activeSlideshows.push(slideshowData);
  
  // Remove after 12-18 seconds with slide-out animation
  const lifetime = 12000 + Math.random() * 6000;
  setTimeout(() => {
    // Slide out to the same side it came from
    if (fromLeft) {
      slideshow.style.animation = "slideOutToLeft 600ms cubic-bezier(.2,.8,.2,1) forwards";
    } else {
      slideshow.style.animation = "slideOutToRight 600ms cubic-bezier(.2,.8,.2,1) forwards";
    }
    
    setTimeout(() => {
      clearInterval(cycleInterval);
      slideshow.remove();
      
      // Remove from active list
      const idx = activeSlideshows.findIndex(s => s.element === slideshow);
      if (idx !== -1) activeSlideshows.splice(idx, 1);
    }, 600);
  }, lifetime);
}

/** Build the SVG path with story nodes - Horizontal Flow */
function renderGameMap() {
  if (!gameMapEl || !activeChapterId) return;
  const chapter = CONTENT.gameChapters.find(ch => ch.id === activeChapterId);
  if (!chapter) return;
  const nodes = chapter.nodes || [];
  
  // Calculate horizontal spacing - fit all nodes + finish in view
  const totalNodes = nodes.length + 1; // +1 for finish
  const nodeRadius = 22;
  const viewWidth = 100 * totalNodes; // Dynamic width based on node count
  const viewHeight = 260;
  const nodeSpacing = viewWidth / (totalNodes + 1);
  
  let svg = `<svg class="mapSvg" viewBox="0 0 ${viewWidth} ${viewHeight}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">`;
  
  // Create flowing path
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const state = nodeStates[i];
    
    // Horizontal position
    const cx = nodeSpacing * (i + 1);
    
    // Vertical wave pattern - creates a gentle flowing curve
    const wave = Math.sin(i * 0.8) * 35;
    const cy = viewHeight / 2 + wave;
    
    // Line to next node with curve
    if (i < nodes.length - 1) {
      const nextWave = Math.sin((i + 1) * 0.8) * 35;
      const nx = nodeSpacing * (i + 2);
      const ny = viewHeight / 2 + nextWave;
      
      // Curved path
      const midX = (cx + nx) / 2;
      const midY = (cy + ny) / 2;
      const controlY = midY + (Math.random() > 0.5 ? 15 : -15);
      
      svg += `<path class="mapLine${state.completed ? " mapLineDone" : ""}" d="M ${cx} ${cy} Q ${midX} ${controlY} ${nx} ${ny}" fill="none" />`;
    }
    
    // Node circle
    let cls = "mapNode";
    if (state.completed) cls += " mapNodeDone";
    if (i === currentNodeIndex) cls += " mapNodeActive";
    if (i > currentNodeIndex) cls += " mapNodeLocked";
    
    svg += `<circle class="${cls}" cx="${cx}" cy="${cy}" r="${nodeRadius}" data-node-idx="${i}" />`;
    
    // Icon or checkmark
    const label = state.completed ? "✓" : node.icon;
    svg += `<text class="mapLabel" x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central">${label}</text>`;
  }
  
  // Finish flag
  const lastIdx = nodes.length - 1;
  const lastWave = Math.sin(lastIdx * 0.8) * 35;
  const lastCx = nodeSpacing * (lastIdx + 1);
  const lastCy = viewHeight / 2 + lastWave;
  
  const finWave = Math.sin((lastIdx + 1) * 0.8) * 35;
  const finCx = nodeSpacing * (nodes.length + 1);
  const finCy = viewHeight / 2 + finWave;
  
  const allDone = nodeStates.every(s => s.completed);
  
  // Curved line to finish
  const finMidX = (lastCx + finCx) / 2;
  const finMidY = (lastCy + finCy) / 2;
  svg += `<path class="mapLine${allDone ? " mapLineDone" : ""}" d="M ${lastCx} ${lastCy} Q ${finMidX} ${finMidY + 15} ${finCx} ${finCy}" fill="none" />`;
  
  svg += `<circle class="mapNode mapNodeFinish${allDone ? " mapNodeDone" : ""}" cx="${finCx}" cy="${finCy}" r="${nodeRadius}" />`;
  svg += `<text class="mapLabel" x="${finCx}" y="${finCy}" text-anchor="middle" dominant-baseline="central">🏁</text>`;
  
  svg += `</svg>`;
  gameMapEl.innerHTML = svg;
}

/** Show memory card intro for current node */
function showNodeIntro() {
  if (!gameQuestionEl || !activeChapterId) return;
  const chapter = CONTENT.gameChapters.find(ch => ch.id === activeChapterId);
  if (!chapter) return;
  const node = chapter.nodes[currentNodeIndex];
  if (!node) return;

  showingMemory = true;
  let html = "";
  
  // Show chapter break if this node starts a new chapter
  if (node.chapterBreak && node.chapterTitle) {
    html += `
      <div class="chapterDivider">
        <div class="chapterDividerLine"></div>
        <h3 class="chapterDividerTitle">${escapeHtml(node.chapterTitle)}</h3>
        <div class="chapterDividerLine"></div>
      </div>
    `;
  }
  
  // Special overlay for "The Break" node (node 5, index 4)
  if (currentNodeIndex === 4 && node.title === "The Break") {
    html += `<div class="bigSadFace" id="bigSadFace">😢</div>`;
  }
  
  html += `
    <div class="memoryCard">
      <div class="memoryIcon">${node.icon}</div>
      <h3 class="memoryTitle">${escapeHtml(node.title)}</h3>
      <p class="memorySubtitle">${escapeHtml(node.subtitle)}</p>
      <p class="memoryText">${escapeHtml(node.memory)}</p>
      <button type="button" class="primary memoryStartBtn" onclick="window.gameStartQuiz()">Start Questions</button>
    </div>
  `;
  gameQuestionEl.innerHTML = html;
  console.log("Memory card rendered with inline onclick");
  requestAnimationFrame(() => {
    const card = gameQuestionEl.querySelector(".memoryCard");
    const divider = gameQuestionEl.querySelector(".chapterDivider");
    const sadFace = gameQuestionEl.querySelector(".bigSadFace");
    
    console.log("Elements found:", { card: !!card });
    
    if (divider) divider.classList.add("show");
    if (card) card.classList.add("show");
    if (sadFace) {
      setTimeout(() => sadFace.classList.add("show"), 200);
    }
  });
}

/** Start quiz for current node */
window.gameStartQuiz = function startNodeQuiz() {
  console.log("Starting quiz for node", currentNodeIndex);
  if (!activeChapterId) {
    console.error("No active chapter");
    return;
  }
  showingMemory = false;
  nodeStates[currentNodeIndex].currentQ = 0;
  nodeStates[currentNodeIndex].score = 0;
  nodeStates[currentNodeIndex].answers = [];
  renderNodeQuestion();
};

/** Render current question */
function renderNodeQuestion() {
  if (!gameQuestionEl || !activeChapterId) return;
  const chapter = CONTENT.gameChapters.find(ch => ch.id === activeChapterId);
  if (!chapter) return;
  const node = chapter.nodes[currentNodeIndex];
  if (!node) return;
  const state = nodeStates[currentNodeIndex];
  const qIdx = state.currentQ || 0;
  
  if (qIdx >= node.questions.length) {
    showNodeResult();
    return;
  }

  const question = node.questions[qIdx];
  state.total = node.questions.length;

  let html = `
    <div class="quizCard">
      <div class="quizProgress">Question ${qIdx + 1} / ${node.questions.length}</div>
      <p class="quizQ">${escapeHtml(question.q)}</p>
      <div class="quizChoices">
  `;
  question.choices.forEach((choice, idx) => {
    html += `<button class="quizChoice" data-q-choice="${idx}">${escapeHtml(choice)}</button>`;
  });
  html += `</div></div>`;
  gameQuestionEl.innerHTML = html;

  requestAnimationFrame(() => {
    const card = gameQuestionEl.querySelector(".quizCard");
    if (card) card.classList.add("show");
  });
}

/** Handle question answer */
function handleQuizAnswer(choiceIdx) {
  if (!activeChapterId) return;
  const chapter = CONTENT.gameChapters.find(ch => ch.id === activeChapterId);
  if (!chapter) return;
  const node = chapter.nodes[currentNodeIndex];
  const state = nodeStates[currentNodeIndex];
  const qIdx = state.currentQ || 0;
  const question = node.questions[qIdx];

  if (choiceIdx < 0 || choiceIdx >= question.choices.length) return;

  const correct = choiceIdx === question.answer;
  state.answers.push({ q: qIdx, choice: choiceIdx, correct });
  if (correct) state.score++;

  // Visual feedback
  const btns = gameQuestionEl.querySelectorAll(".quizChoice");
  if (btns[choiceIdx]) {
    btns[choiceIdx].classList.add(correct ? "correct" : "wrong");
    if (correct) {
      const r = btns[choiceIdx].getBoundingClientRect();
      emitParticles(r.left + r.width / 2, r.top, 4, "heart");
    }
  }

  setTimeout(() => {
    state.currentQ = qIdx + 1;
    renderNodeQuestion();
  }, 800);
}

/** Show node completion result */
function showNodeResult() {
  if (!activeChapterId) return;
  const chapter = CONTENT.gameChapters.find(ch => ch.id === activeChapterId);
  if (!chapter) return;
  const node = chapter.nodes[currentNodeIndex];
  if (!node) return;
  const state = nodeStates[currentNodeIndex];
  const passThreshold = Math.ceil(state.total * 0.66);  // Need 2/3
  const passed = state.score >= passThreshold;

  state.completed = passed;

  let html = `
    <div class="nodeResult">
      <div class="nodeResultIcon">${passed ? "✨" : "💭"}</div>
      <h3>${passed ? "Memory Unlocked!" : "Not quite..."}</h3>
      <p class="nodeResultScore">You got ${state.score} out of ${state.total} correct.</p>
      <p class="nodeResultMsg">${escapeHtml(passed ? node.successNote : node.failNote)}</p>
      <div class="nodeResultActions">
  `;
  if (passed) {
    if (currentNodeIndex < chapter.nodes.length - 1) {
      html += `<button class="primary" id="nodeNextBtn">Next Stop →</button>`;
    } else {
      html += `<button class="primary" id="nodeFinishBtn">Complete Chapter 🏁</button>`;
    }
  } else {
    html += `<button class="primary" id="nodeRetryBtn">Try Again</button>`;
  }
  html += `</div></div>`;

  gameQuestionEl.innerHTML = html;
  renderGameMap();

  requestAnimationFrame(() => {
    const card = gameQuestionEl.querySelector(".nodeResult");
    if (card) card.classList.add("show");
  });

  if (passed) popConfetti(12);
}

/** Move to next node */
function nextNode() {
  currentNodeIndex++;
  showingMemory = true;
  renderGameMap();
  showNodeIntro();
}

/** Show chapter complete with star explosion */
function showChapterComplete() {
  if (!activeChapterId) return;
  const chapter = CONTENT.gameChapters.find(ch => ch.id === activeChapterId);
  if (!chapter) return;
  
  // Mark chapter as completed
  if (!completedChapters.includes(activeChapterId)) {
    completedChapters.push(activeChapterId);
    localStorage.setItem("lbCompletedChapters", JSON.stringify(completedChapters));
  }
  
  // Star explosion animation
  triggerStarExplosion();
  
  gameQuestionEl.innerHTML = "";
  gameResultEl.innerHTML = `
    <div class="chapterComplete">
      <h2>✨ ${escapeHtml(chapter.number)} Complete!</h2>
      <p class="chapterMsg">${escapeHtml(chapter.title)} — Journey complete.</p>
      <button class="ghost" id="chapterBackBtn">← Back to Chapters</button>
    </div>
  `;
  gameResultEl.classList.add("show");
  
  // Update chapter cards
  renderChapterCards();
}

/** Trigger star explosion with pink hearts */
function triggerStarExplosion() {
  // Create overlay
  let overlay = document.getElementById("starExplosionOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "starExplosionOverlay";
    overlay.className = "starExplosion";
    document.body.appendChild(overlay);
  }
  
  overlay.classList.add("active");
  
  // Burst of pink hearts
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        emitParticles(
          window.innerWidth / 2 + (Math.random() - 0.5) * 200,
          window.innerHeight / 2 + (Math.random() - 0.5) * 200,
          3,
          "heart"
        );
      }, i * 40);
    }
  }, 200);
  
  popConfetti(35);
  
  // Remove overlay
  setTimeout(() => {
    overlay.classList.remove("active");
  }, 1200);
}

// Click delegation
document.addEventListener("click", (e) => {
  console.log("Click detected on:", e.target);
  
  if (e.target.closest("[data-q-choice]")) {
    const idx = parseInt(e.target.closest("[data-q-choice]").getAttribute("data-q-choice"), 10);
    if (!isNaN(idx)) handleQuizAnswer(idx);
  } else if (e.target.closest("#nodeNextBtn")) {
    nextNode();
  } else if (e.target.closest("#nodeRetryBtn")) {
    showNodeIntro();
  } else if (e.target.closest("#nodeFinishBtn")) {
    showChapterComplete();
  } else if (e.target.closest("#chapterBackBtn")) {
    stopFloatingSlideshows();
    activeChapterId = null;
    gameResultEl.classList.remove("show");
    if (activeChapterTitleEl) activeChapterTitleEl.textContent = "Select a chapter to begin";
    if (gameMapEl) gameMapEl.innerHTML = "";
    if (gameQuestionEl) gameQuestionEl.innerHTML = "";
    renderChapterCards();
  } else if (e.target.closest("circle[data-node-idx]")) {
    const idx = parseInt(e.target.closest("circle[data-node-idx]").getAttribute("data-node-idx"), 10);
    if (!isNaN(idx) && idx <= currentNodeIndex) {
      currentNodeIndex = idx;
      showingMemory = true;
      renderGameMap();
      showNodeIntro();
    }
  }
});

// Initialize
initGame();

/* ================================================
 *  Gallery
 * ================================================ */
const photoGrid = document.getElementById("photoGrid");
console.log("Gallery: Loading", CONTENT.photos.length, "photos");
CONTENT.photos.forEach((p, idx) => {
  const div = document.createElement("div");
  div.className = "photo";
  div.setAttribute("role", "button");
  div.setAttribute("tabindex", "0");
  div.setAttribute("aria-label", p.caption || "Photo " + (idx + 1));
  
  const img = document.createElement("img");
  img.src = p.src + cacheBust;
  img.alt = escapeHtml(p.caption || "Photo " + (idx + 1));
  img.loading = "lazy";
  
  // Fade in when loaded
  img.addEventListener("load", () => {
    img.classList.add("loaded");
  });
  
  // Handle error
  img.addEventListener("error", () => {
    img.classList.add("loaded");
    div.style.opacity = "0.5";
  });
  
  div.appendChild(img);
  div.addEventListener("click", () => openLightbox(idx));
  div.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(idx); }
  });
  photoGrid.appendChild(div);
});

/* ================================================
 *  Final Reveal
 * ================================================ */
document.getElementById("finalMessage").textContent = CONTENT.finalMessage;

revealBtn.addEventListener("click", () => {
  revealBox.classList.add("show");
  revealBox.setAttribute("aria-hidden", "false");
  popConfetti(28);
  emitParticles(window.innerWidth / 2, window.innerHeight / 2, 10, "heart");
});

/* ================================================
 *  Restart
 * ================================================ */
document.getElementById("restartBtn").addEventListener("click", () => {
  revealBox.classList.remove("show");
  revealBox.setAttribute("aria-hidden", "true");
  stopFloatingSlideshows();
  initGame();
  showPanel("cover");
});

/* ================================================
 *  Confetti Button
 * ================================================ */
document.getElementById("confettiBtn").addEventListener("click", () => popConfetti(24));

/* ================================================
 *  Lightbox
 * ================================================ */
let currentIndex = 0;

function openLightbox(idx) {
  currentIndex = idx;
  renderLightbox();
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
  document.getElementById("lbClose").focus();
}

function closeLightbox() {
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
}

function renderLightbox() {
  const p = CONTENT.photos[currentIndex];
  lbImg.src = p.src + "?v=7";
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
  if (e.target === lightbox) closeLightbox();
});

/* ================================================
 *  Particle System (Canvas)
 *
 *  Renders hearts and confetti on a viewport-sized
 *  canvas. The rAF loop auto-stops when no particles
 *  remain to avoid idle CPU cost.
 * ================================================ */
const canvas = document.getElementById("particleCanvas");
const ctx    = canvas ? canvas.getContext("2d") : null;
let particles = [];
let rafId     = null;

function resizeCanvas() {
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.width  = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width  = w + "px";
  canvas.style.height = h + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

/** @constructor */
function Particle(x, y, type) {
  this.x    = x;
  this.y    = y;
  this.type = type;
  this.life = 1;
  this.size = type === "heart" ? 8 + Math.random() * 6 : (type === "thumbsdown" ? 12 + Math.random() * 8 : 4 + Math.random() * 4);
  this.decay = type === "heart"
    ? 0.007 + Math.random() * 0.005
    : (type === "thumbsdown" ? 0.006 + Math.random() * 0.004 : 0.009 + Math.random() * 0.007);
  this.vx = (Math.random() - 0.5) * (type === "heart" ? 1.4 : (type === "thumbsdown" ? 2 : 3.2));
  this.vy = type === "heart"
    ? -(1.8 + Math.random() * 2)
    : (type === "thumbsdown" ? 2.5 + Math.random() * 3 : 2.2 + Math.random() * 2.8);
  this.rotation = Math.random() * Math.PI * 2;
  this.rotSpeed = (Math.random() - 0.5) * (type === "thumbsdown" ? 0.12 : 0.08);
  this.gravity  = type === "heart" ? -0.008 : (type === "thumbsdown" ? 0.08 : 0.06);

  if (type === "confetti") {
    const isMin = document.documentElement.getAttribute("data-theme") === "minimal";
    var hues = isMin ? [40, 45, 50, 35, 55] : [330, 340, 350, 200, 210, 280];
    this.hue   = hues[Math.floor(Math.random() * hues.length)];
    this.sat   = 70 + Math.random() * 20;
    this.light = 60 + Math.random() * 18;
  }
}

Particle.prototype.update = function () {
  this.life -= this.decay;
  this.vy   += this.gravity;
  this.x    += this.vx;
  this.y    += this.vy;
  this.rotation += this.rotSpeed;
  if (this.type === "heart") this.x += Math.sin(this.y * 0.015) * 0.25;
};

Particle.prototype.draw = function (c) {
  c.save();
  c.globalAlpha = Math.max(0, this.life);
  c.translate(this.x, this.y);
  c.rotate(this.rotation);

  if (this.type === "heart") {
    var isMin = document.documentElement.getAttribute("data-theme") === "minimal";
    c.fillStyle = isMin
      ? "rgba(212,175,55,"  + (0.82 * this.life) + ")"
      : "rgba(255,105,150," + (0.82 * this.life) + ")";
    var s = this.size * 0.055;
    c.beginPath();
    for (var t = 0; t <= 6.3; t += 0.1) {
      var hx = s * 16 * Math.pow(Math.sin(t), 3);
      var hy = -s * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      t === 0 ? c.moveTo(hx, hy) : c.lineTo(hx, hy);
    }
    c.closePath();
    c.fill();
  } else if (this.type === "thumbsdown") {
    c.font = this.size + "px Arial";
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText("👎", 0, 0);
  } else {
    c.fillStyle = "hsla(" + this.hue + "," + this.sat + "%," + this.light + "%," + (0.85 * this.life) + ")";
    var sz = this.size;
    c.fillRect(-sz / 2, -sz * 0.6, sz, sz * 1.2);
  }
  c.restore();
};

function emitParticles(x, y, count, type) {
  if (prefersReduced || !ctx) return;
  for (var i = 0; i < count; i++) {
    var px = x + (Math.random() - 0.5) * 60;
    var py = y + (Math.random() - 0.5) * 30;
    particles.push(new Particle(px, py, type));
  }
  if (!rafId) tick();
}

function popConfetti(count) {
  if (prefersReduced || !ctx) return;
  for (var i = 0; i < count; i++) {
    particles.push(new Particle(
      Math.random() * window.innerWidth,
      -10 - Math.random() * 30,
      "confetti"
    ));
  }
  if (!rafId) tick();
}

function rainThumbsDown(count) {
  if (prefersReduced || !ctx) return;
  for (var i = 0; i < count; i++) {
    particles.push(new Particle(
      Math.random() * window.innerWidth,
      -10 - Math.random() * 50,
      "thumbsdown"
    ));
  }
  if (!rafId) tick();
}

function tick() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles = particles.filter(function (p) { return p.life > 0; });
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw(ctx);
  }
  if (particles.length) {
    rafId = requestAnimationFrame(tick);
  } else {
    rafId = null;
  }
}

/* ================================================
 *  Music
 *
 *  Recommendations for your song file (music/song.mp3):
 *  - Style: soft ambient piano + light pads, 60–75 BPM
 *  - Trim to a loop-friendly section; fade the last
 *    0.6s out and first 0.6s in within the file itself.
 *  - Default volume is 0.35 (gentle background level).
 *  - Autoplay is OFF. The user must click Play first
 *    (required by iOS / Safari policy).
 * ================================================ */
const audio = new Audio("music/song.mp3");
audio.loop    = true;
audio.volume  = parseFloat(localStorage.getItem("lbVolume") || "0.35");
audio.preload = "auto";

let isPlaying = false;
let isMuted   = false;

const musicToggle  = document.getElementById("musicToggle");
const volumeSlider = document.getElementById("volumeSlider");
const muteToggle   = document.getElementById("muteToggle");

volumeSlider.value = audio.volume;

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    musicToggle.textContent = "\u25B6";          // ▶
    musicToggle.setAttribute("aria-pressed", "false");
    musicToggle.setAttribute("aria-label", "Play music");
    musicToggle.classList.remove("btnActive");
  } else {
    audio.play().catch(() => {});                 // handle autoplay block gracefully
    isPlaying = true;
    musicToggle.textContent = "\u275A\u275A";    // ❚❚
    musicToggle.setAttribute("aria-pressed", "true");
    musicToggle.setAttribute("aria-label", "Pause music");
    musicToggle.classList.add("btnActive");
  }
});

volumeSlider.addEventListener("input", () => {
  const v = parseFloat(volumeSlider.value);
  audio.volume = v;
  localStorage.setItem("lbVolume", String(v));
  if (v === 0 && !isMuted) {
    isMuted = true;
    audio.muted = true;
    muteToggle.textContent = "\u2715";           // ✕
    muteToggle.setAttribute("aria-pressed", "true");
  } else if (v > 0 && isMuted) {
    isMuted = false;
    audio.muted = false;
    muteToggle.textContent = "\u266B";           // ♫
    muteToggle.setAttribute("aria-pressed", "false");
  }
});

muteToggle.addEventListener("click", () => {
  isMuted = !isMuted;
  audio.muted = isMuted;
  muteToggle.textContent = isMuted ? "\u2715" : "\u266B";
  muteToggle.setAttribute("aria-pressed", String(isMuted));
});

/* ================================================
 *  Keyboard Navigation
 * ================================================ */
document.addEventListener("keydown", (e) => {
  // Lightbox takes priority
  if (lightbox.classList.contains("show")) {
    if (e.key === "Escape")     closeLightbox();
    if (e.key === "ArrowLeft")  document.getElementById("lbPrev").click();
    if (e.key === "ArrowRight") document.getElementById("lbNext").click();
    return;
  }

  // ESC closes reveal box
  if (e.key === "Escape" && revealBox.classList.contains("show")) {
    revealBox.classList.remove("show");
    revealBox.setAttribute("aria-hidden", "true");
    return;
  }

  // Arrow keys navigate panels (skip when focused on an input)
  if (document.activeElement && document.activeElement.tagName === "INPUT") return;
  const current = document.querySelector(".panel.active");
  if (!current) return;
  const idx = PANEL_ORDER.indexOf(current.id);

  if (e.key === "ArrowRight" && idx < PANEL_ORDER.length - 1) {
    e.preventDefault();
    showPanel(PANEL_ORDER[idx + 1]);
  }
  if (e.key === "ArrowLeft" && idx > 0) {
    e.preventDefault();
    showPanel(PANEL_ORDER[idx - 1]);
  }
});

/* ================================================
 *  Helpers
 * ================================================ */
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
