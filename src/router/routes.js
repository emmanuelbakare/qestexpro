
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
      { path: 'register/', component: () => import('pages/estate/estate-register.vue') },
      { path: 'register2/', component: () => import('pages/estate/estateRegister.vue') },
      { path: 'join/', component: () => import('pages/estate/join-estate.vue') },


      { path: 'onboarding/', component: () => import('pages/estate/onboarding.vue') },
      { path: 'payments/', component: () => import('pages/estate/payments.vue') },
      { path: 'requests/', component: () => import('pages/estate/requests.vue') },
      { path: 'mails/', component: () => import('pages/estate/mails.vue') },
      { path: 'downloads/', component: () => import('pages/estate/downloads.vue') },
    ]
  },
  {
    path: '/test',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: 'ajaxloading/', component: () => import('pages/test/ajaxloading.vue') },
      { path: 'floatingAction/', component: () => import('pages/test/floatingAction.vue') },
      { path: 'dialog/', component: () => import('pages/test/dialog.vue') },
      { path: 'lodashtest/', component: () => import('pages/test/lodashtest.vue') },
      { path: 'sample-one/', component: () => import('pages/test/sample-one.vue') },
      { path: 'sample-two/', component: () => import('pages/test/sample-two.vue') },
      { path: 'sample-three/', component: () => import('pages/test/sample-three.vue') },
      { path: 'dashboard/', component: () => import('pages/test/dashboard.vue') },

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
