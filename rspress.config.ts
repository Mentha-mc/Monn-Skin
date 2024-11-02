import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Moon Skin', // 替换为 Moon Skin
  description: 'Rspack-based Static Site Generator',
  icon: '/moon-icon.png',
  logo: {
    light: '/kindpng_1399972.png',
    dark: '/rspress-dark-logo.png',
  },
  base: "/Monn-Skin",
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  
      // 您可以根据需要添加更多的侧边栏分组和链接

  },
});
