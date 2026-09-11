import { useReveal } from '@/hooks/useReveal';

export function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-12">
      <div ref={ref} className="reveal-group">
        {/* Section heading */}
        <div className="reveal-item mb-16">
          <p className="mono-text text-sm text-accent tracking-[0.3em] uppercase mb-2">01 / About</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            关于我
          </h2>
          <div className="w-10 h-[2px] bg-accent mt-4" />
        </div>

        {/* Asymmetric layout: avatar left, text right */}
        <div className="asymmetric-grid">
          {/* Avatar column */}
          <div className="reveal-item flex flex-col items-start gap-6">
            <div className="relative w-full max-w-[220px] overflow-hidden rounded-xl">
              <img
                src="/images/avatar.jpg"
                alt="田嘉宇"
                className="w-full object-cover rounded-xl"
              />
              {/* Accent border */}
              <div className="absolute inset-0 border-4 border-accent/40 rounded-xl pointer-events-none" />
              {/* Corner accent mark */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-2 border-accent rounded-sm" />
            </div>

            {/* Info - label on top, value below, value bigger */}
            <div className="space-y-4 w-full max-w-[220px]">
              <InfoBlock label="专业" value="信息安全" />
              <InfoBlock label="学校" value="湖南大学" />
              <InfoBlock label="学院" value="网络空间安全" />
            </div>
          </div>

          {/* Text column */}
          <div className="reveal-item space-y-6">
            <p className="text-foreground/80 text-lg md:text-xl font-serif leading-relaxed">
              我是田嘉宇，就读于湖南大学网络空间安全学院信息安全专业。
              本科阶段我研究过联邦学习及其隐私保护、零知识证明与区块链可验证架构、基于深度学习的火灾救援仿真预测及优化。
              目前对大语言模型、智能体、具身智能与 AI 安全保持浓厚兴趣，希望未来可以从事相关研究。
            </p>

            {/* Technology */}
            <div className="pt-4 border-t border-border/50">
              <p className="mono-text text-sm text-muted-foreground tracking-[0.2em] uppercase mb-3">技术</p>
              <p className="text-base md:text-lg font-serif italic text-foreground/60 leading-relaxed">
                <span className="text-foreground/80 not-italic">Python</span>，<span className="text-foreground/80 not-italic">PyTorch</span>，<span className="text-foreground/80 not-italic">AI Coding</span>，<span className="text-foreground/80 not-italic">C++</span>，<span className="text-foreground/80 not-italic">LLM后训练</span>，<span className="text-foreground/80 not-italic">Langchain</span>
              </p>
            </div>

            {/* Research interests */}
            <div className="pt-4 border-t border-border/50">
              <p className="mono-text text-sm text-muted-foreground tracking-[0.2em] uppercase mb-3">研究兴趣</p>
              <p className="text-base md:text-lg font-serif italic text-foreground/60 leading-relaxed">
                <span className="text-foreground/80 not-italic">联邦学习及其隐私保护</span>、<span className="text-foreground/80 not-italic">大语言模型</span>、<span className="text-foreground/80 not-italic">智能体</span>、<span className="text-foreground/80 not-italic">具身智能</span>、<span className="text-foreground/80 not-italic">AI 应用</span>
              </p>
            </div>

            {/* Awards */}
            <div className="pt-4 border-t border-border/50">
              <p className="mono-text text-sm text-muted-foreground tracking-[0.2em] uppercase mb-3">荣誉</p>
              <div className="space-y-2">
                <p className="text-foreground/70 text-base">湖南大学学业奖学金</p>
                <p className="text-foreground/70 text-base">常熟市高校引才大使（全市唯十）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mono-text text-xs text-muted-foreground tracking-wider uppercase">{label}</p>
      <p className="font-serif text-lg text-foreground/90">{value}</p>
    </div>
  );
}
