const songs = [
  {
    link: "https://open.spotify.com/embed/track/3iBgrkexCzVuPy4O9vx7Mf",
    title: "Glue Song",
    description: "Nostalgic song. The moment I started talking to you, most TikToks we send each other have this song.",
  },
  {
    link: "https://open.spotify.com/embed/track/1UPB5rYJ0bzn6mNSoAHrZC",
    title: "You'll Be In My Heart",
    description: "This song reminds me of how Jesus takes care of us. On top of that, this song expresses the way I hold you tightly in my heart.",
  },
  {
    link: "https://open.spotify.com/embed/track/1dWZwFAgsCwu0WmjtdEtno",
    title: "Hiwaga",
    description: "Ah, this is the first song I used when I put you in my highlights. I know that you're a person that's too soft for this world, and when you listen to this song, I want you to remember, that I'll never do or try anything that'll hurt you.",
  },
  {
    link: "https://open.spotify.com/embed/track/1HNkqx9Ahdgi1Ixy2xkKkL",
    title: "Photograph",
    description: "This is what our love's all about. This song tells me that love isn't a feeling — it's a choice we make everyday, to choose each other in every step of the way.",
  },
    {
    link: "https://open.spotify.com/embed/track/6Qyc6fS4DsZjB2mRW9DsQs",
    title: "Iris",
    description: "AND I'D GIVE UP FOREVER TO TOUCH YOU, 'CAUSE I KNOW THAT YOU FEEL ME SOMEHOW, YOU'RE THE CLOSEST TO HEAVEN THAT I'LL EVER BE AND I DONT WANNA GO HOME RIGHT NOW\n\nAND I DONT WANT THE WORLLLDDD TO SEE MEEE CAUSE I DONT THINK THAT THEY'D UNDERSTAND",
  },
  {
    link: "https://open.spotify.com/embed/track/4VQH4VluDUOsOuDxccTeyN",
    title: "Sanctuary",
    description: "If you've been waitin' for falling in love, babe you don't have to wait on meeeeee, cause I've been aimin' for heaven above but an angel ain't what I neeeed",
  },
    {
    link: "https://open.spotify.com/embed/track/1udOOSbJnytCdgvbgYOF5s",
    title: "Kalapastangan",
    description: "Eto, kakadiscover ko palang to.",
  },
];

function Song({ link, title, description }: { link: string; title: string; description: string }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden w-full max-w-xs">
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src={link}
        width="100%"
        height="80"
        frameBorder="0"
        className="rounded-t-xl"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <div className="p-4 text-left">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function Songs() {
  return (
<div class="grid gap-4 justify-center w-full max-w-[95%] mx-auto grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
  {songs.map((song, i) => (
    <Song key={i} {...song} />
  ))}
</div>
  );
}