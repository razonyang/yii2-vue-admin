import request from '@/utils/request'
import qs from 'qs'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/my/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function changePassword(password, newPassword) {
  return request({
    url: '/my/password',
    method: 'put',
    data: {
      password: password,
      new_password: newPassword
    }
  })
}

export function findUser(id, params) {
  return request({
    url: '/users/' + id + '?' + qs.stringify(params),
    method: 'get'
  })
}

export function createUser(data) {
  return request({
    url: '/users',
    method: 'post',
    data
  })
}

export function updateUser(id, data) {
  return request({
    url: '/users/' + id,
    method: 'put',
    data
  })
}

export function findUsers(params) {
  return request({
    url: '/users?' + qs.stringify(params),
    method: 'get'
  })
}

export function deleteUser(id) {
  return request({
    url: '/users/' + id,
    method: 'delete'
  })
}
