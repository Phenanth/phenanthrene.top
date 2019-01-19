<!DOCTYPE html>

<template>
<div class="module">

	<router-view></router-view>

</div>
</template>

<script>
export default {
	name: 'Module',
	methods: {
		goTo: function (path) {
			this.$router.push(path)
		}
	}
}
</script>

<style>
.module {
	height: 100%;
	margin-top: 45px;
}
</style>