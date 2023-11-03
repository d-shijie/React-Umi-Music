import { defineConfig } from '@umijs/max';
import route from './route';
export default defineConfig({
  icons: {},
  outputPath: 'dist',
  // favicons: ['/favicon.ico'],
  antd: {},
  // alias: {
  //   '@': require.resolve('src')
  // },
  access: {},
  model: {},
  initialState: {},
  request: {
    dataField: '',
  },
  layout: {
    title: '@umijs/max',
  },
  routes: route,
  npmClient: 'pnpm',
  tailwindcss: {},
  proxy: {
    '/api': {
      target: 'http://localhost:3000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
