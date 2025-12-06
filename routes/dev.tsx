// routes/dev.tsx
import { Head } from "fresh/runtime";
import DevComments from "../islands/DevComments.tsx";
import Love from "../islands/Love.tsx";

export default function DevPage() {
  return (
    <div class="min-h-screen bg-gray-900 p-6 text-white">
      <Head><title>Dev Comments</title></Head>
      <Love />
      <DevComments />
    </div>
  );
}
