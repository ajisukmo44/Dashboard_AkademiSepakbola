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
        path: 'user-tim',
        name: 'user-tim',
        component: () => import('@/views/dashboard/user/user-tim.vue'),
      },
      {
        path: 'tim',
        name: 'tim',
        component: () => import('@/views/dashboard/tim/tim.vue'),
      },
      {
        path: 'tim/tim-baru',
        name: 'tim-baru',
        component: () => import('@/views/dashboard/tim/tim-baru.vue'),
      },
      {
        path: 'tim/detail/:id',
        name: 'tim-detail',
        component: () => import('@/views/dashboard/tim/tim-detail.vue'),
      },
      {
        path: 'tim/tambah-tim',
        name: 'tambah-tim',
        component: () => import('@/views/dashboard/tim/tambah-tim.vue'),
      },
      {
        path: 'berita/tambah-berita',
        name: 'tambah-berita',
        component: () => import('@/views/dashboard/berita/tambah-berita.vue'),
      },
      {
        path: 'berita/edit-berita/:id',
        name: 'edit-berita',
        component: () => import('@/views/dashboard/berita/edit-berita.vue'),
      },
      {
        path: 'tim/detail/tambah-foto/:id',
        name: 'tambah-foto',
        component: () => import('@/views/dashboard/tim/tambah-foto.vue'),
      },
      {
        path: 'tim/detail/tim-galeri/:id',
        name: 'tim-galeri',
        component: () => import('@/views/dashboard/tim/tim-galeri.vue'),
      },
      {
        path: 'tim/detail/tim-logo/:id',
        name: 'tim-logo',
        component: () => import('@/views/dashboard/tim/tim-logo.vue'),
      },
      {
        path: 'berita',
        name: 'berita',
        component: () => import('@/views/dashboard/berita/index.vue'),
      },
      {
        path: 'pesan',
        name: 'pesan',
        component: () => import('@/views/dashboard/pesan/pesan.vue'),
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
