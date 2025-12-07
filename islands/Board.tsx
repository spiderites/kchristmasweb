import { useState, useEffect } from "preact/hooks";

const colors = ["#fef68a", "#ffadad", "#caffbf", "#9bf6ff", "#ffd6a5"];

const noteContents = [
  "Mahal Kita ❤️",
  "I love you 💗",
  "I love your heart for Jesus",
  "I love your voice",
  "Ganda kaya boses mo sa vid na yun",
  "I love it when you hold my arm",
  "100 magiging babies natin",
  "12/6/25 — Patawarin mo na kasi ako",
  "GANDAAAA MOOOOOO",
  "I care more of what's inside you",
  "MAG-ADD PA AKO MORE DITO HEHEHEHE",
  "I WANT TO BE WITH U FOREVER",
  "I pray about you everytime",
  "I love your smile",
  "I love your NATURAL scent",
  "You're beautiful in and out",
  "You're so precious to me",
  "Diba sabi ko kulayan ko buhay mo ng red❤️❤️",
];

export default function BulletinBoard() {
  const [notes, setNotes] = useState<
    { id: number; top: number; left: number; rotation: number; color: string; text: string }[]
  >([]);

  useEffect(() => {
  const generated = noteContents.map((text, i) => ({
    id: i,
    top: Math.random() * 90,      
    left: Math.random() * 90,   
    rotation: Math.floor(Math.random() * 20) - 10,
    color: colors[Math.floor(Math.random() * colors.length)],
    text,
  }));
  setNotes(generated);
}, []);

  const handleDrag = (e: any, id: number) => {
    e.preventDefault();
    const startX = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
    const startY = e.type.startsWith("touch") ? e.touches[0].clientY : e.clientY;

    const noteIndex = notes.findIndex((n) => n.id === id);
    if (noteIndex === -1) return;

    const origTop = notes[noteIndex].top;
    const origLeft = notes[noteIndex].left;

    const handleMove = (moveEvent: any) => {
      const currentX = moveEvent.type.startsWith("touch") ? moveEvent.touches[0].clientX : moveEvent.clientX;
      const currentY = moveEvent.type.startsWith("touch") ? moveEvent.touches[0].clientY : moveEvent.clientY;

      const dx = ((currentX - startX) / window.innerWidth) * 100;
      const dy = ((currentY - startY) / window.innerHeight) * 100;

      setNotes((prev) =>
        prev.map((note) =>
          note.id === id
            ? { ...note, top: Math.min(90, Math.max(0, origTop + dy)), left: Math.min(90, Math.max(0, origLeft + dx)) }
            : note
        )
      );
    };

    const handleUp = () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleUp);
  };

  return (
    <div class="relative max-w-5xl mx-auto h-[600px] md:h-[800px] bg-[#745c41] rounded-xl shadow-lg overflow-hidden">
      {notes.map((note) => (
        <div
          key={note.id}
          class="absolute p-4 w-40 h-32 rounded-lg shadow-lg break-words cursor-grab transition-transform duration-200 hover:scale-105"
          style={{
            top: `${note.top}%`,
            left: `${note.left}%`,
            transform: `rotate(${note.rotation}deg)`,
            backgroundColor: note.color,
            color: "#000000",
            fontFamily: "'Quicksand', sans-serif",
          }}
          onMouseDown={(e) => handleDrag(e, note.id)}
          onTouchStart={(e) => handleDrag(e, note.id)}
        >
          <p>{note.text}</p>
        </div>
      ))}
    </div>
  );
}