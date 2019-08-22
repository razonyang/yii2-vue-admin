import request from '@/utils/request'
import qs from 'qs'

export function findCategories(params) {
  return request({
    url: '/article-categories?' + qs.stringify(params),
    method: 'get'
  })
}

export function findCategory(id, params) {
  params = params ? ('?' + qs.stringify(params)) : ''
  return request({
    url: `/article-categories/${id}${params}`,
    method: 'get'
  })
}

export function createCategory(data) {
  return request({
    url: '/article-categories',
    method: 'post',
    data
  })
}

export function updateCategory(id, data) {
  return request({
    url: '/article-categories/' + id,
    method: 'put',
    data
  })
}

export function deleteCategory(id) {
  return request({
    url: '/article-categories/' + id,
    method: 'delete'
  })
}
