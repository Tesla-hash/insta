
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '' , component:() => import('pages/Login.vue')
      },
      {
        path: '/orders', component: () => import('pages/Orders.vue')
       },
      {
        path: '/history', component: () => import('pages/History.vue')
      },
      {
        path: '/create', component: () => import('pages/Create.vue')
      },
      {
        path: '/apps', component: () => import('pages/Apps.vue')
      },
      {
        path: '/settings', component: () => import('pages/Settings.vue')
      },
      {
        path: '/register', component: () =>import('pages/Register.vue')
      },
      {
        path: '/dashboard', component: () =>import('pages/Dashboard.vue')
      },
      {
        path: '/tables', component: () =>import('pages/Tables.vue')
      },
      {
        path: '/map', component: () =>import('pages/Map.vue')
      }

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
