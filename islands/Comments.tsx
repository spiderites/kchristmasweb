import { useState, useEffect } from "preact/hooks";

interface Comment {
  name: string;
  text: string;
  timestamp: string;
}

const API_KEY = "591142de-0cfc-4f7d-9a07-9b43374d658b";
const BIN_URL =
  "https://api.jsonstorage.net/v1/json/85e573df-47a9-4833-a8c8-f60462352109/dd3c5622-ab14-4822-a588-2e1afee2f5ea";

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("Kate");
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  useEffect(() => {
    const loadComments = async () => {
      try {
        const res = await fetch(BIN_URL);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.comments)) setComments(data.comments);
        }
      } catch (err) {
        console.error(err);
      }
    };
    loadComments();
  }, []);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (name === "Kate") {
      setShowPasswordPopup(true);
      return;
    }
    await submitComment();
  };

  const submitComment = async () => {
    if (!input.trim()) return;

    const newComment: Comment = {
      name,
      text: input.trim(),
      timestamp: new Date().toISOString(),
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setInput("");

    try {
      await fetch(`${BIN_URL}?apiKey=${API_KEY}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comments: updatedComments }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handlePasswordSubmit = (e: Event) => {
    e.preventDefault();
    if (passwordInput === "CKP123") {
      setShowPasswordPopup(false);
      setPasswordInput("");
      submitComment();
    } else {
      alert("You are NOT my princess😭🙏");
    }
  };

  return (
    <div class="max-w-3xl mx-auto px-6 py-16">

      {/* TITLE */}
      <h2
        class="text-4xl font-extrabold text-center mb-10 clip-text drop-shadow-[0_0_20px_rgba(255,0,0,0.4)]"
        style={{ backgroundImage: "linear-gradient(to bottom, var(--accent), var(--accent2, var(--accent)))" }}
      >
        Message Wall 💬
      </h2>

      {/* COMMENTS BOX */}
      <div
        class="bg-[var(--bg)]/50 backdrop-blur-xl border border-[var(--accent)]/20 
        rounded-2xl p-6 shadow-[0_0_25px_rgba(255,0,0,0.2)]"
      >
        <p class="text-[var(--text)]/70 text-center mb-6 text-sm">
          Leave me a message sweetheart
        </p>

        <div class="flex flex-col gap-4 mb-8 h-[45vh] overflow-y-auto pr-2">
          {comments.map((c, i) => (
            <div
              key={i}
              class="bg-[var(--bg)]/40 border border-[var(--accent)]/30 p-4 rounded-xl 
              shadow-[0_0_10px_rgba(255,0,0,0.15)] max-w-[80%]"
            >
              <p class="font-bold text-[var(--accent)]">{c.name}</p>
              <p class="text-[var(--text)]">{c.text}</p>
              <p class="text-[10px] text-[var(--text)]/50 mt-1">
                {new Date(c.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} class="flex flex-col gap-4">

          <select
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            class="px-3 py-2 rounded-lg bg-[var(--bg)]/50 border border-[var(--accent)]/30 
            text-[var(--text)] outline-none"
          >
            <option value="Kate">Kate</option>
            <option value="Anonymous">Anonymous</option>
          </select>

          <input
            type="text"
            placeholder="Write something sweet..."
            value={input}
            onInput={(e: any) => setInput(e.target.value)}
            class="px-3 py-2 rounded-lg bg-[var(--bg)]/50 border border-[var(--accent)]/30 
            text-[var(--text)] outline-none"
          />

          <button
            type="submit"
            class="bg-[var(--accent)] text-[var(--text)] font-bold py-2 rounded-lg 
            hover:brightness-110 hover:scale-[1.03] transition-all
            shadow-[0_0_15px_rgba(255,0,0,0.5)]"
          >
            Send ❤️
          </button>

        </form>
      </div>


      {/* PASSWORD POPUP */}
      {showPasswordPopup && (
        <div class="fixed inset-0 bg-[var(--bg)]/70 flex items-center justify-center z-50">
          <form
            onSubmit={handlePasswordSubmit}
            class="bg-[var(--bg)]/80 border border-[var(--accent)]/40 p-6 rounded-2xl backdrop-blur-xl 
            shadow-[0_0_25px_rgba(255,0,0,0.4)] flex flex-col gap-4 text-[var(--text)] w-72"
          >
            <h2
              class="text-xl font-bold clip-text"
              style={{ backgroundImage: "linear-gradient(to bottom, var(--accent), var(--accent2, var(--accent)))" }}
            >
              WAIT! Are you my princess?? 🤨🤨
            </h2>

            <p class="text-sm text-[var(--text)]/70">
              Just making sure...
            </p>

            <input
              type="password"
              value={passwordInput}
              onInput={(e: any) => setPasswordInput(e.target.value)}
              placeholder="Password"
              class="p-2 rounded-lg bg-[var(--bg)]/50 border border-[var(--accent)]/30 outline-none text-[var(--text)]"
            />

            <div class="flex justify-between gap-2">
              <button
                type="submit"
                class="p-2 bg-[var(--accent)] rounded-lg font-bold hover:brightness-110 
                transition shadow-[0_0_10px_rgba(255,0,0,0.4)] text-[var(--text)]"
              >
                Confirm
              </button>
              <button
                type="button"
                class="p-2 bg-[var(--text)]/20 rounded-lg font-bold hover:brightness-90 transition"
                onClick={() => {
                  setShowPasswordPopup(false);
                  setPasswordInput("");
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}