import Layout from '@/layout'

const userRouter = {
  path: '/article-category',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/article-category/list'),
      name: 'articleCategoryList',
      meta: { title: 'articleCategory', icon: 'article', permissions: ['articleCategoryIndex'] }
    },
    {
      path: 'create',
      component: () => import('@/views/article-category/create'),
      name: 'articleCategoryCreate',
      hidden: true,
      breadcrumb: false,
      noCache: true,
      meta: { title: 'articleCategoryCreate', permissions: ['articleCategoryCreate'] }
    },
    {
      path: 'edit/:id',
      component: () => import('@/views/article-category/edit'),
      name: 'articleCategoryEdit',
      hidden: true,
      breadcrumb: false,
      noCache: true,
      meta: { title: 'articleCategoryEdit', permissions: ['articleCategoryUpdate'] }
    }
  ]
}
export default userRouter
