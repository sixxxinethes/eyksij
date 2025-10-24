window.onload = function () {
  const audioPlayer = document.getElementById('audio-player');
  const lyricsContainer = document.getElementById('lyrics-container');

  const lyrics = [
    { time: 13, text: "And I'd give up forever to touch you"}, { time: 16, text: "'Cause I know that you feel me somehow" },
    { time: 21, text: "You're the closest to Heaven that I'll ever be"}, { time: 25, text: "And I don't wanna go home right now" },
    { time: 31, text: "And all I can taste is this moment"}, { time: 36, text: "And all I can breathe is your life" },
    { time: 40, text: "And sooner or later, it's over" },  { time: 44, text: "I just don't wanna miss you tonight." },
    { time: 49, text: "And I don't want the world to see me"}, { time: 53, text: "'Cause I don't think that they'd understand." },
    { time: 59, text: "When everything's meant to be broken"}, { time: 62, text: "I just want you to know who I am" },
    { time: 72, text: "Well, you can't fight the tears that ain't comin'"}, {time: 73, text: "Or the moment of truth in your lies" },
    { time: 77, text: "When everything feels like the movies"}, { time: 79, text: "Yeah, you bleed just to know you're alive" },
    { time: 82, text: "And I don't want the world to see me"}, { time: 85 , text: "'Cause I don't think that they'd understand" },
    { time: 88, text: "When everything's meant to be broken"}, { time: 91, text: "I just want you to know who I am" },
    { time: 197, text: "And I don't want the world to see me"}, { time: 201, text:"'Cause I don't think that they'd understand." },
    { time: 204, text: "When everything's meant to be broken" }, { time: 246, text: "I just want you to know who I am" },
	{ time: 211, text: "And I don't want the world to see me"}, { time: 213, text:"'Cause I don't think that they'd understand." },
    { time: 240, text: "When everything's meant to be broken" }, { time: 243, text: "I just want you to know who I am" },
   { time: 246, text: "I just want you to know who I am" },{ time: 249, text: "I just want you to know who I am" },
    { time: 251, text: "I just want you to know who I am" }, 
  ];

  let currentLine = 0;
  let isTyping = false;

  function typeLine(text, callback) {
    const lineEl = document.createElement('div');
    lineEl.className = 'lyric-line';
    lyricsContainer.appendChild(lineEl);

    let i = 0;
    isTyping = true;

    function typeChar() {
      if (i < text.length) {
        lineEl.textContent += text.charAt(i);
        i++;
        setTimeout(typeChar, 35); // Typing speed
      } else {
        isTyping = false;
        if (callback) callback();
      }
    }

    typeChar();
  }

  function updateLyrics() {
    const currentTime = audioPlayer.currentTime;

    if (!isTyping && currentLine < lyrics.length && currentTime >= lyrics[currentLine].time) {
      typeLine(lyrics[currentLine].text);
      currentLine++;
    }

    requestAnimationFrame(updateLyrics);
  }

  audioPlayer.addEventListener('play', () => {
    requestAnimationFrame(updateLyrics);
  });
};
