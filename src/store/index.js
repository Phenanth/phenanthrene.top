import Vue from 'vue'
import Vuex from 'vuex'
import token from './modules/token.js'
import tokenLibrary from './modules/tokenLibrary.js'
import tokenBlog from './modules/tokenBlog.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		token,
		tokenBlog,
		tokenLibrary
	}
})
