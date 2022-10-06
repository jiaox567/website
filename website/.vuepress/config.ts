import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";
import { commentPlugin } from 'vuepress-plugin-comment2';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'everyone 能 塔塔开 this website',
  description: '123',
  plugins: [
    commentPlugin({
      comment: true,
      provider: 'Waline',
      serverURL: 'https://waline-pied-seven.vercel.app',
    })
  ],
  theme: hopeTheme({
    hostname: 'https://www.joxlol.top',
    sidebar:[
      {
        text:'Home',
        link: '/'
      },
      {
        text:'114514',
        link: '/逸一时误一世'
      }
    ]
  }),
})