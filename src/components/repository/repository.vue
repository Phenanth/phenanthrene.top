<!DOCTYPE html>

<template>
	<div class="reposi-wrapper">

		<div class="reposi-header">
			<span>Repository</span>
		</div>

		<div class="reposi-contents container-fluid">
			<div class="row">
				<div class="reposi-content-box col-sm-3">phenanthrene</div>
			</div>
			<div class="row">
				<div class="reposi-middle-box col-sm-1"><i class="fa fa-long-arrow-right fa-lg" aria-hidden="true"></i></div>
				<div class="reposi-content-box col-sm-1" onclick="window.open('http://phenanthrene.top/#/')">Management-Platform</div>
			</div>
			<div class="row">
				<div class="reposi-middle-box col-sm-1"><i class="fa fa-long-arrow-right fa-lg" aria-hidden="true"></i></div>
				<div class="reposi-content-box col-sm-1" onclick="window.open('https://github.com/Phenanth/Hitokoto')">Hitokoto</div>
			</div>
			<div class="row">
				<div class="reposi-middle-box col-sm-1"><i class="fa fa-long-arrow-right fa-lg" aria-hidden="true"></i></div>
				<div class="reposi-content-box col-sm-1" onclick="window.open('https://github.com/Phenanth/Notes')">Notes</div>
			</div>
					
		</div>
	</div>
</template>

<script></script>

<style>

.reposi-header > span {
	color: black;
	font-weight: bold;
	font-size: 50px;
}

.reposi-contents {
	width: 100%;
	height: 50%;
	margin-top: 30px;
}

.reposi-content-box, .reposi-middle-box {
	height: 60px;
	display: flex;
	color: rgb(135, 216, 205);
	justify-content: center;
	align-items: center;
	background-color: black;
}

.reposi-content-box:hover {
	color: white;
}

.reposi-content-box {
	width: 130px;
}

.reposi-middle-box {
	width: 100px;
	display: flex;
	justify-content: flex-end;
}

</style>