import { useState, useEffect, useRef } from "preact/hooks";

const API_KEY = "591142de-0cfc-4f7d-9a07-9b43374d658b";
const STORAGE_URL = "https://api.jsonstorage.net/v1/json/85e573df-47a9-4833-a8c8-f60462352109/bc150d5c-62ac-4cbf-8e13-2d1acfd067a0";

export default function LoveCounter() {
  const [loveCount, setLoveCount] = useState(0);
  const [missCount, setMissCount] = useState(0);

  const loveBuffer = useRef(0);
  const missBuffer = useRef(0);
  const timer = useRef<number | null>(null);

  // Load counts from JSON storage
  useEffect(() => {
    async function fetchCounts() {
      try {
        const res = await fetch(STORAGE_URL);
        const data = await res.json();
        if (data.loveCount !== undefined) setLoveCount(data.loveCount);
        if (data.missCount !== undefined) setMissCount(data.missCount);
      } catch (err) {
        console.error("Failed to load counts:", err);
      }
    }
    fetchCounts();
  }, []);

  // Function to update JSON storage
  const updateCounts = async (newLove: number, newMiss: number) => {
    try {
      await fetch(`${STORAGE_URL}?apiKey=${API_KEY}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ loveCount: newLove, missCount: newMiss }),
      });
    } catch (err) {
      console.error("Failed to update counts:", err);
    }
  };

  // Flush buffered clicks to API
  const flushCounts = () => {
    if (loveBuffer.current || missBuffer.current) {
      const newLove = loveCount + loveBuffer.current;
      const newMiss = missCount + missBuffer.current;

      setLoveCount(newLove);
      setMissCount(newMiss);

      updateCounts(newLove, newMiss);

      loveBuffer.current = 0;
      missBuffer.current = 0;
    }
    timer.current = null;
  };

  const handleLoveClick = () => {
    loveBuffer.current += 1;
    if (!timer.current) {
      timer.current = setTimeout(flushCounts, 300) as unknown as number;
    }
  };

  const handleMissClick = () => {
    missBuffer.current += 1;
    if (!timer.current) {
      timer.current = setTimeout(flushCounts, 300) as unknown as number;
    }
  };

  return (
    <div class="flex flex-col items-center gap-8">
      <div class="flex gap-10">
        <button
          class="bg-red-600 p-6 rounded-full text-white text-4xl shadow-lg hover:scale-110 transition"
          onClick={handleLoveClick}
        >
          ❤️
        </button>

        <button
          class="bg-pink-400 p-6 rounded-full text-white text-4xl shadow-lg hover:scale-110 transition"
          onClick={handleMissClick}
        >
          💖
        </button>
      </div>

      <div class="flex gap-10">
        <div class="bg-white/20 px-6 py-2 rounded-full text-white font-bold shadow-lg">
          I Love You: {loveCount + loveBuffer.current}
        </div>
        <div class="bg-white/20 px-6 py-2 rounded-full text-white font-bold shadow-lg">
          I Miss You: {missCount + missBuffer.current}
        </div>
      </div>
    </div>
  );
}