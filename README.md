# Browser Extension with React and Webpack

## 项目简介

这是一个基于 **React** 和 **Webpack** 构建的浏览器插件项目，支持使用 **TypeScript** 开发，并集成了多个现代化开发工具。项目主要特点包括：
- 使用 React 构建动态的弹出层（Popup）界面。
- 使用 React 构建动态的内容层（Content）界面。
- 使用 TailwindCSS 快速构建样式和界面。
- 集成开发自动编译和浏览器插件自动重载功能。

---

## 项目结构

<pre>
├── dist/    # 构建输出目录  
├── public/    # 静态资源目录  
│   ├── manifest.json    # 插件的配置文件  
│   └── icons/    # 插件图标目录  
│       └── icon.png    # 插件图标   
├── src/    # 源代码目录   
│   ├── popup/    # Popup 相关组件和入口
│   │   ├── popup.html    # Popup html文件  
│   │   ├── popup.tsx    # Popup 入口文件
│   │   └── index.tsx    # React Popup 组件  
│   ├── content/    # Content 相关组件和入口
│   │   ├── content.tsx    # Content 入口文件
│   │   └── index.tsx    # React Content 组件  
│   ├── background/    # Background 相关文件和入口
│   │   └── background.ts    # background 入口文件
│   └── styles.css    # tailwindcss 样式文件  
├── postcss.config.js    # PostCSS 配置文件   
├── tailwind.config.js    # TailwindCSS 配置文件
├── webpack.config.js    # Webpack 配置文件   
├── package.json    # 项目依赖和脚本管理   
└── tsconfig.json    # TypeScript 配置文件  
</pre>

---

## 安装与运行

### 1. 克隆项目
```bash
git clone https://github.com/your-repo-name/browser-extension-react.git
cd browser-extension-react
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动开发服务器
```bash
npm run dev
```

### 4. 构建项目
```bash
npm run build
```

### 5.加载浏览器插件
1. 打开Chrome浏览器并访问`chrome://extensions/`。
2. 在页面顶部，找到并点击`加载已解压的扩展程序`。
3. 在弹出窗口中，选择你克隆的浏览器插件项目根目录下的`dist`文件夹。

---

### 技术栈
- React: 用于构建用户界面。
- Webpack: 用于打包代码，支持模块化和文件监听自动编译。
- TypeScript: 提供静态类型支持，提高代码的可维护性。
- TailwindCSS: 快速构建现代化的响应式界面。

---

### 贡献
欢迎提出问题（Issues）或提交改进代码的 Pull Request。

---

### Todos
- [ ] 插件重载后，页面自动刷新
- [ ] 编译成单一 styles.css 时，引入失效
- [ ] service_worker 调试
- [ ] 添加更多功能
- [ ] 开源

