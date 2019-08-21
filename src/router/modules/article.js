import Layout from '@/layout'

const userRouter = {
  path: '/article',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/article/list'),
      name: 'articleList',
      meta: { title: 'article', icon: 'article', permissions: ['articleIndex'] }
    },
    {
      path: 'create',
      component: () => import('@/views/article/create'),
      name: 'articleCreate',
      hidden: true,
      breadcrumb: false,
      noCache: true,
      meta: { title: 'articleCreate', permissions: ['articleCreate'] }
    },
    {
      path: 'edit/:id',
      component: () => import('@/views/article/edit'),
      name: 'articleEdit',
      hidden: true,
      breadcrumb: false,
      noCache: true,
      meta: { title: 'articleEdit', permissions: ['articleUpdate'] }
    }
  ]
}
export default userRouter
