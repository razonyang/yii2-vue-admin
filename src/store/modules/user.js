import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  id: 0,
  token: getToken(),
  username: '',
  firstName: '',
  lastName: '',
  avatar: '/images/avatar.gif',
  language: 'zh-CN',
  permissions: null
}

const mutations = {
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_FIRST_NAME: (state, firstName) => {
    state.firstName = firstName
  },
  SET_LAST_NAME: (state, lastName) => {
    state.lastName = lastName
  },
  SET_AVATAR: (state, avatar) => {
    if (avatar === '') {
      return
    }
    state.avatar = avatar
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions
  },
  SET_LANGUAGE: (state, language) => {
    state.language = language
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_ID', data.id)
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        commit('SET_USERNAME', data.username)
        commit('SET_LANGUAGE', data.language)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { id, permissions, username, avatar, email, name, first_name, last_name } = data

        commit('SET_ID', id)
        commit('SET_PERMISSIONS', permissions)
        commit('SET_USERNAME', username)
        commit('SET_AVATAR', avatar)
        commit('SET_EMAIL', email)
        commit('SET_NAME', name)
        commit('SET_FIRST_NAME', first_name)
        commit('SET_LAST_NAME', last_name)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_PERMISSIONS', null)
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_PERMISSIONS', null)
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
