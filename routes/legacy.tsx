import {
  Head
} from "fresh/runtime";
import {
  define
} from "../utils.ts";
import Letter from "../islands/Letters.tsx";
import Gallery from "../islands/Gallery.tsx";
import Songs from "../islands/Songs.tsx";
import Board from "../islands/Board.tsx";
import Comments from "../islands/legacy/Comments.tsx";

export default define.page(function Home() {
  return (
    <div class="min-h-screen w-full bg-[#292929] text-white qsfont">

      <Head>
        <title>For Kate 💌</title>
       <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin title/>
<link href="https://fonts.googleapis.com/css2?family=Quicksand&family=Roboto+Flex:opsz,slnt,wdth,wght,GRAD,XOPQ,XTRA,YOPQ@8..144,-10..0,25..151,100..1000,-200..150,27..175,323..603,25..135&display=swap" rel="stylesheet" />
      </Head>

      {/* HERO SECTION */}
      <section class="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 md:px-10">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-4 text-pink-300 drop-shadow font-extrabold">
          Hey Kate
        </h1>
        <p class="max-w-2xl text-lg md:text-xl leading-relaxed text-gray-200">
          This website is my gift for you, My love.
        </p>
      <img src="/stickers/rosy.png" />
      </section>

      {/* LOVE LETTER SECTION */}
      <section class="py-16 px-6 w-full bg-gradient-to-b from-pink-500 to-purple-400 min-h-[80vh]">
        <h1 class="text-5xl md:text-4xl p-6 text-center mb-10 text-white drop-shadow-lg skew-x-6 roboto-flex-letters">
  My Letters For You
</h1>
        <div class="max-w-4xl mx-auto">
          <Letter />
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section class="py-16 px-6 bg-[#1f1f1f] text-white">
  <h2 class="text-3xl md:text-4xl font-extrabold text-center mb-10 text-pink-300 drop-shadow-lg">
    Gallery ✨
  </h2>

  <p class="text-gray-300 text-center mb-4 max-w-2xl mx-auto">
    Pictures natin magkasama with notes pa yan
  </p>

  <Gallery />
</section>

{/* BULLETIN BOARD */}
<section class="px-6 py-12 bg-[#3b5323] text-white">
  <div class="max-w-5xl mx-auto text-center">
    <h2 class="text-3xl md:text-5xl font-bold mb-6 text-yellow-200 drop-shadow-lg">
      Bulletin Board 📝✨
    </h2>
    <p class="text-lg md:text-xl mb-10 text-yellow-100">
      Drag the sticky notes with your fingers! Move them around and read the notes I wrote for you!
    </p>

    <div class="relative w-full h-[600px] md:h-[800px] rounded-xl shadow-2xl overflow-hidden border-4 border-yellow-800 bg-[#745c41]">
      <Board />
    </div>
  </div>
</section>

    {/* MUSIC SECTION */}
    <section class="py-16 px-6 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4 text-pink-300">SONGS 🎧</h2>
      <p class="text-gray-400 mb-8">
        Tunes that remind me of you, straight from the heart ❤️
      </p>

      <div class="gap-8 justify-items-center">
      {/*SONG SHELF*/}
      <Songs />
      </div>
    </section>
    <Comments />
    <a
  href="/special"
  class="bg-[#1DB954] text-black font-extrabold px-6 py-3 rounded-full block mx-auto mt-10 text-center hover:scale-105 transition"
>
  Something Special >>
</a>
 { /* FOOTER */}
    <footer class="py-8 text-center text-gray-400 text-sm">
      <p>
        Made by Ethan
      </p>
      <p>
        © {new Date().getFullYear()} — For Kate
      </p>
    </footer>

  </div>
);
});