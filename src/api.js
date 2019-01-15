import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.default.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json'

const instance = axios.create()
instance.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use = instance.interceptors.request.use
instance.interceptors.request.use(config => {
	if (localStorage.getItem('token')) {
		config.headers.Authorization = `token ${localStorage.getItem('token')}`
			.replace(/(^\")|(\"$)/g, '')
	}
	return config
}, err => {
	return Promise.reject(err)
})

instance.interceptors.response.use(response => {
	return response
}, err => {
	return Promise.reject(err)
})

export default {
	
	doLogin ( data ) {
		return instance.post('/api/login', data)
	},

	doRegister ( data ) {
		return instance.post('/api/register', data)
	},

	getData ( data ) {
		return instance.post('/api/getUserData', data)
	},

	sendVerify ( data ) {
		return instance.post('/api/sendVerify', data)
	},

	verify ( data ) {
		return instance.post('/api/verify', data)
	},

	removeVerify ( data ) {
		return instance.post('/api/removeverify', data)
	},

	libraryDoLogin ( data ) {
		return instance.post('/api//library/login', data)
	},

	libraryGetUserData ( data ) {
		return instance.post('/api/library/getUserData', data)
	},

	libraryChangePassword ( data ) {
		return instance.post('/api/library/changePassword', data)
	},

	blogDoVerify ( data ) {
		return instance.post('/api/blog/verify', data)
	}

}
