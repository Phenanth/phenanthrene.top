<!DOCTYPE html>

<template>
	<div class="index-wrapper">
		<div class="index-nav">
			<div class="nav-square"><i class="fa fa-cubes fa-2x" aria-hidden="true"></i></div>
			<div class="nav-options">
				<div class="nav-option" v-on:click="goTo('/home')" v-bind:class="{ active : isRouteHome }">Home-page</div>
				<div class="nav-option" v-on:click="goTo('/repository')" v-bind:class="{ active : isRouteRepository }">Repository</div>
				<div class="nav-option" v-on:click="goTo('/about')" v-bind:class="{ active : isRouteAbout }">About</div>
			</div>
			<div class="nav-square fix-to-bottom" onclick="window.open('https://github.com/Phenanth')"><i class="fa fa-git fa-lg" aria-hidden="true"></i></div>
		</div>
		<div class="index-right">
			<div class="index-header">
				<div class="header-options">
					<div class="header-option" v-on:click="goTo('/logAdmin')" v-bind:class="{ active : isRouteAdmin }">Admin</div>
					<div class="header-option hd-toggle-bar">Lang <i class="fa fa-arrow-circle-down" aria-hidden="true"></i> 
						<div class="hd-toggle-bar-option">English</div>
						<div class="hd-toggle-bar-option">Chinese</div>
						<div class="hd-toggle-bar-option">Japanese</div>
					</div>
				</div>
			</div>
			<div class="index-content">
				<router-view/>
			</div>
			<div class="index-footer"></div>
		</div>
	</div>
</template>

<script>
import router from '../router'
export default {
	name: 'homepage',
	methods: {
		goTo: function (route) {
			router.push(route);
		}
	},
	computed: {
		isRouteHome: function () {
			let routerCheck = new RegExp('/home', 'g')
			let arr = routerCheck.exec(this.$route.path)
			if (arr) {
				return true
			} else {
				return false
			}
		},
		isRouteRepository: function () {
			let routerCheck = new RegExp('/repository', 'g')
			let arr = routerCheck.exec(this.$route.path)
			if (arr) {
				return true
			} else {
				return false
			}
		},
		isRouteAbout: function () {
			let routerCheck = new RegExp('/about', 'g')
			let arr = routerCheck.exec(this.$route.path)
			if (arr) {
				return true
			} else {
				return false
			}
		},
		isRouteAdmin: function () {
			let routerCheck = new RegExp('/logAdmin', 'g')
			let arr = routerCheck.exec(this.$route.path)
			if (arr) {
				return true
			} else {
				return false
			}
		}
	}
}

</script>

<style>

div, .btn{
	transition: color .4s;
	-moz-transition: color .4s;	/* Firefox 4 */
	-webkit-transition: color .4s;	/* Safari 和 Chrome */
	-o-transition: color .4s;	/* Opera */
}

.index-wrapper {
	color: black;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
}

.index-nav {
	width: 120px;
	height: 100%;
	border-right: 4px solid rgb(135, 216, 205);
	background-color: black;
	background: linear-gradient(45deg, black 25%, rgb(135, 216, 205) 0, rgb(135, 216, 205) 50%, black 0, black 75%, rgb(135, 216, 205) 0); 
	background-size: 30px 30px;

}

.nav-square {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: black;
	font-weight: bold;
	background-color: rgb(135, 216, 205);
	width: calc(100%);
	height: 50px;
}
.nav-square:hover {
	color: white;
}
.fix-to-bottom {
	width: 120px;
	position: fixed;
	bottom: 0%;
}

.nav-options {
	color: black;
}
.nav-option {
	display: flex;
	align-items: center;
	height: 40px;
	font-weight: bold;
	margin-top: 15px;
	color: rgb(135, 216, 205);
	background-color: black;
	padding: .8em;
}
.nav-option:hover, .header-option:hover {
	color: white;
}



.index-right {
	width: calc(100% - 120px);
	height: 100vh;
	display: flex;
	flex-direction: column;
}


.index-header {
	height: 40px;
	background-color: black;
}
.header-options {
	display: flex;
	flex-direction: row-reverse;

}
.header-option {
	height: 40px;
	width: 80px;
	display: flex;
	justify-content: space-around;
	align-items: center;

	color: rgb(135, 216, 205);
	font-weight: bold;
}

.hd-toggle-bar {
	position: relative; /* 作用：保持鼠标下移下拉菜单依然出现 */
	display: inline-block;
	line-height: 40px;
	text-align: center;
}

.hd-toggle-bar-option {
	display: none;
	background-color: black;
	color: rgb(135, 216, 205);
}

.hd-toggle-bar-option:hover {
	color: white;
}

.hd-toggle-bar:hover .hd-toggle-bar-option {
	display: block;
}

.active {
	color: black;
	background: rgb(135, 216, 205);
	background-color: rgb(135, 216, 205);
}


.index-content {
	height: calc(100% - 80px);
	background-color: rgb(135, 216, 205);
}


.index-footer {
	height: 40px;
	background-color: black;

}
</style>

