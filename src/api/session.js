import request from '@/utils/request'
import qs from 'qs'

export function findSessions(params) {
  return request({
    url: '/my/sessions?' + qs.stringify(params),
    method: 'get'
  })
}

export function deleteSession(id) {
  return request({
    url: '/my/sessions/' + id,
    method: 'delete'
  })
}
