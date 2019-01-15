<!DOCTYPE html>

<template>
	<div class="info-wrapper container-fluid">
		<div class="info-header">
			<span>Info</span>
		</div>
		<div class="info-content">
			<div class="btn btn-logout" v-on:click="doBlogLogout()">Logout</div>
		</div>

		</div>
		
	</div>
</template>

<script>
import api from '../../api.js'
import store from '../../store'
export default {
	name: 'BlogLogin',
	data: function () {
		return {
		}
	},
	methods: {
		doBlogLogout: function () {
			store.dispatch('removeTokenBlog')
			this.$router.go(0)
		}
	}
}	

</script>

<style>

.info-header > span {
	color: black;
	font-weight: bold;
	font-size: 50px;
}

.info-wrapper > span {
	font-size: 30px;
	font-weight: bold;
}

.info-content {
	margin-top: 30px;
}

.btn-logout {
	color: rgb(135, 216, 205);
	font-weight: bold;
	background-color: black;
}

.btn-logout:hover {
	color: white;
}


</style>