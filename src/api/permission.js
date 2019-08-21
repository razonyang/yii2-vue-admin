import request from '@/utils/request'
import qs from 'qs'

export function findPermissions(params) {
  return request({
    url: '/permissions?' + qs.stringify(params),
    method: 'get'
  })
}
