import request from '@/utils/request'
import qs from 'qs'

export function findRoles(params) {
  return request({
    url: '/roles?' + qs.stringify(params),
    method: 'get'
  })
}

export function createRole(data) {
  return request({
    url: '/roles',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: '/roles/' + id,
    method: 'put',
    data
  })
}

export function findRole(id, params) {
  return request({
    url: '/roles/' + id + '?' + qs.stringify(params),
    method: 'get'
  })
}

export function deleteRole(id) {
  return request({
    url: '/roles/' + id,
    method: 'delete'
  })
}
