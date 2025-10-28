export function toEmbedUrl(rawUrl: string | undefined): string | null {
  if (!rawUrl) {
    return null;
  }

  try {
    const parsed = new URL(rawUrl);
    const host = parsed.hostname.replace(/^www\./, "");

    const embedBase = "https://www.youtube-nocookie.com/embed/";

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch" && parsed.searchParams.has("v")) {
        const videoId = parsed.searchParams.get("v");
        if (!videoId) {
          return rawUrl;
        }
        const embedUrl = new URL(`${embedBase}${videoId}`);
        const start = parsed.searchParams.get("start") ?? parsed.searchParams.get("t");
        if (start) {
          const cleaned = start.replace(/[^0-9]/g, "");
          if (cleaned) {
            embedUrl.searchParams.set("start", cleaned);
          }
        }
        embedUrl.searchParams.set("rel", "0");
        embedUrl.searchParams.set("modestbranding", "1");
        return embedUrl.toString();
      }

      if (parsed.pathname.startsWith("/embed/")) {
        const embedUrl = new URL(`${embedBase}${parsed.pathname.replace(/^\/embed\//, "")}`);
        parsed.searchParams.forEach((value, key) => {
          embedUrl.searchParams.set(key, value);
        });
        return embedUrl.toString();
      }
    }

    if (host === "youtu.be") {
      const videoId = parsed.pathname.replace(/^\//, "");
      if (!videoId) {
        return rawUrl;
      }
      const embedUrl = new URL(`${embedBase}${videoId}`);
      const start = parsed.searchParams.get("start") ?? parsed.searchParams.get("t");
      if (start) {
        const cleaned = start.replace(/[^0-9]/g, "");
        if (cleaned) {
          embedUrl.searchParams.set("start", cleaned);
        }
      }
      embedUrl.searchParams.set("rel", "0");
      embedUrl.searchParams.set("modestbranding", "1");
      return embedUrl.toString();
    }

    return rawUrl;
  } catch (error) {
    console.warn("Unable to transform video URL", error);
    return rawUrl;
  }
}
