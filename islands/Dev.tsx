import { useState, useEffect } from "preact/hooks";

interface Comment {
  name: string;
  text: string;
  timestamp: string;
}

const API_KEY = "591142de-0cfc-4f7d-9a07-9b43374d658b";

const DEV_COMMENTS_URL =
  "https://api.jsonstorage.net/v1/json/85e573df-47a9-4833-a8c8-f60462352109/dd3c5622-ab14-4822-a588-2e1afee2f5ea";

const QUIZ_BIN_URL =
  "https://api.jsonstorage.net/v1/json/85e573df-47a9-4833-a8c8-f60462352109/d2a58c1d-3fc7-4d43-a3d6-d93c119bddc9";

const LOVE_COUNTER_URL =
  "https://api.jsonstorage.net/v1/json/85e573df-47a9-4833-a8c8-f60462352109/bc150d5c-62ac-4cbf-8e13-2d1acfd067a0";

// --- Helper gradient class that always works ---
const grad = (...colors: string[]) =>
  `text-transparent bg-gradient-to-r ${colors.join(
    " "
  )} bg-clip-text [background-clip:text] [-webkit-background-clip:text]`;

export default function Dev() {
  // COMMENTS
  const [comments, setComments] = useState<Comment[]>([]);
  const [bufferedComments, setBufferedComments] = useState<Comment[]>([]);
  const [newName, setNewName] = useState("Kate");
  const [newText, setNewText] = useState("");

  // QUIZ ANSWERS
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  // LOVE COUNTER
  const [loveCount, setLoveCount] = useState(0);
  const [missCount, setMissCount] = useState(0);
  const [devLove, setDevLove] = useState(0);
  const [devMiss, setDevMiss] = useState(0);

  // Load Comments
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(DEV_COMMENTS_URL);
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data.comments)) {
          setComments(data.comments);
          setBufferedComments(data.comments);
        }
      } catch (e) {
        console.error(e);
      }
    };
    load();
  }, []);

  // Load Quiz
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(QUIZ_BIN_URL);
        if (!res.ok) return;
        setQuizAnswers(await res.json());
      } catch (e) {
        console.error(e);
      }
    };
    load();
  }, []);

  // Load Love Counter
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(LOVE_COUNTER_URL);
        if (!res.ok) return;
        const data = await res.json();
        if (data.loveCount !== undefined) {
          setLoveCount(data.loveCount);
          setDevLove(data.loveCount);
        }
        if (data.missCount !== undefined) {
          setMissCount(data.missCount);
          setDevMiss(data.missCount);
        }
      } catch (e) {
        console.error(e);
      }
    };
    load();
  }, []);

  const updateComments = async (newComments: Comment[]) => {
    setComments(newComments);
    try {
      await fetch(`${DEV_COMMENTS_URL}?apiKey=${API_KEY}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comments: newComments }),
      });
    } catch (e) {
      console.error(e);
    }
  };

  const updateLoveCounter = async (newLove: number, newMiss: number) => {
    try {
      await fetch(`${LOVE_COUNTER_URL}?apiKey=${API_KEY}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ loveCount: newLove, missCount: newMiss }),
      });
      setLoveCount(newLove);
      setMissCount(newMiss);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = (i: number) =>
    setBufferedComments(bufferedComments.filter((_, idx) => idx !== i));

  const handleEdit = (i: number, text: string) => {
    const arr = [...bufferedComments];
    arr[i].text = text;
    setBufferedComments(arr);
  };

  const handleNameChange = (i: number, name: string) => {
    const arr = [...bufferedComments];
    arr[i].name = name;
    setBufferedComments(arr);
  };

  const handleAdd = () => {
    if (!newText.trim()) return;
    setBufferedComments([
      ...bufferedComments,
      {
        name: newName,
        text: newText.trim(),
        timestamp: new Date().toISOString(),
      },
    ]);
    setNewText("");
  };

  return (
    <div class="min-h-screen bg-[#0b0b0f] text-white p-8 flex flex-col gap-10 max-w-6xl mx-auto">

      {/* TITLE */}
      <h2
        class={`text-6xl font-black text-center mb-4 drop-shadow-[0_0_25px_rgba(120,120,255,0.4)] ${grad(
          "from-purple-300",
          "to-blue-400"
        )}`}
      >
        Dev Control Center ✨
      </h2>

      {/* WRAPPER */}
      <div class="flex flex-col gap-10">

        {/* LOVE COUNTER */}
        <div class="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col gap-6">

          <h3 class={`text-3xl font-bold ${grad("from-pink-400", "to-red-500")}`}>
            ❤️ Love Counter
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">

            {/* LOVE */}
            <div class="flex flex-col gap-2">
              <label class="opacity-70 text-sm tracking-wide">I Love You Count</label>
              <input
                type="number"
                value={devLove}
                onInput={(e: any) => setDevLove(Number(e.target.value))}
                class="p-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-pink-400 transition w-full"
              />
              <span class="text-4xl font-extrabold text-pink-300 tracking-tight">
                {loveCount}
              </span>
            </div>

            {/* MISS */}
            <div class="flex flex-col gap-2">
              <label class="opacity-70 text-sm tracking-wide">I Miss You Count</label>
              <input
                type="number"
                value={devMiss}
                onInput={(e: any) => setDevMiss(Number(e.target.value))}
                class="p-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-indigo-400 transition w-full"
              />
              <span class="text-4xl font-extrabold text-indigo-300 tracking-tight">
                {missCount}
              </span>
            </div>
          </div>

          <button
            onClick={() => updateLoveCounter(devLove, devMiss)}
            class="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 hover:opacity-90 transition text-black shadow-lg"
          >
            Confirm Changes
          </button>
        </div>

        {/* QUIZ ANSWERS */}
        <div class="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col gap-4">

          <h3 class={`text-2xl font-bold ${grad("from-blue-400", "to-cyan-300")}`}>
            💙 Latest Quiz Answers
          </h3>

          {Object.keys(quizAnswers).length === 0 ? (
            <p class="opacity-60">No answers yet.</p>
          ) : (
            <div class="flex flex-col gap-3 text-sm">
              {Object.entries(quizAnswers).map(([k, v]) => (
                <div key={k} class="p-3 bg-black/30 rounded-xl border border-white/10">
                  <span class="font-semibold">{k}: </span>
                  {v}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ADD COMMENT */}
        <div class="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col gap-6">

          <h3 class={`text-2xl font-bold ${grad("from-purple-300", "to-pink-300")}`}>
            📝 Add Comment
          </h3>

          <div class="flex flex-col sm:flex-row gap-4">

            <select
              value={newName}
              onInput={(e: any) => setNewName(e.target.value)}
              class="p-4 rounded-xl bg-black/40 border border-white/10 outline-none"
            >
              <option value="Kate">Kate</option>
              <option value="Anonymous">Anonymous</option>
            </select>

            <input
              type="text"
              placeholder="Write a comment..."
              value={newText}
              onInput={(e: any) => setNewText(e.target.value)}
              class="p-4 rounded-xl flex-1 bg-black/40 border border-white/10 outline-none"
            />

            <button
              onClick={handleAdd}
              class="px-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-black hover:opacity-90 transition shadow-lg"
            >
              Add
            </button>
          </div>

          <button
            onClick={() => updateComments(bufferedComments)}
            class="py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 font-bold text-black hover:opacity-90 transition shadow-lg"
          >
            Confirm Comment Edits
          </button>
        </div>

        {/* COMMENT LIST */}
        <div class="flex flex-col gap-4 max-h-[55vh] overflow-y-auto pr-2">
          {bufferedComments.map((c, i) => (
            <div
              key={i}
              class="p-5 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-xl flex flex-col gap-4 transition hover:bg-white/20"
            >
              <div class="flex gap-4 items-center justify-between">

                <input
                  value={c.name}
                  onInput={(e: any) => handleNameChange(i, e.target.value)}
                  class="p-3 rounded-xl bg-black/40 border border-white/10 outline-none w-36"
                />

                <button
                  onClick={() => handleDelete(i)}
                  class="px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 text-black font-bold hover:opacity-90 transition"
                >
                  Delete
                </button>
              </div>

              <textarea
                value={c.text}
                onInput={(e: any) => handleEdit(i, e.target.value)}
                class="p-4 rounded-xl h-32 bg-black/40 border border-white/10 outline-none w-full"
              />

              <span class="text-xs opacity-50">{c.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}