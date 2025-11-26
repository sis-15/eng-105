// import { useRef } from 'react';
// import VariableProximity from '../VariableProximity';
import { useEffect, useState } from "react";
import {Introduction} from '../assets/texts';
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [open, setOpen] = useState(true);
  // const containerRef = useRef<HTMLSpanElement>(null);

  // close on Esc
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh"}}>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site introduction"
          onClick={() => setOpen(false)} // click outside content closes it
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            // overlay is transparent; adjust alpha to taste.
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)", // optional nice blur of background
            WebkitBackdropFilter: "blur(6px)",
            transition: "opacity 220ms ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
            style={{
              maxWidth: 720,
              width: "min(92%, 720px)",
              padding: "28px 28px",
              borderRadius: 12,
              // keep the card itself semi-transparent so galaxy is visible
              background: "rgba(255,255,255,0.04)",
              color: "white",
              boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            <h1 style={{ margin: 0, fontSize: "clamp(20px, 2vw, 36px)", fontWeight: 700 }}>
              Welcome — explore the perspective of the universe
            </h1>

            <p style={{ marginTop: 12, marginBottom: 18, fontSize: "clamp(13px, 1.8vw, 16px)", opacity: 0.95 }}>
              Welcome to my digital art exhibition for English 105!<br></br>
              Click anywhere outside or press <strong>Esc</strong> to continue.
            </p>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 4 }}>
              <button
                onClick={() => setOpen(false)}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.06)",
                  color: "white",
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                Enter site
              </button>

              <a
                href="#learn-more"
                onClick={(e) => {
                  e.preventDefault();
                  // example action: close and scroll
                  setOpen(false);
                  document.getElementById("learn-more")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "transparent",
                  color: "white",
                  textDecoration: "none",
                  fontSize: 14,
                }}
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Example page content behind the intro. */}
<div
  style={{
    position: "absolute",
    inset: 0,
    zIndex: 10,
    pointerEvents: "none",
  }}
>
</div>
      <main style={{ position: "relative", zIndex: 1, color: "#fff", padding: 24, backdropFilter: "blur(4px)"}}>
        <section id="learn-more" style={{ paddingTop: 40 }}>
          <h2>Exhibit Introduction</h2>
          <p style={{ maxWidth: 720 }}>
            {Introduction.split('\n').map((line, i) => (
                  <ReactMarkdown key={i}>{line}</ReactMarkdown>
                  ))}
          </p>
        </section>
      </main>
    </div>
  );
}
