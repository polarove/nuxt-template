// unocss.config.ts
import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  theme: {
    // reference: https://element-plus.org/zh-CN/component/layout.html#col-attributes
    breakpoints: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1920px'
    }
  },
  // 以下配置是为了可以在组件中更方便地使用图标<el-button icon="i-ep-lock"/>
  // 需要安装来自iconify-json/icon-set-name的图标才行, 如 iconify-json/ep
  variants: [
    {
      match: (s: string) => {
        if (s.startsWith('i-')) {
          return {
            matcher: s,
            selector: (s: string) => {
              return s.startsWith('.') ? `${s.slice(1)},${s}` : s
            }
          }
        }
      }
    }
  ],
  rules: [
    [
      'font-small',
      {
        'font-size': '0.88rem'
      }
    ],
    [
      'font-large',
      {
        'font-size': '1.11rem'
      }
    ],
    [
      'p-r',
      {
        position: 'relative'
      }
    ],
    [
      'p-a',
      {
        position: 'absolute'
      }
    ],
    [
      'm-a',
      {
        margin: 'auto'
      }
    ],
    [
      'c-p',
      {
        cursor: 'pointer'
      }
    ],
    [
      'ws-nowrap',
      {
        'white-space': 'nowrap'
      }
    ],
    [
      'absolute-center',
      {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        margin: 'auto'
      }
    ],
    [
      'flex-center',
      {
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center'
      }
    ],
    [
      'flex-center-col',
      {
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'flex-direction': 'column'
      }
    ],
    [
      'flex-end',
      {
        display: 'flex',
        'justify-content': 'flex-end'
      }
    ],
    [
      'flex-between',
      {
        display: 'flex',
        'justify-content': 'space-between'
      }
    ],
    [
      'flex-around',
      {
        display: 'flex',
        'justify-content': 'space-around'
      }
    ],
    [
      'flex-evenly',
      {
        display: 'flex',
        'justify-content': 'space-evenly'
      }
    ],
    [
      'flex-start',
      {
        display: 'flex',
        'justify-content': 'flex-start'
      }
    ],
    [
      'flex-col',
      {
        display: 'flex',
        'flex-direction': 'column'
      }
    ],
    [
      'flex-col-start',
      {
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'flex-start'
      }
    ],
    [
      'flex-col-reverse',
      {
        display: 'flex',
        'flex-direction': 'column-reverse'
      }
    ],
    [
      'display-none',
      {
        display: 'none'
      }
    ],
    [
      'font-smiley',
      {
        'font-family': 'smiley-sans'
      }
    ]
  ],
  presets: [
    // 预设规则
    presetUno(),
    // before: class="text-2xl font-bold"
    // after: text="bold 2xl"
    presetAttributify(),
    // class="i-iconset:iconname"
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ]
})
