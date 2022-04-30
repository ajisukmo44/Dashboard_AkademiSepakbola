import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/Home.vue'),
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/dashboard/user/user.vue'),
      },
      {
        path: 'user-admin',
        name: 'user-admin',
        component: () => import('@/views/dashboard/user/user-admin.vue'),
      },
      {
        path: 'teams',
        name: 'team-list',
        component: () => import('@/views/dashboard/teams/tim.vue'),
      },
      {
        path: 'tim-detail/:id',
        name: 'tim-detail',
        component: () => import('@/views/dashboard/teams/tim-detail.vue'),
      },
      {
        path: 'tim-galeri/:id',
        name: 'tim-galeri',
        component: () => import('@/views/dashboard/teams/tim-galeri.vue'),
      },
      {
        path: 'berita',
        name: 'berita',
        component: () => import('@/views/dashboard/berita/index.vue'),
      },
      {
        path: 'pesan',
        name: 'pesan',
        component: () => import('@/views/dashboard/pesan/index.vue'),
      },
      {
        path: 'grafik',
        name: 'grafik',
        component: () => import('@/views/dashboard/grafik/grafik.vue'),
      },
      {
        path: 'kategori-tim',
        name: 'kategori-tim',
        component: () => import('@/views/dashboard/kategori/kategori-tim.vue'),
      },
      {
        path: 'kategori-berita',
        name: 'kategori-berita',
        component: () => import('@/views/dashboard/kategori/kategori-berita.vue'),
      },
      {
        path: '/card',
        name: 'card',
        component: () => import('@/views/Card.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes,
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})

export default router
