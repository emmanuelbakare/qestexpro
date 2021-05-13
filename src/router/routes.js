
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'auth/', component: () => import('pages/account/authPage.vue') },
      { path: 'ajaxloading/', component: () => import('pages/test/ajaxloading.vue') },
    ]
  },

  {
    path: '/estate',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: 'register/', component: () => import('pages/estate/estateRegister.vue') },
      { path: 'join/', component: () => import('pages/estate/join-estate.vue') }
    ]
  },
  {
    path: '/test',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: 'ajaxloading/', component: () => import('pages/test/ajaxloading.vue') },
      { path: 'floatingAction/', component: () => import('pages/test/floatingAction.vue') },
      { path: 'dialog/', component: () => import('pages/test/dialog.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
