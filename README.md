# Locat1on.github.io

田嘉宇（Locat1on）的个人主页 — 基于 Jekyll 的现代科技感学术主页，部署在 GitHub Pages。

## 快速部署

1. 在 GitHub 上创建仓库 `Locat1on.github.io`
2. 将本项目所有文件推送到该仓库
3. 在仓库 Settings → Pages 中选择 Source 为 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`
4. 等待几分钟，访问 `https://locat1on.github.io` 即可看到网站

## 本地预览（可选）

```bash
gem install bundler
cd Locat1on.github.io
bundle install
bundle exec jekyll serve
```

访问 `http://localhost:4000` 即可预览。

## 自定义内容

- `_config.yml` — 修改站点标题、描述、作者信息
- `index.html` — 修改各区块的文字内容、科研经历、联系方式
- `assets/css/style.css` — 调整颜色变量（`--accent-1`, `--accent-2` 等）可快速换色

## 项目结构

```
Locat1on.github.io/
├── _config.yml          # Jekyll 配置
├── _layouts/
│   └── default.html     # 页面布局模板
├── assets/
│   ├── css/style.css    # 主样式文件（现代科技感）
│   ├── js/main.js       # 交互脚本
│   └── favicon.svg      # 渐变色首字母图标
├── index.html           # 主页内容（基于简历填充）
├── Gemfile              # Ruby 依赖
└── README.md            # 本文件
```

## 功能特性

- 深色科技感设计，渐变色+发光效果
- 滚动渐入动画 + 顶部进度条
- 移动端自适应导航
- 响应式卡片布局（科研、实践经历）
- SEO 标签支持
- 纯 CSS 实现视觉效果，无需外部依赖