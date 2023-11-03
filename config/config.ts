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
      target:
        'https://service-p0ngyeui-1318284787.gz.apigw.tencentcs.com/release/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
