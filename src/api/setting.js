import request from '@/utils/request'
import qs from 'qs'

export function findSettings(params) {
  return request({
    url: '/settings?' + qs.stringify(params),
    method: 'get'
  })
}

export function findSetting(id) {
  return request({
    url: '/settings/' + id,
    method: 'get'
  })
}

export function updateSetting(id, data) {
  return request({
    url: '/settings/' + id,
    method: 'put',
    data
  })
}
