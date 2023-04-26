const {url} = require('inspector')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontSize: {
        bc: '0.4rem', // 输入表单文字大小
        sbc: '0.2rem', // 协议的尺寸大小
        btnBc: '0.6rem', // 按钮文字大小
        phSize: '0.45rem',
        tipSize:'0.4rem'
        // tipBtnBc: "0.4rem", // 按钮文字提示的大小
      },
      margin: {
        18: '4.5rem',
      },
      textColor: {
        broPlaceBgIcon: '#56AAFB',
        Flamingo: '#f2552a',
        colorBc: '#333333',
        sendCode: '#1694fb',
        white: '#ffffff',
        transparent: 'transparent',
        commentsColor: '#d9256c',
        placeColor: '#fe7b55',
        broColor: '#34b4f9',
        broTips: '#989999',
      },
      backgroundImage: {
        'gradient-default': 'linear-gradient(0deg,#da206a,#f87daf)', // 包邮按钮背景颜色
        'gradient-tips':
          'linear-gradient(90deg,#a541ff,#55a1fe 43%,#3fbbfe 58%,#50a7fe 75%,#a541ff)',
        broadbandProBg: 'linear-gradient(180deg,#5aaaff,#56aafb)',
        broResBtn:
          'linear-gradient(rgb(249, 171, 95) 0%, rgb(249, 93, 14) 100%)',
        broSubBtn:
          'linear-gradient(rgb(92, 196, 250) 0%, rgb(78, 114, 234) 100%)',
        broFormBg: 'linear-gradient(180deg,#cbe7fe,#fff 8%,#fff)',
        'comments-left':
          "url('https://oss.kedang.net/534dfa0a212c43c0b589eba1f231fd21.png')",
        'comments-right':
          "url('https://oss.kedang.net/01e3ca7b6f594433b513ac0b9f9b05d7.png')",
        comments1:
          "url('https://oss.kedang.net/eadc7b4510384fe1990947df9632d14b.png')",
        houseLampBg:
          'url("https://js.kedang.net/nc/saas/collect/img/trumpet.6487eced.png")',
        exChangeBg: 'linear-gradient(0deg,#ff947b,#fdc382)',
        countDownBg:
          "url('https://oss.kedang.net/3f9d00ce991f45998ece2e8fcdf1dc39.png')", // 倒计时背景图
        placeArea:
          "url('https://oss.kedang.net/9b838d3172174dd195c5cfe802d5d540.png')", // 选择归属地的提示背景
        phoneHotIcon:
          "url('https://oss.kedang.net/6a63633707eb47379a1349ac48b473db.gif')",
        timeTip:
          "url('https://oss.kedang.net/4de4ec0027d34b7ca7e819aec37e2a0d.png')",
        hotIcon:
          "url('https://oss.kedang.net/efe1dd1c58d040faa7d798bb906d1b6e.png')",
      },
      backgroundSize: {
        full: '100% 100%',
      },
      backgroundColor: {
        red: 'rgba(242,67,64,.8)',
        broPlaceBg: '#e1f5ff',
      },
      boxShadow: {
        phoneBoxShowDow: '0 0 4px 0 rgba(0,0,0,.2)',
        btnShadow:
          '0 3px 10px 0 rgba(249,37,123,.5), 0 2px 4px 0 rgba(141,17,66,.35)',
      },
      borderColor: {
        commentsColor: '#d9256c',
        searchColor: '#fdbb81',
        sendCode: '#1694fb',
      },
      borderOpacity: {
        10: '0.1',
        20: '0.2',
        95: '0.95',
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        95: '0.95',
      },
      animation: {
        flicker: 'flicker 1s linear infinite',
        swim: 'swim 1s linear infinite',
        changeColor: 'changeColor  1s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': {transform: 'scale(0.95)'},
          '50%': {transform: 'scale(1)'},
        },
        swim: {
          '0%, 100%': {transform: 'translateY(10px)'},
          '50%': {transform: 'translateY(0)'},
        },
        changeColor: {
          '0% ': {
            transform: 'scale(1)',
            backgroundPosition: '200%',
          },
          '50% ': {
            transform: 'scale(0.9)',
            backgroundPosition: '100%',
          },
          '100% ': {
            transform: 'scale(1)',
            backgroundPosition: '0%',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
