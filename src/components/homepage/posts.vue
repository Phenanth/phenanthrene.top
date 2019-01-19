<!DOCTYPE html>

<template>
	<div class="home-wrapper container-fluid">
		
		<div class="home-header">
			<span>Posts</span>
		</div>

		<div class="home-contents row">
			<div class="home-content-boxes col-md-8 col-sm-8">
				<div class="home-content-box col-md-2 col-sm-2" v-on:click="goTo('/post-item/SCL')"><i class="fa fa-graduation-cap" aria-hidden="true"></i>SCL</div>
				<div class="home-content-box col-md-2 col-sm-2" v-on:click="goTo('/post-item/WRK')"><i class="fa fa-terminal" aria-hidden="true"></i>WRK</div>
				<div class="home-content-box col-md-2 col-sm-2" v-on:click="goTo('/post-item/FUN')"><i class="fa fa-star" aria-hidden="true"></i>FUN</div>
				<div class="home-content-box col-md-2 col-sm-2" v-on:click="goTo('/post-item/WRD')" v-if="isAdmin"><i class="fa fa-heartbeat" aria-hidden="true"></i>WRD</div>
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
	font-size: 40px;
}

.home-contents {
	height: 100%;
	width: 100%;
	max-width: 65%;
}

.home-content-boxes {
	display: flex;
	flex-wrap: wrap;
	margin-top: 30px;
	width: 100%;
	justify-content: space-between;
}

.home-content-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: calc(60px + 10vh);
	width: calc(60px + 10%);
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