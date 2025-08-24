# 🚀 ENIAC LLM Loader 部署指南

## 📍 GitHub 仓库

项目已成功推送到：[https://github.com/Lucas4MouthGauard/eniac](https://github.com/Lucas4MouthGauard/eniac)

## 🌐 在线访问

- **GitHub Pages**: [https://lucas4mouthgauard.github.io/eniac](https://lucas4mouthgauard.github.io/eniac)
- **本地开发**: [http://localhost:3000](http://localhost:3000)

## 🐦 社交媒体链接

- **Twitter/X**: [@eniac_llm](https://x.com/eniac_llm) - 已在导航栏添加

## 🔧 部署配置

### GitHub Pages 自动部署

项目已配置 GitHub Actions 工作流，每次推送到 `main` 分支时会自动：

1. 构建项目 (`npm run build`)
2. 生成静态文件
3. 部署到 GitHub Pages

### 手动部署

```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

## 📁 项目结构

```
eniac/
├── .github/workflows/     # GitHub Actions 配置
├── app/                   # Next.js 应用
│   ├── components/        # React 组件
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── public/                # 静态资源
├── package.json           # 依赖配置
├── next.config.js         # Next.js 配置
├── tailwind.config.js     # Tailwind CSS 配置
└── README.md              # 项目说明
```

## 🎯 主要功能

- ✅ **四步加载动画**：真空管预热 → 分词 → 参数搬运 → 注意力路由
- ✅ **交互式终端**：支持多种命令和彩蛋
- ✅ **复古科技视觉**：CRT 扫描线、发光真空管、打孔纸带
- ✅ **响应式设计**：移动端优化
- ✅ **导航栏推特链接**：指向 [@eniac_llm](https://x.com/eniac_llm)

## 🚀 快速开始

1. **克隆仓库**
   ```bash
   git clone https://github.com/Lucas4MouthGauard/eniac.git
   cd eniac
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问应用**
   打开 [http://localhost:3000](http://localhost:3000)

## 🌟 特色亮点

- **历史梗**：1946 年 ENIAC 计算机 + 2025 年 LLM 的荒诞组合
- **视觉体验**：复古未来主义设计风格
- **交互彩蛋**：终端命令、悬停效果、动画细节
- **技术栈**：Next.js 14 + TypeScript + Tailwind CSS + Framer Motion

## 📱 社交媒体

- **Twitter**: [@eniac_llm](https://x.com/eniac_llm)
- **GitHub**: [Lucas4MouthGauard/eniac](https://github.com/Lucas4MouthGauard/eniac)

---

**记住**：这不是投资建议，这是历史喜剧！🎭

*"将 20 世纪的光芒连接到 21 世纪的语义引擎上"*
