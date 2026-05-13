import { useState } from "react";

const NETWORK_NODES = [
  { left: "20%", top: "18%", delay: "0s", dx: "4px", dy: "-3px", dur: "6.2s" },
  { left: "29%", top: "31%", delay: "0.9s", dx: "-3px", dy: "4px", dur: "5.8s" },
  { left: "21%", top: "46%", delay: "0.3s", dx: "2px", dy: "3px", dur: "6.5s" },
  { left: "31%", top: "51%", delay: "1.2s", dx: "-4px", dy: "2px", dur: "5.6s" },
  { left: "22%", top: "66%", delay: "0.6s", dx: "3px", dy: "-4px", dur: "6.8s" },
  { left: "48%", top: "35%", delay: "1.5s", dx: "-2px", dy: "4px", dur: "6.1s" },
  { left: "52%", top: "79%", delay: "0.8s", dx: "4px", dy: "-2px", dur: "5.9s" },
  { left: "81%", top: "73%", delay: "1.1s", dx: "-3px", dy: "-3px", dur: "6.7s" },
];

const EMBERS = [
  { left: "8%", top: "18%", size: 13, delay: "0s", duration: "7s" },
  { left: "20%", top: "22%", size: 12, delay: "1s", duration: "8s" },
  { left: "34%", top: "20%", size: 12, delay: "0.5s", duration: "7.5s" },
  { left: "48%", top: "28%", size: 13, delay: "1.8s", duration: "9s" },
  { left: "72%", top: "17%", size: 16, delay: "0.7s", duration: "8.5s" },
  { left: "69%", top: "37%", size: 17, delay: "2.1s", duration: "7.8s" },
  { left: "76%", top: "53%", size: 9, delay: "1.4s", duration: "8.8s" },
];

function PanelOneAmbient() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      <svg className="absolute inset-0 w-full h-full opacity-25 network-web" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="20" y1="18" x2="29" y2="31" stroke="#48d1cc" strokeWidth="0.25" />
        <line x1="29" y1="31" x2="21" y2="46" stroke="#48d1cc" strokeWidth="0.25" />
        <line x1="21" y1="46" x2="31" y2="51" stroke="#48d1cc" strokeWidth="0.25" />
        <line x1="31" y1="51" x2="48" y2="35" stroke="#48d1cc" strokeWidth="0.25" />
        <line x1="31" y1="51" x2="22" y2="66" stroke="#48d1cc" strokeWidth="0.25" />
        <line x1="22" y1="66" x2="52" y2="79" stroke="#48d1cc" strokeWidth="0.25" />
        <line x1="22" y1="66" x2="81" y2="73" stroke="#48d1cc" strokeWidth="0.25" />
      </svg>
      {NETWORK_NODES.map((node, i) => (
        <span
          key={`node-${i}`}
          className="absolute rounded-full network-node"
          style={{
            left: node.left,
            top: node.top,
            width: "6px",
            height: "6px",
            background: "#48d1cc",
            boxShadow: "0 0 10px rgba(72,209,204,0.55)",
            animationDelay: `${node.delay}, ${node.delay}`,
            "--dx": node.dx,
            "--dy": node.dy,
            "--dur": node.dur,
          }}
        />
      ))}
    </div>
  );
}

function PanelTwoAmbient() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      {EMBERS.map((ember, i) => (
        <span
          key={`ember-${i}`}
          className="absolute rounded-full ember"
          style={{
            left: ember.left,
            top: ember.top,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            background: "radial-gradient(circle, rgba(245,166,35,0.95) 0%, rgba(245,166,35,0.25) 70%, transparent 100%)",
            animationDelay: ember.delay,
            animationDuration: ember.duration,
          }}
        />
      ))}
    </div>
  );
}

function PanelThreeAmbient() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      <div
        className="absolute inset-0 grid-drift"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, rgba(224,86,160,0.1) 0 1px, transparent 1px 16px)",
          opacity: 0.35,
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full radar-sweep"
      />
      <div className="absolute left-1/2 top-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full radar-ring" />
      <div
        className="absolute left-1/2 top-1/2 w-52 h-52 -translate-x-1/2 -translate-y-1/2 rounded-full radar-ring"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
}

function AmbientLayer({ panelId }) {
  if (panelId === "amalgamate") return <PanelOneAmbient />;
  if (panelId === "adventure") return <PanelTwoAmbient />;
  if (panelId === "gear") return <PanelThreeAmbient />;
  return null;
}

/* ─────────────────────── PANEL 1 – AmalgaMate ─────────────────────── */
function AmalgaMateCollapsed() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold"
        style={{
          border: "1.5px solid #48d1cc",
          color: "#48d1cc",
          fontFamily: "Space Grotesk, sans-serif",
        }}
      >
        A
      </div>
      <p className="text-white text-lg font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
        AmalgaMate
      </p>
      <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#48d1cc" }}>
        It's time to unite
      </p>
    </div>
  );
}

function AmalgaMateExpanded() {
  return (
    <div className="w-full animate-fade-slide-up" style={{ fontFamily: "Inter, sans-serif" }}>
      <div
        className="rounded-xl p-5 w-full"
        style={{ background: "rgba(13,26,23,0.95)", border: "1px solid rgba(72,209,204,0.15)" }}
      >
        {/* Headline */}
        <p className="text-white text-lg font-semibold mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          It's time to{" "}
          <span style={{ color: "#48d1cc" }}>unite.</span>
        </p>
        <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
          Empower communities through democratic voting, expert planning & hive-mind collaboration.
        </p>

        {/* CTA */}
        <button
          className="text-xs px-4 py-2 rounded-full font-semibold mb-4 text-white transition-opacity hover:opacity-80"
          style={{ background: "#48d1cc" }}
        >
          Donate Now
        </button>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { val: "4.2k", label: "Active votes" },
            { val: "10B+", label: "Built for" },
            { val: "128", label: "This week" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg p-2 text-center"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-sm font-bold" style={{ color: "#48d1cc", fontFamily: "Space Grotesk, sans-serif" }}>
                {s.val}
              </p>
              <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["Forums", "Voting", "Groups", "Events"].map((pill) => (
            <span
              key={pill}
              className="text-[10px] px-3 py-1 rounded-full"
              style={{
                background: "rgba(72,209,204,0.1)",
                border: "1px solid rgba(72,209,204,0.25)",
                color: "#48d1cc",
              }}
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Bottom line */}
        <div className="flex items-center gap-2 text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>
          <span
            className="w-2 h-2 rounded-full live-dot"
            style={{ background: "#48d1cc", boxShadow: "0 0 10px rgba(72,209,204,0.7)" }}
          />
          <span>128 members online now</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── PANEL 2 – Adventure ─────────────────────── */
function AdventureCollapsed() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="w-20 h-20 flex items-center justify-center text-3xl"
        style={{
          background: "rgba(245,166,35,0.1)",
          border: "1.5px solid rgba(245,166,35,0.5)",
          borderRadius: "20px",
          color: "#f5a623",
        }}
      >
        ⛰
      </div>
      <p
        className="text-white text-lg font-bold tracking-[0.15em]"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        ADVENTURE
      </p>
      <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#f5a623" }}>
        Live every moment
      </p>
    </div>
  );
}

function AdventureExpanded() {
  return (
    <div className="w-full animate-fade-slide-up" style={{ fontFamily: "Inter, sans-serif" }}>
      <div
        className="rounded-xl p-5 w-full"
        style={{ background: "rgba(20,17,0,0.95)", border: "1px solid rgba(245,166,35,0.15)" }}
      >
        {/* Badge */}
        <span
          className="inline-block text-[10px] px-3 py-1 rounded-full mb-3"
          style={{
            background: "rgba(245,166,35,0.1)",
            border: "1px solid rgba(245,166,35,0.3)",
            color: "#f5a623",
          }}
        >
          Book your next experience
        </span>

        {/* Headline */}
        <p
          className="text-white text-xl font-bold tracking-wider mb-1"
          style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "0.05em" }}
        >
          LIVE <span style={{ color: "#f5a623" }}>BOLD.</span>
        </p>
        <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
          Curated events for those who seek the extraordinary — festivals, outdoors, water & more.
        </p>

        {/* Category icons */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { icon: "🔺", label: "Outdoors" },
            { icon: "🎵", label: "Festivals" },
            { icon: "💧", label: "Water" },
          ].map((c) => (
            <div
              key={c.label}
              className="rounded-lg p-2 text-center"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="text-xl mb-1">{c.icon}</div>
              <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                {c.label}
              </p>
            </div>
          ))}
        </div>

        {/* Event card */}
        <div
          className="rounded-lg p-3 mb-3"
          style={{ background: "rgba(245,166,35,0.06)", border: "1px solid rgba(245,166,35,0.2)" }}
        >
          <p className="text-xs font-semibold text-white mb-0.5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Himalaya Trek · 3 spots left
          </p>
          <p className="text-[10px] mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
            Jun 12 · Uttarakhand
          </p>
          <span
            className="inline-block text-[10px] px-2.5 py-0.5 rounded-full font-semibold"
            style={{ background: "rgba(245,166,35,0.2)", color: "#f5a623" }}
          >
            3 spots left
          </span>
        </div>

        {/* Rating + activity */}
        <p className="text-[10px] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
          <span style={{ color: "#f5a623" }}>★★★★★</span> 4.9 · 240 reviews
        </p>
        <p className="text-[10px] flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>
          <span
            className="w-2 h-2 rounded-full live-dot"
            style={{ background: "#f5a623", boxShadow: "0 0 10px rgba(245,166,35,0.7)" }}
          />
          <span>32 live events this month</span>
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────── PANEL 3 – Gear ─────────────────────── */
function GearCollapsed() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
        style={{
          border: "1.5px solid #e056a0",
          color: "#e056a0",
        }}
      >
        🎒
      </div>
      <p
        className="text-white text-lg font-bold tracking-[0.15em]"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        GEAR
      </p>
      <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
        Carry less. Do more.
      </p>
    </div>
  );
}

function GearExpanded() {
  return (
    <div className="w-full animate-fade-slide-up" style={{ fontFamily: "Inter, sans-serif" }}>
      <div
        className="rounded-xl overflow-hidden w-full"
        style={{ background: "rgba(20,0,18,0.95)", border: "1px solid rgba(224,86,160,0.15)" }}
      >
        {/* Announcement bar */}
        <div
          className="text-center text-[10px] py-2 px-3 font-semibold text-white tracking-wide"
          style={{ background: "#e056a0" }}
        >
          FREE SHIPPING ON ALL ORDERS OVER $99
        </div>

        <div className="p-5">
          {/* Product image placeholder */}
          <div
            className="rounded-lg w-full h-20 flex items-center justify-center text-4xl mb-3"
            style={{ background: "rgba(224,86,160,0.1)", border: "1px solid rgba(224,86,160,0.2)" }}
          >
            🎒
          </div>

          {/* Price row */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-white text-lg font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              $129
            </span>
            <span className="text-sm line-through" style={{ color: "rgba(255,255,255,0.3)" }}>
              $179
            </span>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-bold"
              style={{ background: "rgba(224,86,160,0.2)", color: "#e056a0" }}
            >
              28% off
            </span>
          </div>

          {/* Rating */}
          <p className="text-[10px] mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
            <span style={{ color: "#e056a0" }}>★★★★★</span> 4.8 · 1.2k reviews
          </p>

          {/* Headline */}
          <p
            className="text-white font-bold text-base mb-2"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "0.03em" }}
          >
            CARRY LESS. <span style={{ color: "#e056a0" }}>MORE.</span>
          </p>

          {/* Bullet features */}
          <p className="text-[10px] mb-4 leading-5" style={{ color: "rgba(255,255,255,0.4)" }}>
            · Integrated cooler &nbsp; · Built-in seat &nbsp; · Paddleboard ready
          </p>

          {/* CTA buttons */}
          <div className="flex gap-2">
            <button
              className="flex-1 text-xs py-2 rounded-full font-semibold text-white transition-opacity hover:opacity-80"
              style={{ background: "#e056a0" }}
            >
              Shop Now
            </button>
            <button
              className="flex-1 text-xs py-2 rounded-full font-semibold transition-opacity hover:opacity-80"
              style={{
                border: "1px solid #e056a0",
                color: "#e056a0",
                background: "transparent",
              }}
            >
              Explore combos
            </button>
          </div>

          <div className="mt-3 flex items-center gap-1.5 text-[10px]" style={{ color: "rgba(255,255,255,0.5)" }}>
            <span
              className="w-2 h-2 rounded-full live-dot"
              style={{ background: "#e056a0", boxShadow: "0 0 10px rgba(224,86,160,0.7)" }}
            />
            <span>12 orders in last hour</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── PANEL CONFIG ─────────────────────── */
const PANELS = [
  {
    id: "amalgamate",
    bg: "#0d1d1a",
    glow: "rgba(72,209,204,0.12)",
    theme: "#48d1cc",
    category: "COMMUNITY PLATFORM",
    tagline: "Vote. Collaborate. Shape the future together.",
    href: "https://amalgamate.ca/",
    Collapsed: AmalgaMateCollapsed,
    Expanded: AmalgaMateExpanded,
  },
  {
    id: "adventure",
    bg: "#110e00",
    glow: "rgba(245,166,35,0.12)",
    theme: "#f5a623",
    category: "EVENT BOOKING",
    tagline: "Buy tickets to bold, curated experiences worldwide.",
    href: "#",
    Collapsed: AdventureCollapsed,
    Expanded: AdventureExpanded,
  },
  {
    id: "gear",
    bg: "#120010",
    glow: "rgba(224,86,160,0.12)",
    theme: "#e056a0",
    category: "GEAR SHOP",
    tagline: "Built for every adventure — water and land.",
    href: "#",
    Collapsed: GearCollapsed,
    Expanded: GearExpanded,
  },
];

/* ─────────────────────── MAIN HUB ─────────────────────── */
export default function AmalgamateHub({ onAdventureEnter, onGearEnter }) {
  const [hovered, setHovered] = useState(null);
  const [tapped, setTapped] = useState(null); // mobile tap-to-expand

  const getActive = (id) => hovered === id || tapped === id;

  const handleTap = (id) => {
    setTapped((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className="flex flex-col w-screen h-screen overflow-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <style>{`
        @keyframes nodePulse {
          0%, 100% { opacity: 0.35; box-shadow: 0 0 8px rgba(72,209,204,0.45); }
          50% { opacity: 1; box-shadow: 0 0 14px rgba(72,209,204,0.8); }
        }
        @keyframes nodeDrift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(var(--dx, 3px), var(--dy, -3px)); }
        }
        @keyframes webPulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.4; }
        }
        .network-node {
          animation: nodePulse 2.8s ease-in-out infinite, nodeDrift var(--dur, 6s) ease-in-out infinite alternate;
        }
        .network-web {
          animation: webPulse 3.2s ease-in-out infinite;
        }

        @keyframes emberFloat {
          0% { transform: translate(0, 10px) scale(0.9); opacity: 0.3; }
          40% { transform: translate(8px, -4px) scale(1); opacity: 0.85; }
          50% { opacity: 0.85; }
          100% { transform: translate(-6px, -22px) scale(1.12); opacity: 0; }
        }
        .ember {
          animation-name: emberFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes radarPulse {
          0% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.45; }
          70% { opacity: 0.08; }
          100% { transform: translate(-50%, -50%) scale(1.3); opacity: 0; }
        }
        .radar-ring {
          border: 1px solid rgba(224,86,160,0.38);
          animation: radarPulse 3s ease-out infinite;
        }

        @keyframes sweepRotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); opacity: 0.12; }
          100% { transform: translate(-50%, -50%) rotate(360deg); opacity: 0.12; }
        }
        .radar-sweep {
          background: conic-gradient(from 0deg, rgba(224,86,160,0.28), rgba(224,86,160,0.03) 36%, transparent 70%);
          filter: blur(0.5px);
          animation: sweepRotate 4s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(12px, -12px); }
        }
        .grid-drift {
          animation: gridMove 8s linear infinite alternate;
        }

        @keyframes liveBlink {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }
        .live-dot {
          animation: liveBlink 1.1s ease-in-out infinite;
        }
      `}</style>
      {/* Panels row */}
      <div className="flex flex-1 min-h-0 flex-col md:flex-row">
        {PANELS.map((panel) => {
          const active = getActive(panel.id);
          return (
            <div
              key={panel.id}
              onClick={() => handleTap(panel.id)}
              onMouseEnter={() => setHovered(panel.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex flex-col overflow-hidden cursor-pointer"
              style={{
                background: panel.bg,
                /* Desktop: flex-based width via flex value */
                flex: active ? "2.44" : "1",
                transition: "flex 0.6s cubic-bezier(0.77,0,0.18,1)",
                borderRight: "1px solid rgba(255,255,255,0.06)",
                /* Mobile: height instead of width */
              }}
            >
              {/* Radial glow when hovered */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 50%, ${panel.glow} 0%, transparent 65%)`,
                  opacity: active ? 1 : 0,
                  transition: "opacity 0.5s ease",
                  zIndex: 1,
                }}
              />
              <AmbientLayer panelId={panel.id} />

              {/* Main content */}
              <div
                className="relative flex flex-col flex-1 min-h-0 items-center justify-center px-5 py-8 overflow-y-auto"
                style={{ zIndex: 2 }}
              >
                {/* Logo block: center by default, slides to top on hover */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: active ? "18px" : "50%",
                    transform: active ? "translate(-50%, 0)" : "translate(-50%, -50%)",
                    transition: "top 0.6s ease, transform 0.6s ease",
                    pointerEvents: "none",
                    zIndex: 3,
                  }}
                >
                  <panel.Collapsed />
                </div>

                {/* Expanded card */}
                <div
                  style={{
                    opacity: active ? 1 : 0,
                    transform: active ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 0.4s ease 0.1s, transform 0.45s ease 0.1s",
                    pointerEvents: active ? "auto" : "none",
                    width: "100%",
                    maxWidth: "340px",
                    marginTop: active ? "86px" : "0",
                    display: active ? "block" : "none",
                  }}
                >
                  <panel.Expanded />
                </div>
              </div>

              {/* Footer strip */}
              <div
                className="relative px-5 py-4 flex items-end justify-between gap-3 flex-shrink-0"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  zIndex: 2,
                }}
              >
                <div className="min-w-0">
                  <p
                    className="text-[9px] font-semibold tracking-[0.18em] uppercase mb-1"
                    style={{ color: panel.theme }}
                  >
                    {panel.category}
                  </p>
                  <p
                    className="text-[10px] leading-tight"
                    style={{ color: "rgba(255,255,255,0.32)", fontFamily: "Inter, sans-serif" }}
                  >
                    {panel.tagline}
                  </p>
                </div>
                <a
                  href={panel.href}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (panel.id === "adventure" && onAdventureEnter) {
                      e.preventDefault();
                      onAdventureEnter();
                    }
                    if (panel.id === "gear" && onGearEnter) {
                      e.preventDefault();
                      onGearEnter();
                    }
                  }}
                  className="flex-shrink-0 text-[10px] px-3 py-1.5 rounded-full font-semibold transition-all duration-200 whitespace-nowrap"
                  style={{
                    border: `1px solid ${panel.theme}`,
                    color: panel.theme,
                    background: `${panel.theme}10`,
                    opacity: active ? 1 : 0,
                    transform: active ? "translateY(0)" : "translateY(6px)",
                    transition: "opacity 0.35s ease 0.2s, transform 0.35s ease 0.2s",
                    pointerEvents: active ? "auto" : "none",
                  }}
                >
                  Enter site →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Shared hint bar */}
      <div
        className="flex-shrink-0 text-center py-3 text-xs tracking-widest uppercase"
        style={{
          color: "rgba(255,255,255,0.22)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          background: "#000",
          fontFamily: "Inter, sans-serif",
          letterSpacing: "0.12em",
        }}
      >
        Hover any panel to explore · Click to enter
      </div>
    </div>
  );
}
