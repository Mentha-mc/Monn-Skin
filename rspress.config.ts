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
  base: "/Moon-Skin",
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
