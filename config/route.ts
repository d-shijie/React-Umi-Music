const route = [
  {
    path: '/',
    redirect: '/layout',
  },
  {
    name: '布局',
    path: '/layout',
    component: './Layout',
    routes: [
      {
        path: '/layout',
        redirect: '/layout/find',
      },
      {
        name: '首页',
        path: '/layout/find',
        component: './Home',
      },
      {
        name: '权限演示',
        path: '/layout/dj',
        component: './Access',
      },
      {
        name: 'CRUD 示例',
        path: '/layout/my',
        component: './Table',
      },
    ],
  },
];
export default route;
