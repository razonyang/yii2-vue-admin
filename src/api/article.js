import request from '@/utils/request'
import qs from 'qs'

export function findArticles(params) {
  return request({
    url: '/articles?' + qs.stringify(params),
    method: 'get'
  })
}

export function findArticle(id, params) {
  params = params ? ('?' + qs.stringify(params)) : ''
  return request({
    url: `/articles/${id}${params}`,
    method: 'get'
  })
}

export function createArticle(data) {
  return request({
    url: '/articles',
    method: 'post',
    data
  })
}

export function updateArticle(id, data) {
  return request({
    url: '/articles/' + id,
    method: 'put',
    data
  })
}

export function deleteArticle(id) {
  return request({
    url: '/articles/' + id,
    method: 'delete'
  })
}
