<!DOCTYPE html>

<template>
	<div class="home-wrapper">
		
		<div class="home-header">
			<span>Posts</span>
		</div>

		<div class="home-content">
			<div class="home-content-boxes">
				<div class="home-content-box" v-on:click="goTo('/post-item/SCL')"><i class="fa fa-graduation-cap fa-lg" aria-hidden="true"></i>SCL</div>
				<div class="home-content-box" v-on:click="goTo('/post-item/WRK')"><i class="fa fa-users fa-lg" aria-hidden="true"></i>WRK</div>
				<div class="home-content-box" v-on:click="goTo('/post-item/FUN')"><i class="fa fa-star fa-lg" aria-hidden="true"></i>FUN</div>
				<div class="home-content-box" v-on:click="goTo('/post-item/SCL')"WRD><i class="fa fa-low-vision fa-lg" aria-hidden="true"></i>WRD</div>
			</div>
		</div>

	</div>
</template>

<script>
import router from '../../router'
export default {
	name: 'homepage',
	methods: {
		goTo: function (route) {
			router.push(route);
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
	margin-top: 50px;
	justify-content: space-between;
}

.home-content-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 150px;
	height: 150px;
	padding: 45px;
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