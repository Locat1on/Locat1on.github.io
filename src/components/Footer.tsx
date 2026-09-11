export function Footer() {
  return (
    <footer className="border-t border-border/30 py-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="mono-text text-xs text-muted-foreground tracking-wider">
          &copy; {new Date().getFullYear()} 田嘉宇 · Locat1on
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Locat1on"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-text text-xs text-muted-foreground hover:text-accent transition-colors duration-300"
          >
            GitHub
          </a>
          <a href="#hero" className="mono-text text-xs text-muted-foreground hover:text-accent transition-colors duration-300">
            回到顶部
          </a>
        </div>

        <p className="text-xs text-dust">
          Built with intent.
        </p>
      </div>
    </footer>
  );
}