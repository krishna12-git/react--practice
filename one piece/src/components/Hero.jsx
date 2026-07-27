function Hero() {
  return (
    <section className="relative min-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-black/10 shadow-2xl lg:min-h-[580px]">
      {/* Main Luffy image */}
      <img
        src="/images/luffy-dashboard.png"
        alt="Monkey D. Luffy"
        className="absolute inset-0 h-full w-full object-contain object-bottom"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-950/20 to-transparent" />

      {/* Left red glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />

      {/* Bottom text */}
      <div className="absolute bottom-7 left-5 z-20 sm:left-8">
        <h1 className="max-w-lg text-5xl font-black uppercase leading-[0.85] tracking-tighter text-[#fff0bd] drop-shadow-[0_7px_0_rgba(80,0,0,0.45)] sm:text-6xl lg:text-7xl">
          Monkey
          <br />
          D. Luffy
        </h1>

        <p className="mt-4 text-[10px] italic tracking-[0.18em] text-white/70 sm:text-xs">
          One Piece Full Season 01 – 1115
        </p>
      </div>
    </section>
  );
}

export default Hero;