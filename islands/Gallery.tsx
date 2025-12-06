import { useState } from "preact/hooks";

export default function Gallery() {
  const [selected, setSelected] = useState<{ src: string; caption: string } | null>(null);

  const images = [
    { src: "/images/moment1.jpg", caption: "Pookie bearsss" },
    { src: "/images/moment2.jpg", caption: "Nag video call ang mga kyut" },
    { src: "/images/moment3.jpg", caption: "Crush ko yan yieee UWU" },
    { src: "/images/moment4.jpg", caption: "My First Time Giving Flowers" },
    { src: "/images/moment5.jpg", caption: "Sundo" },
    { src: "/images/moment6.jpg", caption: "PLACEHOLDER 💖" },
  ];

  return (
    <>
      {/* Gallery Grid */}
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-7xl mx-auto px-4">
        {images.map((item, i) => (
          <div
            key={i}
            class="relative cursor-pointer overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300 aspect-square"
            onClick={() => setSelected(item)}
          >
            <img src={item.src} alt={item.caption} class="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Expanded Modal */}
      {selected && (
        <div
          class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        >
          <div
            class="relative max-w-5xl w-full mx-auto rounded-xl overflow-hidden shadow-2xl bg-black"
          >
            <button
              class="absolute top-3 right-3 text-white text-3xl font-bold hover:text-pink-400 transition"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
            <img
              src={selected.src}
              alt={selected.caption}
              class="w-full h-auto object-contain max-h-[80vh]"
            />
            <div class="p-4 text-center text-white text-lg">{selected.caption}</div>
          </div>
        </div>
      )}
    </>
  );
}