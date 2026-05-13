import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

  .hub-root {
    font-family: 'DM Sans', sans-serif;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .hub {
    display: flex;
    height: 580px;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.08);
  }

  .panel {
    flex: 1;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: flex 0.6s cubic-bezier(0.77, 0, 0.18, 1);
    display: flex;
    flex-direction: column;
  }

  .panel.hovered {
    flex: 2.2;
  }

  .panel + .panel {
    border-left: 1px solid rgba(255,255,255,0.07);
  }

  .panel-pa { background: #050d0a; }
  .panel-pb { background: #0d0a04; }
  .panel-pc { background: #0d0508; }

  .glow {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s;
  }
  .panel.hovered .glow { opacity: 1; }
  .glow-a { background: radial-gradient(ellipse at 50% 50%, rgba(29,158,117,0.22) 0%, transparent 68%); }
  .glow-b { background: radial-gradient(ellipse at 50% 50%, rgba(186,117,23,0.22) 0%, transparent 68%); }
  .glow-c { background: radial-gradient(ellipse at 50% 50%, rgba(212,83,126,0.22) 0%, transparent 68%); }

  .logo-bar {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    flex-shrink: 0;
    overflow: hidden;
    height: 0;
    padding: 0 14px;
    opacity: 0;
    transform: translateY(-100%);
    transition:
      height 0.5s cubic-bezier(0.77,0,0.18,1),
      opacity 0.4s 0.1s,
      transform 0.5s cubic-bezier(0.77,0,0.18,1),
      padding 0.5s;
  }
  .panel.hovered .logo-bar {
    height: 88px;
    opacity: 1;
    transform: translateY(0);
    padding: 18px 14px 14px;
  }

  .logo-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .logo-icon {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border: 2px solid;
  }
  .logo-icon-a {
    background: rgba(29,158,117,0.1);
    border-color: #1D9E75;
    color: #1D9E75;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
  }
  .logo-icon-b {
    background: rgba(239,159,39,0.1);
    border-color: rgba(239,159,39,0.6);
    color: #EF9F27;
    border-radius: 12px;
  }
  .logo-icon-c {
    background: rgba(212,83,126,0.1);
    border-color: rgba(212,83,126,0.6);
    color: #ED93B1;
  }

  .logo-wordmark {
    font-family: 'Bebas Neue', cursive;
    font-size: 15px;
    letter-spacing: 0.1em;
    color: #fff;
    white-space: nowrap;
  }
  .logo-wordmark-a {
    font-family: 'Syne', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.07em;
  }
  .logo-tagline {
    font-size: 7px;
    letter-spacing: 0.16em;
    white-space: nowrap;
    text-transform: uppercase;
    font-family: 'DM Sans', sans-serif;
  }
  .tag-a { color: #5DCAA5; }
  .tag-b { color: #EF9F27; }
  .tag-c { color: #ED93B1; }

  .mid-section {
    position: relative;
    z-index: 5;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 14px;
    overflow: hidden;
  }

  .center-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: absolute;
    transition:
      opacity 0.4s cubic-bezier(0.4,0,0.2,1),
      transform 0.5s cubic-bezier(0.77,0,0.18,1);
    opacity: 1;
    transform: translateY(0);
  }
  .panel.hovered .center-logo {
    opacity: 0;
    transform: translateY(-40px);
    pointer-events: none;
  }

  .center-icon {
    width: 76px;
    height: 76px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    border: 2px solid;
  }
  .center-icon-a {
    background: rgba(29,158,117,0.08);
    border-color: rgba(29,158,117,0.4);
    color: #1D9E75;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
  }
  .center-icon-b {
    background: rgba(239,159,39,0.08);
    border-color: rgba(239,159,39,0.4);
    color: #EF9F27;
    border-radius: 18px;
  }
  .center-icon-c {
    background: rgba(212,83,126,0.08);
    border-color: rgba(212,83,126,0.4);
    color: #ED93B1;
  }

  .center-name {
    font-family: 'Bebas Neue', cursive;
    font-size: 28px;
    letter-spacing: 0.08em;
    color: rgba(255,255,255,0.75);
  }
  .center-name-a {
    font-family: 'Syne', sans-serif;
    font-size: 19px;
    font-weight: 700;
  }
  .center-sub {
    font-size: 9px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-family: 'DM Sans', sans-serif;
  }

  .preview-wrap {
    width: 100%;
    opacity: 0;
    transform: translateY(24px);
    transition:
      opacity 0.45s 0.2s cubic-bezier(0.4,0,0.2,1),
      transform 0.5s 0.18s cubic-bezier(0.4,0,0.2,1);
    pointer-events: none;
  }
  .panel.hovered .preview-wrap {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .preview-card {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.09);
  }

  .amal-preview { background: #0a0f1a; padding: 12px; }
  .amal-hero { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: #fff; line-height: 1.3; margin-bottom: 5px; }
  .amal-hero span { color: #1D9E75; }
  .amal-desc { font-size: 8px; color: rgba(255,255,255,0.45); line-height: 1.5; margin-bottom: 8px; }
  .amal-btn { display: inline-block; background: #1D9E75; color: #fff; font-size: 8px; padding: 4px 10px; border-radius: 100px; font-family: 'DM Sans', sans-serif; margin-bottom: 8px; }
  .amal-stat-row { display: flex; gap: 5px; }
  .amal-stat { flex: 1; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 5px; padding: 5px; text-align: center; }
  .amal-stat-val { font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700; color: #1D9E75; }
  .amal-stat-lbl { font-size: 6.5px; color: rgba(255,255,255,0.35); font-family: 'DM Sans', sans-serif; }

  .adv-preview { background: #080a03; padding: 12px; }
  .adv-tag-pill { display: inline-block; background: rgba(239,159,39,0.1); border: 1px solid rgba(239,159,39,0.25); color: #EF9F27; font-size: 7px; padding: 2px 7px; border-radius: 100px; font-family: 'DM Sans', sans-serif; margin-bottom: 6px; }
  .adv-hero { font-family: 'Bebas Neue', cursive; font-size: 20px; color: #fff; line-height: 1; letter-spacing: 0.04em; margin-bottom: 4px; }
  .adv-hero span { color: #EF9F27; }
  .adv-desc { font-size: 8px; color: rgba(255,255,255,0.4); font-family: 'DM Sans', sans-serif; margin-bottom: 8px; }
  .adv-cards { display: flex; gap: 4px; }
  .adv-ev-card { flex: 1; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 6px; padding: 6px 4px; text-align: center; }
  .adv-ev-icon { font-size: 14px; color: #EF9F27; margin-bottom: 2px; }
  .adv-ev-label { font-size: 7px; color: rgba(255,255,255,0.4); font-family: 'DM Sans', sans-serif; }

  .gear-preview { background: #0c030a; padding: 12px; }
  .gear-banner { background: #D4537E; border-radius: 4px; padding: 3px 6px; font-size: 7px; color: #fff; text-align: center; margin-bottom: 7px; font-family: 'DM Sans', sans-serif; letter-spacing: 0.04em; }
  .gear-hero { font-family: 'Bebas Neue', cursive; font-size: 17px; color: #fff; line-height: 1; margin-bottom: 3px; }
  .gear-hero span { color: #ED93B1; }
  .gear-desc { font-size: 8px; color: rgba(255,255,255,0.4); font-family: 'DM Sans', sans-serif; margin-bottom: 7px; }
  .gear-feats { display: flex; flex-direction: column; gap: 3px; margin-bottom: 8px; }
  .gear-feat { display: flex; align-items: center; gap: 5px; font-size: 7.5px; color: rgba(255,255,255,0.5); font-family: 'DM Sans', sans-serif; }
  .gear-dot { width: 4px; height: 4px; background: #ED93B1; border-radius: 50%; flex-shrink: 0; }
  .gear-shop-btn { display: inline-block; background: #D4537E; color: #fff; font-size: 8px; padding: 4px 10px; border-radius: 100px; font-family: 'DM Sans', sans-serif; }

  .bottom-bar {
    position: relative;
    z-index: 5;
    padding: 12px 16px 18px;
    border-top: 1px solid rgba(255,255,255,0.07);
    flex-shrink: 0;
  }
  .brand-cat {
    font-size: 8.5px;
    letter-spacing: 0.16em;
    font-family: 'DM Sans', sans-serif;
    margin-bottom: 4px;
    text-transform: uppercase;
  }
  .cat-a { color: #5DCAA5; }
  .cat-b { color: #EF9F27; }
  .cat-c { color: #ED93B1; }

  .brand-desc-txt {
    font-size: 11px;
    color: rgba(255,255,255,0.38);
    font-family: 'DM Sans', sans-serif;
    line-height: 1.4;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.4s, opacity 0.35s 0.05s;
  }
  .panel.hovered .brand-desc-txt {
    max-height: 40px;
    opacity: 1;
  }

  .enter-btn {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
    padding: 7px 14px;
    border-radius: 100px;
    font-size: 11px;
    font-family: 'DM Sans', sans-serif;
    border: 1px solid;
    opacity: 0;
    transform: translateY(5px);
    transition: opacity 0.35s 0.2s, transform 0.35s 0.2s;
    text-decoration: none;
    cursor: pointer;
    background: transparent;
    outline: none;
  }
  .panel.hovered .enter-btn {
    opacity: 1;
    transform: translateY(0);
  }
  .enter-btn-a { color: #5DCAA5; border-color: rgba(93,202,165,0.3); background: rgba(93,202,165,0.06); }
  .enter-btn-b { color: #EF9F27; border-color: rgba(239,159,39,0.3); background: rgba(239,159,39,0.06); }
  .enter-btn-c { color: #ED93B1; border-color: rgba(237,147,177,0.3); background: rgba(237,147,177,0.06); }

  .hint {
    text-align: center;
    font-size: 12px;
    color: rgba(255,255,255,0.3);
    margin-top: 10px;
    letter-spacing: 0.06em;
    font-family: 'DM Sans', sans-serif;
  }
`;

const AmalgamatePreview = () => (
  <div className="amal-preview">
    <div className="amal-hero">It's time to <span>unite.</span></div>
    <div className="amal-desc">Empower communities through democratic voting, expert planning & hive-mind collaboration.</div>
    <div className="amal-btn">Donate Now</div>
    <div className="amal-stat-row">
      <div className="amal-stat"><div className="amal-stat-val">10B+</div><div className="amal-stat-lbl">Built for</div></div>
      <div className="amal-stat"><div className="amal-stat-val">Vote</div><div className="amal-stat-lbl">Democratically</div></div>
      <div className="amal-stat"><div className="amal-stat-val">Unite</div><div className="amal-stat-lbl">Together</div></div>
    </div>
  </div>
);

const AdventurePreview = () => (
  <div className="adv-preview">
    <div className="adv-tag-pill">Book your next experience</div>
    <div className="adv-hero">Live <span>Bold.</span></div>
    <div className="adv-desc">Curated events for those who seek the extraordinary — festivals, outdoors, water & more.</div>
    <div className="adv-cards">
      <div className="adv-ev-card">
        <div className="adv-ev-icon">⛰</div>
        <div className="adv-ev-label">Outdoors</div>
      </div>
      <div className="adv-ev-card">
        <div className="adv-ev-icon">🎵</div>
        <div className="adv-ev-label">Festivals</div>
      </div>
      <div className="adv-ev-card">
        <div className="adv-ev-icon">🏄</div>
        <div className="adv-ev-label">Water</div>
      </div>
    </div>
  </div>
);

const GearPreview = () => (
  <div className="gear-preview">
    <div className="gear-banner">FREE SHIPPING ON ALL ORDERS OVER $99</div>
    <div className="gear-hero">Carry Less. <span>More.</span></div>
    <div className="gear-desc">The world's first backpackable cooler + seat for water & land adventures.</div>
    <div className="gear-feats">
      <div className="gear-feat"><div className="gear-dot" /><span>Integrated cooler — keep drinks cold</span></div>
      <div className="gear-feat"><div className="gear-dot" /><span>Built-in seat — comfort anywhere</span></div>
      <div className="gear-feat"><div className="gear-dot" /><span>Paddleboard ready</span></div>
    </div>
    <div className="gear-shop-btn">Shop Now</div>
  </div>
);

const panels = [
  {
    id: "a",
    panelClass: "panel-pa",
    glowClass: "glow-a",
    logoIconClass: "logo-icon-a",
    logoIconContent: "A",
    logoWordmarkClass: "logo-wordmark-a",
    wordmark: "AmalgaMate",
    taglineClass: "tag-a",
    tagline: "It's time to unite",
    centerIconClass: "center-icon-a",
    centerIconContent: "A",
    centerNameClass: "center-name-a",
    centerSubColor: "rgba(93,202,165,0.5)",
    catClass: "cat-a",
    category: "Community Platform",
    desc: "Vote. Collaborate. Shape the future together.",
    enterBtnClass: "enter-btn-a",
    href: "https://amalgamate.ca",
    Preview: AmalgamatePreview,
  },
  {
    id: "b",
    panelClass: "panel-pb",
    glowClass: "glow-b",
    logoIconClass: "logo-icon-b",
    logoIconContent: "🏕",
    logoWordmarkClass: "",
    wordmark: "Adventure",
    taglineClass: "tag-b",
    tagline: "Live every moment",
    centerIconClass: "center-icon-b",
    centerIconContent: "🏕",
    centerNameClass: "",
    centerSubColor: "rgba(239,159,39,0.5)",
    catClass: "cat-b",
    category: "Event Booking",
    desc: "Buy tickets to bold, curated experiences worldwide.",
    enterBtnClass: "enter-btn-b",
    href: "#",
    Preview: AdventurePreview,
  },
  {
    id: "c",
    panelClass: "panel-pc",
    glowClass: "glow-c",
    logoIconClass: "logo-icon-c",
    logoIconContent: "🎒",
    logoWordmarkClass: "",
    wordmark: "Gear",
    taglineClass: "tag-c",
    tagline: "Carry less. Do more.",
    centerIconClass: "center-icon-c",
    centerIconContent: "🎒",
    centerNameClass: "",
    centerSubColor: "rgba(237,147,177,0.5)",
    catClass: "cat-c",
    category: "Gear Shop",
    desc: "Built for every adventure — water and land.",
    enterBtnClass: "enter-btn-c",
    href: "#",
    Preview: GearPreview,
  },
];

export default function AmalgamateHub() {
  const [hoveredId, setHoveredId] = useState(null);

  const handleClick = (panel) => {
    if (panel.href) {
      window.open(panel.href, "_blank");
    } else {
      alert(`Link to ${panel.wordmark} site goes here`);
    }
  };

  return (
    <div className="hub-root">
      <style>{styles}</style>
      <div className="hub">
        {panels.map((panel) => {
          const isHovered = hoveredId === panel.id;
          return (
            <div
              key={panel.id}
              className={`panel ${panel.panelClass} ${isHovered ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredId(panel.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleClick(panel)}
            >
              <div className={`glow ${panel.glowClass}`} />
              <div className="logo-bar">
                <div className="logo-block">
                  <div className={`logo-icon ${panel.logoIconClass}`}>
                    {panel.logoIconContent}
                  </div>
                  <div className={`logo-wordmark ${panel.logoWordmarkClass}`}>
                    {panel.wordmark}
                  </div>
                  <div className={`logo-tagline ${panel.taglineClass}`}>
                    {panel.tagline}
                  </div>
                </div>
              </div>
              <div className="mid-section">
                <div className="center-logo">
                  <div className={`center-icon ${panel.centerIconClass}`} style={{ fontSize: 32 }}>
                    {panel.centerIconContent}
                  </div>
                  <div className={`center-name ${panel.centerNameClass}`}>
                    {panel.wordmark}
                  </div>
                  <div className="center-sub" style={{ color: panel.centerSubColor }}>
                    {panel.tagline}
                  </div>
                </div>
                <div className="preview-wrap">
                  <div className="preview-card">
                    <panel.Preview />
                  </div>
                </div>
              </div>
              <div className="bottom-bar">
                <div className={`brand-cat ${panel.catClass}`}>{panel.category}</div>
                <div className="brand-desc-txt">{panel.desc}</div>
                <button
                  className={`enter-btn ${panel.enterBtnClass}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(panel);
                  }}
                >
                  Enter site →
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hint">Hover any panel to explore · Click to enter</div>
    </div>
  );
}
