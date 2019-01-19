<!DOCTYPE html>
<template>
	<div class="post-wrapper">
		<div class="post-header">
			<span>{{ note }} post</span>
		</div>
	</div>
</template>
<script>
import router from '../../router'
export default {
	name: 'post',
	data: function () {
		return {
		}
	},
	methods: {
		goTo: function (route) {
			router.push(route);
		}
	},
	mounted: function () {
	},
	computed: {
		note: function () {
			let path = this.$route.path
			let reg = /\/post-item(.?)/g;
			reg.test(path);
			return RegExp.rightContext
		}
	}
}
</script>
<style>

.post-wrapper {
	margin-left: 120px;
}

.post-header {
	display: flex;

}
.post-header > span {
	font-size: 40px;
	font-weight: bold;
}
</style>