// islands/DevComments.tsx
import { useState, useEffect } from "preact/hooks";

interface Comment {
  name: string;
  text: string;
  timestamp: string;
}

const API_KEY = "591142de-0cfc-4f7d-9a07-9b43374d658b";
const BIN_URL =
  "https://api.jsonstorage.net/v1/json/85e573df-47a9-4833-a8c8-f60462352109/dd3c5622-ab14-4822-a588-2e1afee2f5ea";

export default function DevComments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newName, setNewName] = useState("Kate");
  const [newText, setNewText] = useState("");

  // Load comments once
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

  // Overwrite the JSON storage with the full updated array
  const updateComments = async (newComments: Comment[]) => {
    setComments(newComments);
    try {
      await fetch(`${BIN_URL}?apiKey=${API_KEY}`, {
        method: "PUT", // <-- replace entire JSON
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comments: newComments }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = (i: number) => {
    const newComments = comments.filter((_, idx) => idx !== i);
    updateComments(newComments);
  };

  const handleEdit = (i: number, text: string) => {
    const newComments = [...comments];
    newComments[i].text = text;
    updateComments(newComments);
  };

  const handleNameChange = (i: number, name: string) => {
    const newComments = [...comments];
    newComments[i].name = name;
    updateComments(newComments);
  };

  const handleAdd = () => {
    if (!newText.trim()) return;
    const newComment: Comment = {
      name: newName,
      text: newText.trim(),
      timestamp: new Date().toISOString(),
    };
    const updated = [...comments, newComment];
    setNewText("");
    updateComments(updated);
  };

  return (
    <div class="bg-gray-800 text-white p-6 rounded-xl flex flex-col gap-6 max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold mb-2">Dev Comments Panel</h2>

      {/* Add new comment */}
      <div class="flex gap-2 items-center">
        <select
          value={newName}
          onChange={(e: any) => setNewName(e.target.value)}
          class="p-2 rounded bg-gray-700 outline-none text-black"
        >
          <option value="Kate">Kate</option>
          <option value="Anonymous">Anonymous</option>
        </select>
        <input
          type="text"
          placeholder="New comment..."
          value={newText}
          onInput={(e: any) => setNewText(e.target.value)}
          class="p-2 rounded bg-gray-700 outline-none text-black flex-1"
        />
        <button
          onClick={handleAdd}
          class="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add
        </button>
      </div>

      {/* Comments list */}
      <div class="flex flex-col gap-4 max-h-[50vh] overflow-y-auto">
        {comments.map((c, i) => (
          <div key={i} class="bg-gray-700 p-3 rounded-xl flex flex-col gap-2">
            <div class="flex gap-2 items-center">
              <input
                value={c.name}
                onInput={(e: any) => handleNameChange(i, e.target.value)}
                class="p-1 rounded bg-gray-600 text-white outline-none w-24"
              />
              <button
                onClick={() => handleDelete(i)}
                class="bg-red-500 px-2 py-1 rounded hover:bg-red-600 transition text-sm"
              >
                Delete
              </button>
            </div>
            <textarea
              value={c.text}
              onInput={(e: any) => handleEdit(i, e.target.value)}
              class="p-2 rounded bg-gray-600 text-white outline-none w-full"
            />
            <span class="text-xs opacity-70">{c.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
