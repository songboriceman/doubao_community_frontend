import { login } from '@/api/auth/auth'
import { getToken, setToken } from '@/utils/auth'

const state = {
  token: getToken(), // token
  user: '', // 用户对象
}

const mutations = {
  SET_TOKEN_STATE: (state, token) => {
    state.token = token
  }
}

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    console.log(userInfo)
    const { name, pass, rememberMe } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: name.trim(), password: pass, rememberMe: rememberMe }).then(response => {
        const { data } = response
        commit('SET_TOKEN_STATE', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

