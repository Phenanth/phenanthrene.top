<!DOCTYPE html>

<template>
	<div class="home-wrapper container-fluid">
		
		<div class="home-header">
			<span>Posts</span>
		</div>

		<div class="home-content row">
			<div class="home-content-boxes col-md-8 col-sm-8">
				<div class="home-content-box col-md-2 col-sm-2" v-on:click="goTo('/post-item/SCL')"><i class="fas fa-graduation-cap"></i>SCL</div>
				<div class="home-content-box col-md-2 col-sm-2" v-on:click="goTo('/post-item/WRK')"><i class="fas fa-code"></i>WRK</div>
				<div class="home-content-box col-md-2 col-sm-2" v-on:click="goTo('/post-item/FUN')"><i class="fas fa-charging-station"></i>FUN</div>
				<div class="home-content-box col-md-2 col-sm-2" v-on:click="goTo('/post-item/WRD')" v-if="isAdmin"><i class="fas fa-heartbeat"></i>WRD</div>
			</div>
		</div>

	</div>
</template>

<script>
import router from '../../router'
import store from '../../store'
export default {
	name: 'homepage',
	methods: {
		goTo: function (route) {
			router.push(route);
		}
	},
	computed: {
		isAdmin: function () {
			return JSON.parse(store.getters.showTokenBlogState) != null
		}
	}
}
</script>

<style>

.home-header > span {
	color: black;
	font-weight: bold;
	font-size: 50px;
}

.home-content {
	height: 100%;
	width: 70%;
}

.home-content-boxes {
	display: flex;
	flex-wrap: wrap;
	margin-top: 30px;
	justify-content: space-between;
}

.home-content-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 17vh;
	font-weight: bold;
	margin-bottom: 20px;
	color: rgb(135, 216, 205);
	background: black; /* 回退样式 */ 
	background: linear-gradient(to left bottom,  transparent 50%, rgba(135, 216, 205, 0.5) 0)  no-repeat 100% 0 / 2em 2em,  linear-gradient(-135deg,  transparent 1.5em, black 0);

}

.home-content-box:hover {
	color: white;
}

</style>