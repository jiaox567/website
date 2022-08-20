import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";
import { commentPlugin } from 'vuepress-plugin-comment2';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'everyone 能 塔塔开 this website',
  description: '123',
  base: '/website/',
  plugins: [
    commentPlugin({
      comment: true,
      provider: 'Waline',
      serverURL: 'https://waline-pied-seven.vercel.app',
    })
  ],
  theme: hopeTheme({
    hostname: 'https://jiaox567.github.io/website'
  }),
})