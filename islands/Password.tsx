import { useState, useEffect } from "preact/hooks";

export default function PasswordPopup({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [yesScale, setYesScale] = useState(0.1);
  const [yesClickable, setYesClickable] = useState(false);

  const handlePassword = (e: any) => {
    e.preventDefault();
    if (password === "JESUS") {
      setTimeout(() => setShowQuestion(true), 300);
    } else {
      alert("Wrong! Only JESUS unlocks this 💖");
    }
  };

  const handleNoClick = () => {
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 200 - 100;
    setNoPos({ x: newX, y: newY });

    setYesScale((prev) => {
      const next = prev + 0.1;
      if (next >= 2) setYesClickable(true); // YES becomes clickable
      return next;
    });
  };

  const handleYesClick = () => {
    if (yesClickable) onUnlock();
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-pink-100 z-50 p-4">
      {!showQuestion ? (
        <form onSubmit={handlePassword} className="flex flex-col gap-2 bg-white p-6 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold">Enter the password 💖</h1>
          <input
            type="text"
            value={password}
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
            className="border rounded p-2 text-center"
            placeholder="Password..."
          />
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-2">
            Unlock
          </button>
        </form>
      ) : (
        <div className="relative w-full h-64">
          <h2 className="text-xl font-semibold mb-6">Do you love me, princess? 💖</h2>

          {/* NO Button */}
          <button
            onClick={handleNoClick}
            style={{
              position: "absolute",
              left: `calc(50% + ${noPos.x}px)`,
              top: `calc(50% + ${noPos.y}px)`,
              transition: "all 0.2s ease",
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            NO
          </button>

          {/* YES Button */}
          <button
            onClick={handleYesClick}
            style={{
              transform: `scale(${yesScale})`,
              opacity: yesScale < 0.1 ? 0 : 1,
              transition: "transform 0.3s ease, opacity 0.3s ease",
              pointerEvents: yesClickable ? "auto" : "none",
              position: "absolute",
              left: "50%",
              top: "70%",
              translate: "-50% -50%",
            }}
            className="bg-green-500 text-white px-6 py-3 rounded-full font-bold"
          >
            YES
          </button>
        </div>
      )}
    </div>
  );
}