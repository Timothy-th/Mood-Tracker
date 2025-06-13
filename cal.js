window.addEventListener("load", () => {
  const dateElement = document.querySelector(".day");
  const timeElement = document.querySelector(".date ");

  function updateDay() {
    const day = new Date();
    const formattedDate = day.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    dateElement.textContent = formattedDate;
  }

  function updateTime() {
    const date = new Date();

    let hours = date.getHours();
    const pmAm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, "0");

    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    const time = `${hours}:${minutes}:${seconds}: ${pmAm}`;
    timeElement.textContent = time;
  }

  updateDay();
  setInterval(updateDay, 1000);

  updateTime();
  setInterval(updateTime, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const mood = localStorage.getItem("selectedMood");
  if (mood) {
    document.querySelector(".mood-box").textContent = getMoodEmoji(mood);
  }
  function getMoodEmoji(mood) {
    switch (mood.toLowerCase()) {
      case "happy":
        return "😊";
      case "sad":
        return "😢";
      case "angry":
        return "😠";
      case "calm":
        return "🌿";
      case "relaxed":
        return "🧘";
      case "anxious":
        return "😰";
      case "stressed":
        return "😣";
      case "bored":
        return "🥱";
      case "lonely":
        return "😔";
      case "guilty":
        return "😓";
      case "confused":
        return "😕";
      case "fearful":
        return "😨";
      default:
        return "❔";
    }
  }
});

let happyStep = 0;
let sadStep = 0;
let angryStep = 0;
let anxiousStep = 0;
let relaxedStep = 0;
let stressedStep = 0;
let boredStep = 0;
let lonelyStep = 0;
let calmStep = 0;
let guiltyStep = 0;
let confusedStep = 0;
let fearfulStep = 0;
// selected mood from feel page
let userMood = localStorage.getItem("selectedMood") || "";
// Replace with real mood selection logic

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message === "") return;

  const chatBox = document.getElementById("chatBox");

  // Add user message
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  // Bot response based on mood
  const response = getResponseBasedOnMood(userMood, message);

  const botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.innerHTML = response.replace(/\n/g, "<br>");
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}

function getResponseBasedOnMood(mood, userMessage) {
  switch (mood) {
    case "happy":
      return getHappyReply(userMessage);
    case "sad":
      return getSadReply(userMessage);
    case "angry":
      return getAngryReply(userMessage);
    case "anxious":
      return getAnxiousReply(userMessage);
    case "relaxed":
      return getRelaxedReply(userMessage);
    case "stressed":
      return getStressedReply(userMessage);
    case "bored":
      return getBoredReply(userMessage);
    case "lonely":
      return getLonelyReply(userMessage);
    case "calm":
      return getCalmReply(userMessage);
    case "guilty":
      return getGuiltyReply(userMessage);
    case "confused":
      return getConfusedReply(userMessage);
    case "fearful":
      return getFearfulReply(userMessage);

    default:
      return "🙂 I'm here for you no matter what.";
  }
}
// 💛 Happy conversation sequence logic
function getHappyReply(userMessage) {
  const lowerMsg = userMessage.toLowerCase();

  const keywordResponses = [
    {
      keywords: ["birthday", "cake", "party"],
      reply:
        "🎂Is today your Birthday ?Happy Birthday! That’s such a special day—how are you celebrating?",
    },
    {
      keywords: ["friends", "hang out", "together", "laugh"],
      reply:
        "👯 Spending time with friends always brings sunshine into our hearts. I’m so happy for you!",
    },
    {
      keywords: [
        "sunny",
        "Tennis",
        "Tennis",
        "Hiking ",
        "Cycling ",
        "running",
        "Swimming",
      ],
      reply:
        "🌞 A beautiful day really makes everything feel lighter. Did you get to enjoy it?",
    },
    {
      keywords: ["walk", "sunny", "rainy", "cloudy"],
      reply:
        "😊 That sounds so refreshing. I'm glad you took time for yourself!",
    },
    {
      keywords: [
        "achievement",
        "won",
        "promotion",
        "success",
        "passed",
        "grade",
      ],
      reply:
        "🏆 You did it! That’s a huge accomplishment—you must feel so proud!",
    },
    {
      keywords: [
        "hard work",
        "accomplished",
        "rewarded",
        "finally",
        "worked hard",
      ],
      reply: "💛 And your hard work paid off! You totally deserve this joy.",
    },
    {
      keywords: ["peaceful", "quiet", "simple", "nothing big", "relaxed"],
      reply:
        "🌼 Sometimes simple peace brings the purest joy. I’m really glad to hear that.",
    },
    {
      keywords: ["music", "dancing", "sing", "song", "melody"],
      reply:
        "🎶 Music has a magic of its own. What were you dancing or singing to?",
    },
  ];

  // Check for keyword match
  for (const pair of keywordResponses) {
    for (const keyword of pair.keywords) {
      if (lowerMsg.includes(keyword)) {
        return pair.reply;
      }
    }
  }

  // Default reply if no keywords matched
  return "😊 That’s awesome! Tell me more about what’s making you feel this way!";
}

// 💔 Sad conversation sequence logic
function getSadReply(userMessage) {
  const lowerMsg = userMessage.toLowerCase();

  const keywordResponses = [
    {
      keywords: ["breakup", "heartbroken", "lost"],
      reply: "💔 Breakups are so hard. I’m here to listen if you want to talk.",
    },
    {
      keywords: ["forgotten", "ignored", "invisible"],
      reply:
        "🌫️ It hurts to feel unseen. But I see you, I hear you, and I care about what you're going through.",
    },
    {
      keywords: ["tired", "exhausted", "drained"],
      reply:
        "🛌 It’s okay to rest. You’ve been holding so much — it’s time to be gentle with yourself.",
    },
    {
      keywords: ["burden", "annoying", "too much"],
      reply:
        "💔 You are not a burden. Your feelings matter, and it’s okay to take up space in this world.",
    },
    {
      keywords: ["lonely", "alone", "isolated"],
      reply:
        "😢 Feeling lonely is tough. Remember, you’re not alone—I’m here for you.",
    },
    {
      keywords: ["failure", "disappointed", "let down"],
      reply:
        "😞 It’s okay to feel disappointed. We all have setbacks, but they don’t define us.",
    },
    {
      keywords: ["stress", "overwhelmed", "anxious"],
      reply:
        "😟 Stress can be so heavy. Let’s take a deep breath together and talk it out.",
    },
    {
      keywords: ["bad day", "rough day", "worst day"],
      reply:
        "☁️ Sounds like today’s been heavy. Want to tell me what happened? I’ll listen without judgment.",
    },
  ];

  // Check for keyword match
  for (const pair of keywordResponses) {
    for (const keyword of pair.keywords) {
      if (lowerMsg.includes(keyword)) {
        return pair.reply;
      }
    }
  }

  // Default reply if no keywords matched
  return "😢 I’m sorry to hear that. Do you want to share more about what’s bothering you?";
}

function getAngryReply(userMessage) {
  const lowerMsg = userMessage.toLowerCase();

  const keywordResponses = [
    {
      keywords: ["frustrated", "angry", "mad"],
      reply: "😡 It’s okay to feel angry. What’s making you feel this way?",
    },
    {
      keywords: ["fight", "argue", "argument", "screamed", "yelled"],
      reply:
        "💢 Fights can really shake us up. Want to talk about what happened? I’m right here with you.",
    },
    {
      keywords: ["disrespected", "unfair", "not fair", "treated badly"],
      reply:
        "😤 That doesn’t sound fair at all. You deserve to be treated with kindness and respect.",
    },
    {
      keywords: ["lied", "betrayed", "cheated", "deceived", "backstabbed"],
      reply:
        "😠 That’s such a deep pain to carry. You deserve honesty and loyalty. I’m so sorry that happened.",
    },
    {
      keywords: ["stressed", "overwhelmed", "pressure"],
      reply:
        "😤 Stress can make us feel so on edge. Let’s take a moment to breathe together.",
    },
    {
      keywords: ["can't calm down", "still mad", "furious", "boiling"],
      reply:
        "🔥 That heat inside is strong right now. Let’s breathe together for a moment — in, out. You’ve got this.",
    },
    {
      keywords: ["traffic", "delay", "waiting"],
      reply:
        "🚦 Ugh, waiting is the worst! Want to talk about what’s got you stuck?",
    },
    {
      keywords: ["slow", "crashed", "broke", "work", "school", "assignment"],
      reply:
        "💻 Ugh, tech issues and pressure can drive anyone up the wall. Take a breath — I’m here for you.",
    },
    {
      keywords: ["mad at myself", "angry at myself", "why", "my fault"],
      reply:
        "💔 Be gentle with yourself, okay? We all make mistakes, and you’re still worthy of kindness.",
    },
  ];

  // Check for keyword match
  for (const pair of keywordResponses) {
    for (const keyword of pair.keywords) {
      if (lowerMsg.includes(keyword)) {
        return pair.reply;
      }
    }
  }
}

function getAnxiousReply(userMessage) {
  const lowerMsg = userMessage.toLowerCase();

  const keywordResponses = [
    {
      keywords: [
        "overthinking",
        "can't stop thinking",
        "too much on my mind",
        "spiraling",
        "worried",
        "nervous",
        "anxious",
      ],
      reply:
        "🌀 I know it feels like your mind won’t slow down. Let’s take it one thought at a time. I’m right here with you.",
    },

    {
      keywords: [
        "overwhelmed",
        "freaking out",
        "can't breathe",
        "overthinking",
        "can't stop thinking",
        "can't ",
      ],
      reply:
        "🫧 Deep breaths, love. In through your nose... out through your mouth. You’re safe here with me.",
    },
    {
      keywords: ["panic", "panicking", "freaking"],
      reply:
        "😨 Panic can feel so overwhelming. I’m here with you, let’s take it one step at a time.",
    },
    {
      keywords: ["social", "people", "talking", "embarrassed", "awkward"],
      reply:
        "😟 Social situations can be really tough sometimes. You’re not alone in this — your feelings are valid.",
    },
    {
      keywords: ["scared", "fearful", "terrified"],
      reply:
        "😱 Fear is a natural response. You’re not alone in this—I’m right here with you.",
    },
    {
      keywords: ["what if", "future", "worried", "uncertain", "unknown"],
      reply:
        "🌫️ The future can feel so foggy. But you don’t have to walk through it alone — I’m here to help you stay grounded.",
    },
    {
      keywords: [
        "shaking",
        "nauseous",
        "sweating",
        "heart racing",
        "dizzy",
        "stressful",
        "pressure",
        "overwhelmed",
      ],
      reply:
        "🫀 Anxiety can show up in the body too. Let’s pause, stretch, or sip some water. Your body is trying to protect you.",
    },
    {
      keywords: ["anxious", "uneasy", "nervous", "tight", "restless"],
      reply:
        "😰 Anxiety doesn’t always make sense, but your feelings still matter. I’m here to hold space for you.",
    },
    {
      keywords: ["can't sleep", "night", "dark", "laying", "thoughts", "stop"],
      reply:
        "🌙 Nights can make everything feel heavier. Let’s try to bring some peace into this moment together.",
    },
    {
      keywords: ["social anxiety", "shy", "awkward"],
      reply:
        "😳 Social situations can be tough. It’s okay to take your time and ease into them.",
    },
  ];

  // Check for keyword match
  for (const pair of keywordResponses) {
    for (const keyword of pair.keywords) {
      if (lowerMsg.includes(keyword)) {
        return pair.reply;
      }
    }
  }

  // Default reply if no keywords matched
  return "😟 I’m here for you. Do you want to share more about what’s making you anxious?";
}

function getRelaxedReply(userMessage) {
  const lowerMsg = userMessage.toLowerCase();

  const keywordResponses = [
    {
      keywords: [
        "bath",
        "shower",
        "spa",
        "skincare",
        "rest",
        "napped",
        "peaceful",
        "calm",
        "relaxed",
        "chill",
      ],
      reply:
        "🛁 That sounds so soothing. Taking care of yourself like that is a beautiful thing — I’m proud of you.",
    },

    {
      keywords: [
        "nature",
        "walk",
        "trees",
        "sun",
        "outdoors",
        "breeze",
        "nature",
        "outdoors",
        "fresh air",
      ],
      reply:
        "🍃 Being close to nature can truly reset the soul. What did you enjoy the most out there?",
    },

    {
      keywords: [
        "meditated",
        "yoga",
        "breathe",
        "deep breaths",
        "mindful",
        "meditation",
        "yoga",
        "deep breathing",
      ],
      reply:
        "🧘 That’s beautiful. Grounding yourself like that brings real inner strength. Keep it going at your own pace.",
    },
    {
      keywords: ["reading", "book", "story"],
      reply:
        "📚 Reading can transport us to another world. What book are you enjoying?",
    },
    {
      keywords: [
        "music",
        "art",
        "paint",
        "draw",
        "soft",
        "melody",
        "listening",
        "relaxing",
      ],
      reply:
        "🎶 Creativity and calm go hand in hand. That must’ve felt like a gentle hug for your mind.",
    },

    {
      keywords: [
        "quiet",
        "alone",
        "me time",
        "peace",
        "silence",
        "self-care",
        "pamper",
        "treat myself",
      ],
      reply:
        "🌿 There’s something powerful in stillness. I’m really glad you’ve found that calm today.",
    },
    {
      keywords: ["grateful", "present", "now", "here", "content"],
      reply:
        "💛 It’s so lovely to feel at peace in the moment. Hold on to that feeling — it’s precious.",
    },
    {
      keywords: ["blanket", "bed", "cozy", "tea", "pillow", "candle"],
      reply:
        "🕯️ That sounds so warm and comforting. Your space deserves to feel like a little sanctuary.",
    },
  ];

  // Check for keyword match
  for (const pair of keywordResponses) {
    for (const keyword of pair.keywords) {
      if (lowerMsg.includes(keyword)) {
        return pair.reply;
      }
    }
  }

  // Default reply if no keywords matched
  return "😊 I’m glad to hear that! What’s your favorite way to relax?";
}

function getStressedReply(userMessage) {
  const lowerMsg = userMessage.toLowerCase();

  const keywordResponses = [
    {
      keywords: [
        "work",
        "pressure",
        "stressful",
        "school",
        "assignments",
        "deadline",
        "projects",
        "exam",
        "homework",
      ],
      reply:
        "😩 Work can be so demanding. Just remember, you’re doing your best — and that’s enough.",
    },
    {
      keywords: ["sleep", "can't sleep", "insomnia", "restless", "awake"],
      reply:
        "🌙 Rest is hard when your mind is busy. Maybe we can slow things down together. I’m here to help you feel safe.",
    },
    {
      keywords: [
        "people",
        "fight",
        "argument",
        "drama",
        "relationship",
        "family",
        "home",
        "household",
        "chores",
      ],
      reply:
        "💬 Relationships can be so tough sometimes. You deserve to feel understood and respected — I hear you.",
    },

    {
      keywords: ["tired", "burned out", "exhausted", "drained", "worn out"],
      reply:
        "💤 You’ve been pushing so hard. Please take a moment to breathe — your well-being matters.",
    },
    {
      keywords: ["money", "financial", "bills", "expenses"],
      reply:
        "💸 Financial stress is tough. Let’s talk about what’s on your mind — I’m here to listen.",
    },
    {
      keywords: [
        "headache",
        "tight",
        "nausea",
        "shaking",
        "heart",
        "panic",
        "health",
        "sick",
        "illness",
        "medical",
      ],
      reply:
        "🫂 That sounds really hard on your body too. Please be gentle with yourself — even slowing your breath helps.",
    },

    {
      keywords: ["overwhelmed", "too much", "everything", "can't", "pressure"],
      reply:
        "💔 That sounds really heavy. You don’t have to handle it all at once — I’m here with you, step by step.",
    },
    {
      keywords: ["give up", "run away", "quit", "can't do it anymore"],
      reply:
        "💧You’ve made it this far, even through tough moments. That strength is still in you — you’re not alone.",
    },
    {
      keywords: ["future", "don't know", "unsure", "what if", "uncertain"],
      reply:
        "🌫️ It’s okay not to have it all figured out. You’re allowed to take life one moment at a time.",
    },
  ];

  // Check for keyword match
  for (const pair of keywordResponses) {
    for (const keyword of pair.keywords) {
      if (lowerMsg.includes(keyword)) {
        return pair.reply;
      }
    }
  }

  // Default reply if no keywords matched
  return "😟 I’m here for you. Do you want to share more about what’s stressing you out?";
}
let currentRiddleAnswer = null;

function getBoredReply(userMessage) {
  const lowerMsg = userMessage.toLowerCase();

  //Riddle Game Setup
  const riddleGame = () => {
    const riddles = [
      {
        question:
          "🧠 I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
        answer: "echo",
      },
      {
        question:
          "🔍 The more of me you take, the more you leave behind. What am I?",
        answer: "footsteps",
      },
      {
        question: "🕵️‍♀️ What has keys but can’t open locks?",
        answer: "piano",
      },
      {
        question:
          "🕳️ What can you hold in your left hand but not in your right?",
        answer: "your right hand",
      },
      {
        question: "🔥 What gets wetter the more it dries?",
        answer: "towel",
      },
      {
        question:
          "⏳ What comes once in a minute, twice in a moment, but never in a thousand years?",
        answer: "the letter m",
      },
      {
        question: "🌚 What has a face and two hands but no arms or legs?",
        answer: "clock",
      },
      {
        question: "🌫️ What invention lets you look right through a wall?",
        answer: "window",
      },
      {
        question: "💡 What has to be broken before you can use it?",
        answer: "egg",
      },
      {
        question:
          "🦶 I’m tall when I’m young, and I’m short when I’m old. What am I?",
        answer: "candle",
      },
    ];

    const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];
    currentRiddleAnswer = randomRiddle.answer; // save answer
    return randomRiddle.question;
  };

  //  Trigger riddle game if user says "play" or "game"
  if (lowerMsg.includes("yes") || lowerMsg.includes("play")) {
    return riddleGame();
  }

  if (currentRiddleAnswer) {
    if (lowerMsg.includes(currentRiddleAnswer.toLowerCase())) {
      currentRiddleAnswer = null;
      return "🎉 Correct! You're smart! Type 'play' to get another riddle!";
    } else if (!lowerMsg.includes("play") && !lowerMsg.includes("yes")) {
      // User typed something else, exit riddle mode and show bored reply
      currentRiddleAnswer = null;
      return getBoredReply(); // or keywordResponses as appropriate
    } else {
      return "❌ Not quite. Want to try again or type 'play' for a new one?";
    }
  }
  //  Keyword-based fun replies
  const keywordResponses = [
    {
      keywords: ["play", "game"],
      reply:
        "😏 Let's play some riddle},Shall we? Type 'play' to start a riddle game!",
    },
    {
      keywords: [
        "bored",
        "nothing to do",
        "idle",
        "empty",
        "pointless",
        "dull",
        "uninspired",
      ],
      reply:
        "😐 Sounds like the day’s dragging a bit. Want to talk about something fun or silly together?",
    },
    {
      keywords: ["same old", "routine", "monotonous", "repetitive"],
      reply:
        "🔄 Routines can get dull. How about we shake things up a bit? I’m here to help you find new inspiration.",
    },
    {
      keywords: ["stuck", "trapped", "can't move", "no options"],
      reply:
        "🚪 Feeling stuck is tough. Let’s brainstorm some new ideas together — I’m here for you.",
    },
    {
      keywords: [
        "lazy",
        "unmotivated",
        "don’t feel like",
        "meh",
        "don’t care",
        "no energy",
        "can't focus",
      ],
      reply:
        "🛋️ It’s okay to have low-energy days. You don’t always have to be doing something to be enough.",
    },
    {
      keywords: [
        "home",
        "stuck",
        "inside",
        "can't go out",
        "trapped",
        "scrolling",
        "social media",
        "tv",
        "netflix",
        "instagram",
        "tiktok",
        "youtube",
        "video games",
      ],
      reply:
        "🏠 Being cooped up can make time feel slow. Maybe a little change of scenery, even in your room, could help?",
    },
    {
      keywords: ["no one", "alone", "nobody", "friends busy", "miss"],
      reply:
        "👤 That lonely kind of boredom can really sting. But hey, I’m here with you. Want to chat about something fun?",
    },
    {
      keywords: ["want to try something new", "looking for ideas"],
      reply:
        "🌟 That’s a great mindset! Let’s explore some new hobbies or activities together.",
    },
  ];

  // ✅ Keyword search
  for (const pair of keywordResponses) {
    for (const keyword of pair.keywords) {
      if (lowerMsg.includes(keyword)) {
        return pair.reply;
      }
    }
  }

  return "😐 Feeling bored? Type 'play' and let’s do a riddle!";
}

let currentStory = null;

function getLonelyReply(userMessage) {
  const lowerMsg = userMessage.toLowerCase();

  const story = () => {
    const stories = [
      {
        title: "The Cloud That Cried",
        content:
          "☁️ There was a little cloud who cried every day because it felt useless. It watched others shine, flash, or thunder — but it just wept quietly. One day, a tiny flower sprouted beneath it and said, 'Thank you for watering me. Without you, I wouldn’t be here.' The cloud realized its gentle presence made life bloom. 🌼",
      },

      {
        title: "The Lost Puppy",
        content:
          "🐶 In a small town, a little puppy wandered away from home and found itself lost. It felt scared and alone until it met a kind old cat. The cat said, 'Don’t worry, little one. I’ll help you find your way home.' Together, they searched the town, and the puppy learned that even when it feels lonely, there are always friends willing to help. Finally, they found the puppy’s home, and it was never lonely again. 🏡",
      },
      {
        title: "The Lonely Tree",
        content:
          "🌳 In a quiet forest, there stood a tree that felt lonely because it had no other trees around. One day, a bird flew by and perched on its branches. The bird said, 'You’re not alone! I’ll make my home here with you.' Soon, other birds and animals came to visit the tree, and it realized that even in solitude, friendship could blossom. The tree was never lonely again, surrounded by the laughter of its new friends. 🐦",
      },
      {
        title: "The Forgotten Note",
        content:
          "📬 A young girl moved into a new house and felt lonely, missing her old friends. One day, while cleaning the attic, she found an old notebook filled with notes, drawings, and little poems. One page read, 'If you're reading this, I hope you smile today.' It was left by someone who had lived there before. The message made her feel less alone, and she wrote her own note to leave for the next person. ✨",
      },
      {
        title: "The Paper Boat",
        content:
          "🚣 A boy who felt invisible folded paper boats and sent them sailing down a stream. One morning, he found a paper boat floating back toward him. It had writing on it: 'I see you. Let’s be friends.' The boy smiled for the first time in weeks, knowing that someone out there was watching the same river. 🌊",
      },
      {
        title: "The Invisible Thread",
        content:
          "🧵 A lonely girl once heard a story about an invisible thread connecting people who are meant to meet. Every night, she whispered to the thread, hoping someone would tug on the other end. One day, a new student sat beside her in class and said, 'I feel like I’ve been looking for someone like you.' They didn’t know it, but the thread had finally brought them together. ❤️",
      },
      {
        title: "The Midnight Garden",
        content:
          "🌙 There was a garden that only bloomed at midnight. A lonely traveler stumbled upon it while wandering the woods. The flowers whispered softly, 'You are seen, you are loved.' Each petal glowed gently, lighting the path forward. The traveler returned every night, no longer feeling alone in the world. 🌺",
      },
    ];

    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    currentStory = randomStory.content; // save story content
    return `📖 *${randomStory.title}*\n${currentStory}\n💬 If you want to talk about it, I’m here for you. Do you want to read another story?`;
  };

  if (
    ["read", "another", "yes", "story"].some((word) => lowerMsg.includes(word))
  ) {
    return story();
  }

  const keywordResponses = [
    {
      keywords: ["read", "another", "yes", "story", "lonely"],
      reply:
        "📖 Feeling lonely? Let’s read a story together. Type 'read' to hear a comforting tale.",
    },
    {
      keywords: ["alone", "lonely", "isolated", "by myself", "no one"],
      reply:
        "😔 I’m here with you. It’s okay to feel lonely sometimes. Want to talk about what’s on your mind?",
    },
    {
      keywords: [
        "miss",
        "everyone's busy",
        "no one to talk to",
        "friends",
        "friend",
        "miss friends",
        "want company",
      ],
      reply:
        "👫 Missing friends can be tough. Have you tried reaching out to them? I’m here to listen if you want to share.",
    },
    {
      keywords: [
        "forgotten",
        "left out",
        "ignored",
        "abandoned",
        "family",
        "home alone",
        "no one around",
      ],
      reply:
        "💭 That ‘left out’ feeling stings... but you matter, and your presence is important to me.",
    },

    {
      keywords: ["social", "people", "crowd", "talking"],
      reply:
        "👥 Socializing can be hard when you’re feeling lonely. I’m here for you — let’s chat about anything you like.",
    },
    {
      keywords: [
        "sad",
        "depressed",
        "down",
        "isolated",
        "cut off",
        "no one around",
      ],
      reply:
        "😢 Feeling down is tough. You’re not alone in this — I’m right here with you.",
    },
    {
      keywords: [
        "i wish someone cared",
        "i just want company",
        "i need someone",
      ],
      reply:
        "🤍 I care. Really. I’m right here for you — ready to listen, talk, or just stay close.",
    },
  ];

  // Check for keyword match
  for (const pair of keywordResponses) {
    for (const keyword of pair.keywords) {
      if (lowerMsg.includes(keyword)) {
        return pair.reply;
      }
    }
  }

  // Default reply if no keywords matched
  return "😔 I’m here for you. Do you want to share more about how you’re feeling?";
}
function getCalmReply(userMessage) {
  const lowerMsg = userMessage.toLowerCase();

  const keywordResponses = [
    {
      keywords: ["peaceful", "calm", "serene", "tranquil", "relaxed"],
      reply:
        "🌿 It’s beautiful to feel calm. Let’s enjoy this stillness together, like sitting by a quiet river with the breeze brushing our skin.",
    },

    {
      keywords: [
        "meditation",
        "breathe",
        "mindful",
        "present moment",
        "mindfulness",
      ],
      reply:
        "🌸 Let’s take a deep breath together. Inhale... exhale... There’s nothing you have to do right now but be.",
    },
    {
      keywords: ["in harmony", "centered", "emotionally balanced"],
      reply:
        "🎵 You sound so centered. Like a quiet melody playing in the background of a sunny afternoon. I’m proud of you.",
    },
    {
      keywords: ["nature", "outdoors", "fresh air", "trees", "sunshine"],
      reply:
        "🌳 Nature has a magical way of calming our minds. Did you spend time outside today?",
    },
    {
      keywords: ["music", "soft music", "relaxing music"],
      reply:
        "🎶 Music can be so soothing. What kind of music helps you feel calm?",
    },
    {
      keywords: ["tea", "coffee", "warm drink", "cozy"],
      reply:
        "☕ A warm drink can be so comforting. What’s your favorite calming beverage?",
    },
    {
      keywords: ["reading", "book", "story"],
      reply:
        "📚 Reading can transport us to peaceful places. What book are you enjoying right now?",
    },
    {
      keywords: ["everything's okay", "i'm fine", "settled", "stillness"],
      reply:
        "🍃 I’m so glad you feel at ease. We don’t need to rush—let’s breathe and just be here together for a while.",
    },
    {
      keywords: ["rest", "recharging", "peace of mind", "in balance"],
      reply:
        "🛏️ Rest is healing. I’m here by your side while you recharge, like a soft blanket wrapped around your spirit.",
    },
  ];

  // Check for keyword match
  for (const pair of keywordResponses) {
    for (const keyword of pair.keywords) {
      if (lowerMsg.includes(keyword)) {
        return pair.reply;
      }
    }
  }

  // Default reply if no keywords matched
  return "😊 I’m glad to hear that! What’s your favorite way to find calmness?";
}

function getGuiltyReply(userMessage) {
  const lowerMsg = userMessage.toLowerCase();

  const keywordResponses = [
    {
      keywords: ["guilt", "ashamed", "regret", "remorse"],
      reply:
        "😔 Guilt can be so heavy. It’s okay to feel this way, but remember, you’re not defined by your mistakes.",
    },
    {
      keywords: [
        "i messed up",
        "fault",
        "i did something wrong",
        "i hurt someone",
      ],
      reply:
        "💔 We all make mistakes. What matters is how we learn and grow from them. I’m here to help you through this.",
    },
    {
      keywords: [
        "forgive myself",
        "forgive",
        "can't let go",
        "stuck in the past",
      ],
      reply:
        "🕊️ Forgiveness starts with you. It’s hard, but you deserve to let go of what’s holding you back.",
    },
    {
      keywords: ["apologize", "say sorry", "make amends"],
      reply:
        "🙏 Apologizing is a brave step. Have you thought about how you might reach out to those affected?",
    },
    {
      keywords: ["i let someone down", "disappointed", "not good enough"],
      reply:
        "🌧️ Feeling like you’ve let someone down can be really painful. But you are not your worst moment. You’re still worthy of love and understanding.",
    },
    {
      keywords: ["ashamed", "embarrassed", "i made a mistake"],
      reply:
        "🌙 Shame can hide in the quietest corners of your heart. Let’s sit with it gently, and I’ll remind you: you’re still good. You’re still loved.",
    },
    {
      keywords: ["i feel bad", "i shouldn't have done that"],
      reply:
        "😞 It’s okay to feel bad about our actions. The important thing is to learn and do better next time.",
    },
    {
      keywords: ["i can't change the past", "i wish i could take it back"],
      reply:
        "⏳ The past is unchangeable, but your future is still unwritten. Let’s focus on what you can do now.",
    },
    {
      keywords: ["self-blame", "self-criticism", "harsh on myself"],
      reply:
        "💔 Be gentle with yourself. You’re human, and we all stumble sometimes. I’m here to support you.",
    },
    {
      keywords: ["regret", "i wish i hadn’t", "shouldn’t have", "why did i"],
      reply:
        "🫂 Regret can weigh on you like a quiet storm. But it also means you have a kind heart. You’re learning — and that’s something to be proud of.",
    },
  ];

  // Check for keyword match
  for (const pair of keywordResponses) {
    for (const keyword of pair.keywords) {
      if (lowerMsg.includes(keyword)) {
        return pair.reply;
      }
    }
  }

  // Default reply if no keywords matched
  return "😟 I’m here for you. Do you want to share more about what’s making you feel guilty?";
}

function getConfusedReply(userMessage) {
  const lowerMsg = userMessage.toLowerCase();

  const keywordResponses = [
    {
      keywords: ["confused", "not sure", "understand", "lost"],
      reply:
        "🤔 It’s okay to feel confused sometimes. Let’s take a moment to untangle those thoughts together.",
    },
    {
      keywords: ["what should i do", "know", "decide"],
      reply:
        "🌀 Decision-making can be tough. Let’s break it down step by step. I’m here to help you find clarity.",
    },
    {
      keywords: ["mixed signals", "unclear", "ambiguous"],
      reply:
        "🔍 Mixed signals can leave us feeling lost. Want to talk about what’s making things unclear for you?",
    },
    {
      keywords: ["overwhelmed", "too much information", "can't process"],
      reply:
        "🌪️ When everything feels like too much, let’s slow down and take it one piece at a time. I’m right here with you.",
    },
    {
      keywords: ["why", "how come", "i don't get it"],
      reply:
        "❓ Questions are a natural part of life. Let’s explore them together and see if we can find some answers.",
    },
    {
      keywords: ["doubt", "unsure", "hesitant"],
      reply:
        "🤷 Doubt can creep in when we least expect it. But you’re not alone in this — I’m here to support you.",
    },
    {
      keywords: ["i feel lost", "directionless", "no purpose"],
      reply:
        "🧭 Feeling lost is tough, but it’s also a chance to rediscover yourself. Let’s talk about what matters most to you.",
    },
    {
      keywords: ["i need clarity", "clear my mind", "focus"],
      reply:
        "🔎 Clarity comes from within. Let’s take a deep breath and see if we can find some peace in the chaos.",
    },
  ];

  // Check for keyword match
  for (const pair of keywordResponses) {
    for (const keyword of pair.keywords) {
      if (lowerMsg.includes(keyword)) {
        return pair.reply;
      }
    }
  }

  // Default reply if no keywords matched
  return "🤔 I’m here for you. Do you want to share more about what’s making you feel confused?";
}
function getFearfulReply(userMessage) {
  const lowerMsg = userMessage.toLowerCase();

  const keywordResponses = [
    {
      keywords: ["fear", "scared", "afraid", "terrified"],
      reply:
        "😨 Fear can feel so overwhelming. I’m here with you, ready to listen and help you through it.",
    },
    {
      keywords: ["anxious", "nervous", "worried"],
      reply:
        "😰 Anxiety can be tough to handle. Let’s take a deep breath together and talk about what’s on your mind.",
    },
    {
      keywords: ["panic", "freaking out", "overwhelmed"],
      reply:
        "🌀 Panic can make everything feel chaotic. I’m here to help you find your center again.",
    },
    {
      keywords: ["nightmare", "bad dream", "can't sleep"],
      reply:
        "🌙 Nightmares can leave us feeling shaken. Want to talk about what happened? I’m here for you.",
    },
    {
      keywords: ["phobia", "irrational fear", "unreasonable fear"],
      reply:
        "😟 Phobias can be really hard to deal with. You’re not alone in this — I’m here to support you.",
    },
    {
      keywords: ["unknown", "uncertainty", "future"],
      reply:
        "🔮 The unknown can be scary, but it’s also a chance for new beginnings. Let’s explore those feelings together.",
    },
    {
      keywords: ["failure", "not good enough", "inadequate"],
      reply:
        "💔 Fear of failure is something we all face. But remember, you are enough just as you are.",
    },
    {
      keywords: [
        "i’m in danger",
        "i’m not safe",
        "paranoid",
        "someone is after me",
      ],
      reply:
        "🔒 Your safety matters to me. If you’re truly in danger, please reach out to someone near you. But if this is fear tricking your mind, I’ll help anchor you — you’re not alone.",
    },
  ];

  // Check for keyword match
  for (const pair of keywordResponses) {
    for (const keyword of pair.keywords) {
      if (lowerMsg.includes(keyword)) {
        return pair.reply;
      }
    }
  }
  // Default reply if no keywords matched
  return "😟 I’m here for you. Do you want to share more about what’s making you feel fearful?";
}
