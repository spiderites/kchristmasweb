import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import LetterBox from "../islands/Letters.tsx";

export default define.page(function Home() {
  return (
    <div class="min-h-screen w-full bg-[#292929] text-white font-sans">

      <Head>
        <title>For Kate 💌</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&display=swap"
        />
      </Head>

      {/* HERO SECTION */}
      <section class="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 md:px-10">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-4 text-pink-300 drop-shadow-lg">
          HAAAAIIIII ❤️❤️
        </h1>
        <p class="max-w-2xl text-lg md:text-xl leading-relaxed text-gray-200">
          I promised you that I'll make you a website. Well then, here it is my love 😘😘❤️❤️
        </p>
      </section>

      {/* LOVE LETTER SECTION */}
      <section class="py-16 px-6 w-full bg-gradient-to-b from-pink-500 to-purple-400">
        <h1 class="text-5xl md:text-4xl font-extrabold p-6 text-center mb-10 text-white drop-shadow-lg skew-x-6">
          My Letters For You
        </h1>
        <div class="max-w-4xl mx-auto">
          <LetterBox />
        </div>
      </section>

      {/* GALLERY SECTION */}
<section class="py-16 px-6 bg-[#1f1f1f] text-white">
  <h2 class="text-3xl md:text-4xl font-extrabold text-center mb-10 text-pink-300 drop-shadow-lg">
    Moments & Memories ✨
  </h2>

  <p class="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
    A little gallery of blessings, memories, and things that remind me of God’s grace in our story ❤️🙏
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {/* Example gallery items */}
    {[
      "/images/moment1.jpg",
      "/images/moment2.jpg",
      "/images/moment3.jpg",
      "/images/moment4.jpg",
      "/images/moment5.jpg",
      "/images/moment6.jpg",
    ].map((src, i) => (
      <div key={i} class="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
        <img src={src} alt={`Memory ${i + 1}`} class="w-full h-64 object-cover" />
      </div>
    ))}
  </div>
</section>


      {/* MUSIC SECTION */}
      <section class="py-16 px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-pink-300">SONGS 🎧</h2>
        <p class="text-gray-400 mb-8">Tunes that remind me of you, straight from the heart ❤️</p>

        <audio controls class="mx-auto w-full max-w-md rounded-lg shadow-lg">
          <source src="/your-music-file.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </section>

      {/* FOOTER */}
      <footer class="py-8 text-center text-gray-400 text-sm">
        <p>Built with prayer, code, and a lil Holy Spirit inspiration 🙏✨</p>
        <p>© {new Date().getFullYear()} — For Kate</p>
      </footer>

    </div>
  );
});
