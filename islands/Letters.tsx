import {
  useState
} from "preact/hooks";

export default function Letter() {
  const letters = [{
    date: 1,
    text: `Merry Christmas to the one I dedicated this whole website to.
  Yes, I AM TALKING TO YOU, KATIE.
  And if that doesn't make it any clearer, Crystal Kate S. Prado, this project exists because you exist.

  First of all, I wanna thank you. You have awakened the creativity in my soul and pushed me to build something beautiful —
  not because I have to, but simply because I love you.
  This site is my gift, made with prayers, late-night cramming, and love.

  But before anything else, I wanna remind you of the truth:
  No letters, no artworks, no flowers, no gift, not even this entire website — could ever measure your worth.

  You are worth far more than rubies, far more than gold.
  Not because of what you do, but because you are God's daughter.

  Before I could ever call you “my girl” you are God's most beautiful daughter first.
  And I will treat you as His precious child before I treat you as my future wife.

  I thank God every time I remember you,
  because you came into my life and taught me how to love, not the shallow love that you see in the movies —
  but love that is deep, sacrificial, patient, one that honors God.

  Yes, we are still awkward.
  We don't have much interaction in person, sometimes we stare then look away.
  But I am willing to wait.
  Wait a year, a decade, a million years.
  Wait even until my death.
  Jacob worked fourteen years just to get Rachel – I can do the same.

  Because love that honors God,
  and respects you as a woman, doesn't rush.

  This is my first letter.

  More things are waiting for you, my love.

  With a heart full of love,
    Ethan`,
    verse: "Proverbs 3:15 — “She is more precious than rubies; nothing you desire can compare with her.”",
  },
    {
      date: 5,
      text: `I’ve been replaying the 3rd of December in my mind over and over, and I can’t stop thanking God for one of the most beautiful moments in my life.

  Right after my competition, I got the chance to be with you — and that made me the happiest boy. Every little moment with you is priceless. Very, very priceless.

  I enjoyed our little picnic, even though we didn’t eat much and we didn’t even have a picnic blanket HAHA. What I enjoyed more was simply being with you, my love.

  Your voice… it’s so beautiful — like a soothing melody my ears want to hear again and again. Every laugh, every word, everything that flows out of your mouth… I could listen to it forever and still be amazed at how God made you so majestically. I love your voice so, so much.

  And oh man, when you shared that harmonica, right after I joked about it last night, my heart just went crazy. I hesitated to blow into it at first, but eventually I did — and I felt something I’ve never felt before: intimate closeness.

  Seeing you hesitate before blowing into it (RIGHT after it came from my mouth) but then doing it anyway… that tiny pause felt like the world slowed down. It felt like a kiss, just indirectly haha. I thank Jesus for that memory — though it was small, it was so full of love and so full of Him.

  And the times you held my arm… I will never forget them. Each time your hands wrapped around my arm, I could feel the warmth of your skin, and my chest got tight. I love it so much. It made me feel safe, chosen, wanted — all without a single word spoken.

  When I picked that little flower and gave it to you, it was my way of saying thank you for spending this memory with me. Thank you so much, baby.

  I wish I could have more moments like those with you. Time flies so fast when we’re happy. I pray that if God wills, we’ll be together.

  Love,
    Ethan`,
      verse: "Philippians 1:3 — “Everytime I remember you, I give thanks to God”",
    },
    {
      date: 6,
      text: "LOCKED (Balik ka soon)",
      verse: "Numbers 6:25 — “The Lord make His face shine upon you.”",
    },
    {
      date: 7,
      text: "LOCKED",
      verse: "1 Samuel 1:27 — “For this child I prayed, and the Lord has granted me what I asked.”",
    },
    {
      date: 5,
      text: "LOCKED",
      verse: "Psalm 90:1 — “Lord, You have been our dwelling place throughout all generations.”",
    },
  ];

  const [index,
    setIndex] = useState(0);

  const [fade,
    setFade] = useState(false);

  const triggerFade = (newIndex) => {
    setFade(true);
    setTimeout(() => {
      setIndex(newIndex);
      setFade(false);
    }, 600);
  };

  const prevLetter = () =>
  triggerFade(index === 0 ? letters.length - 1: index - 1);

  const nextLetter = () =>
  triggerFade(index === letters.length - 1 ? 0: index + 1);

  return (
    <div class="flex flex-col items-center gap-8">
      {/* Date Badge */}
      <div class="bg-yellow-200 text-yellow-900 rounded-full px-6 py-3 shadow-md font-semibold">
        December {letters[index].date}
      </div>

      {/* Letter Box */}
      <div
        class={`min-w-[280px] items-start px-6 max-w-xl max-h-[50vh] qsfont overflow-y-auto bg-gradient-to-b
        from-pink-100 to-pink-200 text-black rounded-xl p-6 shadow-lg text-lg
        leading-relaxed whitespace-pre-wrap transition-opacity duration-1000
        ${fade ? "opacity-0": "opacity-100"}`}
        >
        {letters[index].text.split("\n").map((line, i) => (
          <p key={i} class="mb-3">
            {line}
          </p>
        ))}
      </div>

{/* Navigation */}
<div class="flex justify-center items-center px-8">
  {/* Previous Button */}
  <button
    onClick={prevLetter}
    class="w-20 h-20 flex items-center justify-center 
               bg-gradient-to-tr from-pink-500 via-rose-500 to-rose-600
               rounded-full shadow-2xl
               transform transition-all duration-300
               hover:scale-110 hover:shadow-[0_0_40px_rgba(255,182,193,0.6)]
               active:scale-95 animate-bounce-slow"
  >
    {/* Left Arrow SVG */}
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
  </button>

  {/* Next Button */}
  <button
    onClick={nextLetter}
    class="w-20 h-20 flex items-center justify-center 
               bg-gradient-to-tr from-pink-500 via-rose-500 to-rose-600
               rounded-full shadow-2xl
               transform transition-all duration-300
               hover:scale-110 hover:shadow-[0_0_40px_rgba(255,182,193,0.6)]
               active:scale-95 animate-bounce-slow"
  >
    {/* Right Arrow SVG */}
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
  </button>
</div>

      {/* Verse Footer */}
      <p class="text-white text-sm text-center max-w-xs italic mt-10 opacity-40">
        {letters[index].verse}
      </p>
    </div>
  );
}