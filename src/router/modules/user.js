import Layout from '@/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/user/list'),
      name: 'userList',
      meta: { title: 'user', icon: 'user', permissions: ['userIndex'] }
    },
    {
      path: 'create',
      component: () => import('@/views/user/create'),
      name: 'userCreate',
      hidden: true,
      breadcrumb: false,
      noCache: true,
      meta: { title: 'userCreate', permissions: ['userCreate'] }
    },
    {
      path: 'edit/:id',
      component: () => import('@/views/user/edit'),
      name: 'userEdit',
      hidden: true,
      breadcrumb: false,
      noCache: true,
      meta: { title: 'userEdit', permissions: ['userUpdate'] }
    }
  ]
}
export default userRouter
