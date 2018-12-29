<!DOCTYPE html>
<template>

<div class="home-ga">
	<div class="hd-ga">
		<img class="col-md-offset-2" height="35px" width="35px" src="../../../../static/svg/GALogin/onepage.svg" v-on:click="goTo('/GA-Login/home')"/>
		<span class="header col-md-2" v-on:click="goTo('/GA-Login/home')">HOMEPAGE</span>
		<div class="btn btn-goLogin col-md-offset-5" v-on:click="goTo('/GA-Login/login')">
			<div class="fade-enter-active">
				<img height="20px" width="35px" src="../../../../static/svg/GALogin/personal-center.svg"/>
			</div>
		</div>
	</div>
	<router-view></router-view>
	<div class="ft-ga" >
		<img width="32px" class="col-md-offset-2 git" onclick="window.open('https://github.com/Phenanth/GA-Login');" src="../../../../static/svg/GALogin/github5.svg"/>
	</div>
</div>

</template>
<script>
import store from '../../../store'
export default {
	name: 'home',
	methods: {
		goTo: function (path) {
			this.$router.push(path)
		}
	}/*,
	mounted: function () {
		store.dispatch('removeToken')
	}*/
}
</script>
<style>

html, body {
	min-width: 992px;
	margin: 0px;
	overflow-x: hidden;
 	background-color: white; 
}

img {
	position:relative;
	left:0%;
	
}

img:hover {
	cursor: pointer;
}
.header{
	position:relative;
	left:-18%;
}

h1 {
	display: inline-block;
}

.login {
	display: flex;
	flex-direction: column;
	width: 70%;
	color: #505050;
	height: 100%;
}

.home-ga {
	display: flex;
	flex-direction: column;
	width: 100%;
	color: #505050;
	height: 100%;
}

.home-ga > .hd-ga {
	display: flex;
	background-color: white;
	margin-top: -23px;
	padding-bottom: 10px;
	padding-top: 20px;
	width: 100%;
	height: 80px;
	position: fixed;
	top: 3%;
	z-index:100;
	box-shadow:0px 0px  5px 3px #aaa;
}

.home-ga > .hd-ga > span {
	top: 5px;
	font-size: 22px;
}

.btn-goLogin {
	display: flex;
	position: fixed;
	top: 18px;
	right: 6%;
	width: 70px;
	align-items: center;
	justify-content: center;
	height: 35px;
	margin-top: 2px;
	margin-right: 2px;
	padding-left: 20px;
	padding-right: 20px;
	background-color: #0EA8A3;
}

.btn-goLogin:hover {
	color: white;
	cursor: pointer;
	background-color: #0c8a86;
}

.btn-goLogin:hover img {
	display: none;
}

.btn-goLogin:hover div:after {
	content: "Log in";
}

.btn-primary {
	width: 170px;
	height: 40px;
	line-height: 26px;
	border: 1px solid #0EA8A3;
	background-color: #0EA8A3;
}

.btn-primary:hover {
	border: 1px solid #0c8a86;
	background-color: #0c8a86;
}

.jumbotron {
	margin-top: 20px;
	height:350px;
	background-color: rgba(	220,220,220 ,0.5);
    background-size: 10px 10px;
    background-image: linear-gradient(transparent 9px, #ffffff 9px,#ffffff 10px),linear-gradient(90deg, transparent 9px, #ffffff 9px,#ffffff 10px);
    z-index: 80;
}

.jumbotron > p {
	margin-top: 90px;
	margin-bottom: 20px;
}


.features {
	display: flex;
	flex-direction: column;
}

.feature-item h2 {
	font-weight:bold;

	margin-bottom:50px;
}

#NodeJS_Img img {
	height:200px;
}

.feature-item {
	margin-bottom: 20px;
}

.feature-item > div {
	display: flex;
	justify-content: center;
	align-items: center;
}

.home-ga > .ft-ga {
	position: fixed;
	float: right;
	left: 96%;
	bottom: 3%;
}

</style>