import request from '@/utils/request'

// 获取推广
export function getList() {
  return request(({
    url: '/promotion/all',
    method: 'get'
  }))
}
