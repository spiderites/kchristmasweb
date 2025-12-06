// routes/api/comments.ts
import { Handlers } from "$fresh/server.ts";

const FILE = "./comments.json";

const readComments = async () => {
  try {
    const text = await Deno.readTextFile(FILE);
    return JSON.parse(text);
  } catch {
    return [];
  }
};

const writeComments = async (comments: any[]) => {
  await Deno.writeTextFile(FILE, JSON.stringify(comments, null, 2));
};

export const handler: Handlers = {
  async GET() {
    const comments = await readComments();
    return new Response(JSON.stringify(comments), { status: 200 });
  },

  async POST(req) {
    const newComment = await req.json();
    const comments = await readComments();
    comments.push({
      name: newComment.name,
      text: newComment.text,
      timestamp: newComment.timestamp,
    });
    await writeComments(comments);

    return new Response(JSON.stringify(newComment), { status: 201 });
  },
};