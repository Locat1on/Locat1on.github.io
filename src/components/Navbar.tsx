import { useState } from 'react';
import { useMouseGlow } from '@/hooks/useMouseGlow';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const mouse = useMouseGlow();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-sm bg-background/80">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        <a href="#hero" className="font-mono text-lg font-bold tracking-tight text-foreground hover:text-accent transition-colors duration-300">
          Locat1on
        </a>

        <div className="hidden md:flex items-center gap-6">
          {[
            { label: '关于', id: 'about' },
            { label: '科研', id: 'research' },
            { label: '成果', id: 'achievements' },
            { label: '联系', id: 'contact' },
          ].map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-accent transition-colors duration-300 p-1"
            aria-label={theme === 'dark' ? '切换到浅色模式' : '切换到深色模式'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <MobileMenu theme={theme} toggleTheme={toggleTheme} />

        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            background: `radial-gradient(200px circle at ${mouse.x}px ${mouse.y}px, hsl(var(--accent)), transparent)`,
          }}
        />
      </div>
    </nav>
  );
}

function MobileMenu({ theme, toggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: '关于', id: 'about' },
    { label: '科研', id: 'research' },
    { label: '成果', id: 'achievements' },
    { label: '联系', id: 'contact' },
  ];

  return (
    <div className="md:hidden flex items-center gap-2">
      <button
        onClick={toggleTheme}
        className="text-muted-foreground hover:text-accent transition-colors duration-300 p-1"
        aria-label={theme === 'dark' ? '切换到浅色模式' : '切换到深色模式'}
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>
      <button onClick={() => setOpen(!open)} className="text-foreground p-2" aria-label="菜单">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? (
            <path d="M2 2L18 12M2 12L18 2" />
          ) : (
            <>
              <path d="M0 1H20" />
              <path d="M0 7H14" />
              <path d="M0 13H20" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-14 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border p-6 flex flex-col gap-4">
          {links.map(({ label, id }) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-foreground text-base font-serif">
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}