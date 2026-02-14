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
      title: "Long Distance, Lafayette Dates, and Germany",
      subtitle: "Making It Work",
      intro: "I started my job in Lafayette. Long distance became real. It was hard, but we chose it anyway — and we built new memories: Lafayette dates, Alabama trips, Christmas, and Germany with my family.",
      nodes: [
        {
          id: "node13",
          title: "Lafayette Job (Choosing Long Distance)",
          subtitle: "Making It Work",
          icon: "💼",
          memory: "I started my job in Lafayette. Long distance was sad, but we did it anyway — it was the only way I could stay in America. And I still feel confident we can do it, even when it's hard.",
          questions: [
            { q: "Where did I start my job?", choices: ["Alabama", "Lafayette", "Germany", "New York"], answer: 1 },
            { q: "Why did we commit to long distance at this point?", choices: ["Because it was easy", "Because it was the only chance for me to stay in America", "Because we wanted a break", "Because we didn't care"], answer: 1 },
            { q: "Even when it's hard, what do I feel about us doing long distance?", choices: ["Hopeless", "Confident we can do it", "Indifferent", "Angry all the time"], answer: 1 }
          ],
          successNote: "Hard doesn't mean wrong. We chose us.",
          failNote: "Try again — this is the 'we didn't quit' node."
        },
        {
          id: "node14",
          title: "First Lafayette Visit (Our City Memories)",
          subtitle: "Our City",
          icon: "🏙️",
          memory: "You came up to Lafayette and we had our first date there. Cute dates, real laughs — and suddenly Lafayette felt warmer because you were in it.",
          questions: [
            { q: "What made Lafayette feel different for me?", choices: ["The weather", "The job", "Making memories there with you", "The food alone"], answer: 2 },
            { q: "What kind of dates did we have in Lafayette?", choices: ["Awkward dates", "Cute dates", "No dates", "Only business meetings"], answer: 1 },
            { q: "I learned to have better memories in Lafayette since I spent time with you. What matters most?", choices: ["The city itself", "You being there", "The restaurants", "The weather"], answer: 1 }
          ],
          successNote: "You didn't just visit a city — you changed it for me.",
          failNote: "Replay it. This is where Lafayette becomes 'ours.'"
        },
        {
          id: "node15",
          title: "7-Eleven Club (Celebrating Your Offer)",
          subtitle: "Your Win",
          icon: "🎉",
          memory: "We had our cute date at the 7-Eleven club — and we celebrated your job offer. It was funny, sweet, and so us.",
          questions: [
            { q: "Where was our cute little celebration date?", choices: ["Starbucks", "7-Eleven club", "A fancy rooftop", "The airport"], answer: 1 },
            { q: "What were we celebrating?", choices: ["My PR", "Your job offer", "A birthday", "Graduation"], answer: 1 },
            { q: "What was the vibe of that night?", choices: ["Boring", "Cute and funny", "Stressful", "Sad"], answer: 1 }
          ],
          successNote: "I love celebrating your wins like they're mine too.",
          failNote: "Try again — this one is too iconic to miss."
        },
        {
          id: "node16",
          title: "Black Dress Dinner (The Laughing Night)",
          subtitle: "That Dress",
          icon: "🖤",
          memory: "We had the cutest dinner. You wore a beautiful black dress that I loved — and I laughed so much that night.",
          questions: [
            { q: "What were you wearing at the cutest dinner?", choices: ["A red dress", "A black dress", "A hoodie", "A suit"], answer: 1 },
            { q: "What do I remember most about the night?", choices: ["Being bored", "Laughing a lot", "Falling asleep", "Arguing"], answer: 1 },
            { q: "Why is that dinner memorable?", choices: ["The food only", "Your beautiful black dress and laughter", "Nothing special", "I forgot"], answer: 1 }
          ],
          successNote: "That black dress lives rent-free in my head.",
          failNote: "Nope. The black dress was the main character."
        },
        {
          id: "node17",
          title: "Winery + Bruschetta (We Need That Again)",
          subtitle: "Wine & Food",
          icon: "🍷",
          memory: "We went to a winery, drank wine, and had bruschetta. It was so delicious — we need to do that again.",
          questions: [
            { q: "Where did we go for wine and snacks?", choices: ["A bowling alley", "A winery", "A library", "A stadium"], answer: 1 },
            { q: "What did we eat there?", choices: ["Sushi", "Bruschetta", "Tacos", "Pancakes"], answer: 1 },
            { q: "What do we need to do with this experience?", choices: ["Forget it", "Do it again", "Never repeat it", "Just remember it"], answer: 1 }
          ],
          successNote: "Wine + you + bruschetta = perfect math.",
          failNote: "Try again — the bruschetta is important."
        },
        {
          id: "node18",
          title: "Flights + Alabama (Making It Work)",
          subtitle: "Effort",
          icon: "✈️",
          memory: "We do long distance and try to fly back and forth. We go to Alabama to spend time together and keep choosing us even when travel is exhausting.",
          questions: [
            { q: "How do we try to make long distance work?", choices: ["Ignoring each other", "Flying back and forth", "Only texting once a week", "Never meeting"], answer: 1 },
            { q: "What's the core theme of this node?", choices: ["Convenience", "Effort", "Luck", "Being casual"], answer: 1 }
          ],
          successNote: "Distance is real. So is effort. So are we.",
          failNote: "Try again — this is the 'we show up' node."
        },
        {
          id: "node19",
          title: "Christmas Tree (Home Feeling)",
          subtitle: "Home Moments",
          icon: "🎄",
          memory: "Over Christmas we got the Christmas tree with your family. I got my first ornament ever — a Charizard Pokemon. Little home moments in the middle of all the distance.",
          questions: [
            { q: "What did we get over Christmas?", choices: ["A puppy", "A Christmas tree", "A new car", "A boat"], answer: 1 },
            { q: "What did that moment represent?", choices: ["Just decoration", "A little home feeling together", "A random purchase", "Nothing special"], answer: 1 },
            { q: "What makes this moment special?", choices: ["The tree itself", "Home feeling in the middle of distance", "The price", "Nothing"], answer: 1 }
          ],
          successNote: "Home isn't a place. It's you next to me.",
          failNote: "Try again — the tree is part of the timeline."
        },
        {
          id: "node20",
          title: "Germany Trip (Culture, Family, and Chaos)",
          subtitle: "My World",
          icon: "🇩🇪",
          memory: "We flew to Germany and you met my family and friends. You saw my culture and where I grew up. We had the most fun sledding, eating good food, meeting my parents — and yes, the hotel in the red light district was… an experience.",
          questions: [
            { q: "Where did we fly to together?", choices: ["Mexico", "Germany", "France", "Canada"], answer: 1 },
            { q: "What did you get to experience there?", choices: ["Only museums", "My culture and where I grew up", "Just work meetings", "Nothing new"], answer: 1 },
            { q: "Which of these happened on the Germany trip?", choices: ["Sledding + good food", "Skydiving", "Buying a house", "Running a marathon"], answer: 0 }
          ],
          successNote: "You met my world — and still stayed close.",
          failNote: "Try again. Germany was a big milestone."
        }
      ]
    },
    {
      id: "chapter4",
      number: "Chapter 4",
      title: "2026 — One Year Together",
      subtitle: "The Journey Continues",
      intro: "Now it's 2026, and in March we're already one year together — isn't that crazy???????? I can't believe we made it this far, and I feel like I'm learning to love you more and more. Even though it's not always flowers and rose-colored glasses, we realize the important thing: we come back, we talk about it, and we find each other again. That's what matters.\n\nI'm coming on the 14th to visit your family and help your mom. Then we're spending time in Birmingham to see what the city has to offer.\n\nIn June, we're flying with your whole family to Peru — which is also crazy! A whole trip with your family to another country.\n\nAnd then we see what's gonna happen this year :)",
      nodes: []
    }
  ],
  finalMessage: `Corley,

I love you — genuinely.
And I'm grateful I get to do life with you.

Happy Valentine's Day ❤️`,
  // Would You Rather Game Questions
  wouldYouRather: {
    questions: [
      {
        id: "wyr1",
        question: "When we have a disagreement, would you rather...",
        optionA: "Talk it through immediately, even if emotions are high",
        optionB: "Take time to cool down first, then discuss calmly",
        oliverAnswer: "B"
      },
      {
        id: "wyr2",
        question: "When thinking about our future together, would you rather...",
        optionA: "Build a stable, predictable life with security",
        optionB: "Take risks and chase big dreams, even with uncertainty",
        oliverAnswer: "A"
      },
      {
        id: "wyr3",
        question: "When you're going through a tough time, would you rather I...",
        optionA: "Give you space and let you process alone",
        optionB: "Stay close and offer comfort and presence",
        oliverAnswer: "B"
      },
      {
        id: "wyr4",
        question: "For quality time together, would you rather...",
        optionA: "Deep conversations about life, faith, and dreams",
        optionB: "Shared experiences and making memories together",
        oliverAnswer: "B"
      },
      {
        id: "wyr5",
        question: "In our relationship, would you rather I...",
        optionA: "Challenge you to grow and step outside your comfort zone",
        optionB: "Provide comfort and acceptance exactly as you are",
        oliverAnswer: "A"
      },
      {
        id: "wyr6",
        question: "When making big life decisions together, would you rather...",
        optionA: "Pray together first and seek God's direction",
        optionB: "Discuss our thoughts first, then bring it to prayer",
        oliverAnswer: "B"
      },
      {
        id: "wyr7",
        question: "When thinking about building our life together, would you rather...",
        optionA: "Live close to family and maintain strong roots",
        optionB: "Create our own path, even if it means distance from family",
        oliverAnswer: "A"
      },
      {
        id: "wyr8",
        question: "To feel most connected to me, would you rather...",
        optionA: "Share your deepest fears and insecurities with me",
        optionB: "Create joyful moments and celebrate wins together",
        oliverAnswer: "B"
      }
    ]
  },
  // List your photos here (must exist in /photos)
  photos: [
    { src: "photos/IMG_2748.jpg", caption: "Us. Just us. Our first tour in westlafayette together experience the restaurant and winerys" },
    { src: "photos/IMG_2760.jpg", caption: "Great memory we are eating at the winery bruchetta we need to repeat that." },
    { src: "photos/IMG_2786.jpg", caption: "Beautiful smile of my sweet girl." },
    { src: "photos/IMG_2793.jpg", caption: "Of course we most of the time just eating. Here at the lobby having our Breakfast. Love that orange top!!!" },
    { src: "photos/IMG_2860.jpg", caption: "One of your favorite photos that i dont understand why... but i look crazy ngl" },
    { src: "photos/IMG_2882.jpg", caption: "Beautiful black outfit. you always so stylish and beautiful" },
    { src: "photos/IMG_2937.jpg", caption: "Thats us when we finally be togheter." },
    { src: "photos/IMG_2956.jpg", caption: "One of my favorite photos us having a really good dinner celebrating your job" },
    { src: "photos/IMG_2961.jpg", caption: "Another angle of us!!!" },
    { src: "photos/IMG_4777.jpg", caption: "I dont know why but i have so many photos of you eating haha. I dont know why you pounding in this one but you kinda cute" },
    { src: "photos/IMG_4803.jpg", caption: "Photo of you stealing my jacket" },
    { src: "photos/IMG_4870.jpg", caption: "Anoter food picture haha we have so many pictures in food" },
    { src: "photos/IMG_5088.jpg", caption: "Chicago the windy city had the most windiest love." },
    { src: "photos/IMG_5150.jpg", caption: "One of your favorite food here in Lafayette need to get that curry again" },
    { src: "photos/IMG_5171.jpg", caption: "Cant wait to put down every memory so we can frame it!!!! THats the most exciting thing" },
    { src: "photos/IMG_5172.jpg", caption: "I would carry for you the world and more." },
    { src: "photos/IMG_5754.jpg", caption: "Love that dress!" },
    { src: "photos/IMG_5774.jpg", caption: "You with a cute smile and flat bread" },
    { src: "photos/IMG_6320.jpg", caption: "Picking a christmas tree with your family was a pleasure. (PS. look at george he found something more intersting)" },
    { src: "photos/IMG_6811.jpg", caption: "Picture of you graduating im so glad that i could see you graduating to be a PA!!!!" },
    { src: "photos/IMG_6888.jpg", caption: "Another Picture of you graduating love that as well!!" },
    { src: "photos/IMG_8280.jpg", caption: "You again stealing some sunglasses haha..." },
    { src: "photos/IMG_8438.jpg", caption: "Us dressed up for the orchestra with my dad wonderful memory" },
    { src: "photos/IMG_8453.jpg", caption: "Love that dress so much everything was on point here!" },
    { src: "photos/IMG_8514.jpg", caption: "Favorite person to do a party with!!" },
    { src: "photos/IMG_8572.jpg", caption: "My favorite place to have a nap" },
    { src: "photos/20250924_200631.jpg", caption: "Where wine and food is there is corley" },
    { src: "photos/20250926_111746.jpg", caption: "Our first Zoo trip together you looking at the bald eagle" },
    { src: "photos/20250926_185831.jpg", caption: "Golden hour." },
    { src: "photos/1495508955154340015.jpeg", caption: "Another photo of you stealing some sun glasses" }
  ]
};
// =========================

/* ================================================
 *  Preferences
 * ================================================ */
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const PANEL_ORDER = ["cover", "intro", "chapters", "gallery", "wouldyourather", "final"];
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
// Clear any old progress data (one-time reset for fresh start)
localStorage.removeItem("lbCompletedChapters");
let completedChapters = [];
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
  
  // Auto-load Chapter 1 (always available)
  if (!activeChapterId || !CONTENT.gameChapters.find(ch => ch.id === activeChapterId)) {
    loadChapter("chapter1");
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
    console.log("No nodes in chapter, showing intro message");
    if (gameQuestionEl) {
      gameQuestionEl.innerHTML = `
        <div class="memoryCard show">
          <p class="memoryText" style="white-space: pre-line;">${escapeHtml(chapter.intro)}</p>
          <button class="primary" id="chapterTextCompleteBtn">Continue to Final Page →</button>
        </div>
      `;
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
  } else if (e.target.closest("#chapterTextCompleteBtn")) {
    // Handle text-only chapters (like Chapter 4)
    if (!completedChapters.includes(activeChapterId)) {
      completedChapters.push(activeChapterId);
      localStorage.setItem("lbCompletedChapters", JSON.stringify(completedChapters));
    }
    renderChapterCards();
    showPanel("final");
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
 *  Would You Rather Game
 * ================================================ */
const wyrState = {
  currentQuestionIndex: 0,
  player1Answer: null,
  player2Answer: null,
  score: 0,
  totalQuestions: CONTENT.wouldYouRather.questions.length,
  gameComplete: false
};

// DOM Elements
const wyrQuestionText = document.getElementById("wyrQuestionText");
const wyrOptionA = document.getElementById("wyrOptionA");
const wyrOptionB = document.getElementById("wyrOptionB");
const wyrOptionAText = document.getElementById("wyrOptionAText");
const wyrOptionBText = document.getElementById("wyrOptionBText");
const wyrScore = document.getElementById("wyrScore");
const wyrProgressText = document.getElementById("wyrProgressText");
const wyrProgressFill = document.getElementById("wyrProgressFill");
const wyrFeedback = document.getElementById("wyrFeedback");
const wyrResults = document.getElementById("wyrResults");
const wyrQuestionArea = document.getElementById("wyrQuestionArea");
const wyrFinalScore = document.getElementById("wyrFinalScore");
const wyrResultsMessage = document.getElementById("wyrResultsMessage");
const wyrPlayAgain = document.getElementById("wyrPlayAgain");

function initWouldYouRather() {
  console.log("Would You Rather: Initializing game");
  resetWYRGame();
  renderWYRQuestion();
}

function resetWYRGame() {
  wyrState.currentQuestionIndex = 0;
  wyrState.player1Answer = null;
  wyrState.player2Answer = null;
  wyrState.score = 0;
  wyrState.gameComplete = false;
  
  wyrScore.textContent = "0";
  wyrFeedback.textContent = "";
  wyrResults.classList.remove("show");
  wyrResults.setAttribute("aria-hidden", "true");
  wyrQuestionArea.style.display = "block";
  
  // Reset button states
  wyrOptionA.classList.remove("selected", "match", "noMatch", "disabled");
  wyrOptionB.classList.remove("selected", "match", "noMatch", "disabled");
}

function renderWYRQuestion() {
  if (wyrState.currentQuestionIndex >= wyrState.totalQuestions) {
    showWYRResults();
    return;
  }
  
  const question = CONTENT.wouldYouRather.questions[wyrState.currentQuestionIndex];
  
  // Reset answers for new question
  wyrState.player1Answer = null;
  wyrState.player2Answer = null;
  
  // Update question text with fade effect
  wyrQuestionArea.style.opacity = "0";
  
  setTimeout(() => {
    wyrQuestionText.textContent = question.question;
    wyrOptionAText.textContent = question.optionA;
    wyrOptionBText.textContent = question.optionB;
    
    // Reset button states
    wyrOptionA.classList.remove("selected", "match", "noMatch", "disabled");
    wyrOptionB.classList.remove("selected", "match", "noMatch", "disabled");
    wyrFeedback.textContent = "";
    
    // Update progress
    wyrProgressText.textContent = `Question ${wyrState.currentQuestionIndex + 1} of ${wyrState.totalQuestions}`;
    const progress = ((wyrState.currentQuestionIndex + 1) / wyrState.totalQuestions) * 100;
    wyrProgressFill.style.width = progress + "%";
    
    // Fade in
    wyrQuestionArea.style.opacity = "1";
  }, 300);
}

function handleWYRAnswer(choice) {
  // Corley's answer compared to Oliver's preference
  const question = CONTENT.wouldYouRather.questions[wyrState.currentQuestionIndex];
  const selectedButton = choice === "A" ? wyrOptionA : wyrOptionB;
  const otherButton = choice === "A" ? wyrOptionB : wyrOptionA;
  
  // Disable buttons temporarily
  wyrOptionA.classList.add("disabled");
  wyrOptionB.classList.add("disabled");
  
  // Mark as selected with animation
  selectedButton.classList.add("selected");
  
  // Check if Corley's answer matches Oliver's preference
  const isMatch = (choice === question.oliverAnswer);
  
  setTimeout(() => {
    if (isMatch) {
      // Match! Corley chose the same as Oliver
      wyrState.score++;
      wyrScore.textContent = wyrState.score;
      
      selectedButton.classList.add("match");
      wyrFeedback.textContent = "✨ It's a match! You know Oliver so well! +1";
      wyrFeedback.className = "wyrFeedback wyrFeedbackMatch";
      
      // Animate score
      wyrScore.classList.add("scoreUp");
      setTimeout(() => wyrScore.classList.remove("scoreUp"), 600);
      
      // Hearts particles
      const rect = selectedButton.getBoundingClientRect();
      emitParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 5, "heart");
    } else {
      // No match - Corley chose differently than Oliver
      selectedButton.classList.add("noMatch");
      wyrFeedback.textContent = "Not quite... Oliver chose the other one!";
      wyrFeedback.className = "wyrFeedback wyrFeedbackNoMatch";
    }
    
    // Move to next question after delay
    setTimeout(() => {
      wyrState.currentQuestionIndex++;
      renderWYRQuestion();
    }, 2000);
  }, 500);
}

function showWYRResults() {
  wyrState.gameComplete = true;
  wyrQuestionArea.style.display = "none";
  wyrResults.classList.add("show");
  wyrResults.setAttribute("aria-hidden", "false");
  
  wyrFinalScore.textContent = wyrState.score;
  
  // Generate message based on score
  const percentage = (wyrState.score / wyrState.totalQuestions) * 100;
  let message = "";
  
  if (percentage === 100) {
    message = "Perfect match! You know Oliver's heart completely! 💕";
  } else if (percentage >= 75) {
    message = "Amazing! You understand each other so deeply! 💖";
  } else if (percentage >= 50) {
    message = "Great job! You're learning what matters most to each other! 💗";
  } else if (percentage >= 25) {
    message = "Good start! Keep discovering each other's hearts! 💓";
  } else {
    message = "Every answer teaches you something new about each other! 💝";
  }
  
  wyrResultsMessage.textContent = message;
  
  // Celebration confetti
  if (wyrState.score > 0) {
    popConfetti(15);
  }
}

// Event listeners
if (wyrOptionA) {
  wyrOptionA.addEventListener("click", () => {
    if (!wyrOptionA.classList.contains("disabled")) {
      handleWYRAnswer("A");
    }
  });
}

if (wyrOptionB) {
  wyrOptionB.addEventListener("click", () => {
    if (!wyrOptionB.classList.contains("disabled")) {
      handleWYRAnswer("B");
    }
  });
}

if (wyrPlayAgain) {
  wyrPlayAgain.addEventListener("click", () => {
    initWouldYouRather();
  });
}

// Initialize when entering the panel
const wyrPanel = document.getElementById("wouldyourather");
if (wyrPanel) {
  // We'll initialize on first visit
  let wyrInitialized = false;
  const observer = new MutationObserver(() => {
    if (wyrPanel.classList.contains("active") && !wyrInitialized) {
      wyrInitialized = true;
      initWouldYouRather();
    }
  });
  observer.observe(wyrPanel, { attributes: true, attributeFilter: ["class"] });
}

/* ================================================
 *  Final Reveal - Yes/No Valentine Buttons
 * ================================================ */
document.getElementById("finalMessage").textContent = CONTENT.finalMessage;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
let noButtonEscapeCount = 0;

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    // Hide buttons
    const valentineButtons = document.getElementById("valentineButtons");
    if (valentineButtons) {
      valentineButtons.style.display = "none";
    }
    
    // Show reveal box with message
    revealBox.classList.add("show");
    revealBox.setAttribute("aria-hidden", "false");
    popConfetti(28);
    emitParticles(window.innerWidth / 2, window.innerHeight / 2, 10, "heart");
  });
}

if (noBtn) {
  function moveNoButton() {
    noButtonEscapeCount++;
    
    // Random position within viewport bounds
    const maxX = 200; // pixels from center
    const maxY = 150;
    
    const randomX = (Math.random() - 0.5) * maxX * 2;
    const randomY = (Math.random() - 0.5) * maxY * 2;
    
    noBtn.classList.add("escaping");
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // After many attempts, make it smaller
    if (noButtonEscapeCount > 5) {
      noBtn.style.fontSize = "16px";
      noBtn.style.padding = "14px 28px";
    }
    if (noButtonEscapeCount > 10) {
      noBtn.style.fontSize = "14px";
      noBtn.style.padding = "12px 24px";
    }
  }
  
  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
  });
}

/* ================================================
 *  Restart
 * ================================================ */
document.getElementById("restartBtn").addEventListener("click", () => {
  // Clear all progress
  completedChapters = [];
  localStorage.removeItem("lbCompletedChapters");
  
  // Reset chapter state
  activeChapterId = null;
  currentNodeIndex = 0;
  nodeStates = [];
  
  // Hide reveal box and reset valentine buttons
  revealBox.classList.remove("show");
  revealBox.setAttribute("aria-hidden", "true");
  const valentineButtons = document.getElementById("valentineButtons");
  if (valentineButtons) {
    valentineButtons.style.display = "flex";
  }
  
  // Reset No button state
  if (noBtn) {
    noBtn.classList.remove("escaping");
    noBtn.style.transform = "";
    noBtn.style.fontSize = "";
    noBtn.style.padding = "";
  }
  noButtonEscapeCount = 0;
  
  // Stop any active slideshows
  stopFloatingSlideshows();
  
  // Reinitialize game (will lock all chapters except Chapter 1)
  initGame();
  
  // Go back to cover
  showPanel("cover");
});

/* ================================================
 *  Confetti Button (if exists)
 * ================================================ */
const confettiBtn = document.getElementById("confettiBtn");
if (confettiBtn) {
  confettiBtn.addEventListener("click", () => popConfetti(24));
}

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
const audio = new Audio("music/hey-lady.mp3");
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
