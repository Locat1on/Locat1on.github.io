# Locat1on 个人主页

React 19 + TypeScript + Vite + Tailwind CSS 单页个人主页。支持紫黑色与提夫尼蓝白色主题。

## 开发

使用 Node.js 22.12 或更新的 22.x 版本。

```bash
npm ci
npm run dev
```

检查：`npm run lint`；构建：`npm run build`；生产预览：`npm run preview`。

## 源码

main 分支保存 src/、public/、配置及 package-lock.json。node_modules/ 和 dist/ 不提交。已移除 Jekyll，不再需要 Ruby。

- src/App.tsx：页面编排
- src/components/sections/：页面内容
- src/index.css：主题和公共样式
- public/images/avatar.jpg：照片
- .github/workflows/deploy.yml：自动构建部署

## 部署

目标仓库 Locat1on/Locat1on.github.io，部署在域名根路径。

首次在 Settings → Pages → Build and deployment → Source 选择 GitHub Actions。

源码提交并推送到 main 后，工作流自动安装依赖、运行 Lint、构建并发布 dist/。Pull Request 只检查，不发布。支持 Actions 页面手动部署。无需 gh-pages 分支，也不提交构建产物。

本地配置不会自动更改远程设置；是否上线以 Actions 实际结果为准。

站点：https://locat1on.github.io/

参考：https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
