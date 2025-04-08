import authApi from '@/api/auth'
const state = {
  isSubmitting: false,
}
const mutations = {
  registerStart(state) {
    state.isSubmitting = true
  },
  registerSuccess(state) {
    state.isSubmitting = false
  },
  registerFailed(state) {
    state.isSubmitting = false
  },
}
const actions = {
  register(context, credentials) {
    return new Promise(() => {
      context.commit('registerStart')
      authApi
        .register(credentials)
        .then((response) => {
          console.log('response', response)
          context.commit('registerSuccess', response.data.user)
        })
        .catch((result) => {
          context.commit('registerFailed')
          console.log('result errors', result.name)
        })
    })
  },
}
export default {
  state,
  mutations,
  actions,
}
