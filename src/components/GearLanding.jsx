import gearBackground from "../assets/gear-background.png";

export default function GearLanding({ onBack }) {
  return (
    <div
      className="min-h-screen w-screen flex flex-col"
      style={{ fontFamily: "Inter, sans-serif", background: "#0c0b0f", color: "#fff" }}
    >
      {/* Top Banner */}
      <div
        className="w-full text-center py-2 text-[11px] font-semibold tracking-wide"
        style={{ background: "#0a0a0a" }}
      >
        PATENT PENDING - WORLD'S FIRST BACKPACKABLE COOLER + SEAT COMBO
        <span className="ml-6" style={{ color: "#ff6bb8" }}>
          FREE SHIPPING ON ALL ORDERS OVER $99
        </span>
      </div>

      {/* Header */}
      <header
        className="w-full border-b"
        style={{
          borderColor: "rgba(255,255,255,0.14)",
          background: "rgba(255,255,255,0.94)",
          color: "#141414",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div
            className="border px-3 py-2 text-sm font-bold"
            style={{ borderColor: "#333" }}
          >
            Amalgamate Hub
          </div>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#" className="hover:opacity-75">
              SHOP
            </a>
            <a href="#" className="hover:opacity-75">
              COMBOS
            </a>
            <a href="#" className="hover:opacity-75">
              ABOUT
            </a>
            <a href="#" className="hover:opacity-75">
              DEALERS
            </a>
            <a href="#" className="hover:opacity-75">
              BLOG
            </a>
            <a href="#" className="hover:opacity-75">
              CONTACT
            </a>
          </nav>

          <button
            onClick={onBack}
            className="rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{
              border: "1px solid #e056a0",
              color: "#e056a0",
              background: "rgba(224,86,160,0.08)",
            }}
          >
            ← Back to Hub
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main
        className="flex-1 relative overflow-hidden"
        style={{
          backgroundImage: `url(${gearBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="relative mx-auto grid h-full max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-10"
        >
          <section>
            <h1
              className="mb-4 text-5xl font-bold leading-[0.95] md:text-7xl"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              CARRY LESS.<br />
              EXPERIENCE <span style={{ color: "#e056a0" }}>MORE.</span>
            </h1>
            <p
              className="mb-7 max-w-xl text-xl leading-8"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              The ultimate backpackable cooler + seat built for water and land adventures.
            </p>
            <div className="flex gap-4">
              <button
                className="rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white hover:bg-pink-600"
              >
                SHOP NOW
              </button>
              <button
                className="rounded-full border border-pink-500 px-6 py-3 text-sm font-semibold text-pink-500 hover:bg-pink-500 hover:text-white"
              >
                EXPLORE COMBOS
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-6 text-sm">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold text-white">GEAR</h3>
              <ul className="space-y-2">
                <li>Built for water and land adventures.</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold text-white">SUPPORT</h3>
              <ul className="space-y-2">
                <li>help@gear.example</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold text-white">SHIPPING</h3>
              <ul className="space-y-2">
                <li>Free over $99</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold text-white">STATUS</h3>
              <ul className="space-y-2">
                <li>12 orders in last hour</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
