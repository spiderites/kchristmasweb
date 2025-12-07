import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import Letter from "../islands/Letters.tsx";
import Gallery from "../islands/Gallery.tsx";
import Songs from "../islands/Songs.tsx";
import Board from "../islands/Board.tsx";
import Comments from "../islands/Comments.tsx";
import Themes from "../islands/Themes.tsx";

export default define.page(function Home() {
  return (
    <div class="min-h-screen w-full qsfont bg-[var(--bg)] text-[var(--text)] transition-colors duration-500">

      <Head>
        <title>For Kate 💌</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&family=Roboto+Flex:wght@300;700&display=swap"
          rel="stylesheet"
        />

        <style>{`
          .clip-text {
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
          }
        `}</style>
      </Head>

      {/* HERO */}
      <section class="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 md:px-10
        bg-[var(--bg)]">
        
        <h1 class="text-6xl md:text-7xl font-extrabold mb-4 clip-text"
          style={{ backgroundImage: "linear-gradient(to bottom, var(--accent), var(--accent2, var(--accent)))" }}>
          Hey Kate ❤️
        </h1>

        <p class="max-w-2xl text-lg md:text-xl text-[var(--text)]/80 leading-relaxed">
          RED NA FOOO LAHAT THANK YOUUUUY.
        </p>

        <img
          class="opacity-90 drop-shadow-[0_0_20px_rgba(255,0,0,0.5)]"
          src="/stickers/rosy.png"
        />
      </section>

      {/* THEMES SELECTOR */}
      <Themes />

      {/* LETTERS */}
      <section class="py-20 px-6 bg-[var(--bg)]">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-10 clip-text"
          style={{ backgroundImage: "linear-gradient(to bottom, var(--accent), var(--accent2, var(--accent)))" }}>
          Letters For You 💌
        </h2>

        <div class="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg p-8 rounded-2xl 
          shadow-[0_0_25px_rgba(255,0,0,0.15)] border border-[var(--accent)]/20">
          <Letter />
        </div>
      </section>

      {/* GALLERY */}
      <section class="py-20 px-6 bg-[var(--bg)]">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-6 clip-text"
          style={{ backgroundImage: "linear-gradient(to bottom, var(--accent), var(--accent2, var(--accent)))" }}>
          Gallery 📷
        </h2>
        <p class="text-[var(--text)]/70 text-center mb-8">
          Pics natin togetherr📸✨️
        </p>

        <Gallery />
      </section>

      {/* BOARD */}
      <section class="py-20 px-6 bg-[var(--bg)]">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-6 clip-text"
          style={{ backgroundImage: "linear-gradient(to bottom, var(--accent), var(--accent2, var(--accent)))" }}>
          Bulletin Board 📝
        </h2>

        <p class="text-[var(--text)]/80 text-center mb-10">
          Drag the notes — Notes ko yan sayooo😘❤️
        </p>

        <div class="relative max-w-5xl mx-auto w-full h-[600px] md:h-[800px]
          rounded-xl overflow-hidden border border-[var(--accent)]/40 shadow-[0_0_25px_rgba(255,0,0,0.3)]
          bg-[var(--bg)]">
          <Board />
        </div>
      </section>

      {/* SONGS */}
      <section class="py-20 px-6 text-center bg-[var(--bg)]">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 clip-text"
          style={{ backgroundImage: "linear-gradient(to bottom, var(--accent), var(--accent2, var(--accent)))" }}>
          Songs 🎧
        </h2>

        <p class="text-[var(--text)]/70 mb-10">
          Melodies reminding me of the love God’s shaping in us.
        </p>

        <Songs />
      </section>

      {/* COMMENTS */}
      <Comments />

      {/* BUTTON */}
      <a
        href="/special"
        class="bg-green-600 text-black font-extrabold px-8 py-4 rounded-full 
        block mx-auto mt-16 text-center hover:scale-110 transition-all duration-300
        shadow-[0_0_20px_rgba(0,255,20,0.7)]">
        Something Special >>
      </a>

      {/* FOOTER */}
      <footer class="py-10 text-center text-[var(--text)]/60 text-sm mt-16">
        <p>Made by Ethan • For Kate</p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
});