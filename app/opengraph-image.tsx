import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Tüm sayfalarda varsayılan olarak kullanılan Open Graph görseli. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "78px",
          background:
            "linear-gradient(135deg, #F8FAF9 0%, #EDF6F1 45%, #DDEFE6 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#5B7D6D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            D
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700, color: "#1F2937" }}>
              {siteConfig.name}
            </span>
            <span style={{ fontSize: 20, color: "#5B7D6D", letterSpacing: 2 }}>
              {siteConfig.role.toUpperCase()}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <span
            style={{
              fontSize: 62,
              lineHeight: 1.12,
              fontWeight: 700,
              color: "#1F2937",
            }}
          >
            Çocuğunuzun ve ailenizin güçlü yarınları için yanınızdayım
          </span>
          <span style={{ marginTop: 26, fontSize: 28, color: "#4B5563" }}>
            Çocuk · Ergen · Ebeveyn · Aile Danışmanlığı
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 6, borderRadius: 99, background: "#7FAF9A" }} />
          <span style={{ fontSize: 24, color: "#5B7D6D" }}>
            {siteConfig.url.replace("https://", "")}
          </span>
        </div>
      </div>
    ),
    size
  );
}
