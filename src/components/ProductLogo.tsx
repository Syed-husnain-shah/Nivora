export default function ProductLogo({
  slug,
  name,
  size = 40,
}: {
  slug?: string;
  name?: string;
  size?: number;
}) {
  const normalized = (slug || name || "").toLowerCase();

  if (normalized.includes("canva") || normalized === "design") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Canva"
      >
        <rect width="40" height="40" rx="10" fill="url(#canva-gradient)" />
        <path
          d="M20 28.5c-4.5 0-7.8-3-7.8-8 0-5.2 3.5-8.5 8-8.5 3.3 0 5.5 1.7 6.3 3.9l-3.4 1.5c-.5-1.3-1.5-2.1-2.9-2.1-2.4 0-4.1 2.1-4.1 5.2 0 3.2 1.6 4.9 3.8 4.9 1.5 0 2.7-.7 3.4-2.1l3.2 1.7c-1.3 2.2-3.7 3.5-6.5 3.5z"
          fill="#ffffff"
        />
        <defs>
          <linearGradient
            id="canva-gradient"
            x1="0"
            y1="0"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C4CC" />
            <stop offset="1" stopColor="#7D2AE8" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (
    normalized.includes("chatgpt") ||
    normalized.includes("openai") ||
    normalized.includes("ai-productivity") ||
    normalized.includes("productivity")
  ) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ChatGPT"
        className="bg-red-500"
      >
        <rect width="40" height="40" rx="10" fill="#10A37F" />
        <path
          d="M29.5 17.6c-.3-2.5-2-4.5-4.4-5.1-.6-.2-1.2-.2-1.8-.1-1-2.3-3.2-3.9-5.8-4-1.9 0-3.7.8-5 2.1-1.3-.4-2.7-.3-4 .3-2.2 1-3.6 3.2-3.6 5.6 0 .5.1 1.1.2 1.6-1.9 1.5-2.8 3.9-2.2 6.3.6 2.4 2.5 4.2 4.9 4.6.4 1.9 1.7 3.6 3.5 4.5 1.8.9 4 .9 5.8-.1 1.1 1.3 2.7 2 4.4 2 1.9 0 3.7-.8 5-2.1 1.3.4 2.7.3 4-.3 2.2-1 3.6-3.2 3.6-5.6 0-.5-.1-1.1-.2-1.6 1.9-1.5 2.8-3.9 2.2-6.3-.6-2.4-2.5-4.2-4.9-4.6zm-7 11.2c-1.3.7-2.9.7-4.2 0l-4.5-2.6 1.5-2.6 3.7 2.1c.5.3 1.1.3 1.6 0l4.5-2.6v2.3l-2.6 1.4zm-9.8-4.2c-.8-1-1-2.4-.6-3.7.4-1.2 1.4-2.1 2.6-2.5v5.3l-2 1.1zm-1.8-8.8c.8-1 2-1.6 3.3-1.6h.4v5.3l-4.5 2.6-1.5-2.6 2.3-3.7zm11.2-1.9c1.3-.7 2.9-.7 4.2 0l4.5 2.6-1.5 2.6-3.7-2.1c-.5-.3-1.1-.3-1.6 0l-4.5 2.6V14l2.6-1.5zm9.8 4.2c.8 1 1 2.4.6 3.7-.4 1.2-1.4 2.1-2.6 2.5v-5.3l2-1.1zm-6.7 5.7l-3.2-1.8 3.2-1.8 3.2 1.8-3.2 1.8z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  if (
    normalized.includes("capcut") ||
    normalized.includes("video-editing") ||
    normalized.includes("editing")
  ) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="CapCut"
      >
        <rect width="40" height="40" rx="10" fill="#111111" />
        <path
          d="M6 14.5L20 6.4l14 8.1-8.5 4.9L20 16.2l-5.5 3.2L6 14.5z"
          fill="#ffffff"
        />
        <path
          d="M6 25.5L20 33.6l14-8.1-8.5-4.9L20 23.8l-5.5-3.2-8.5 4.9z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  if (
    normalized.includes("spotify") ||
    normalized.includes("music-streaming") ||
    normalized.includes("music")
  ) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Spotify"
      >
        <rect width="40" height="40" rx="10" fill="#1DB954" />
        <path
          d="M20 9c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zm5.1 15.8c-.2.3-.6.4-.9.2-2.6-1.6-5.8-1.9-9.7-1.1-.4.1-.7-.1-.8-.5-.1-.4.1-.7.5-.8 4.2-1 7.8-.6 10.7 1.2.3.2.4.6.2 1zm1.3-3c-.2.4-.8.5-1.2.3-3-1.8-7.5-2.3-11-1.3-.5.1-.9-.1-1.1-.6-.1-.5.1-.9.6-1.1 4-1.2 9-.6 12.4 1.5.4.2.5.8.3 1.2zm.1-3.1c-3.6-2.1-9.4-2.3-12.8-1.3-.5.2-1.1-.1-1.3-.7-.2-.5.1-1.1.7-1.3 3.9-1.2 10.3-1 14.4 1.5.5.3.7.9.4 1.4-.3.5-.9.7-1.4.4z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  if (normalized.includes("youtube")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="YouTube"
      >
        <rect width="40" height="40" rx="10" fill="#FF0000" />
        <path d="M16 13.5l11 6.5-11 6.5v-13z" fill="#ffffff" />
      </svg>
    );
  }

  if (normalized.includes("notion")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Notion"
      >
        <rect width="40" height="40" rx="10" fill="#000000" />
        <path
          d="M10.5 10.2c.7.6 1 .5 2.4.4l11.5-.8c1.1-.1 1.4-.4 1.4-1 0-.3-.1-.7-.5-.9L22.9 6.4c-.7-.5-1.2-.6-2.2-.4L8.9 6.9c-.9.1-1.3.5-1.3 1.1 0 .3.1.7.5.9l2.4 1.3zm1.3 3.1v13.5c0 1.1.5 1.5 1.8 1.4l12.7-.9c1.3-.1 1.6-.8 1.6-1.7V12.3c0-1-.4-1.4-1.5-1.4L13.2 12c-1.1.1-1.4.5-1.4 1.4zm12 1.3c.1.4 0 .8-.4.9l-1 .1v8.6c-1.1.7-2.2 1-3.3 1-1.7 0-2.1-1-3.4-2.5L12.4 18v5.2l1.7.4c.1.4-.1.8-.6.8l-2.7.2c-.1-.4.1-.8.5-.8l1-.2V15.7l-1.5-.4c-.1-.4.1-.8.6-.8l3.1-.2 3.7 5.5V15l-1.5-.4c-.1-.4.1-.8.6-.8l2.9-.2c.1 0 .3.1.3.1.7.2 1.1.6 1.1 1.1z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  if (normalized.includes("figma")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Figma"
      >
        <rect width="40" height="40" rx="10" fill="#1E1E1E" />
        <g transform="translate(10, 7) scale(0.9)">
          <path d="M4 14a4 4 0 1 1 0-8h4v8H4z" fill="#F24E1E" />
          <path d="M8 6h4a4 4 0 1 1 0 8H8V6z" fill="#FF7262" />
          <path d="M8 14H4a4 4 0 1 0 4 4v-4z" fill="#A259FF" />
          <path d="M12 14a4 4 0 1 1-4 4 4 4 0 0 1 4-4z" fill="#1ABCFE" />
          <path d="M4 22a4 4 0 0 0 4 4v-4H4z" fill="#0ACF83" />
        </g>
      </svg>
    );
  }

  if (normalized.includes("davinci")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="DaVinci Studio"
      >
        <rect width="40" height="40" rx="10" fill="#17181C" />
        <g transform="translate(8, 8) scale(1)">
          <path
            d="M12 4a8 8 0 0 1 6.93 4l-4.93 2.85A4 4 0 0 0 12 8V4z"
            fill="#E53935"
          />
          <path
            d="M18.93 8a8 8 0 0 1 0 8l-4.93-2.85A4 4 0 0 0 14 12a4 4 0 0 0-.01-.85L18.93 8z"
            fill="#FDD835"
          />
          <path
            d="M18.93 16A8 8 0 0 1 12 20v-4a4 4 0 0 0 2-1.15L18.93 16z"
            fill="#43A047"
          />
          <path
            d="M12 20a8 8 0 0 1-6.93-4l4.93-2.85A4 4 0 0 0 12 16v4z"
            fill="#1E88E5"
          />
          <path
            d="M5.07 16a8 8 0 0 1 0-8l4.93 2.85A4 4 0 0 0 10 12a4 4 0 0 0 .01.85L5.07 16z"
            fill="#8E24AA"
          />
          <path
            d="M5.07 8A8 8 0 0 1 12 4v4a4 4 0 0 0-2 1.15L5.07 8z"
            fill="#FB8C00"
          />
        </g>
      </svg>
    );
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "10px",
        background: "#7965ed",
        color: "#fff",
        display: "grid",
        placeItems: "center",
        fontWeight: 800,
        fontSize: Math.round(size * 0.4),
      }}
    >
      {(name || slug || "NV").substring(0, 2).toUpperCase()}
    </div>
  );
}
