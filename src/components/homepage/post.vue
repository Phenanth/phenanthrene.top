<!DOCTYPE html>
<template>
	<div class="post-wrapper">
		<div class="post-header">
			<i class="fa fa-arrow-circle-left fa-2x" aria-hidden="true" v-on:click="goTo('/posts')"></i>
			<span>Post of {{ note }}</span>
			
		</div>
	</div>
</template>
<script>
import router from '../../router'
export default {
	name: 'post',
	data: function () {
		return {
			note: 'SCL (default)'
		}
	},
	methods: {
		goTo: function (route) {
			router.push(route);
		}
	},
	mounted: function () {

	}
}
</script>
<style>

.post-wrapper {
	margin-top: 40px;
	margin-left: 120px;
}

.post-header {
	display: flex;

}
.post-header > span {
	font-size: 50px;
}
</style>