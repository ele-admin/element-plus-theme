import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';

const router = createRouter({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: '/form',
          component: () => import('@/views/form/index.vue')
        },
        {
          path: '/date-picker',
          component: () => import('@/views/date-picker/index.vue')
        },
        {
          path: '/tree',
          component: () => import('@/views/tree/index.vue')
        },
        {
          path: '/table',
          component: () => import('@/views/table/index.vue')
        },
        {
          path: '/descriptions',
          component: () => import('@/views/descriptions/index.vue')
        },
        {
          path: '/tag',
          component: () => import('@/views/tag/index.vue')
        },
        {
          path: '/other',
          component: () => import('@/views/other/index.vue')
        }
      ]
    }
  ],
  history: createWebHistory(),
  scrollBehavior: () => {
    return { top: 0 };
  }
});

export default router;
