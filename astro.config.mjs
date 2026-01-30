import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-domain.com', // 替换为你的域名
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // 代码高亮主题
      theme: 'github-dark',
      // 启用行号
      wrap: true
    }
  }
});

