/* Vuex for token management. */
import api from '../../api.js'

const state = {
	tokenLibrary: null
}

const getters = {
	showTokenLibraryState: function (state) {
		return localStorage.getItem('tokenLibrary')
	}
}

const actions = {
	storeTokenLibrary: function ({ commit }, data) {
		commit('STORETOKENLIBRARY', data)
	},
	removeTokenLibrary: function ({ commit }) {
		commit('REMOVETOKENLIBRARY')
	}
}

const mutations = {
	STORETOKENLIBRARY: function (state, data) {
		localStorage.setItem('tokenLibrary', data)
		state.token = data
	},
	REMOVETOKENLIBRARY: function (state) {
		localStorage.removeItem('tokenLibrary')
		state.tokenLibrary = null
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
