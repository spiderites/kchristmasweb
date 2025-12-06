interface SpotifyCardProps {
  link: string;
  title: string;
  description: string;
}

export default function Song({
  link, title, description
}: SpotifyCardProps) {
  return (
    <div class="bg-gray-800 rounded-xl shadow-lg overflow-hidden w-full max-w-xs">
      <iframe data-testid="embed-iframe"
        style="border-radius:12px"
        src={link}
        width="100%"
        height="80"
        frameBorder="0"
       class="rounded-t-xl"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
      <div class="p-4 text-left">
        <h3 class="text-white font-semibold text-lg">{title}</h3>
        <p class="text-gray-400 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}