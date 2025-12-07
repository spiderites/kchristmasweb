import { useState, useEffect } from "preact/hooks";

const themes = [
  { name: "Default", value: "default" },
  { name: "Green + Black", value: "green-black" },
  { name: "Light Sky Blue", value: "sky-blue" },
  { name: "Black + Red & Green", value: "black-red-green" },
 { name: "Sunset Glow", value: "sunset-glow" },
  { name: "Midnight Purple", value: "midnight-purple" },
  { name: "Candy Pastel", value: "candy-pastel" }, 
  { name: "Fire & Ice", value: "fire-ice" },
];

export default function Themes() {
  const [theme, setTheme] = useState("default");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div class="max-w-4xl mx-auto mt-10 flex flex-col items-center relative">
      
      {/* Main toggle button */}
<button
  onClick={() => setOpen(!open)}
  class="px-6 py-3 rounded-full bg-transparent text-white font-semibold border border-white
         hover:bg-white/10 transition-all duration-200"
>
  Change Theme
</button>

      {/* Theme options panel */}
      <div
        class={`mt-3 flex flex-col gap-3 bg-[var(--bg)] p-4 rounded-xl shadow-lg
                transition-all duration-300 absolute top-full z-50
                ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        {themes.map((t) => (
          <button
            key={t.value}
            onClick={() => {
              setTheme(t.value);
              setOpen(false); // auto-close after selection
            }}
            class={`px-4 py-2 rounded-full transition
              ${
                theme === t.value
                  ? "bg-green-600 text-white shadow-[0_0_10px_rgba(0,255,0,0.6)]"
                  : "bg-gray-700 text-gray-200 hover:bg-gray-600"
              }`}
          >
            {t.name}
          </button>
        ))}
      </div>
    </div>
  );
}