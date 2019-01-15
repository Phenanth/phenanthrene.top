/* Vuex for token management. */
import api from '../../api.js'

const state = {
	tokenBlog: null
}

const getters = {
	showTokenBlogState: function (state) {
		return localStorage.getItem('tokenBlog')
	}
}

const actions = {
	storeTokenBlog: function ({ commit }, data) {
		commit('STORETOKENBLOG', data)
	},
	removeTokenBlog: function ({ commit }) {
		commit('REMOVETOKENBLOG')
	}
}

const mutations = {
	STORETOKENBLOG: function (state, data) {
		localStorage.setItem('tokenBlog', data)
		state.tokenBlog = data
	},
	REMOVETOKENBLOG: function (state) {
		localStorage.removeItem('tokenBlog')
		state.tokenBlog = null
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
