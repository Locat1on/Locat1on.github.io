import { useReveal } from '@/hooks/useReveal';

const achievements = [
  {
    category: '论文发表',
    items: [
      {
        title: 'Enabling verifiability in federated learning utilizing zero-knowledge proofs and blockchain',
        detail: '第一作者 · AIAHPC 国际会议 · 已发表',
        highlight: true,
      },
    ],
  },
  {
    category: '科研项目',
    items: [
      {
        title: '湖南省应急管理厅纵向项目：排烟消防车效能预测',
        detail: '核心成员 · 第一作者投稿计算机类高水平期刊',
        highlight: false,
      },
      {
        title: '省级大创项目：P2P联邦学习与可移动机器人群（S202410532410）',
        detail: '核心成员 · 优秀结项',
        highlight: false,
      },
    ],
  },
  {
    category: '学业荣誉',
    items: [
      {
        title: '湖南大学学业奖学金',
        detail: '',
        highlight: false,
      },
      {
        title: '常熟市高校引才大使',
        detail: '全市唯十 · 中共常熟市委人才工作领导小组',
        highlight: false,
      },
    ],
  },
  {
    category: '英语能力',
    items: [
      {
        title: 'CET-4 603',
        detail: '',
        highlight: false,
      },
      {
        title: 'CET-6 591',
        detail: '',
        highlight: false,
      },
    ],
  },
];

export function Achievements() {
  const ref = useReveal();

  return (
    <section id="achievements" className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-12">
      <div ref={ref} className="reveal-group">
        {/* Section heading */}
        <div className="reveal-item mb-20">
          <p className="mono-text text-sm text-accent tracking-[0.3em] uppercase mb-2">03 / Achievements</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            成果与荣誉
          </h2>
          <div className="w-10 h-[2px] bg-accent mt-4" />
        </div>

        {/* Achievement groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {achievements.map((group) => (
            <AchievementGroup key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementGroup({ group }: { group: typeof achievements[0] }) {
  return (
    <div className="reveal-item card-yohji">
      {/* Category header */}
      <p className="mono-text text-sm text-accent tracking-[0.2em] uppercase mb-4">
        {group.category}
      </p>

      {/* Items */}
      <div className="space-y-4">
        {group.items.map((item) => (
          <div key={item.title} className={item.highlight ? 'accent-line pb-2' : 'pb-2'}>
            <p className={`font-serif text-base md:text-lg font-semibold ${item.highlight ? 'text-foreground' : 'text-foreground/70'} leading-snug`}>
              {item.title}
            </p>
            {item.detail && (
              <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}