import { defineConfig } from '@umijs/max';
import route from './route';
export default defineConfig({
  icons: {},
  outputPath: 'dist',
  // favicons: ['/favicon.ico'],
  antd: {},

  theme: {
    token: {
      // Seed Token，影响范围大
      colorPrimary: '#00b96b',
      borderRadius: 2,
      // 派生变量，影响范围小
      colorBgContainer: '#f6ffed',
    },
  },
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
      // target:
      //   'https://service-p0ngyeui-1318284787.gz.apigw.tencentcs.com/release/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
