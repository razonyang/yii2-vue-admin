import store from '@/store'

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */
export default function checkPermission(permissions) {
  if (permissions && permissions instanceof Array && permissions.length > 0) {
    const grantedPermissions = store.getters && store.getters.permissions

    const hasPermission = permissions.some(permisson => {
      return grantedPermissions.includes(permisson)
    })

    return !!hasPermission
  }

  return false
}
