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
        name: '发现',
        path: '/layout/find',
        component: './Find',
      },
      {
        name: '播客',
        path: '/layout/dj',
        component: './Dj',
      },
      {
        name: '我的',
        path: '/layout/my',
        component: './My',
      },
      {
        name: '关注',
        path: '/layout/follow',
        component: './Follow',
      },
      {
        name: '社区',
        path: '/layout/community',
        component: './Community',
      },
    ],
  },
];
export default route;
