
import { useState } from "preact/hooks";

export default function SpecialIsland() {
  const [hearts, setHearts] = useState<{ x: number; y: number; id: number }[]>([]);
  const [clickedTiles, setClickedTiles] = useState<number[]>([]);
  const [revealedVerses, setRevealedVerses] = useState<string[]>([]);
  const [nextId, setNextId] = useState(0);

  // Add a floating heart at click position
  const handleClick = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHearts((h) => [...h, { x, y, id: nextId }]);
    setNextId((n) => n + 1);
  };

  // Click a music tile
  const handleTileClick = (idx: number) => {
    if (!clickedTiles.includes(idx)) setClickedTiles([...clickedTiles, idx]);
    // Reveal verse after 3 tiles clicked
    if (clickedTiles.length + 1 === 3) {
      setRevealedVerses((v) => [...v, "Psalm 37:4 — Delight yourself in the LORD!"]);
    }
  };

  return (
    <div
      class="min-h-screen w-full relative bg-gradient-to-b from-purple-800 to-pink-600 overflow-hidden p-6 text-white"
      onClick={handleClick}
    >
      <h1 class="text-5xl font-bold text-yellow-300 text-center mb-8 drop-shadow">
        Welcome to Our Special Place 💖
      </h1>

      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          class="absolute text-pink-400 animate-float text-2xl"
          style={{ left: heart.x, top: heart.y }}
        >
          ❤️
        </div>
      ))}

      {/* Music Wall */}
      <div class="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-12">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            class={`h-20 bg-green-400 rounded-lg flex items-center justify-center cursor-pointer transition-transform ${
              clickedTiles.includes(i) ? "scale-110" : ""
            }`}
            onClick={() => handleTileClick(i)}
          >
            🎵 Tile {i + 1}
          </div>
        ))}
      </div>

      {/* Revealed Verses */}
      <div class="max-w-xl mx-auto text-center">
        {revealedVerses.map((v, idx) => (
          <p key={idx} class="text-yellow-300 text-lg mb-4 drop-shadow">
            {v}
          </p>
        ))}
      </div>

      {/* Confetti (simple random blocks) */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          class="absolute w-2 h-2 bg-pink-400 animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 100}px`,
          }}
        ></div>
      ))}
    </div>
  );
}