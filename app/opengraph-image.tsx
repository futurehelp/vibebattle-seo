import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vibebattle — Live AI Coding Battles";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          background: "#05070b",
          color: "white",
          fontFamily: "Arial",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(90,114,162,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(90,114,162,0.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.35,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            right: 40,
            height: 4,
            borderRadius: 999,
            background:
              "linear-gradient(90deg, #14a3ff 0%, #1bc47d 22%, #ffd23f 46%, #ff7a18 70%, #ff3b81 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 90,
            left: 70,
            display: "flex",
            gap: 10,
          }}
        >
          {["#14a3ff", "#ffd23f", "#71717a", "#22c55e", "#ff3b81"].map((color) => (
            <div
              key={color}
              style={{
                width: 22,
                height: 22,
                borderRadius: 999,
                border: `3px solid ${color}`,
                background: "transparent",
              }}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "120px 70px 70px",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              marginBottom: 24,
            }}
          >
            Live AI Coding Battles
          </div>

          <div
            style={{
              fontSize: 86,
              lineHeight: 0.92,
              fontWeight: 900,
              letterSpacing: -3,
              maxWidth: 980,
              textTransform: "uppercase",
            }}
          >
            Vibe Battle turns live coding into a watchable competition format.
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 900,
            }}
          >
            AI-native builders. Real spectators. Ranked outcomes.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
