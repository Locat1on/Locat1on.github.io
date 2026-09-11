export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-yohji.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Asymmetric decorative elements */}
      <div className="absolute top-20 right-[10%] w-[1px] h-[200px] bg-gradient-to-b from-accent/60 to-transparent" />
      <div className="absolute bottom-32 left-[15%] w-[1px] h-[150px] bg-gradient-to-t from-foreground/20 to-transparent" />

      {/* Main content - offset to the left for asymmetry */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="md:ml-[8%] max-w-2xl">
          {/* Poetic opening */}
          <p className="mono-text text-sm text-muted-foreground tracking-[0.3em] uppercase mb-6 animate-fade-in-left">
            {'// 信息安全 · 深度学习 · 探索'}
          </p>

          {/* Nickname - main identity, serif font */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.9] mb-4">
            Locat1on
          </h1>

          {/* Real name - bold, larger serif */}
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-accent/80 tracking-normal mb-10">
            田嘉宇
          </p>

          {/* Tagline - poetic fragment style */}
          <div className="space-y-3 mb-12">
            <p className="text-xl md:text-2xl text-foreground/80 font-serif">
              湖南大学 · 网络空间安全学院 · 信息安全
            </p>
            {/* Research interests - flowing comma-separated style, no boxes */}
            <p className="text-lg md:text-xl text-muted-foreground font-serif italic">
              联邦学习，大语言模型，智能体，具身智能，AI 应用，隐私保护
            </p>
          </div>

          {/* CTA buttons - architectural style */}
          <div className="flex gap-5">
            <a
              href="#research"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-accent text-accent text-base tracking-wider uppercase hover:bg-accent hover:text-background transition-all duration-300"
            >
              科研经历
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 5H12M9 1L12 5L9 9" />
              </svg>
            </a>
            <a
              href="https://github.com/Locat1on"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-foreground/30 text-foreground text-base tracking-wider uppercase hover:border-foreground hover:text-foreground transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-sm tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-foreground/40 to-transparent" />
      </div>
    </section>
  );
}
