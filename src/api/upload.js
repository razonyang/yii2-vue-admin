import request from '@/utils/request'

export function uploadImage(data) {
  return request({
    url: '/upload/images',
    method: 'post',
    data
  })
}

