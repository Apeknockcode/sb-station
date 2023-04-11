import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'
import pxtovw from 'postcss-px-to-viewport'
const loder_pxtovw = pxtovw({
  unitToConvert: 'px', // 要转化的单位
  viewportWidth: 1960, // UI设计稿的宽度
  unitPrecision: 2, // 转换后的精度，即小数点位数
  propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
  fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
  selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
  minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
  mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  replace: true, // 是否转换后直接更换属性值
  exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
  landscape: false, // 是否处理横屏情况
})
import {join} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['chrome < 60', 'edge < 15'],
      renderLegacyChunks: true,
      // targets: ['cover:95.5%'],
    }),
  ],
  base: './',
  resolve: {
    alias: {
      '@': join(__dirname, 'src'), //需要配合tsconfig.json文件配置baseUrl和paths设置src别名@
    },
  },
  css: {
    // postcss: {
    //   //vw的适配方案，需要下载插件
    //   plugins: [
    //     postcsspxtoviewport({

    //     }),
    //   ],
    // },
    // postcss: {
    //   plugins: [loder_pxtovw],
    // },
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        modifyVars: {
          // 更改主题在这里
          'primary-color': '#ffffff',
          'link-color': '#c6c6c6',
          'border-radius-base': '2px',
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8088,
    strictPort: true, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
    open: true,
    proxy: {
      // '/api': {
      //   target: 'http://127.0.0.1:27017',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // }
    },
  },
})
