import { Head } from "fresh/runtime";
import Love from "../islands/Love.tsx";
import Quiz from "../islands/Quiz.tsx";
import LoveCounter from "../islands/LoveCounter.tsx"; // <- import new island

export default function Special() {
  return (
    <div class="min-h-screen w-full bg-[#1e1e1e] text-white">

      <Head>
        <title>Special Page</title>
      </Head>

{/* HERO */}
<section class="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
  <img 
    src="images/red-lily.jpg" 
    alt="Red Lily" 
    class="absolute inset-0 w-full h-full object-cover opacity-70"
  />

  <div class="absolute inset-0 bg-black/40"></div>

  <div class="relative text-center px-6">
    <h1 class="text-5xl font-extrabold drop-shadow-lg mb-4">
      For My Favorite Girl 🌺
    </h1>
    <p class="text-xl opacity-90 max-w-xl mx-auto drop-shadow">
      Red lilies are beautiful and pure, just like the love I have for you. I chose them because I know they are your favorite. Even when life gets hard, my love will stay strong, just like God’s love never ends. I love you forever.
    </p>
  </div>

  {/* Sticky Notes */}
  <div class="absolute top-10 left-10 bg-yellow-200 text-black p-4 rounded-xl shadow-xl rotate-[-6deg] w-40">
    <p class="font-bold">❤️ Symbol</p>
    <p class="text-sm">Red lilies = love, purity, and devotion</p>
  </div>

  <div class="absolute bottom-10 right-10 bg-pink-200 text-black p-4 rounded-xl shadow-xl rotate-[4deg] w-40">
    <p class="font-bold">🌱 Meaning</p>
    <p class="text-sm">A love that grows, just like Christ grows in our hearts.</p>
  </div>
</section>

      <section class="py-20 px-6 bg-gradient-to-b from-purple-700 to-purple-500">
        <div class="max-w-lg mx-auto text-center">
          <h3 class="text-3xl font-bold mb-6 text-white drop-shadow-lg">
            I Love Only You💗
          </h3>
          <p class="text-gray-200 mb-8">
           You're second in my heart. Just right next to God. I love you and only you. No other girls, not even the one you're jealous about can take me away from you.
          </p>
          <Love />
        </div>
      </section>

      <section class="py-20 px-6 bg-[#292929]">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-4xl font-extrabold text-blue-300 drop-shadow mb-4">
            Q & A 💬
          </h2>
          <p class="text-gray-300 text-lg">Answer mo to lahat nhay plzzzz labyoooo</p>
        </div>

        <Quiz />
      </section>

      {/* NEW Love Counter Section */}
      <section class="py-20 px-6 bg-gradient-to-b from-pink-500 to-red-500">
        <div class="max-w-lg mx-auto text-center">
          <h2 class="text-4xl font-extrabold text-white drop-shadow mb-8">
            Express Your Love ❤️
          </h2>
          <LoveCounter />
        </div>
      </section>

    </div>
  );
}