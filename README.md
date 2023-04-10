<body>
<p>1.polyfill 是 web 项目兼容低版本浏览器的插件:</p>
<code>pnpm i @vitejs/plugin-legacy -D</code><br>
<code>pnpm i core-js</code>
<p>在 main.ts中引入 import 'core-js/stable';</p>

<p>
2.ts引入路径<br />
如找不到path<br />
然后关闭开发工具重新打开后再次运行项目
</p>
<code>npm install @types/node --save-dev</code>

<p>3.安装UI组件库及匹配的依赖文件</p>
<code>pnpm install antd</code><br />
<code>pnpm install @swc/helpers@^0.5.0 postcss@^8.1.0 terser@">=5.4.0 <6.0.0"</code>

<p>4.下载路由</p>
<code>pnpm install react-router-dom@5.2.0</code><br/>
<code>pnpm install @types/react-router-dom</code>
</body>
