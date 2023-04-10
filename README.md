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
<code>pnpm install @types/react-router-dom</code><br/>

<p>tailwind css 是现代工程化框架里把原子css做到极致的css框架，它将大部分css属性封装成语义化的类，使用者的关注点从写css到使用tailwind类名，极大的减少了代码量。
优点：

降低为类命名的精力——如何为div起一个语义化的类名是开发者经常遇到的问题，使用tailwind之后，大部分情况下都能直接使用 tailwind 类名而无需开发者关注如何起名，这对大部分开发者都是喜闻乐见的事。<br/>

大大减少CSS代码量。<br/>

样式跟着元素走，方便删除。tailwind是内联在元素上，元素如果需要删除，css也会跟着删除。<br/>

</p>

<code>
pnpm install tailwindcss
</code>

<p>安装react-router-dom</p>

<code>pnpm install react-router-dom</code>
</body>


