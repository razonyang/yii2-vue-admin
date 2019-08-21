import Layout from '@/layout'

const nestedRouter = {
  path: '/system',
  component: Layout,
  name: 'System',
  meta: {
    title: 'system',
    icon: 'system',
    permissions: ['roleIndex']
  },
  children: [
    {
      path: 'roles',
      component: () => import('@/views/role/list'),
      name: 'roleList',
      meta: { title: 'role', icon: 'role', permissions: ['roleIndex'] }
    },
    {
      path: 'role/create',
      name: 'roleCreate',
      component: () => import('@/views/role/create'),
      hidden: true,
      noCache: true,
      meta: { title: 'roleCreate', permissions: ['roleCreate'] }
    },
    {
      path: 'role/edit/:id',
      name: 'roleEdit',
      component: () => import('@/views/role/edit'),
      hidden: true,
      noCache: true,
      meta: { title: 'roleEdit', permissions: ['roleUpdate'] }
    },
    {
      path: '/setting',
      name: 'settingList',
      component: () => import('@/views/setting/list'),
      meta: { title: 'systemSettings', icon: 'setting', permissions: ['settingIndex'] }
    },
    {
      path: '/setting/edit/:id',
      name: 'settingEdit',
      hidden: true,
      noCache: true,
      component: () => import('@/views/setting/edit'),
      meta: { title: 'settingEdit', permissions: ['settingUpdate'] }
    }
  ]
}

export default nestedRouter
