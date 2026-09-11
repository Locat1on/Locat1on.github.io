import { useReveal } from '@/hooks/useReveal';
import { GitBranch, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-12">
      <div ref={ref} className="reveal-group">
        {/* Section heading */}
        <div className="reveal-item mb-16">
          <p className="mono-text text-sm text-accent tracking-[0.3em] uppercase mb-2">04 / Contact</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            联系
          </h2>
          <div className="w-10 h-[2px] bg-accent mt-4" />
        </div>

        <div className="asymmetric-grid">
          {/* Left: poetic text */}
          <div className="reveal-item">
            <p className="font-serif text-foreground/60 text-lg md:text-xl leading-relaxed">
              如果你对联邦学习、大语言模型、智能体、AI 应用或网络安全领域有兴趣，
              欢迎联系我探讨合作。
            </p>
          </div>

          {/* Right: contact links */}
          <div className="reveal-item space-y-4">
            <ContactLink
              icon={<GitBranch size={18} />}
              label="GitHub"
              value="@Locat1on"
              href="https://github.com/Locat1on"
            />
            <ContactLink
              icon={<Mail size={18} />}
              label="Email"
              value="locat1on@hnu.edu.cn"
              href="mailto:locat1on@hnu.edu.cn"
            />
            <ContactLink
              icon={<MapPin size={18} />}
              label="所在地"
              value="江苏苏州"
              href="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 p-5 border border-border/50 hover:border-accent/30 hover:bg-secondary/30 rounded-xl transition-all duration-300 group"
    >
      <div className="w-10 h-10 flex items-center justify-center border border-accent/40 text-accent group-hover:bg-accent group-hover:text-background rounded-lg transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="mono-text text-sm text-muted-foreground tracking-wider uppercase">{label}</p>
        <p className="text-base text-foreground/80 group-hover:text-foreground transition-colors duration-300">{value}</p>
      </div>
    </a>
  );
}
