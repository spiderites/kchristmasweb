import { Head } from "fresh/runtime";
import Love from "../islands/Love.tsx";
import Quiz from "../islands/Quiz.tsx";


export default function Special() {
  return (
    <div class="min-h-screen w-full bg-[#292929] text-white p-6 pt-12">
      <Head>
        <title>Special Page</title>
      </Head>

      {/* Q & A AREA */}
      <div class="max-w-2xl mx-auto mb-10">
        <h1 class="text-3xl font-bold mb-4">Special Q&A</h1>
        <p class="opacity-80">
          Ask
        </p>
      </div>

      {/* POPUP ISLAND */}
      <Love />

      {/* QUIZ ISLAND */}
      <Quiz />
    </div>
  );
}