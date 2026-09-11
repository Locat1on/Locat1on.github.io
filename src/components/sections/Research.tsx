import { useReveal } from '@/hooks/useReveal';

const researchProjects = [
  {
    id: '01',
    title: 'zk-BcFed：基于零知识证明与区块链的可验证联邦学习',
    role: '第一作者',
    period: '2025.06 — 2025.12',
    status: '已发表于 AIAHPC 国际会议',
    statusType: 'published',
    description:
      '针对联邦学习易受投毒攻击的问题，提出基于零知识证明与区块链的可验证架构 zk-BcFed。通过 Circom 构建多约束电路实现本地更新的隐私验证与链上存证。遭遇幅度投毒攻击时基线模型准确率跌至 3.10% 且无法收敛，本模型保持高准确率并稳定收敛；无攻击时准确率 92.04%（基线 91.77%）基本持平。单轮额外验证开销约 12.70 秒。',
    keywords: '联邦学习，零知识证明，区块链，Circom，投毒防御',
  },
  {
    id: '02',
    title: '隧道排烟消防车效能预测',
    role: '核心成员 · 第一作者投稿',
    period: '2025.10 — 至今',
    status: '论文将投稿计算机类高水平期刊',
    statusType: 'pending',
    description:
      '针对隧道火灾救援中移动排烟策略缺乏量化依据的问题，利用 Pyrosim 软件仿真生成多工况流场数据集。基于此构建神经网络模型，挖掘风机参数与排烟效能间的非线性映射关系，实现排烟效果的快速预测，显著缩短决策周期，为火灾现场科学指挥提供智能化数据支撑。',
    keywords: '神经网络，火灾仿真，优化算法',
  },
  {
    id: '03',
    title: '基于P2P网络的联邦学习与可移动机器人群',
    role: '核心成员',
    period: '2024.05 — 2026.04',
    status: '省级大创 · 优秀结项',
    statusType: 'completed',
    description:
      '针对机器人群无中心协作的难题，设计基于邻居加强平均聚合策略与异常节点检测机制的 P2P 联邦学习框架。依托 ROS + Gazebo 搭建 10-30 节点仿真平台，完成迷宫导航与避障训练。节点失效工况下仍能保持稳定收敛，带宽占用优于集中式方案。',
    keywords: '联邦学习，P2P，ROS，Gazebo，机器人群',
  },
  {
    id: '04',
    title: 'openPangu 模型昇腾 NPU 适配与微调实践',
    role: '工程实践',
    period: '2026.04 — 至今',
    status: '已完成全流程',
    statusType: 'completed',
    description:
      '基于华为昇腾 910B NPU，使用 torch_npu 与 MindSpeed-LLM 框架，完成对 openPangu-1B/7B 模型的 Prompt Engineering 推理与 SFT 监督微调实验，涵盖数据预处理、权重格式转换、多卡分布式训练及推理评测全流程。',
    keywords: '昇腾NPU，torch_npu，MindSpeed-LLM，SFT，分布式训练',
  },
];

export function Research() {
  const ref = useReveal();

  return (
    <section id="research" className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-12">
      <div ref={ref} className="reveal-group">
        {/* Section heading */}
        <div className="reveal-item mb-20">
          <p className="mono-text text-sm text-accent tracking-[0.3em] uppercase mb-2">02 / Research & Practice</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            研究与实践
          </h2>
          <div className="w-10 h-[2px] bg-accent mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[60px] top-0 bottom-0 w-[1px] bg-border/50" />

          {/* Red accent dot on line */}
          <div className="absolute left-0 md:left-[60px] top-0 w-[3px] h-[40px] bg-accent" />

          <div className="space-y-16">
            {researchProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof researchProjects[0] }) {
  return (
    <div className="reveal-item relative pl-8 md:pl-[90px]">
      {/* Project number - positioned beside timeline */}
      <div className="absolute left-0 md:left-[40px] top-0">
        <p className="mono-text text-sm text-accent tracking-[0.2em]">{project.id}</p>
      </div>

      {/* Content starts below with clear spacing */}
      <div className="mt-6">
        {/* Title */}
        <h3 className="font-serif text-xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
          {project.title}
        </h3>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="mono-text text-sm text-muted-foreground">{project.period}</span>
          <span className="text-sm text-foreground/60 border border-border px-2 py-0.5 rounded-md">{project.role}</span>
          <StatusBadge type={project.statusType} text={project.status} />
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5 max-w-prose-wide">
          {project.description}
        </p>

        {/* Keywords */}
        <p className="font-serif italic text-sm text-foreground/50">
          {project.keywords}
        </p>
      </div>
    </div>
  );
}

function StatusBadge({ type, text }: { type: string; text: string }) {
  const colors = {
    published: 'text-foreground/70 border-foreground/30',
    pending: 'text-foreground/70 border-foreground/30',
    completed: 'text-foreground/60 border-foreground/30',
  };

  return (
    <span className={`text-sm px-2 py-0.5 border rounded-md ${colors[type as keyof typeof colors]}`}>
      {text}
    </span>
  );
}
