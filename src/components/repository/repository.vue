<!DOCTYPE html>

<template>
<div class="reposi-wrapper container-fluid">
	<div class="reposi-header">
		<span>Reposi.</span>
	</div>
	<div class="reposi-contents">
		
		<div class="reposi-content-box col-lg-4 col-md-4 col-xs-8">
			<div class="ctn-box-text col-md-3 col-xs-6">Library</div>
			<i class="btn-hover fa fa-eye col-md-1 col-xs-3" aria-hidden="true" v-on:click="goTo('/library/')"></i>
			<i class="btn-hover fa fa-git fa-lg col-md-1 col-xs-3" aria-hidden="true" onclick="window.open('https://github.com/Phenanth/Library-System/')"></i>
		</div>
		<div class="reposi-content-box col-md-4 col-xs-8">
			<div class="ctn-box-text col-md-3 col-xs-6">GALogin</div>
			<i class="btn-hover fa fa-eye col-md-1 col-xs-3" aria-hidden="true" v-on:click="goTo('/GA-Login/')"></i>
			<i class="btn-hover fa fa-git fa-lg col-md-1 col-xs-3" aria-hidden="true" onclick="window.open('https://github.com/Phenanth/GA-Login/')"></i>
		</div>
		<div class="reposi-content-box col-md-4 col-xs-8">
			<div class="ctn-box-text col-md-3 col-xs-6">AI.Itvw</div>
			<i class="fa fa-low-vision fa-bann col-md-1 col-xs-3" aria-hidden="true"></i>
			<i class="btn-hover fa fa-git fa-lg col-md-1 col-xs-3" aria-hidden="true" onclick="window.open('https://github.com/HZNU-FT/Interview-AI/')"></i>
		</div>
		<div class="reposi-content-box col-md-4 col-xs-8" >
			<div class="ctn-box-text col-md-3 col-xs-6">Documts</div>
			<i class="btn-hover fa fa-eye col-md-1 col-xs-3" aria-hidden="true" onclick="window.open('https://www.yuque.com/phenanthrene/')"></i>
			<i class="fa fa-minus-circle fa-bann col-md-1 col-xs-3" aria-hidden="true"></i>
		</div>
		
		
	</div>
</div>
</template>

<script>
	
export default {
	methods: {
		goTo: function (path) {
			this.$router.push(path)
		}
	}
}
</script>

<style>

.reposi-header > span {
	color: black;
	font-weight: bold;
	font-size: 40px;
}

.reposi-contents {
	display: flex;
	width: 100%;
	max-width: 90%;
	flex-direction: column;
	margin-top: 30px;
	padding-right: 20px;
}

.reposi-content-box, .reposi-middle-box {
	height: 60px;
	margin-bottom: 10px;
	display: flex;
	color: rgb(135, 216, 205);
	justify-content: space-around;
	align-items: center;
	background-color: black;
}

.ctn-box-text {
	font-weight: bold;
}

.btn-hover:hover {
	color: white;
}

.reposi-middle-box {
	width: 100px;
	display: flex;
	justify-content: flex-end;
}




</style>