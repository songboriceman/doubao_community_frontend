import request from '@/utils/request'

// 关注
export function follow(id) {
  return request(({
    url: `/relationship/subscribe/${id}`,
    method: 'get'
  }))
}

// 关注
export function unFollow(id) {
  return request(({
    url: `/relationship/unsubscribe/${id}`,
    method: 'get'
  }))
}

// 验证是否关注
export function hasFollow(topicUserId) {
  return request(({
    url: `/relationship/validate/${topicUserId}`,
    method: 'get'
  }))
}
