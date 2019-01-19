<!DOCTYPE html>

<template>

<div class="index">

	<div class="hd">
		
		<div class="web-header row col-md-3 col-md-offset-1 col-xs-2" v-on:click="goTo('/library')">
			<img class="col-md-offset-2" height="30px" width="35px" src="../../../../static/svg/library/library.svg"/>
			<span class="col-md-offset-1" v-if="isWid">HZNU图书馆</span>
		</div>

		  <div class="col-md-2 col-md-offset-5 col-xs-5">
		    <div class="input-group col-xs-12 col-md-12">
		      <input type="text" class="form-control" placeholder="图书名 / 作者名 / 分类">
		      <span class="input-group-btn">
		        <button class="btn btn-default" type="button" v-on:click="goTo('/library/search')">搜索</button>
		      </span>
		    </div>
		  </div>
		
		<div class="ga-header-option ga-hd-toggle-bar">图书管理 <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
			<div class="ga-hd-toggle-bar-option" v-on:click="goTo('/library/module/borrow/tips')">借书</div>
			<div class="ga-hd-toggle-bar-option" v-on:click="goTo('/library/module/return/tips')">还书</div>
			<div class="ga-hd-toggle-bar-option" v-on:click="goTo('/library/module/fine/tips')">罚款</div>
		</div>

		<button class="btn btn-default btn-goLogin col-md-1 col-xs-3 col-xs-offset-" v-on:click="goTo('/library/login')">登录</button>

	</div>

	<router-view/>

	<div class="ft-library" >
		<img width="32px" class="col-md-offset-2 git" onclick="window.open('https://github.com/Phenanth/Library-System');" src="../../../../static/svg/GALogin/github5.svg"/>
	</div>

</div>

</template>

<script>
export default {
	name: 'Home',
	methods: {
		goTo: function (path) {
			this.$router.push(path)
			this.$router.go(0)
		}
	},
	computed: {
		isWid: function () {
			if (document.body.clientWidth < 992) {
				return false
			} else {
				return true
			}
		}
	}
}
</script>

<style>

#app {
	background-color: white;
}

body::-webkit-scrollbar {
    display:none
}

.index, .home, .module {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: center;
	background-color: white;
}

.hd {
	top: 0px;
	position: fixed;
	z-index: 100;
	width: calc(100%);
	background-color: #0EA8A3;
	height: 45px;
	display: flex;
	align-items: center;
}

.web-header {
	display: flex;
	margin-left: 10px;
	align-items: center;
	justify-content: center;
}

.web-header > span {
	font-size: 22px;
	color: white;
}


/* Toggle Bar */

.ga-header-option {
	height: 40px;
	width: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: white;
}

.ga-hd-toggle-bar {
	position: relative; /* 作用：保持鼠标下移下拉菜单依然出现 */
	display: inline-block;
	line-height: 40px;
	text-align: center;
}

.ga-hd-toggle-bar-option {
	display: none;
	background-color: #0EA8A3;
	color: white;
}

.ga-hd-toggle-bar-option:hover {
	background-color: #0c8a86;
}


.ga-hd-toggle-bar:hover > .ga-hd-toggle-bar-option {
	display: block;
}

/* Login Button*/

.btn-goLogin, .btn-goHome {
	width: 80px;
	background-color: #0EA8A3;
	color: white;
	border: none;
}

.btn-goLogin:hover, .btn-goHome:hover {
	background-color: #0c8a86;
	color: white;
}

.ft-library {
	position: fixed;
	float: right;
	left: 85%;
	bottom: 3%;
}

</style>