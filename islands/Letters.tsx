import { useState } from "preact/hooks";

export default function Letter() {
  const letters = [
`Merry Christmas to the one I dedicated this whole website to. 
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
But, I am willing to wait. 
Wait a year, a decade, a million years.
Wait even until my death. 
Jacob worked fourteen years just to get Rachel – I can do the same.


Because love that honors God,
and respects you as a woman doesn't rush.

This is my first letter. 

More things are waiting for you, my love.

With a heart full of love,

Ethan`,
    "Every moment with you feels like a blessing 🌸",
    "I can’t wait to see your smile again 😍",
    "You are my answered prayer 🙏❤️",
    "Being with you feels like home 🏡💕"
  ];
 const dates = [2, 3, 7, 4, 5];
  const [index, setIndex] = useState(0);

  const prevLetter = () => setIndex((i) => (i === 0 ? letters.length - 1 : i - 1));
  const nextLetter = () => setIndex((i) => (i === letters.length - 1 ? 0 : i + 1));

  return (
    <div class="flex flex-col items-center gap-8">
      {/* Date Badge */}
      <div class="bg-yellow-200 text-yellow-900 rounded-full w-36 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg font-semibold">
        <p>December {dates[index]}</p>
      </div>

      {/* Letter Box */}
      <div class="min-w-[280px] max-w-xl max-h-96 overflow-y-auto bg-gradient-to-b from-pink-100 to-pink-200 text-black rounded-xl p-6 shadow-lg text-lg leading-relaxed whitespace-pre-wrap">
        {letters[index].split("\n").map((line, i) => (
          <p key={i} class="mb-2">{line}</p>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div class="flex gap-6 font-semibold">
        <button
          class="px-5 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
          onClick={prevLetter}
        >
          ← Previous
        </button>
        <button
          class="px-5 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
          onClick={nextLetter}
        >
          Next →
        </button>
      </div>

      {/* Optional Spiritual Touch */}
      <p class="text-gray-700 text-sm mt-4 text-center">
        "And now these three remain: faith, hope and love. But the greatest of these is love." — 1 Corinthians 13:13
      </p>
    </div>
  );
}