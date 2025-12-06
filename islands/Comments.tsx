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

  // Load comments once
  useEffect(() => {
    const loadComments = async () => {
      try {
        const res = await fetch(BIN_URL);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.comments)) {
            setComments(data.comments);
          } else {
            setComments([]);
          }
        } else {
          console.error("Failed to fetch comments:", res.status);
        }
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };
    loadComments();
  }, []);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newComment: Comment = {
      name,
      text: input.trim(),
      timestamp: new Date().toISOString(),
    };

    // Update UI immediately
    setComments((prev) => [...prev, newComment]);
    setInput("");

    try {
      // PATCH: append new comment without overwriting existing ones
      const res = await fetch(`${BIN_URL}?apiKey=${API_KEY}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comments: [newComment] }),
      });
      if (!res.ok) console.error("Failed to patch JSON:", res.status);
    } catch (err) {
      console.error("Error patching JSON:", err);
    }
  };

  return (
    <div class="bg-sky-300 p-6 rounded-xl max-w-2xl mx-auto shadow-lg">
      <h2 class="text-2xl font-bold mb-4 text-white text-center drop-shadow-md">
        Share a cute message 💌
      </h2>

      <div class="flex flex-col gap-3 mb-4 h-[50vh] overflow-y-auto">
  {comments.map((c, i) => (
    <div
      key={i}
      class="bg-white text-black rounded-xl p-3 max-w-[80%] self-start shadow-md"
    >
      <p class="font-semibold">{c.name}:</p>
      <p>{c.text}</p>
    </div>
  ))}
</div>

      <form onSubmit={handleSubmit} class="flex flex-col gap-3">
        <select
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          class="px-3 py-2 rounded-lg outline-none border border-gray-200"
        >
          <option value="Kate">Kate</option>
          <option value="Anonymous">Anonymous</option>
        </select>

        <input
          type="text"
          placeholder="Write your message..."
          value={input}
          onInput={(e: any) => setInput(e.target.value)}
          class="px-3 py-2 rounded-lg outline-none border border-gray-200"
        />
        <button
          type="submit"
          class="bg-white text-black font-bold py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Send 💌
        </button>
      </form>
    </div>
  );
}