import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { DashboardOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

const routeName = 'dashboard';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: routeName,
    redirect: '/dashboard/console',
    component: Layout,
    meta: {
      title: 'Dashboard',
      icon: renderIcon(DashboardOutlined),
      permissions: ['dashboard_console', 'dashboard_console', 'dashboard_workplace'],
      sort: 0,
    },
    children: [
      {
        path: 'console',
        name: `${routeName}_console`,
        meta: {
          title: 'Dashboard',
          permissions: ['dashboard_console'],
          affix: true,
        },
        component: () => import('@/views/dashboard/console/console.vue'),
      },
      {
        path: 'detail/:id',
        name: `${routeName}_detail`,
        meta: {
          title: 'Detail',
          permissions: ['dashboard_console'],
          affix: true,
        },
        component: () => import('@/views/dashboard/detail/detail.vue'),
      },
      {
        path: 'workplace',
        name: `${routeName}_workplace`,
        meta: {
          title: 'Workplace',
          keepAlive: true,
          permissions: ['dashboard_workplace'],
        },
        component: () => import('@/views/dashboard/workplace/workplace.vue'),
      },
    ],
  },
];

export default routes;
