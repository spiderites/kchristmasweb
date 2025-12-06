import { useState } from "preact/hooks";

export default function Love() {
  const [showPasswordPopup, setShowPasswordPopup] = useState(true);
  const [showLovePopup, setShowLovePopup] = useState(false);
  const [password, setPassword] = useState("");

  // YES / NO logic
  const [yesScale, setYesScale] = useState(0.1);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const handleNoClick = () => {
    setNoPos({
      x: Math.random() * 280 - 140,
      y: Math.random() * 280 - 140,
    });
    setYesScale((s) => Math.min(s + 0.15, 5));
  };

  const yesClickable = yesScale >= 2.5;

  function handlePasswordSubmit(e: any) {
    e.preventDefault();

    if (password.trim().toUpperCase() === "JESUS") {
      setShowPasswordPopup(false);
      setShowLovePopup(true);
    } else {
      alert("Wrong password!! Balik ka nalang soon");
    }
  }

  return (
    <>
      {/* PASSWORD POPUP */}
      {showPasswordPopup && (
        <div class="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <form
            onSubmit={handlePasswordSubmit}
            class="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col gap-4 text-white w-72"
          >
            <h2 class="text-xl font-bold">Enter the Password</h2>

            <input
              type="password"
              value={password}
              onInput={(e: any) => setPassword(e.target.value)}
              placeholder="Password"
              class="p-2 rounded-lg bg-gray-700 outline-none"
            />

            <button type="submit" class="p-2 bg-green-500 rounded-lg font-bold">
              Submit
            </button>
          </form>
        </div>
      )}

      {/* LOVE POPUP */}
      {showLovePopup && (
        <div class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 text-white">
          <div class="bg-gray-800 p-6 rounded-2xl shadow-xl w-80 flex flex-col gap-6 items-center relative">
            <h2 class="text-xl font-bold text-center">
              Do you love me princess 🥺🥺
            </h2>

            <div class="relative w-full h-64 flex items-center justify-center">
              {/* YES BUTTON */}
              <button
                disabled={!yesClickable}
                class={`bg-green-400 text-black font-bold rounded-full px-6 py-3 transition-all absolute ${
                  yesClickable ? "opacity-100" : "opacity-40"
                }`}
                style={{
                  transform: `scale(${yesScale})`,
                  visibility: yesScale > 0.25 ? "visible" : "hidden",
                }}
                onClick={() => {
                  setShowLovePopup(false); // closes the popup
                }}
              >
                YES
              </button>

              {/* NO BUTTON */}
              <button
                onClick={handleNoClick}
                class="bg-red-400 text-black font-bold rounded-full px-6 py-3 absolute transition-all"
                style={{
                  transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                }}
              >
                NO
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}