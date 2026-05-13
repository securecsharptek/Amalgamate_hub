import adventureBg from "../assets/adventure_bg.png";

export default function AdventureLanding({ onBack }) {
  return (
    <div
      className="min-h-screen w-screen flex flex-col"
      style={{
        backgroundImage: `url(${adventureBg}), radial-gradient(circle at 20% 20%, rgba(245,166,35,0.2) 0%, rgba(17,14,0,0.95) 35%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#f7f1e8",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <header
        className="w-full border-b"
        style={{ borderColor: "rgba(245,166,35,0.18)", background: "rgba(0,0,0,0.2)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase" style={{ color: "#f5a623" }}>
              Adventure
            </p>
            <p className="text-sm font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Live Every Moment
            </p>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex" style={{ color: "rgba(247,241,232,0.75)" }}>
            <a href="#" className="transition-opacity hover:opacity-80">Destinations</a>
            <a href="#" className="transition-opacity hover:opacity-80">Experiences</a>
            <a href="#" className="transition-opacity hover:opacity-80">About</a>
          </nav>

          <button
            onClick={onBack}
            className="rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{
              border: "1px solid rgba(245,166,35,0.5)",
              color: "#f5a623",
              background: "rgba(245,166,35,0.08)",
            }}
          >
            ← Back to Hub
          </button>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-12">

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <section>
            <p
              className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
              style={{
                border: "1px solid rgba(245,166,35,0.4)",
                color: "#f5a623",
                background: "rgba(245,166,35,0.08)",
              }}
            >
              ADVENTURE PLATFORM
            </p>
            <h1
              className="mb-4 text-4xl font-bold leading-tight md:text-6xl"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "0.03em" }}
            >
              LIVE <span style={{ color: "#f5a623" }}>BOLD.</span>
            </h1>
            <p className="mb-6 text-sm leading-7" style={{ color: "rgba(247,241,232,0.72)" }}>
              Curated events for those who seek the extraordinary. From high-altitude treks to
              late-night festivals, Adventure helps you discover, book, and experience life beyond
              the ordinary.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Outdoors", "Festivals", "Water", "Weekend Trips"].map((item) => (
                <span
                  key={item}
                  className="rounded-full px-3 py-1 text-xs"
                  style={{
                    border: "1px solid rgba(245,166,35,0.35)",
                    color: "#f5a623",
                    background: "rgba(245,166,35,0.06)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section
            className="rounded-2xl p-6"
            style={{
              border: "1px solid rgba(245,166,35,0.2)",
              background: "rgba(245,166,35,0.05)",
            }}
          >
            <h2 className="mb-4 text-lg font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Next Event
            </h2>
            <div
              className="rounded-xl p-4"
              style={{ border: "1px solid rgba(245,166,35,0.3)", background: "rgba(0,0,0,0.18)" }}
            >
              <p className="mb-1 text-lg font-semibold">Himalaya Trek</p>
              <p className="mb-3 text-sm" style={{ color: "rgba(247,241,232,0.72)" }}>
                Jun 12 · Uttarakhand
              </p>
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "rgba(245,166,35,0.2)", color: "#f5a623" }}
              >
                3 spots left
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between text-sm" style={{ color: "rgba(247,241,232,0.72)" }}>
              <span>
                <span style={{ color: "#f5a623" }}>★★★★★</span> 4.9
              </span>
              <span>240 reviews</span>
            </div>

            <button
              className="mt-6 w-full rounded-full px-4 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-85"
              style={{ background: "#f5a623" }}
            >
              Book Your Adventure
            </button>
          </section>
        </div>
        </div>
      </main>

      <footer
        className="w-full border-t"
        style={{ borderColor: "rgba(245,166,35,0.18)", background: "rgba(0,0,0,0.22)" }}
      >
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-5 text-xs md:grid-cols-3 md:px-10">
          <div>
            <p className="mb-1 uppercase tracking-[0.18em]" style={{ color: "#f5a623" }}>Adventure</p>
            <p style={{ color: "rgba(247,241,232,0.65)" }}>Curated experiences for bold explorers.</p>
          </div>
          <div>
            <p className="mb-1 uppercase tracking-[0.18em]" style={{ color: "#f5a623" }}>Contact</p>
            <p style={{ color: "rgba(247,241,232,0.65)" }}>support@adventure.example</p>
          </div>
          <div className="md:text-right">
            <p className="mb-1 uppercase tracking-[0.18em]" style={{ color: "#f5a623" }}>Status</p>
            <p style={{ color: "rgba(247,241,232,0.65)" }}>32 live events this month</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
